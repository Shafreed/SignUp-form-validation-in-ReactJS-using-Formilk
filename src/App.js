import React, { useState } from 'react';
import './App.css';
import { useFormik } from 'formik';
import Popup from './components/Popup';
const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = '*require';
  } else if (values.length > 8) {
    errors.firstname = '*Must be 5 characters or less'
  }
  if (!values.lastname) {
    errors.lastname = '*require'
  } else if (values.length > 8) {
    errors.lastname = '*Must be 5 characters or less'
  }
  if (!values.email) {
    errors.email = '*require'
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = '*Invalid Email address'
  }
  if (!values.password) {
    errors.password = '*require'
  } else if (values.password.length > 8) {
    errors.password = '*Maximum 8 characters'
  } else if (values.password.length < 4) {
    errors.password = 'Minimum 4 characters'
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = '*require'
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = '*password must match'
  }
  return errors
}
function App() {
  const [message,setMessage]=useState(0);
  const Formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validate,
    onSubmit:(values,{resetForm})=>{
      if(message){
        setMessage(0)
        resetForm({values:''})
      }else{
        setMessage(1)
        console.log(values);
      }
    }
  })
  return (
    <div className="main">
      <div className="SignUp-from">
        <h2>Sign Up</h2>
        <form  onSubmit={Formik.handleSubmit}>
          <input type="text" placeholder='First Name' name='firstname' autoComplete='off' onChange={Formik.handleChange} value={Formik.values.firstname} onBlur={Formik.handleBlur} />
          {
            Formik.touched.firstname && Formik.errors.firstname ? <span>{Formik.errors.firstname}</span> : null
          }
          <input type="text" placeholder='Last Name' name='lastname' autoComplete='off' onChange={Formik.handleChange} value={Formik.values.lastname} onBlur={Formik.handleBlur} />
          {
            Formik.touched.lastname && Formik.errors.lastname ? <span>{Formik.errors.lastname}</span> : null
          }
          <input type="text" placeholder='Email' name='email' autoComplete='off' onChange={Formik.handleChange} value={Formik.values.email} onBlur={Formik.handleBlur} />
          {
            Formik.touched.email && Formik.errors.email ? <span>{Formik.errors.email}</span> : null
          }
          <input type="password" placeholder='Password' name='password' autoComplete='off' onChange={Formik.handleChange} value={Formik.values.password} onBlur={Formik.handleBlur} />
          {
            Formik.touched.password && Formik.errors.password ? <span>{Formik.errors.password}</span> : null
          }
          <input type="password" placeholder='Confirm Password' name='confirmpassword' onChange={Formik.handleChange} value={Formik.values.confirmpassword} onBlur={Formik.handleBlur} />
          {
            Formik.touched.confirmpassword && Formik.errors.confirmpassword ? <span>{Formik.errors.confirmpassword}</span> : null
          }
          <input type="submit" value='submit' />
        </form>
      </div>
      <div className="message-box">
        {
          message ? <Popup onClick={Formik.handleSubmit}/> :null
        }
      </div>
    </div>
  );
}

export default App;
