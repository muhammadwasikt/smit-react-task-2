import { useState } from 'react';
import { popularItems } from '../../utils/constant/popularItems';
import Button from 'react-bootstrap/Button';
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";


const DetailPopup = ({fullDescription , setFullDescription , cardId}) => {
    const singalData = popularItems.find((e)=>{
        return e.id === cardId

    })
    const [isImgUrl , setIsImgUrl] = useState(0)
    console.log(isImgUrl);
    const closeFullDescription = ()=>{
        setFullDescription(false)
    }
    {
        if (singalData){
            console.log(singalData)
        const {title , description , firstImg , imgUrl , price} = singalData
    return(
        <div className='sticky top-36 flex justify-center z-10 w-[100%] '>
        {fullDescription ? <div className='cursor-pointer rounded-xl absolute flex shadow-2xl lg:max-w-[600px] md:max-w-[600px] sm:max-w-[400px] w-[100%] pt-4 pb-3 px-3 bg-textColor max-md:flex-col'>
          <IoMdCloseCircleOutline className='absolute right-4 top-3 text-2xl' onClick={closeFullDescription} />
          <div>
            <img src={imgUrl[isImgUrl]} className= 'max-md:w-[100%] max-md:object-cover rounded-lg max-w-[500px] h-[300px] object-contain' alt="" />
          </div>
          <div>
            <div className='flex p-2 gap-x-2 overflow-auto'>
                {
                    imgUrl.map((item , index)=>{
                        return (
                            <img key={index} onClick={()=>setIsImgUrl(index)} src={item} className='w-[100px] rounded-xl h-[100px]'/>
                        )
                    })
                }
            </div>
          <div className='cursor-auto'>
          <p className='text-xl font-bold uppercase p-2'>{title}</p>
          <p className='px-2 h-[100px] overflow-auto'>{description}</p>
          </div>
          <div className='flex p-2 justify-between'>
          <p className='font-semibold px-3 py-1 bg-themeColor text-textColor rounded-lg border'>{price}</p>
          <Button variant="outline-success" className='flex items-center gap-x-2'><MdAddShoppingCart />Add to cart</Button>
          </div>
          </div>
         </div> : null}
        </div>
    )
}}
}

export default DetailPopup
