import React, { useState } from 'react'
import Modal from 'react-modal';
import './Login.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userLogin } from '../../actions'

function Login() {
  const dispatch = useDispatch();
  const userLoginSelector = useSelector(state => state.userLogin);
  const [username, setUsername] = useState("");
  const [warning, setWaring] = useState("");

return (
    <Modal 
      isOpen={userLoginSelector.loginModal}
      className="loginform"
      overlayClassName="backdrop"
    >   
        <div>
            <div className="circle">?</div>
            <span className="warning">{warning}</span>
            <form onSubmit={(e)=>{
              e.preventDefault()
              if(username === ""){
                setWaring("暱稱無法為空白")
              }
                dispatch(userLogin(username))
              }}>
                <input className="name-input" 
                        type="text" 
                        name="username"
                        placeholder="請輸入暱稱"
                        onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input className="name-btn" type="submit" />
            </form>
        </div>
    </Modal>
  )
}

export default Login

