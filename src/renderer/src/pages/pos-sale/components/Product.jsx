import img from '../../../assets/imgs/meet.png'

const Product = () => {
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="title row">دجاج عافيه</div>
      <div className="quantity row">
        <span>المتبقي</span>
        <span>234</span>
      </div>
      <div className="bottom row">
        <div>+</div>
        <div>234</div>
      </div>
    </div>
  )
}

export default Product
