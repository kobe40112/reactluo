import React, { useState, useEffect } from 'react'

function Counter(props) {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  // 一開始就會開始載入資料
  useEffect(() => {
    setDataLoading(true)
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [])

  // 每次total資料有變動就會0.5秒後關掉載入指示
  useEffect(() => {
    setDataLoading(true)

    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [total])

  const loading = (
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
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )

  // 初始化的第一次render的判斷
  //if (total === 0) return <></>

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default Counter
