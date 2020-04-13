import React, { useState } from 'react'

function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')

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
          className={emailMessage ? 'form-control is-invalid' : 'form-control'}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        {emailMessage ? <div class="invalid-feedback">{emailMessage}</div> : ''}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">密碼</label>
        <input
          type="password"
          className="form-control is-invalid"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>

      <button
        onClick={() => {
          let correct = true

          if (!email) {
            setEmailMessage('email沒填')
            correct = false
          }

          if (email && email !== 'dd@gmail.com') {
            setEmailMessage('沒有這個email存在')
            correct = false
          }

          if (correct) props.setIsAuth(true)
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