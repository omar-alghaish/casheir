import listIcon from '../../../assets/icons/list.svg'
import searchIcon from '../../../assets/icons/search.svg'
const Search = () => {
  return (
    <div className="search_container">
      <div className="searchInput">
        <input type="text" placeholder="بحث" />
        <div className="img">
          <img src={listIcon} alt="" />
        </div>
        <div className="img">
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Search
