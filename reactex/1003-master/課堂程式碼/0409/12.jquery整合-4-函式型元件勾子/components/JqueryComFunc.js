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
        setTotal(999)
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
      <div id="clickme3">點我隱藏</div>
      <div id="clickme4">點我顯示</div>
      <img
        id="book2"
        src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/168/81/F011688130.jpg&v=5dc27e63&w=250&h=250"
        alt=""
        width="100"
        height="123"
      ></img>
    </>
  )
}

export default JqueryComFunc
