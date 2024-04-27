// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { GoArrowLeft } from 'react-icons/go'
// import { MdDeleteForever } from 'react-icons/md'

// const SideBar = () => {
//   const [activeContainer, setActiveContainer] = useState('main_content')
//   const [selectedCategory, setSelectedCategory] = useState()
//   const [selectedProductImg, setSelectedProductImg] = useState()
//   const [selectedBarcodeImg, setSelectedBarcodeImg] = useState()
//   const { categories_list, products } = useSelector((state) => state.products)
//   const dispatch = useDispatch()

//   const handleSelectCategory = (item) => {
//     setSelectedCategory(item)
//     setActiveContainer('main_content')
//   }

//   const handleBackButton = () => {
//     setActiveContainer('main_content')
//   }

//   const handleUploadProductImg = () => {}

//   const handleUploadBarcodeImg = () => {}

//   return (
//     <div className="addProduct_sideBar">
//       <div
//         className={`main_container main_content ${activeContainer == 'main_content' ? 'active' : false}`}
//       >
//         <div className="upload_img">
//           {selectedProductImg ? (
//             <div className="img_container">
//               <img src={selectedProductImg} alt="" />
//             </div>
//           ) : (
//             <div className="button">
//               <button onClick={handleUploadProductImg}>تحميل صورة المنتج</button>
//             </div>
//           )}
//         </div>
//         <div className="bottom">
//           <div className="upload_barcode">
//             {selectedBarcodeImg ? (
//               <div className="img_container">
//                 <img src={selectedBarcodeImg} alt="" />
//               </div>
//             ) : (
//               <div className="button">
//                 <button onClick={handleUploadBarcodeImg}>تحميل ال Barcode</button>
//               </div>
//             )}
//           </div>
//           <div className="select_category">
//             <div className="title">تحديد قسم</div>

//             <div className="category">
//               {selectedCategory && (
//                 <div className="selected_category">
//                   <div className="deleteCategory" onClick={() => setSelectedCategory(null)}>
//                     <MdDeleteForever />
//                   </div>
//                   {selectedCategory?.title}
//                 </div>
//               )}
//             </div>
//             {!selectedCategory && (
//               <div className="buttons">
//                 <button onClick={() => setActiveContainer('categories_container_main')}>
//                   اختيار قسم
//                 </button>
//                 <button onClick={() => setActiveContainer('new_category_container')}>
//                   انشاء قسم جديد
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`main_container new_category_container ${activeContainer == 'new_category_container' ? 'active' : false}`}
//       >
//         <button className="backButton" onClick={handleBackButton}>
//           <GoArrowLeft />
//         </button>
//       </div>
//       <div
//         className={`main_container categories_container_main ${activeContainer == 'categories_container_main' ? 'active' : false}`}
//       >
//         <button className="backButton" onClick={handleBackButton}>
//           <GoArrowLeft />
//         </button>
//         <div className="title_container">
//           <div className="title">اختر القسم</div>
//         </div>
//         <div className="categories_list">
//           {categories_list.map((item, index) => {
//             return (
//               <div
//                 className="category"
//                 name={item?.title}
//                 value={item?.id}
//                 key={index}
//                 onClick={(e) => handleSelectCategory(item)}
//               >
//                 <div className="img">
//                   <img src={item?.img} alt="" />
//                 </div>
//                 <div className="title">{item?.title}</div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SideBar

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoArrowLeft } from 'react-icons/go'
import { MdDeleteForever } from 'react-icons/md'
import { addProduct } from '../../../redux/features/products'

