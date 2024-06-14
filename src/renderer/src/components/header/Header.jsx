import Search from '../../pages/pos-sale/components/Search'
import HomeButton from '../homeButton/HomeButton'

const Header = () => {
  return (
    <div className="main_header">
      <HomeButton />
      <Search />
      <div className="status">
          <div className="title">التقارير</div>
        </div>
    </div>
  )
}

export default Header
