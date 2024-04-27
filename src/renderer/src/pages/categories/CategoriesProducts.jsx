import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setProducts } from '../../redux/features/products'
import Search from '../pos-sale/components/Search'
import Product from '../pos-sale/components/Product'
import BackButton from '../../components/backButton/BackButton'
import SideBar from './components/SideBar'

const CategoriesProducts = () => {
  const { categories_list, products, currentCategory } = useSelector((state) => state?.products)
  const [currentProduct, setCurrentProduct] = useState({})
  const [isSideBarActive, setIsSideBarActive] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const state = location.state
console.log(products)
console.log(currentCategory)
  useEffect(() => {
    const theCategory = categories_list.find((category) => category?.id == state)
    console.log(theCategory)
    const theProducts = theCategory?.products
    console.log(state)
    dispatch(setProducts(theProducts))
  }, [state])

  const handleSideBar = (item) => {
    setIsSideBarActive(true)
    setCurrentProduct(item)
  }

  const onCloseSideBar = ()=>{
    setIsSideBarActive(false)
  }
  return (
    <div className="list_container">
      <div className="content">
        <div className="header">
          <div className="buttons">
            <button className={`active`}>الكل</button>
            <button>الخصومات</button>
          </div>
          <Search />
          <div className="title"><BackButton /></div>
        </div>
        <div className="products">
          {  products?.map((item, index) => {
            return (
              <span key={index} onClick={() => handleSideBar(item)}>
                <Product item={item} key={index} details={true} />
              </span>
            )
          })}
        </div>
      </div>
      <SideBar product={currentProduct} active={isSideBarActive} onCloseSideBar={onCloseSideBar}/>
      
    </div>
  )
}

export default CategoriesProducts
