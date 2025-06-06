

export default function Footer() {
  return (
    <footer className="h-[360px] w-[100%] bg-[#141414] select-none   absolute flex items-center justify-start">

      <div className="h-[250px] w-[150px] ml-[50px]  sm1:ml-[30px] flex items-start flex-col   justify-start">
        <h3 className="text-[white] font-[500]">ScriptBox</h3>
        <h3 className="text-[#a5a4a4] mt-2">Features</h3>
        <h3 className="text-[#a5a4a4] mt-2">Pricing</h3>
        <h3 className="text-[#a5a4a4] mt-2">Integration</h3>
        <h3 className="text-[#a5a4a4] mt-2">Support</h3>
        <h3  className="text-[#a5a4a4] mt-2">Contact</h3>
        <img src="scriptboxlogo.svg" className="h-[45px] w-[45px] mt-[10px]" alt="" />

      </div>

      <div className="h-[250px] w-[150px] sm:ml-[20px] ml-[0px] flex items-start flex-col   justify-start">
        <h3 className="text-[white] font-[500]">Languages/Libraries</h3>
        <h3 className="text-[#a5a4a4] mt-2">C</h3>
        <h3 className="text-[#a5a4a4] mt-2">C++</h3>
        <h3 className="text-[#a5a4a4] mt-2">Python</h3>
        <h3 className="text-[#a5a4a4] mt-2">Java</h3>
        <h3 className="text-[#a5a4a4] mt-2">Javascript</h3>
        <h3 className="text-[#a5a4a4] mt-2">Typescript</h3>
        <h3 className="text-[#a5a4a4] mt-2">React.js</h3>
        
      </div>

      <div className=" absolute bottom-[20px] w-[100%] h-[35px]  flex items-center justify-center">
      <h1 className="text-[#b4b4b4]  text-[14px]">&copy; 2025 ScriptBox. | All Right Reserved</h1>
      </div>
     </footer>
  )
}
