import { NavLink } from "react-router-dom"
import Nav from "./Nav"


const Header = () => {
  return (
    <div className="flex justify-between text-center max-h-[100px] shadow-lg">
      <NavLink>
         <img src="../../public/images/logo.jpg" alt=""  className="w-[80px] h-[80px]"/>
      </NavLink>
      <Nav/>
    </div>
  )
}

export default Header

