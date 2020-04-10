import React, { useState, useEffect } from 'react'
import $ from 'jquery'

function JqueryComFunc(props) {
  const [messageHide, setMessageHide] = useState('動畫結束，隱藏')
  const [messageShow, setMessageShow] = useState('動畫結束，呈現')
  const [total, setTotal] = useState(0)

  // 元件已經呈現在網頁上才會執行這個生命周期方法
  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#clickme3').click(function () {
      $('#book2').hide('slow', function () {
        alert(messageHide)
        // 設定state值
        setTotal(1000)
      })
    })

    $('#clickme4').click(function () {
      $('#book2').show('slow', function () {
        alert(messageShow)
      })
    })
  }, [])

  return (
    <>
      <h1>Total: {total}</h1>
      <button id="clickme3">點我隱藏</button>
      <button id="clickme4">點我顯示</button>
      <img
        id="book2"
        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Jessica_on_the_CLEO_Thailand_magazine_%28cropped%29.png"
        alt=""
        width="220"
        height="300"
      ></img>
    </>
  )
}

export default JqueryComFunc