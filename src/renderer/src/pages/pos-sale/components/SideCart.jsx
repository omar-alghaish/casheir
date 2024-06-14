import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from 'react-icons/io'

import img from '../../../assets/icons/home-icons/shop.png'
import { deleteCurrentCart, deleteItemById } from '../../../redux/features/cartSlice'
import { useState } from 'react'
import Modal from '../../../components/modal/Modal'
import Receipt from './Receipt'
import OrderDetails from './OrderDetails'
const SideCart = () => {
  const { currentCart } = useSelector((state) => state.cart)
  const [isResetOpen, setIsResetOpen] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => setIsResetOpen(true)
  const closeModal = () => setIsResetOpen(false)
  const handleDeleteCurrentCart = () => {
    dispatch(deleteCurrentCart())
  }
  const handleDeleteItem = (id) => {
    dispatch(deleteItemById(id))
  }
  return (
    <div className="side_cart">
      <Modal isOpen={isResetOpen} onClose={closeModal}>
        <div className="receipt_content_modal">
          <div className="close_button">
            <button onClick={closeModal}>
              <IoMdClose />
            </button>
          </div>
          <Receipt />
          <OrderDetails />
        </div>
      </Modal>
      <div className="head">
        <h3>الطلبات</h3>
        <div className="icon">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="content_table">
        <div className="table">
          <div className="table_header">
            <div className="header_data title">الصنف</div>
            <div className="header_data ">الكميه</div>
            <div className="header_data ">السعر</div>
          </div>
          <div className="content">
            {currentCart?.items?.length > 0 &&
              currentCart?.items.map((item, index) => {
                return (
                  <div className="table_row" key={index}>
                    <div className="row_data title">{item?.title}</div>
                    <div className="row_data ">{item?.quantity}</div>
                    <div className="row_data ">{item?.price}</div>
                    <div className="delete" onClick={() => handleDeleteItem(item?.id)}>
                      <IoMdClose />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      {currentCart?.items?.length > 0 && (
        <div className="bottom_content">
          <div className="row">
            <div className="row_data title">رقم الفاتوره</div>
            <div className="row_data">{currentCart?.cart_number}</div>
          </div>
          <div className="row">
            <div className="row_data title">عدد الاصناف</div>
            <div className="row_data">{currentCart?.totalItems}</div>
          </div>
          <div className="row">
            <div className="row_data title">الاجمالي</div>
            <div className="row_data">{currentCart?.totalPrice}</div>
          </div>
          <div className="row">
            <div className="row_data title">تاريخ الفاتوره</div>
            <div className="row_data date">17 / 4 / 2024</div>
          </div>
        </div>
      )}
      {currentCart?.items?.length > 0 && (
        <div className="bottom_buttons">
          <button>بيع</button>{' '}
          <button onClick={handleDeleteCurrentCart}>حذف المعامله الحاليه</button>
          <button onClick={openModal}>عرض الايصال</button>
        </div>
      )}
    </div>
  )
}

export default SideCart
