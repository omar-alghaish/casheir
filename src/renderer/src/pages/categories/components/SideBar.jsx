import listIcon from '../../../assets/icons/list.svg';
import { IoClose } from "react-icons/io5";

const imgUrl =
  'https://assets.clevelandclinic.org/transform/37277655-04cc-4296-9ba2-54b9ba9c8811/various-raw-Red-Meats-1315903639-967x544-1_jpg'

const SideBar = ({ product, active, onCloseSideBar }) => {
  console.log(product)
  return (
    <div className={`sideBar_container ${active ? 'active' : false}`}>
      <div className="top">
        <div className="img">
          <img src={product?.img || imgUrl} alt="" />
        </div>
        <div className="svg">
          <img src={listIcon} alt="" />
        </div>
        <div className="close" onClick={onCloseSideBar}><IoClose /></div>
        {product?.discount && (
          <div className="discount">
            <div className="number">
              <span className="integer">20</span>
              <span className="fraction">.54</span>
            </div>
            <div>EGP</div>
          </div>
        )}
      </div>
      <div className="info">
        <div className="title">تفاصيل المنتج</div>
        <div className="rows">
          <div className="row">
            <div>اسم المنتج:</div>
            <div>{product?.title}</div>
          </div>
          <div className="divider"></div>
          <div className="row">
            <div>نوع المنتج:</div>
            <div>{product?.title}</div>
          </div>
          <div className="divider"></div>{' '}
          <div className="row">
            <div>سعر المنتج:</div>
            <div>{product?.price}EGP</div>
          </div>
          <div className="divider"></div>{' '}
          <div className="row">
            <div>الخصم:</div>
            <div>10%</div>
          </div>
          <div className="divider"></div>{' '}
          <div className="row">
            <div>السعر بعد الخصم:</div>
            <div>{product?.title}</div>
          </div>
          <div className="divider"></div>
          <div className="row">
            <div>متبق في المخزن:</div>
            <div>{product?.quantity}</div>
          </div>
          <div className="divider"></div>
          <div className="row">
            <div>مواصفات المنتج:</div>
            <div>{product?.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
