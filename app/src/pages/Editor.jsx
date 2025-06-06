import React from 'react'
import  SplitPane, {Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { useState, useEffect } from 'react';
import Editor ,{loader} from '@monaco-editor/react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function CodeEditor() {
    const [sizes, setSizes] = useState(["35%", '75%']);
    const [sizes1, setSizes1] = useState([200, 100]);

    const sashRender = (_, active) => {
    return <div className={` ${active ? 'h-[100%] w-[2px] bg-[#0059ff] cursor-col-resize ' : 'h-[100%]  w-[3px] flex items-center justify-center bg-[#0F0F0F] cursor-col-resize'}`} />;
      };

    const sashRender1 = (_, active) => {
        return <div className={` ${active ? 'h-[2px] w-[100%] bg-[#0059ff] cursor-row-resize mt-2' : 'h-[3px] mt-2  w-[100%] bg-[#0F0F0F] cursor-col-resize'}`} />;
      };

      useEffect(() => {
        loader.init().then(monaco => {
          monaco.editor.defineTheme('myCustomTheme', {
            base: 'vs-dark', // can also be vs-dark or hc-black
            inherit: true, // will inherit the rest of the colors from the base theme
            rules: [],
            colors: {
              'editor.background': '#262626' // Change this to your desired background color
            }
          });
    
          monaco.editor.setTheme('myCustomTheme');
        });
      }, []);

  return (
    <div className='min-h-[100vh] w-[100%] bg-[#0F0F0F] flex items-center justify-start flex-col'>
        <nav className='h-[40px] w-[100%] bg-[#0F0F0F]'>

        </nav>

        <div className='w-[100%] h-[95vh]'>

        <SplitPane split='vertical'  sizes={sizes} onChange={setSizes} sashRender={sashRender}>
            
            <Pane maxSize={"98%"} minSize={'0px'} >
            <div className='min-h-[100vh] border border-[#606060] w-[100wh] rounded-lg m-2  bg-[#262626]'>

            </div>
            </Pane>
       
            <Pane maxSize={"98%"} minSize={'0px'} className=" flex items-center justify-center flex-col">
                
                <SplitPane split='horizontal' sizes={sizes1} onChange={setSizes1}  sashRender={sashRender1}>
                <Pane maxSize={"100%"} minSize={"60px"} className='rounded-lg fixed '>

                <div className='h-[100vh] select-none border border-[#606060] w-[100wh] rounded-lg m-2 flex items-center justify-start flex-col  bg-[#262626]'>

                <div className='h-[40px]  w-[100%]  rounded-t-lg bg-[#333333] flex items-center justify-start'>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#08A129" class="ml-3" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                </svg>
                    <h1 className='text-white ml-2'>Code</h1>

                    <Select>
  <SelectTrigger className="w-[180px] ml-6 h-[35px] text-[#A8A8A8] border border-[#606060] ">
    <SelectValue  placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem   value="C">C</SelectItem>
    <SelectItem value="C++">C++</SelectItem>
    <SelectItem value="Java">Java</SelectItem>
    <SelectItem value="Python">Python</SelectItem>
    <SelectItem value="JavaScript">JavaScript</SelectItem>
  </SelectContent>
</Select>




                </div>
                <div className='w-[95%] h-[95%]  absolute top-[60px] left-[20px]'>
                <Editor height="100%" width="100%" defaultLanguage="javascript" className=''   theme='myCustomTheme' defaultValue="/**/"/>
                </div>

                 </div>
                   
                </Pane>

                <Pane maxSize={"100%"} minSize={"100px"}>
                <div className='min-h-[100vh] border border-[#606060] w-[100wh] rounded-lg mt-4 ml-2  bg-[#262626]'>

                </div>
                </Pane>
                </SplitPane>
                  
            </Pane>  

           
           
        
    </SplitPane>

        </div>

    </div>
  )
}
