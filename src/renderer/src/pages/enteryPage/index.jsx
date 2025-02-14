import logo from '../../assets/imgs/logo.png'
import food_box_img from '../../assets/imgs/food_box.png'
import shoppingCartIcon from '../../assets/icons/ShoppingCart.svg'
import blue_circle from '../../assets/imgs/blue_circle.png'
import rose_circle from '../../assets/imgs/rose_circle.png'

import img1 from '../../assets/icons/chips.svg'
import img2 from '../../assets/icons/crips.svg'
import img3 from '../../assets/icons/french-fries.svg'
import img4 from '../../assets/icons/macaron.svg'
import img5 from '../../assets/icons/shopping-cart.svg'
import img6 from '../../assets/icons/tomato.svg'
import img7 from '../../assets/icons/vegetable.svg'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoadingPage from '../../components/loadingPage/LoadingPage'
const EnteryPage = () => {
  const [isloading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      const theLogo = document.querySelector('.entery_page_container .logo')
      theLogo.classList.add('move')
    }, 100)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  if (isloading) {
    return <LoadingPage />
  }
  return (
    <div className="entery_page_container">
      <div className="background">
        <img className="blue_circle" src={blue_circle} alt="" />
        <img className="rose_circle" src={rose_circle} alt="" />
        <img src={img1} className="background_icon icon1" />
        <img src={img2} className="background_icon icon2" />
        <img src={img3} className="background_icon icon3" />
        <img src={img4} className="background_icon icon4" />
        <img src={img5} className="background_icon icon5" />
        <img src={img6} className="background_icon icon6" />
        <img src={img7} className="background_icon icon7" />
      </div>
      <div className="logo">
        <p>Code Spark company</p> <img src={logo} alt="" />
      </div>
      <div className="center_content">
        <div className="food_box_img">
          <img src={food_box_img} alt="" />
        </div>
        <div className="content">
          <h1>مرحبا بك في النظام</h1>
          <p>اضغط بدأ النظام للتشغيل</p>
        </div>
        <div className="start_button">
          <Link className="button" to="/login">
            بدأ النظام <img src={shoppingCartIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default EnteryPage
