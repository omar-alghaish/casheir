import { useEffect, useState } from 'react'
import listIcon from '../../../assets/icons/list.svg'
import searchIcon from '../../../assets/icons/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../../redux/features/products'
const Search = () => {
  const [searchString, setSearchString] = useState('')
  const { categories_list, products, currentCategory } = useSelector((state) => state.products)
  const [activeButton, setActiveButton] = useState('')
  const dispatch = useDispatch()

  function searchProducts(value) {
    if (!value.trim()) {
      if (currentCategory) {
        return currentCategory?.products
      }
      return categories_list.flatMap((category) => category.products)
    }
    if (currentCategory) {
      return currentCategory.products.filter((product) =>
        Object.values(product).some(
          (val) => val !== undefined && val.toString().toLowerCase().includes(value.toLowerCase())
        )
      )
    }
    return categories_list.flatMap((category) =>
      category.products.filter((product) =>
        Object.values(product).some(
          (val) => val !== undefined && val.toString().toLowerCase().includes(value.toLowerCase())
        )
      )
    )
  }

  useEffect(() => {
    const products = searchProducts(searchString)
    dispatch(setProducts(products))
  }, [searchString])

  const handleActiveButton = (e) => {
    const { id } = e.target
    setActiveButton(id)
    console.log(id)
    const theElemet = document.querySelector('.string')
    theElemet.classList.toggle('actvie')
  }
  return (
    <div className="search_container">
      <div className="searchInput">
        <input
          value={searchString}
          type="text"
          placeholder="بحث"
          onChange={(e) => setSearchString(e.target.value)}
        />

        <div
          className={`img1 ${activeButton === 'qrSearch' ? 'actvie' : false}`}
          id="qrSearch"
          onClick={(e) => handleActiveButton(e)}
        >
          <img src={listIcon} alt="" />
        </div>
        <div className={`img1 string`}>
          {activeButton === 'string' && (
            <input
              value={searchString}
              type="text"
              placeholder="بحث"
              onChange={(e) => setSearchString(e.target.value)}
            />
          )}
          <img src={searchIcon} alt="" id="string" onClick={(e) => handleActiveButton(e)} />
        </div>
      </div>
    </div>
  )
}

export default Search
