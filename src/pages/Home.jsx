import Bainer from "../components/common/Bainer";
import Header from "../components/Header"
import { IoIosArrowDropright } from "react-icons/io";
import background from "/assest/images/background.jpg";



const Home = () => {
  return (
    <>
      <Header />
    <div style={{backgroundImage: `url(${background})`}} className="p-5">
        <div  className="w-[100%] flex items-center bg-textColor p-[10px] rounded-[30px]  ">
        <input type="text" placeholder="Search for item by title...." className='w-[100%] outline-none p-2' />
        <IoIosArrowDropright className="text-themeColor text-[34px]"/>
        </div>
        <Bainer />
    </div>
    </>
  )
}

export default Home
