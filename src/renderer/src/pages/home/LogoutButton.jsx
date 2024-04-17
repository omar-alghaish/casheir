import { Link } from "react-router-dom"

const LogoutButton = () => {
  return (
    <Link to="/" className='logout_button'>
      الخروج من النظام
    </Link>
  )
}

export default LogoutButton 
 