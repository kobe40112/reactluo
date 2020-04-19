import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// 只匯入部份的action creator
import { addValue, minusValue } from '../actions'

function Counter(props) {
  //const [total, setTotal] = useState(0)

  //觀察props裡的得到的store對應和方法
  //console.log('actionCreators', actionCreators)
  console.log('props', props)

  // 解構賦值的寫法
  const { total, addValue, minusValue } = props

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          addValue({ value: 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          minusValue({ value: 1 })
        }}
      >
        -1
      </button>
    </>
  )
}

// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total
const mapStateToProps = (store) => {
  return { total: store.counter }
}



// 高階元件的樣式，必要的
// 組成部份的action creator的物件當第二傳入參數傳入，代表部份綁定
export default connect(mapStateToProps, { addValue, minusValue })(Counter)
