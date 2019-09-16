import React from 'react'
import Modal from 'react-modal';
import './Login.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function Login() {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  console.log(userLogin.loginModal)
  const closeModal=() => {
    this.setState({modalIsOpen: false})
  }
  const openModal=() => {
    this.setState({modalIsOpen: true})
  }

return (
    <Modal 
      isOpen={userLogin.loginModal}
      className="loginform"
      overlayClassName="backdrop"
    >   
        <div>
            <div className="circle">?</div>
            {/* <span className="warning">{this.state.warning}</span> */}
            <form>
                <input className="name-input" 
                        type="text" 
                        name="username"
                        placeholder="請輸入暱稱"
                />
                <br />
                <input className="name-btn" type="submit" />
            </form>
        </div>
    </Modal>
  )
}

export default Login

