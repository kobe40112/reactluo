import React from 'react'
import { withRouter } from 'react-router-dom'

function Product(props) {
  console.log(props)

  return (
    <>
      <h1>產品頁面</h1>
      <h2>目前的產品編號是(從網址上得到)：{props.match.params.id}</h2>
    </>
  )
}

export default withRouter(Product)
