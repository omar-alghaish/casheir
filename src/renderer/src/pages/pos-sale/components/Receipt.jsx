import img from '../../../assets/icons/home-icons/shop.png'
import { useSelector } from 'react-redux'

const Receipt = () => {
  const { currentCart } = useSelector((state) => state.cart)

  return (
    <div className="receipt_container">
      <div className="header">
        <div className="row">
          <div>الفاتوره</div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="row">
          <div>سوبر ماركت</div>
          <div>نور الاسلام</div>
        </div>
        <div className="row">
          <div>اسم البائع</div>
          <div>احمد صالح عبد الظاهر</div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="items_table">
        <table>
          <thead>
            <tr>
              <th>الصنف</th>
              <th>الكميه</th>
              <th>الخصم</th>
              <th>السعر</th>
            </tr>
          </thead>
          <tbody>
            {currentCart?.items?.length > 0 &&
              currentCart?.items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td><div className="data title">{item?.title}</div></td>
                    <td><div className="data">{item?.quantity}</div></td>
                    <td><div className="data">{item?.discount || 0}%</div></td>
                    <td><div className="data">{item?.price}</div></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className="divider"></div>
      <div className="bottom"><div className="row">
          <div>الاجمالي</div>
          <div>{currentCart?.totalPrice}</div>
        </div></div>
    </div>
  )
}

export default Receipt
