/* eslint-disable no-unused-vars */
import bg from '../../assets/imgs/bg1.jpg'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import id_icon from '../../assets/icons/id.svg'
import password_icon from '../../assets/icons/password.svg'
import person_icon from '../../assets/icons/person.svg'
import logo from '../../assets/imgs/logo.png'
import { useNavigate } from 'react-router-dom'
import userApi from '../../api/modules/user.api'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoginRequest, setIsLoginRequest] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    setTimeout(() => {
      const theLogo = document.querySelector('.login_container .logo')
      theLogo.classList.add('move')
    }, 100)
  }, [])
  const signinForm = useFormik({
    initialValues: {
      password: '',
      username: '',
      id: ''
    },
    // validationSchema: Yup.object({
    //   id: Yup.string().min(8, 'id must 8 characters').required('id is required'),
    //   username: Yup.string().min(8, 'username must 8 characters').required('username is required'),
    //   password: Yup.string().min(8, 'username must 8 characters').required('username is required')
    // }),
    onSubmit: async (values) => {
      //   setErrorMessage(undefined)
      //   setIsLoginRequest(true)
        // const { response, err } = await userApi.signin(values)
      //   setIsLoginRequest(false)
      //   if (response) {
      //     signinForm.resetForm()
      //     dispatch(setUser(response))
      //     toast.success('Sign in successfuly')
      //   }
      //   if (err) {
      //     setErrorMessage(err.message)
      //   }
      navigate('/home')
    }
  })
  return (
    <div className="login_container">
      <div className="background">
        <img src={bg} alt="" />
      </div>
      <form className="login_form" onSubmit={signinForm.handleSubmit}>
        <h1 className="title">تسجيل الدخول للنظام</h1>
        <div className="inputs">
          <div className="input_container">
            <img src={person_icon} alt="" />
            <input
              type="text"
              placeholder="ادخل رمز ID الخاص بك"
              name="id"
              value={signinForm.values.id}
              onChange={signinForm.handleChange}
            />
          </div>
          <div className="input_container">
            <img src={id_icon} alt="" />

            <input
              type="text"
              placeholder="ادخل كلمة المرور"
              name="password"
              value={signinForm.values.password}
              onChange={signinForm.handleChange}
            />
          </div>
          <div className="input_container">
            <img src={password_icon} alt="" />

            <input
              type="text"
              placeholder="ادخل اسم المستخدم"
              name="username"
              value={signinForm.values.username}
              onChange={signinForm.handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit_button">
          تشغيل النظام
        </button>
      </form>
      <div className="content">
        <h1>مرحبا بك في هايبر </h1>
        <h1>الرحاب</h1>
        <h3>أدخل بياناتك في حالة كنت مستخدم للنظام بالفعل</h3>
      </div>
      <div className="logo">
        Code Spark company <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Login
