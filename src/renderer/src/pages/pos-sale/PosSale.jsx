import React, { useEffect, useState } from 'react'
import BackButton from '../../components/backButton/BackButton'
import BarcodeScanner from '../../components/barcode'
import BottomBar from './components/BottomBar'
import ProductsList from './components/ProductsList'
import SideCart from './components/SideCart'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCart } from '../../redux/features/cartSlice'

const PosSale = () => {
  const { categories_list, products } = useSelector((state) => state.products)
  const { currentCart } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  return (
    <div className="pos_sale_page">
      <div className="main_content_products">
        <ProductsList />

        <BarcodeScanner
          products={products}
          dispatch={dispatch}
          setCurrentCart={setCurrentCart}
          currentCart={currentCart}
        />
        <BottomBar />
      </div>
      <SideCart />
    </div>
  )
}

export default PosSale
