import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'

function Register(props) {
  console.log(props)
  return (
    <>
      <Banner pagename="註冊本站會員" />
      <Breadcrumb />
    </>
  )
}

export default Register
