import img from '../../../assets/icons/home-icons/shop.png'
const SideCart = () => {
  return (
    <div className="side_cart">
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
          <div className="table_row">
            <div className="row_data title">جبنه رومي</div>
            <div className="row_data ">100</div>
            <div className="row_data ">100</div>
          </div>
          <div className="table_row">
            <div className="row_data title">جبنه رومي</div>
            <div className="row_data ">100</div>
            <div className="row_data ">100</div>
          </div> <div className="table_row">
            <div className="row_data title">جبنه رومي</div>
            <div className="row_data ">100</div>
            <div className="row_data ">100</div>
          </div> <div className="table_row">
            <div className="row_data title">جبنه رومي</div>
            <div className="row_data ">100</div>
            <div className="row_data ">100</div>
          </div>
        </div>
      </div>
      <div className="bottom_content">
        <div className="row">
          <div className="row_data title">رقم الفاتوره</div>
          <div className="row_data">17</div>
        </div>
        <div className="row">
          <div className="row_data title">عدد الاصناف</div>
          <div className="row_data">17</div>
        </div>
        <div className="row">
          <div className="row_data title">الاجمالي</div>
          <div className="row_data">17</div>
        </div>
        <div className="row">
          <div className="row_data title">تاريخ الفاتوره</div>
          <div className="row_data date">17 / 4 / 2024</div>
        </div>
      </div>
    </div>
  )
}

export default SideCart
