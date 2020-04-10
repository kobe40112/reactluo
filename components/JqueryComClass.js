import React from 'react'
import $ from 'jquery'

class JqueryComClass extends React.Component {
  constructor() {
    super()
    this.state = {
        messageHide: '動畫結束，隱藏',
        messageShow: '動畫結束，呈現',
    }
  }

  componentDidMount() {
      //間接得到一個值
      const messageHide = this.state.messageHide
      const messageShow = this.state.messageShow

      //作一個內部函式
      const changeState = (value) => {
          this.setState({ total: value })
      }
    //jquery得程式碼需要寫在這裡，確保DOM元素已經出現在網頁上
    $('#clickme').click(function () {
      $('#book').hide('slow', function () {
        alert(messageHide)
      })
    })

    $('#clickme2').click(function () {
      $('#book').show('slow', function () {
        alert(messageShow)
        //設定state值
        changeState(999)
      })
    })
  }

  render() {
    return (
      <>
      <h1>Total: {this.state.total}</h1>
        <button id="clickme">點我隱藏</button>
        <button id="clickme2">點我顯示</button>
        <img
          id="book"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Jessica_on_the_CLEO_Thailand_magazine_%28cropped%29.png"
          alt=""
          width="500"
          height="700"
        ></img>
      </>
    )
  }
}

export default JqueryComClass