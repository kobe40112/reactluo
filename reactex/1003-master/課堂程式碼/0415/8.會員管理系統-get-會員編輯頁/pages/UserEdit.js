import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function UserEdit(props) {
  const userid = props.match.params.userid
  // console.log(userid)

  //const [user, setUser] = useState({})
  const [dataLoading, setDataLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function getUserFromServer(userid) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:5555/users/' + userid

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    //setUser(data)

    setName(data.name)
    setEmail(data.email)
    setUsername(data.username)
    setPassword(data.password)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(userid)
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [userid])

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
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">姓名</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">帳號</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        儲存
      </button>
    </>
  )

  return (
    <>
      <h1>會員編輯</h1>
      <hr />
      {dataLoading ? loading : display}
    </>
  )
}

export default withRouter(UserEdit)
