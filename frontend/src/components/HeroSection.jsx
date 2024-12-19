import { NavLink } from "react-router-dom"


const HeroSection = ({data}) => {
    
    const {name} = data

    
    return (
        <div className="min-h-[300px] w-full">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-lg font-bold">WELCOME TO</p>
                    <h1 className="text-lg font-bold">{name}</h1>

                    <p className="gap-0 text-lg ">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </p>

                <NavLink>
                    <button className="p-2 text-white bg-blue-700 border-2 rounded-md border-teal-80">SHOW NOW</button>
                </NavLink>
                </div>

                <div>
                    <img src="../../public/images/heroSection.jpg" alt="" className="w-full h-[300px]" />
                </div>

            </div>

        </div>
    )
}

export default HeroSection
