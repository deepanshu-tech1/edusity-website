import React, { useEffect,  useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import {Link} from 'react-scroll'
import menuicon from "../../assets/menu-icon.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
 
  const[mobilemenu,setmobilemenu]=useState(false);
  const togglemenu=()=>{
    mobilemenu?setmobilemenu(false):setmobilemenu(true)

  }


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'darknav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobilemenu?'':'hide-mobilemenu'}>
      <Link to='hero' smooth={true} duration={500} activeClass='active' spy={true} offset={0}  > <li>Home</li></Link>
      <Link to='program'smooth={true} duration={500} activeClass='active' spy={true}  offset={-260}   > <li>Program</li></Link> 
       <Link to='about'smooth={true} duration={500}  activeClass='active' spy={true} offset={-150}   > <li>About</li></Link> 
       <Link to='campus'smooth={true} duration={500} activeClass='active' spy={true}  offset={-260}   > <li>Campus</li></Link> 
       <Link to='testimonial'smooth={true} duration={500} activeClass='active' spy={true}  offset={-260}   ><li>Testimonial</li></Link> 
       <Link to='contact'smooth={true}  duration={500} activeClass='active' spy={true}   offset={-260}  ><li><button className='btn'>Contact us</button></li></Link>
      </ul>
     

      <img src={menuicon} className='menuicon'onClick={togglemenu} />
    </nav>
  );
};

export default Navbar;
