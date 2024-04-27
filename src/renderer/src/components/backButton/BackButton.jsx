import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setCurrentCategory } from '../../redux/features/products'


const BackButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoBack = () => {
    dispatch(setCurrentCategory(""))
    navigate(-1)
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <button
        onClick={handleGoBack}
        style={{ position: 'sticky', top: '0', right: '0', zIndex: '11' }}
      >
        <FaArrowRight />
      </button>
    </div>
  )
}

export default BackButton
