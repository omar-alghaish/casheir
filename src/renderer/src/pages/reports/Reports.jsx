import taxIcon from '../../assets/icons/tax.svg'
import shoppingCartIcon from '../../assets/icons/shopping-cart2.svg'
import perstonIcon from '../../assets/icons/junior.svg'
import packageIcon from '../../assets/icons/package-delivery.svg'
import couponIcon from '../../assets/icons/coupon.svg'
import shopIcon from '../../assets/icons/home-icons/shop.png'
import BackButton from '../../components/backButton/BackButton'
import HomeButton from '../../components/homeButton/HomeButton'
import Search from '../pos-sale/components/Search'
import { Link } from 'react-router-dom'

const Reports = () => {
  const reportsList = [
    {
      title: 'المبيعات',
      subTitle: 'انشاء تقرير لملخص المبيعات',
      logo: shopIcon,
      color: '#C4E3FF',
      link:'/sales-reports'
    },
    {
      title: 'المشتريات',
      subTitle: 'انشاء تقرير مفصل للمشتريات',
      logo: shoppingCartIcon,
      color: '#FFC4C4'
    },
    {
      title: 'المخزون',
      subTitle: 'متابعة تقارير المخزون و المنتجات',
      logo: packageIcon,
      color: '#DAFFC4'
    },
    {
      title: 'الضرائب',
      subTitle: 'متابعة تقارير الضرائب',
      logo: taxIcon,
      color: '#FFDDC4'
    },
    {
      title: 'الخصومات',
      subTitle: 'انشاء تقرير الخصومات',
      logo: couponIcon,
      color: '#C4E3FF'
    },
    {
      title: 'العاملين',
      subTitle: 'تقرير مفصل للعاملين',
      logo: perstonIcon,
      color: '#FFC4C4'
    },
    {
      title: 'العملاء',
      subTitle: 'انشاء تقارير مفصل للعملاء',
      logo: perstonIcon,
      color: '#DAFFC4'
    }
  ]
  return (
    <div className="reports_container">
      <div className="header">
        <HomeButton />
        <Search />
        <div className="status">
          <div className="title">التقارير</div>
        </div>
      </div>
      <div className="reports_List">
        <div className="container">
          {reportsList?.map((item, index) => {
            return (
              <Link to={item?.link} className="item" key={index}>
                <div className="img_container" style={{ background: item?.color }}>
                  <img src={item?.logo} alt="" />
                </div>
                <div className="info">
                  <div className="title">{item?.title}</div>
                  <div className="subTitle">{item?.subTitle}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Reports
