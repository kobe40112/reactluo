import React, { useState, useEffect } from 'react'

function LifeCycleFunc(props) {
  const [total, setTotal] = useState(0)

  // 元件已經呈現在網頁上才會執行這個生命周期方法
  useEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])

  // 元件已經更新在網頁上(re-render重新渲染)，才會執行這個生命周期方法
  useEffect(() => {
    console.log('componentDidUpdate')
  }, [total])

  return (
    <>
      <h1>LifeCycleFunc元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default LifeCycleFunc