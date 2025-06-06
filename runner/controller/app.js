const pty = require ('node-pty');
const path = require ('path');
const fs = require('fs/promises');
const fs2 = require('fs');
const tempDir = path.join(__dirname, '../temp');
const files = ['main.js', 'main.c', 'main.cpp', 'main.py', 'Main.java'];

const firstapi = (req,res)=>{

    try {


        res.json({message: "this is  first api"})
        
    } catch (error) {
        res.json(error)
    }
}


const executeCode = async  (req,res) =>{

    try {

        const {ext, textedCode} = req.body;
        let output = "";
        let done = false;
        let executionStarted = false;
        let command = ''
        const END_MARKER = "__END__12345__";

        if(ext === '.c'){
          command = 'gcc main.c -o main && ./main'
        }
        else if(ext === '.cpp'){
        command = 'g++ main.cpp -o main && ./main'
        }
        else if(ext === '.py'){
         command = 'python3 main.py'
        }
        else if(ext === '.java'){
        command = 'javac Main.java && java Main'
        }
    
        else if(ext === '.js'){
        command = 'node main.js'
        }

        var ptyProcess = pty.spawn('bash', [], {
            name: 'xterm-color',
            cols: 80,
            rows: 30,
            cwd: process.env.INIT_CWD + '/temp',
           
            env: process.env
        });

       
        

        ptyProcess.onData((data) => {
            output += data;
          
            if (!executionStarted && data.trim() !== "") {
                if (data.includes(END_MARKER) && !data.trim().startsWith(command.split(" ")[0])) {
                  executionStarted = true;
                }
              }
            
              // Only check for END_MARKER *after* execution started
              if (executionStarted && data.includes(END_MARKER)) {
                if (!done) {
                  done = true;
                  ptyProcess.kill();
                //   fs.rmSync(folder, { recursive: true, force: true });
                  const cleanOutput = output.replace(END_MARKER, "").trim();
                  res.send({ success: true, output: cleanOutput });
                }
              }
      
            
          });


        

       

        ptyProcess.onExit(() => {
            if (!done) {
            //   fs.rmSync(folder, { recursive: true, force: true });
              done = true;
              res.send({ success: true, output , exit: 1 });
            }
          });

        //   ptyProcess.write('javac Main.java && java Main\r');
        ptyProcess.write(`${command} && echo ${END_MARKER}\r`);


          setTimeout(() => {
            if (!done) {
              ptyProcess.kill();
            //   fs.rmSync(folder, { recursive: true, force: true });
              done = true;
              res.send({ success: false, output: output + "\n[Error: Execution Timeout]" });
            }
          }, 5000);  
        



        
    } catch (error) {
        res.json(error)
    }
}


const writeCode = async (req,res)=>{
  try {
    const {content, ext} = req.body
    if(ext === '.c'){
      await fs.writeFile(`./temp/main.c`, content)
      res.json({success: true});
    }
    else if(ext === '.cpp'){
      await fs.writeFile(`./temp/main.cpp`, content)
      res.json({success: true});
    }
    else if(ext === '.py'){
      await fs.writeFile(`./temp/main.py`, content)
      res.json({success: true});
    }
    else if(ext === '.java'){
      await fs.writeFile(`./temp/Main.java`, content)
      res.json({success: true});
    }

    else if(ext === '.js'){
      await fs.writeFile(`./temp/main.js`, content)
      res.json({success: true});
    }
    
    
  } catch (error) {
    res.json(error)
  }
}



const initFiles =  (req, res) => {
  try {
    // Create temp directory if it doesn't exist
    if (!fs2.existsSync(tempDir)) {
      fs2.mkdirSync(tempDir);
    }

    // Check which files are missing
    const missingFiles = files.filter(file => !fs2.existsSync(path.join(tempDir, file)));

    // If files are missing, create them
    for (const file of missingFiles) {
      fs2.writeFileSync(path.join(tempDir, file), '');
      
    }

    // Respond with success
    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

const removeFiles = async (req,res)=>{
  try {
    // Check if the temp directory exists
    if (fs2.existsSync(tempDir)) {
      // Recursively remove the directory and its contents
      fs2.rmSync(tempDir, { recursive: true, force: true });
    }

    return res.json({ success: true, message: 'temp directory removed successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Failed to remove temp directory' });
  }
}




module.exports = {firstapi, executeCode, writeCode, initFiles, removeFiles}; //export all the controllers declared above 