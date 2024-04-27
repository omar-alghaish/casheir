import React, { useState } from 'react'
import MainForm from './components/MainForm'
import SideBar from './components/SideBar'
import Modal from '../../components/modal/Modal'
import doneIcon from '../../assets/icons/done.png'
import failIcon from '../../assets/icons/fail.png'

import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setAddProductFail, setAddProductSuccess } from '../../redux/features/products'

const AddProduct = () => {
  const { categories_list, products, addProduct, addProductSuccess, addProductFail } = useSelector(
    (state) => state.products
  )

  // const [successModalOpen, setSuccessModalOpen] = useState(false);
  // const [failModalOpen, setFailModalOpen] = useState(false);
  const dispatch = useDispatch()
  const closeSuccessModal = () => {
    dispatch(setAddProductSuccess(false))
  }
  const closeFailModal = () => {
    dispatch(setAddProductFail(false))
  }

  
  return (
    <div className="add_product_container">
      <MainForm />
      <SideBar />
      <Modal isOpen={addProductSuccess} onClose={closeSuccessModal}>
        <div className="success_modal">
          <div className="close" onClick={closeSuccessModal}>
            <IoClose />
          </div>
          <div className="success_img">
            <img src={doneIcon} alt="" />
          </div>
          <div className="message">تمت العملية بنجاح</div>
        </div>
      </Modal>
      <Modal isOpen={addProductFail} onClose={closeFailModal}>
        <div className="success_modal">
          <div className="close" onClick={closeFailModal}>
            <IoClose />
          </div>
          <div className="success_img">
            <img src={failIcon} alt="" />
          </div>
          <div className="message">الرجاء إدخال البيانات المطلوبة</div>
        </div>
      </Modal>
    </div>
  )
}

export default AddProduct
