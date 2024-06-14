// const images = require.context('../../assets/icons/home-icons', true);
// const imageList = images.keys().map(image => images(image));
import img1 from '../../assets/icons/home-icons/3d-wallet.png'
import img2 from '../../assets/icons/home-icons/document.png'
import img3 from '../../assets/icons/home-icons/product-return.png'
import img4 from '../../assets/icons/home-icons/steps.png'
import img5 from '../../assets/icons/home-icons/shop.png'
import img6 from '../../assets/icons/home-icons/shopping-cart.png'
import img7 from '../../assets/icons/home-icons/returns.png'
import img8 from '../../assets/icons/home-icons/sale.png'
import img9 from '../../assets/icons/home-icons/scan.png'
import img10 from '../../assets/icons/home-icons/3d-magnifier.png'
import img11 from '../../assets/icons/home-icons/operational-cost.png'
import { Link } from 'react-router-dom'

const OparationsList = () => {
  const list = [
    {
      title: 'اكواد وتعريفات',
      link: '',
      image: img9
    },
    {
      title: 'اضافة منتج',
      link: '/addProduct',
      image: img9
    },
    {
      title: 'مصروفات وايرادات',
      link: '',
      image: img11
    },
    {
      title: 'بحث واستعلام',
      link: '/categories',
      image: img10
    },
    {
      title: 'المدفوعات',
      link: '',
      image: img1
    },
    {
      title: 'المشتريات',
      link: '',
      image: img6
    },
    {
      title: 'مراجعات المشتربات',
      link: '',
      image: img7
    },
    {
      title: 'المبيعات',
      link: '',
      image: img8
    },
    {
      title: 'مراجعات المبيعات',
      link: '',
      image: img3
    },
    {
      title: 'العمليات',
      link: '',
      image: img4
    },
    {
      title: 'التقارير',
      link: '/reports',
      image: img2
    },
    {
      title: 'بحث واستعلام وبيع',
      link: '/pos-sale',
      image: img5
    }
  ]
  return (
    <div className="Operations_list_container">
      <div className="top_head">
        <div className="row1">العمليات الاساسيه للنظام</div>
        <div className="row2">
          <h3>المستخدم الحالي:</h3>
          <h3>عادل محمد حسين</h3>
        </div>
      </div>
      <div className="links">
        {list.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="link">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <p>{item?.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OparationsList
