import { RiArrowRightDoubleFill } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <div className="bg-themeColor p-4 w-[100%]"> 
        <div className="flex items-center">
      <ul  className="flex gap-x-7 overflow-auto w-[100%] text-nowrap text-textColor">
       <li>Popular Items</li>
       <li>Hot Appetizers</li>
       <li>Salad & Cold Appetizers</li>
       <li>Chicken</li>
       <li>Mutton</li>
       <li>Chefs Special</li>
       <li>Grill</li>
       <li>Mix Platters</li>
       <li>Sea Food</li>
       <li>Deserts</li>
       <li>Breads</li>
       <li>Moktails</li>
       <li>Addons</li>

      </ul>
      <RiArrowRightDoubleFill className="text-textColor text-[20px] mx-2"/>
      </div>
      </div>
    </div>
  )
}

export default Header
