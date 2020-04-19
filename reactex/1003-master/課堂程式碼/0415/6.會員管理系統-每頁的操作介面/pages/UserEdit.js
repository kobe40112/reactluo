import React, { useState, useEffect } from 'react'

function UserEdit(props) {
  return (
    <>
      <h1>會員編輯</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">姓名</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">帳號</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        儲存
      </button>
    </>
  )
}

export default UserEdit
