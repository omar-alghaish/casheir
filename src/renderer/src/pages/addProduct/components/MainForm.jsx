

import React, { useEffect, useState } from 'react'
import houseIcon from '../../../assets/icons/House.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProduct,
  setAddProductFail,
  setAddProductSuccess
} from '../../../redux/features/products'

const MainForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categories_list, products, addProductValues, addProductSuccess, addProductFail } =
    useSelector((state) => state.products)
  const navigateHome = () => {
    navigate('/home')
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    dispatch(
      addProduct({
        ...addProductValues,
        [name]: value
      })
    )
  }

  const handleSubmit = (e) => {
    if (Object.values(addProductValues).some((value) => value === '')) {
      dispatch(setAddProductFail(true))
    } else {
      dispatch(setAddProductSuccess(true))
     dispatch(addProduct("delete"))
    }
    e.preventDefault()
  }
  console.log(addProductValues)

  return (
    <div className="main_form">
      <div className="content">
        <div className="header">
          <div className="home_button" onClick={navigateHome}>
            <img src={houseIcon} alt="" />
          </div>
          <div className="status">اضافة منتج</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <label htmlFor="productName">اسم المنتج</label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={addProductValues.productName}
              onChange={handleChange}
              placeholder="ادخل اسم المنتج"
            />
          </div>
          <div className="input_container">
            <label htmlFor="quantity">الكميه</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={addProductValues.quantity}
              onChange={handleChange}
              placeholder="ادخل كمية المخزون من المنتج"
            />
          </div>
          <div className="input_container">
            <label htmlFor="startDate">تاريخ الصلاحيه</label>
            <div className="inputs_container">
              <input
                className="date_input"
                type="date"
                name="startDate"
                id="startDate"
                value={addProductValues.startDate}
                onChange={handleChange}
                placeholder="تاريخ البدء"
              />
              <input
                className="date_input"
                type="date"
                name="endDate"
                id="endDate"
                value={addProductValues.endDate}
                onChange={handleChange}
                placeholder="تاريخ الانتهاء"
              />
            </div>
          </div>
          <div className="input_container">
            <label htmlFor="price">السعر</label>
            <input
              type="text"
              name="price"
              id="price"
              value={addProductValues.price}
              onChange={handleChange}
              placeholder="ادخل سعر المنتج الاصلي"
            />
          </div>
          <div className="input_container">
            <label htmlFor="discount">الخصم</label>
            <input
              type="text"
              name="discount"
              id="discount"
              value={addProductValues.discount}
              onChange={handleChange}
              placeholder="ادخل سعر الخصم علي المنتج"
            />
          </div>
          <div className="input_container">
            <label htmlFor="wholesalePrice">سعر الجملة</label>
            <input
              type="text"
              name="wholesalePrice"
              id="wholesalePrice"
              value={addProductValues.wholesalePrice}
              onChange={handleChange}
              placeholder="ادخل سعر الجمله للمنتج"
            />
          </div>
          <div className="buttons">
            <button type="submit" className="save_button">
              حفظ العملية
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainForm
