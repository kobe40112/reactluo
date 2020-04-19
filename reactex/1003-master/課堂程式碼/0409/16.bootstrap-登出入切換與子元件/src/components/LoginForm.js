import React from 'react'

function LoginForm(props) {
  if (props.isAuth)
    return (
      <button
        onClick={() => {
          props.setIsAuth(false)
        }}
        type="button"
        className="btn btn-success"
      >
        登出
      </button>
    )

  return (
    <>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control is-valid"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input
          type="password"
          className="form-control is-invalid"
          id="exampleInputPassword1"
        />
      </div>

      <button
        onClick={() => {
          props.setIsAuth(true)
        }}
        type="button"
        className="btn btn-primary"
      >
        登入
      </button>
    </>
  )
}

export default LoginForm
