import { ADD_VALUE, MINUS_VALUE } from './actionTypes'

// action creator動作建立器
// 命名一般同action type，改為小駝峰寫法
// 一般也是一個action type寫一個
// 直接導出即可
export const addValue = (payload) => {
  console.log('原本 - addValue')
  return { type: ADD_VALUE, payload }
}

export const addValueAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('延後 - addValueAsync')
      dispatch(addValue(payload))
    }, 3000)
  }
}

export const minusValue = (payload) => {
  return { type: MINUS_VALUE, payload }
}
