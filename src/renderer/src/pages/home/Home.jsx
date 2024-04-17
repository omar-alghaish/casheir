import worker_man from '../../assets/imgs/worker.png'
import OparationsList from './OparationsList'
import LogoutButton from './LogoutButton'

const Home = () => {
  return (
    <div className="home_container">
      <div className="background">
        <img className="img_background" src={worker_man} alt="" />
      </div>
      <div className="content">
        <OparationsList />
        <LogoutButton />
      </div>
    </div>
  )
}

export default Home
