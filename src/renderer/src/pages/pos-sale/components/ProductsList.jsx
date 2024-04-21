import Search from './Search'
import img from '../../../assets/imgs/meet.png'
import Product from './Product'
import { useEffect, useState } from 'react'
import arrowLeft from '../../../assets/icons/ArrowLeft.svg'
const ProductsList = () => {
  const [isAllCategories, setIsAllCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const [products, setProducts] = useState([])
  const categories_list = [
    {
      id: 1,
      title: 'لحوم',
      img: img,
      products: [
        { id: 1, title: 'pr 1' },
        { id: 2, title: 'pr 2' },
        { id: 3, title: 'pr 3' }
      ]
    },
    {
      id: 2,
      title: 'دجاج',
      img: img,
      products: [
        { id: 4, title: 'pr 1' },
        { id: 5, title: 'pr 2' }
      ]
    }
  ]

  const allProducts = () => {
    const allProducts = categories_list.reduce((accumulator, currentCategory) => {
      return [...accumulator, ...currentCategory.products]
    }, [])
    setProducts(allProducts)
  }

  useEffect(() => {
    allProducts()
  }, [])
  const handleAllCategories = () => {
    const theContainer = document.querySelector('.products_list_container')
    theContainer.classList.add('active')
    setIsAllCategories(true)
  }
  const handleBack = () => {
    allProducts()
    const theContainer = document.querySelector('.products_list_container')
    theContainer.classList.remove('active')
    setIsAllCategories(false)
    setSelectedCategory()
  }

  const handleSelectCategory = (e) => {
    const { id } = e
    const theCategory = categories_list.find((item) => item?.id == id)
    setSelectedCategory(theCategory)
    setProducts(theCategory.products)
    const theContainer = document.querySelector('.products_list_container')
    theContainer.classList.add('active')
  }
  console.log(selectedCategory)
  return (
    <div className="products_list">
      <Search />

      <div className="center">
        <div className="categories_list_container">
          <button onClick={handleAllCategories}>الكل</button>
          <div className="categories_list">
            {categories_list.map((item, index) => {
              return (
                <div
                  className="category"
                  name={item?.title}
                  value={item?.id}
                  key={index}
                  onClick={(e) => handleSelectCategory(item)}
                >
                  <div className="img">
                    <img src={item?.img} alt="" />
                  </div>
                  <div className="title">{item?.title}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="products_list_container">
          <div className="top">
            {(selectedCategory || isAllCategories) && (
              <div className="back" onClick={handleBack}>
                <img src={arrowLeft} alt="" />
              </div>
            )}
          </div>
          {isAllCategories ? (
            <div className="categories_container">
              {' '}
              {categories_list.map((item, index) => {
                return (
                  <div
                    className="category"
                    name={item?.title}
                    value={item?.id}
                    key={index}
                    onClick={(e) => handleSelectCategory(item)}
                  >
                    <div className="img">
                      <img src={item?.img} alt="" />
                    </div>
                    <div className="title">{item?.title}</div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="products">
              {products.map((item, index) => {
                return <Product />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
