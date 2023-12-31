import {BiSolidUpArrow} from "react-icons/bi";

interface NumberOfSociosProps{
  socios: number
}

const NumberOfSocios =({socios}:NumberOfSociosProps)=>{
    return(

        <div className="w-[226px] h-[130px] bg-[#f0f0f0] rounded-xl flex flex-col">
        <div className="pl-4 pt-6 flex flex-row gap-4 items-center">
          <span className="text-[#575d66] text-lg font-medium"> Número de Socios</span>
          <span className="text-blue-500"><BiSolidUpArrow/></span>
        </div>
        <span className=" pl-4 text-[#404D61] font-bold text-2xl">{socios}</span>
      </div>
      
    )
};

export {NumberOfSocios};