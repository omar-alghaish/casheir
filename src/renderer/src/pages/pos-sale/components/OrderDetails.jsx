import { useSelector } from 'react-redux'
import img from '../../../assets/imgs/meet.png'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {
  const { currentCart } = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const handlePrint = () => {
    navigate('/print')
  }
  return (
    <div className="order_details">
      <div className="header">
        <h3>تفاصيل الطلب</h3>
      </div>
      <div className="products">
        {currentCart.items.map((item, index) => {
          return (
            <div className="product" key={index}>
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="title row">{item?.title}</div>
              <div className="quantity row">
                <span>المتبقي</span>
                <span>234</span>
              </div>
              <div className="bottom row">
                <div>+</div>
                <div>234</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="print_button_container">
        <button className="print_button" onClick={handlePrint}>
          طباعه الفاتورة
        </button>
      </div>
    </div>
  )
}

export default OrderDetails
