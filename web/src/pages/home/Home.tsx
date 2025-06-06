
import './home.css'
import {  useRef } from 'react';

export default function Home() {

  
  const emailref = useRef(null)

  function isValidEmail(email:string) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function sendmail(){
    //@ts-ignore
    const check = isValidEmail(emailref?.current?.value)
    if(check === true){
      //@ts-ignore
      alert(`Thanks for your interest !, We will notify you after the launch, on your email - ${emailref?.current?.value} `)
      //@ts-ignore
      emailref.current.value = "";
    }
    else{
      alert("Invalid email address !")
    }
  }

  return (
    <div className='home'>
      <section className='main'>
       <h1>ScriptBox</h1>
       <h2>Launch your own coding platform in minutes!</h2>
       <img src="sbimg2.png" className='sbimg' alt="" />
      <div className='mt'>
      <button className='btn'>Integration</button>
      <button className='btn clr'>Get a Demo</button>
      </div>
      </section>
      <section className='dummy'>
        <h1>Somthing new is cooking !</h1>
        <p>Hello everyone !, We are re-shaping ScriptBox from just an IDE to a complete platform on which Interviewers, Programming Mentors,Software Engineering Universities etc. can launch their own coding platform in minutes with their own customizations, Can integrate  and use on their workspaces, programming courses, etc. for coding assessments. </p>
        <h2>Launching Soon !</h2>
        <div className='flex sm:items-center sm:justify-center sm:flex-row items-center justify-center flex-col mt-[40px]'>
          <input ref={emailref} type="text" className='h-[40px] sm:w-[500px] w-[320px] border border-[gray] rounded-md' placeholder='&nbsp; &nbsp;Your email'/>
          <button onClick={sendmail} className=' cursor-pointer h-[40px] sm:w-[130px] w-[320px] bg-[white] text-black rounded-md sm:ml-3 sm:mt-0 mt-[20px]'>Notify Me</button>
        </div>
      </section>
     
      <section className='dummy'></section>
    </div>
  )
}
