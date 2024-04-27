import { useDispatch } from 'react-redux'
import img from '../../../assets/imgs/meet.png'
import { setCurrentCart } from '../../../redux/features/cartSlice'

const Product = ({ item, details }) => {
  const dispatch = useDispatch()
  const handleAddProduct = () => {
    dispatch(setCurrentCart(item))
  }
  return (
    <div className="product" onClick={handleAddProduct}>
      {item?.discount && (
        <div className="discount">
          <div className="number">
            <span className="integer">20</span>
            <span className="fraction">.54</span>
          </div>
          <div>EGP</div>
        </div>
      )}
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="title row">{item?.title}</div>
      <div className="quantity row">
        <span>المتبقي</span>
        <span>234</span>
      </div>
      {details ? (
        <div className="bottom row">
          <div>السعر</div>
          <div>{item?.price}</div>
        </div>
      ) : (
        <div className="bottom row">
          <div>+</div>
          <div>234</div>
        </div>
      )}
    </div>
  )
}

export default Product
