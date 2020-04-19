import React from 'react'
import { useParams } from 'react-router-dom'

function Product(props) {
  let { id } = useParams()

  const findProduct = <h2>目前的產品編號是(從網址得上得到)：{id}</h2>
  const noProduct = <h2>找不到商品</h2>

  return (
    <>
      <h1>產品頁面</h1>
      {id ? findProduct : noProduct}
    </>
  )
}

export default Product