const SideBar = () => {
  const [activeContainer, setActiveContainer] = useState('main_content')
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedProductImg, setSelectedProductImg] = useState()
  const [selectedBarcodeImg, setSelectedBarcodeImg] = useState()
  const [selectedCategoryImg, SetSelectedCategoryImg] = useState()

  const { categories_list, products, addProductValues,addProductSuccess } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const handleSelectCategory = (item) => {
    setSelectedCategory(item)
    setActiveContainer('main_content')
    dispatch(addProduct({ categoryId: item?.id }))
  }
  console.log(addProductValues)

  const handleBackButton = () => {
    setActiveContainer('main_content')
  }

  useEffect(()=>{
if(addProductSuccess){
  setSelectedCategory("")
  setSelectedBarcodeImg("")
  setSelectedProductImg("")
}
  },[addProductSuccess])

  const handleUploadProductImg = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    dispatch(addProduct({ productImg: file }))
    reader.onload = function (event) {
      setSelectedProductImg(event.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleUploadBarcodeImg = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    dispatch(addProduct({ barcodeImg: file }))
    reader.onload = function (event) {
      setSelectedBarcodeImg(event.target.result)
    }
    if (!addProductValues.barcodeImg) {
      setSelectedBarcodeImg('')
    }

    reader.readAsDataURL(file)
  }

  const handleUploadCategoryImg = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = function (event) {
      SetSelectedCategoryImg(event.target.result)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="addProduct_sideBar">
      <div
        className={`main_container main_content ${activeContainer === 'main_content' ? 'active' : false}`}
      >
        <div className="upload_img">
          {selectedProductImg ? (
            <div className="img_container">
              <img src={selectedProductImg} alt="" />
              <div
                className="deleteButton"
                onClick={() => {
                  setSelectedProductImg(null)
                  dispatch(addProduct({ productImg: '' }))
                }}
              >
                <MdDeleteForever />
              </div>
            </div>
          ) : (
            <div className="button">
              <input type="file" id="productImg" onChange={handleUploadProductImg} />
              <label className="productImgButton" htmlFor="productImg">
                تحميل صورة المنتج
              </label>
            </div>
          )}
        </div>
        <div className="bottom">
          <div className="upload_barcode">
            {selectedBarcodeImg ? (
              <div className="img_container">
                <img src={selectedBarcodeImg} alt="" />
                <div
                  className="deleteButton"
                  onClick={() => {
                    setSelectedBarcodeImg(null)
                    dispatch(addProduct({ barcodeImg: '' }))
                  }}
                >
                  <MdDeleteForever />
                </div>
              </div>
            ) : (
              <div className="button">
                <input type="file" id="barcodeImg" onChange={handleUploadBarcodeImg} />
                <label className="barcodeImgButton" htmlFor="barcodeImg">
                  تحميل صورة المنتج
                </label>
              </div>
            )}
          </div>
          <div className="select_category">
            <div className="title">تحديد قسم</div>

            <div className="category">
              {selectedCategory && (
                <div className="selected_category">
                  <div className="deleteCategory" onClick={() => setSelectedCategory(null)}>
                    <MdDeleteForever />
                  </div>
                  {selectedCategory?.title}
                </div>
              )}
            </div>
            {!selectedCategory && (
              <div className="buttons">
                <button onClick={() => setActiveContainer('categories_container_main')}>
                  اختيار قسم
                </button>
                <button onClick={() => setActiveContainer('new_category_container')}>
                  انشاء قسم جديد
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`main_container new_category_container ${activeContainer === 'new_category_container' ? 'active' : false}`}
      >
        <button className="backButton" onClick={handleBackButton}>
          <GoArrowLeft />
        </button>
        <div className="title_container">
          <div className="title">اختر القسم</div>
        </div>
        <div className="form">
          <div className="input_container">
            <label htmlFor="">اسم القسم:</label>
            <input type="text" />
          </div>
          <div className="img_input_container">
            <label htmlFor="">صورة القسم:</label>
            <div className="button">
              <div className="img">
                {selectedCategoryImg && <img src={selectedCategoryImg} alt="" />}
              </div>
              <input type="file" id="categoryImg" onChange={handleUploadCategoryImg} />
              <label className="categoryImgButton" htmlFor="categoryImg">
                اضافة صوره
              </label>
            </div>
          </div>
          <button className="saveCategoryButton">حفظ القسم</button>
        </div>
      </div>
      <div
        className={`main_container categories_container_main ${activeContainer === 'categories_container_main' ? 'active' : false}`}
      >
        <button className="backButton" onClick={handleBackButton}>
          <GoArrowLeft />
        </button>
        <div className="title_container">
          <div className="title">اختر القسم</div>
        </div>
        <div className="categories_list">
          {categories_list.map((item, index) => {
            return (
              <div
                className="category"
                name={item?.title}
                value={item?.id}
                key={index}
                onClick={(e) => handleSelectCategory(item)}
              >
                <div className="img">
                  <img src={item?.img} alt="" />
                </div>
                <div className="title">{item?.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
