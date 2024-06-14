import houseIcon from '../../assets/icons/House.png'
import { useNavigate } from 'react-router-dom'

const HomeButton = ({ style }) => {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/home')
  }
  return (
    <div style={style} className="home_button" onClick={navigateHome}>
      <img src={houseIcon} alt="" />
    </div>
  )
}

export default HomeButton
