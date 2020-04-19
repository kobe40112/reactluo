import React, { useState, useEffect } from 'react'

function Cart() {
  const [mycart, setMycart] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 開啟載入指示
    setLoading(true)

    const newCart = localStorage.getItem('cart') || []
    //console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }, [])

  // 每次mycart資料有變動就會2秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <ul className="list-group">
        {/* <li className="list-group-item">ID/產品名/數量/單價</li> */}

        {mycart.map((value, index) => {
          return (
            <li key={index} className="list-group-item">
              ID: {value.id} /產品名: {value.name} /數量: {value.amount} /單價:
              {value.price}
            </li>
          )
        })}
      </ul>
      <h3>總價：</h3>
    </>
  )

  return (
    <>
      <div className="container">{loading ? spinner : display}</div>
    </>
  )
}

export default Cart
