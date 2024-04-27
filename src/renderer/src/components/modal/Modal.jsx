const Modal = ({ isOpen, onClose, children }) => {
  // if (!isOpen) return null

  return (
    <div className={`modal_container ${isOpen ? 'active' : false}`}>
      <div className="background" onClick={onClose}></div>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
