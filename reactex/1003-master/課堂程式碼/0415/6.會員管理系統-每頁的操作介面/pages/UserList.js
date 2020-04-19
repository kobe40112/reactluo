import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
// MdAddCircle MdModeEdit MdDelete
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'

function UserList(props) {
  return (
    <>
      <h1>會員列表</h1>
      <Button variant="info">
        <MdAddCircle /> 新增會員
      </Button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">姓名</th>
            <th scope="col">帳號</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button variant="success">
                <MdModeEdit /> 編輯
              </Button>
              {'  '}
              <Button variant="danger">
                <MdDelete /> 刪除
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Button variant="success">
                <MdModeEdit /> 編輯
              </Button>
              {'  '}
              <Button variant="danger">
                <MdDelete /> 刪除
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default UserList
