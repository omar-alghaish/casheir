import { useDispatch, useSelector } from 'react-redux'
import Search from '../pos-sale/components/Search'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/backButton/BackButton'
import { setCurrentCategory } from '../../redux/features/products'

const Categories = () => {
  const { categories_list, products } = useSelector((state) => state.products)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSelectCategory = (item) => {
    dispatch(setCurrentCategory(item))
    navigate('/categories-products', { state: item?.id })
  }

  return (
    <div className="categories_container list_container">
      <div className="content">
        <div className="header">
          <div className="buttons">
            <button className={`active`}>الكل</button>
            <button>الخصومات</button>
          </div>
          <Search />
          <div className="title"><BackButton /></div>
        </div>
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
    </div>
  )
}

export default Categories
