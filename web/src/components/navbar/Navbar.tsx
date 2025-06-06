
import { useEffect, useState } from 'react';
import './nav.css'


export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav  className={scrolled ? "scrolled" : ""}>
       <div className='db'>
       <img src="scriptboxlogo.svg" alt="" />
       <h3>ScriptBox</h3>
       </div>
        <ul className='ul'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integration</li>
        </ul>
        <button>Sign Up</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="ham" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    </nav>
  )
}
