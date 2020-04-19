import React from 'react'
import { useParams } from 'react-router-dom'

function Product(props) {
  // 物件值 - 解構賦值
  // 得到的參數一定字串類型
  let { id, type } = useParams()

  const findProduct = <h2>目前的產品編號是：{id}</h2>
  const noProduct = <h2>找不到商品</h2>
  const findProductCat = <h2>目前的產品分類是：{type}</h2>
  const noProductCat = <h2>商品分類不存在</h2>

  return (
    <>
      <h1>產品頁面</h1>
      {id ? findProduct : noProduct}
      {type ? findProductCat : noProductCat}
    </>
  )
}

export default Product
