import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
const Services = () => {
    return (
        <div className="h-[350px] w-[70%] mx-auto mt-[50px]">
            <div className="grid grid-cols-3 gap-3">
                <div className=" bg-gray-100 w-[300px] h-[300px] flex flex-col justify-center items-center rounded-md">

                    
                        <TbTruckDelivery size={24} />
                   
                  
                        <h3>super fast and free delivery</h3>
                 

                </div>

                <div className="  bg-gray-100 w-[300px] h-[300px] flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                        <MdOutlineSecurity size={24} />
                        <h3>Non-contact Shopping</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <CiMoneyCheck1   size={24}/>
                        <h3>Money-Back guaranteed</h3>
                    </div>
                </div>

                <div  className=" bg-gray-100 w-[300px] h-[300px] flex flex-col justify-center items-center rounded-md">
                    <RiSecurePaymentFill   size={24}/>
                    <h3>super Secure payment System</h3>
                </div>
            </div>
        </div>
    )
}

export default Services
