import { Button, Card } from 'react-bootstrap';
import { popularItems } from '../../utils/constant/popularItems';
import icon from '/assest/images/icon.svg'


const Bainer = () => {
  
  return (
    <div>
      <div className="w-[100%] pt-[50px] pb-4">
      <div className='flex items-center gap-x-3' >
      <img className='w-4' src={icon} alt="" />
      <h1 className='text-[22px] font-semibold text-textColor'>Popular Items</h1>
      </div>
      <h1 className='text-[18px] text-textColor'>Most orded right now</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularItems.map((item) => {
          const {id,title,price,firstImg} = item
          const
        return (
          <Card key={id} >
          <Card.Img variant="top" src={firstImg} />
            <Card.Title className='absolute top-2 left-3 text-textColor'>{title}</Card.Title>
            <Button className='w-[90px] py-[3px] border-none absolute bottom-3 right-3 text-black bg-textColor'>{price}</Button>
        </Card>
      )
        })
      }
      </div>
      </div>

  )
}

export default Bainer
