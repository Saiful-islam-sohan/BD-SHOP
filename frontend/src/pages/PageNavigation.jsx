import { NavLink } from "react-router-dom"


const PageNavigation = ({title}) => {
   
  return (
    <div>
        <NavLink to='/' className="font-bold text-green-700 scale-100 text-bold hover:translate-x-full">HOME</NavLink>/<span className="font-bold text-green-700 scale-100 text-bold hover:translate-x-full">{title}</span>
        
      
    </div>
  )
}

export default PageNavigation
