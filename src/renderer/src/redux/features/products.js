import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories_list: [
    {
      id: 1,
      title: 'لحوم',
      img: 'https://assets.clevelandclinic.org/transform/37277655-04cc-4296-9ba2-54b9ba9c8811/various-raw-Red-Meats-1315903639-967x544-1_jpg',
      products: [
        { id: 1, title: 'لحم بقري طازج', price: 20, discount: 10.3 },
        { id: 2, title: 'لحم مفروم', price: 10 },
        { id: 3, title: 'لحم غنم', price: 50 }
      ]
    },
    {
      id: 2,
      title: 'دجاج',
      img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/MN/RW/XL/157672002/broiler-meat-halal-500x500.jpg',
      products: [
        { id: 4, title: 'صدور دجاج', price: 33 },
        { id: 5, title: 'أفخاذ دجاج', price: 36, discount: 20.54 }
      ]
    },
    {
      id: 3,
      title: 'فواكه وخضروات',
      img: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
      products: [
        { id: 6, title: 'تفاح', price: 5 },
        { id: 7, title: 'بطاطا', price: 3 },
        { id: 8, title: 'طماطم', price: 6 }
      ]
    },
    {
      id: 4,
      title: 'مشروبات',
      img: 'https://i.redd.it/yyr6vtruhzbb1.jpg',
      products: [
        { id: 9, title: 'عصير برتقال', price: 8 },
        { id: 10, title: 'مياه معدنية', price: 2 },
        { id: 11, title: 'شاي أخضر', price: 12 }
      ]
    },
    {
      id: 5,
      title: 'أجبان',
      img: 'https://www.shutterstock.com/image-photo/chease-on-barbecue-600nw-2131580.jpg',
      products: [
        { id: 12, title: 'جبنة شيدر', price: 15 },
        { id: 13, title: 'جبنة موزاريلا', price: 20 },
        { id: 14, title: 'جبنة فيتا', price: 18 }
      ]
    },

    {
      id: 6,
      title: 'منظفات المنزل',
      img: 'https://adwatak.com/wp-content/uploads/2019/06/image.jpg',
      products: [
        { id: 18, title: 'منظف الأرضيات', price: 12 },
        { id: 19, title: 'منظف الزجاج', price: 8 },
        { id: 20, title: 'مزيل الروائح', price: 15 }
      ]
    },
    {
      id: 7,
      title: 'لحوم',
      img: 'https://assets.clevelandclinic.org/transform/37277655-04cc-4296-9ba2-54b9ba9c8811/various-raw-Red-Meats-1315903639-967x544-1_jpg',
      products: [
        { id: 21, title: 'لحم بقري طازج', price: 20, discount: 10.3 },
        { id: 22, title: 'لحم مفروم', price: 10 },
        { id: 23, title: 'لحم غنم', price: 50 }
      ]
    },
    {
      id: 8,
      title: 'دجاج',
      img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/MN/RW/XL/157672002/broiler-meat-halal-500x500.jpg',
      products: [
        { id: 24, title: 'صدور دجاج', price: 33 },
        { id: 25, title: 'أفخاذ دجاج', price: 36, discount: 20.54 }
      ]
    },
    {
      id: 9,
      title: 'فواكه وخضروات',
      img: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
      products: [
        { id: 26, title: 'تفاح', price: 5 },
        { id: 27, title: 'بطاطا', price: 3 },
        { id: 28, title: 'طماطم', price: 6 }
      ]
    },
    {
      id: 10,
      title: 'مشروبات',
      img: 'https://i.redd.it/yyr6vtruhzbb1.jpg',
      products: [
        { id: 29, title: 'عصير برتقال', price: 8 },
        { id: 30, title: 'مياه معدنية', price: 2 },
        { id: 31, title: 'شاي أخضر', price: 12 }
      ]
    },
    {
      id: 11,
      title: 'أجبان',
      img: 'https://www.shutterstock.com/image-photo/chease-on-barbecue-600nw-2131580.jpg',
      products: [
        { id: 32, title: 'جبنة شيدر', price: 15 },
        { id: 33, title: 'جبنة موزاريلا', price: 20 },
        { id: 34, title: 'جبنة فيتا', price: 18 }
      ]
    },

    {
      id: 12,
      title: 'منظفات المنزل',
      img: 'https://adwatak.com/wp-content/uploads/2019/06/image.jpg',
      products: [
        { id: 35, title: 'منظف الأرضيات', price: 12 },
        { id: 36, title: 'منظف الزجاج', price: 8 },
        { id: 37, title: 'مزيل الروائح', price: 15 }
      ]
    },
    {
      id: 13,
      title: 'لحوم',
      img: 'https://assets.clevelandclinic.org/transform/37277655-04cc-4296-9ba2-54b9ba9c8811/various-raw-Red-Meats-1315903639-967x544-1_jpg',
      products: [
        { id: 38, title: 'لحم بقري طازج', price: 20, discount: 10.3 },
        { id: 39, title: 'لحم مفروم', price: 10 },
        { id: 40, title: 'لحم غنم', price: 50 }
      ]
    },
    {
      id: 14,
      title: 'دجاج',
      img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/MN/RW/XL/157672002/broiler-meat-halal-500x500.jpg',
      products: [
        { id: 41, title: 'صدور دجاج', price: 33 },
        { id: 42, title: 'أفخاذ دجاج', price: 36, discount: 20.54 }
      ]
    },
    {
      id: 15,
      title: 'فواكه وخضروات',
      img: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
      products: [
        { id: 43, title: 'تفاح', price: 5 },
        { id: 44, title: 'بطاطا', price: 3 },
        { id: 45, title: 'طماطم', price: 6 }
      ]
    },
    {
      id: 16,
      title: 'مشروبات',
      img: 'https://i.redd.it/yyr6vtruhzbb1.jpg',
      products: [
        { id: 46, title: 'عصير برتقال', price: 8 },
        { id: 47, title: 'مياه معدنية', price: 2 },
        { id: 48, title: 'شاي أخضر', price: 12 }
      ]
    },
    {
      id: 17,
      title: 'أجبان',
      img: 'https://www.shutterstock.com/image-photo/chease-on-barbecue-600nw-2131580.jpg',
      products: [
        { id: 49, title: 'جبنة شيدر', price: 15 },
        { id: 50, title: 'جبنة موزاريلا', price: 20 },
        { id: 51, title: 'جبنة فيتا', price: 18 }
      ]
    },

    {
      id: 18,
      title: 'منظفات المنزل',
      img: 'https://adwatak.com/wp-content/uploads/2019/06/image.jpg',
      products: [
        { id: 52, title: 'منظف الأرضيات', price: 12 },
        { id: 53, title: 'منظف الزجاج', price: 8 },
        { id: 54, title: 'مزيل الروائح', price: 15 }
      ]
    }
  ],
  products: [],
  currentCategory: '',
  addProductValues: {
    productName: '',
    quantity: '',
    startDate: '',
    endDate: '',
    price: '',
    discount: '',
    wholesalePrice: '',
    categoryId: '',
    productImg: '',
    barcodeImg: ''
  },
  addProductSuccess: false,
  addProductFail: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
    addProduct: (state, action) => {
      if (action.payload == 'delete') {
        state.addProductValues = {
          productName: '',
          quantity: '',
          startDate: '',
          endDate: '',
          price: '',
          discount: '',
          wholesalePrice: '',
          categoryId: '',
          productImg: '',
          barcodeImg: ''
        }
      } else {
        state.addProductValues = { ...state.addProductValues, ...action?.payload }
      }
    },
    setAddProductSuccess: (state, action) => {
      state.addProductSuccess = action.payload
    },
    setAddProductFail: (state, action) => {
      state.addProductFail = action.payload
    }
  }
})

export const {
  setProducts,
  setCurrentCategory,
  addProduct,
  setAddProductFail,
  setAddProductSuccess
} = productsSlice.actions

export default productsSlice.reducer
