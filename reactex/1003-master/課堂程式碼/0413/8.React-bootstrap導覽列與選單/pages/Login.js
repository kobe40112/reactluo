import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { withRouter } from 'react-router-dom'

function Login(props) {
  // isAuth, loginMethod, logoutMethod
  console.log(props)
  return (
    <>
      <Banner pagename="會員登出入" />
      <Breadcrumb />
      <h1>目前會員狀態：{props.isAuth ? '登入中' : '未登入'}</h1>
      <button onClick={props.loginMethod}>登入</button>
      <button onClick={props.logoutMethod}>登出mmm</button>
    </>
  )
}

export default withRouter(Login)
