import Search from './Search'
import img from '../../../assets/imgs/meet.png'
import Product from './Product'
import { useEffect, useState } from 'react'
import arrowLeft from '../../../assets/icons/ArrowLeft.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCart } from '../../../redux/features/cartSlice'
import { setCurrentCategory, setProducts } from '../../../redux/features/products'
import HomeButton from '../../../components/homeButton/HomeButton'
const ProductsList = () => {
  const { categories_list, products } = useSelector((state) => state.products)

  const [isAllCategories, setIsAllCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const [productslist, setProductslist] = useState([])
  const dispatch = useDispatch()
  // const categories_list = [
  //   {
  //     id: 1,
  //     title: 'لحوم',
  //     img: 'https://assets.clevelandclinic.org/transform/37277655-04cc-4296-9ba2-54b9ba9c8811/various-raw-Red-Meats-1315903639-967x544-1_jpg',
  //     products: [
  //       { id: 1, title: 'لحم بقري طازج', price: 20, discount:10.3 },
  //       { id: 2, title: 'لحم مفروم', price: 10 },
  //       { id: 3, title: 'لحم غنم', price: 50 }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'دجاج',
  //     img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/MN/RW/XL/157672002/broiler-meat-halal-500x500.jpg',
  //     products: [
  //       { id: 4, title: 'صدور دجاج', price: 33 },
  //       { id: 5, title: 'أفخاذ دجاج', price: 36,discount: 20.54 }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: 'فواكه وخضروات',
  //     img: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  //     products: [
  //       { id: 6, title: 'تفاح', price: 5 },
  //       { id: 7, title: 'بطاطا', price: 3 },
  //       { id: 8, title: 'طماطم', price: 6 }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: 'مشروبات',
  //     img: 'https://i.redd.it/yyr6vtruhzbb1.jpg',
  //     products: [
  //       { id: 9, title: 'عصير برتقال', price: 8 },
  //       { id: 10, title: 'مياه معدنية', price: 2 },
  //       { id: 11, title: 'شاي أخضر', price: 12 }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: 'أجبان',
  //     img: 'https://www.shutterstock.com/image-photo/chease-on-barbecue-600nw-2131580.jpg',
  //     products: [
  //       { id: 12, title: 'جبنة شيدر', price: 15 },
  //       { id: 13, title: 'جبنة موزاريلا', price: 20 },
  //       { id: 14, title: 'جبنة فيتا', price: 18 }
  //     ]
  //   },
    
  //   {
  //     id: 6,
  //     title: 'منظفات المنزل',
  //     img: 'https://adwatak.com/wp-content/uploads/2019/06/image.jpg',
  //     products: [
  //       { id: 18, title: 'منظف الأرضيات', price: 12 },
  //       { id: 19, title: 'منظف الزجاج', price: 8 },
  //       { id: 20, title: 'مزيل الروائح', price: 15 }
  //     ]
  //   },
    
  // ];
  

  const allProducts = () => {
    const allProducts = categories_list.reduce((accumulator, currentCategory) => {
      return [...accumulator, ...currentCategory.products]
    }, [])
    setProductslist(allProducts)
    dispatch(setProducts(allProducts))
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
    dispatch(setCurrentCategory(""))
  }

  const handleSelectCategory = (e) => {
    const { id } = e
    const theCategory = categories_list.find((item) => item?.id == id)
    setSelectedCategory(theCategory)
    dispatch(setCurrentCategory(theCategory))
   dispatch(setProducts(theCategory.products)) 
    const theContainer = document.querySelector('.products_list_container')
    theContainer.classList.add('active')
    setIsAllCategories(false)
  }
  

  return (
    <div className="products_list">
      <div className="header">
        <HomeButton />
        <Search /> 
      </div>
     

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
            <div className="categories_list_container2">
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
                return <Product item={item} key={index}/>
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
