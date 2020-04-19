import React from 'react'
import $ from 'jquery'

class JqueryComClass extends React.Component {
  constructor() {
    super()
    this.state = {
      messageHide: '動畫結束，隱藏',
      messageShow: '動畫結束，呈現',
      total: 0,
    }
  }

  componentDidMount() {
    // 間接得到一個值
    const messageHide = this.state.messageHide
    const messageShow = this.state.messageShow

    // 作一個內部函式
    const changeState = (value) => {
      this.setState({ total: value })
    }

    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#clickme').click(function () {
      $('#book').hide('slow', function () {
        alert(messageHide)
        // 設定state值
        changeState(999)
      })
    })

    $('#clickme2').click(function () {
      $('#book').show('slow', function () {
        alert(messageShow)
      })
    })
  }

  render() {
    return (
      <>
        <h1>Total: {this.state.total}</h1>
        <div id="clickme">點我隱藏</div>
        <div id="clickme2">點我顯示</div>
        <img
          id="book"
          src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/168/81/F011688130.jpg&v=5dc27e63&w=250&h=250"
          alt=""
          width="100"
          height="123"
        ></img>
      </>
    )
  }
}

export default JqueryComClass
