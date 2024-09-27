import Bainer from "../components/common/Bainer";
import Header from "../components/Header"
import { IoIosArrowDropright } from "react-icons/io";


const Home = () => {
  return (
    <>
      <Header />
    <div>
        <img src="https://console.indolj.io/upload/1711524709-Bg.jpg" className=" absolute -z-10 h-[100%] " alt="" />
      <div className="p-5">
        <div  className="w-[100%] flex items-center p-[10px] bg-textColor rounded-3xl  ">
        <input type="text" placeholder="Search for item by title...." className='w-[100%] outline-none p-2' />
        <IoIosArrowDropright className="text-themeColor text-[34px]"/>
        </div>
        <Bainer />
      </div>
    </div>
    </>
  )
}

export default Home
