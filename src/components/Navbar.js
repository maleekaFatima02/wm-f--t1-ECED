import "./../styling/Navbar.css"
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react"

export default function NavBar (){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
    
      useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
          setToggleMenu(false);
        }
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])

    return(
        <nav className={toggleMenu ? "sidebar" : "navbar"}>
        {(toggleMenu || screenWidth > 550) ? (
            <ul className="list">
                <li href="#">
                    Home
                </li>

                <li href="#">
                    About
                </li>

                <li href="#">
                    Contact
                </li>
            </ul>
            ) : 
            <button onClick={toggleNav} className="btn"><FaBars className="btn-icon"/></button>}
        </nav>
    )
}