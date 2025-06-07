import React from 'react'
import  SplitPane, {Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { useState, useEffect , useRef} from 'react';
import Editor ,{loader} from '@monaco-editor/react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {Terminal as XTerminal } from '@xterm/xterm'
  import '@xterm/xterm/css/xterm.css'

export default function CodeEditor() {
    const [sizes, setSizes] = useState(["35%", '75%']);
    const [sizes1, setSizes1] = useState([200, 100]);
    const termref1 = useRef(null)
    const [bash, setbash] = useState([1,1]);

    const [language, setLanguage] = useState('cpp');

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

      useEffect(()=>{
       
        //  if(isrendered1.current) return;
        //  isrendered1.current = true;
         const term = new XTerminal({
             rows: 49,
             theme: {
                 background: '#262626', 
                
               },
               
             
             
         });
         
       
        term.open(termref1.current)

 
        term.onData(data => {
             console.log(data);
             term.write(data);
             
         })
     
 
 
     }
         
     ,[])


     function getDefaultCode(lang) {
      switch (lang) {
        case 'c':
          return `#include <stdio.h>\n\nint main() {\n  printf("Hello, C!\\n");\n  return 0;\n}`;
        case 'cpp':
          return `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, C++!";\n  return 0;\n}`;
        case 'java':
          return `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}`;
        case 'python':
          return `print("Hello, Python!")`;
        case 'javascript':
          return `console.log("Hello, JavaScript!");`;
        default:
          return '';
      }
    }

  return (
    <div className='min-h-[100vh] w-[100%] bg-[#0F0F0F] flex items-center justify-start flex-col'>
        <nav className='h-[40px] w-[100%] bg-[#0F0F0F]'>

        </nav>

        <div className='w-[100%] h-[95vh]'>

        <SplitPane split='vertical'  sizes={sizes} onChange={setSizes} sashRender={sashRender}>
            
            <Pane maxSize={"98%"} minSize={'0px'} >
            <div className=' select-none min-h-[100vh] border border-[#606060] w-[100wh] flex items-center justify-start flex-col rounded-lg m-2  bg-[#262626]'>
                <div className='h-[40px]  w-[100%]  rounded-t-lg bg-[#333333] flex items-center justify-start'>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#007BFF" className='ml-3' viewBox="0 0 16 16">
  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
                    <h1 className='text-white ml-2'>Description</h1>

                </div>
                <div className=' w-[100%] h-[100%] absolute top-[70px] left-3 p-4 text-white flex items-start justify-start flex-col'>
                  <h1 className='text-[1.5rem] font-[600]'>Search in Rotated Sorted Array</h1>
                  <p className='mt-2'>There is an integer array nums sorted in ascending order (with distinct values).
<br />
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 = k nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
<br />
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
<br />
You must write an algorithm with O(log n) runtime complexity.

</p>
                </div>

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

                    <Select  onValueChange={(value) => {setLanguage(value); console.log(value)}} defaultValue="cpp">
  <SelectTrigger className="w-[180px] ml-6 h-[35px] text-[#A8A8A8] border border-[#606060] ">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem   value="c">C</SelectItem>
    <SelectItem value="cpp">C++</SelectItem>
    <SelectItem value="java">Java</SelectItem>
    <SelectItem value="python">Python</SelectItem>
    <SelectItem value="javascript">JavaScript</SelectItem>
  </SelectContent>
</Select>




                </div>
                <div className='w-[95%] h-[95%]  absolute top-[60px] left-[20px]'>
                <Editor 
                  height="100%" 
                  width="100%" 
                  defaultLanguage={language}  
                  className='' 
                  value={getDefaultCode(language)}
                  theme='myCustomTheme'       
                  defaultValue={getDefaultCode(language)}
                  />

                </div>

                 </div>
                   
                </Pane>

                <Pane maxSize={"100%"} minSize={"100px"}>
                  
                <div className=' select-none min-h-[100vh] border border-[#606060] w-[100wh] flex items-center justify-start flex-col rounded-lg mt-4 ml-2  bg-[#262626]'>
                <div className='h-[40px]  w-[100%]  rounded-t-lg bg-[#333333] flex items-center justify-start'>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#08A129" className='ml-3'  viewBox="0 0 16 16">
            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
            </svg>
                    <h1 className='text-white ml-2'>Terminal</h1>

                </div>
                <div ref={termref1} className='ml-5  w-[100%] h-[100%] absolute top-[70px] left-3'></div>

                </div>
                </Pane>
                </SplitPane>
                  
            </Pane>  

           
           
        
    </SplitPane>

        </div>

    </div>
  )
}
