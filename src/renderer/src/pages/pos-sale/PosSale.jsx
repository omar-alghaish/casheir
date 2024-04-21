import BackButton from '../../components/backButton/BackButton'
import BottomBar from './components/BottomBar'
import ProductsList from './components/ProductsList'
import SideCart from './components/SideCart'

const PosSale = () => {
  return (
    <div className="pos_sale_page">
      {/* <BackButton /> */}
      <div className='main_content_products'>
        <ProductsList />
        <BottomBar />
      </div>
      <SideCart />
    </div>
  )
}

export default PosSale
