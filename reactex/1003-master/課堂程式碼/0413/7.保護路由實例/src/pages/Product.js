import React from 'react'
import Banner from '../components/Banner'
import { withRouter, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function Product(props) {
  //利用props中的location search得到搜尋字串
  console.log(props)

  //用document.location.search得到搜尋字串
  console.log(document.location.search)

  // 產生一個新的URLSearchParams實例
  const searchParams = new URLSearchParams(props.location.search)

  // 未登入的狀態，就導向註冊or登入頁面
  //if (props.isAuth === false) return <Redirect to="/register" />

  return (
    <>
      <Banner pagename="產品" />
      <Breadcrumb />
      <h1>目前會員狀態：{props.isAuth ? '登入中' : '未登入'}</h1>

      {/* 用get來得到每個搜尋字屬的參數 */}
      <h2>id: {searchParams.get('id')}</h2>
      <h2>type: {searchParams.get('type')}</h2>
    </>
  )
}

export default withRouter(Product)
