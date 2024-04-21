import worker_man from '../../assets/imgs/worker.png'
import OparationsList from './OparationsList'
import LogoutButton from './LogoutButton'
import logo from '../../assets/imgs/logo.png'
import { useEffect } from 'react';



const Home = () => {
  useEffect(() => {
    setTimeout(() => {
       const theLogo = document.querySelector('.home_container .logo')
    theLogo.classList.add('move')  
    }, 100);
   
  }, [])
  return (
    <div className="home_container">
      <div className="background">
        <img className="img_background" src={worker_man} alt="" />
      </div>
      <div className="content">
        <OparationsList />
        <LogoutButton />
     
      </div>
      <div className="logo">
       <p>Code Spark company</p>  <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Home
