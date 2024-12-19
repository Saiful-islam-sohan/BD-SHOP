import { SiTrustedshops } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscWorkspaceUntrusted } from "react-icons/vsc";

const Trusted = () => {
  return (
    <div className="bg-gray-100 min-h-[300px] mx-0">
      <h3 className="flex items-center justify-center pt-2 font-bold">
        Trusted BY 1000+ Companies
      </h3>

      <div className="grid grid-cols-3 pt-10 ml-[250px]"> 

        <div>
          <SiTrustedshops size={50} />
        </div>
        <div>
        <VscWorkspaceTrusted  size={50} />
        </div>
        <div>
        <VscWorkspaceUntrusted  size={50} />
        </div>
      </div>

    </div>
  )
}

export default Trusted
