import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


const BackButton = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    
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
