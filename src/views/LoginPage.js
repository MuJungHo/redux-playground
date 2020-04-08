import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../actions'

const LoginPage = ({ state, dispatch }) => {
  return (
    <form>
      <button onClick={ e =>{
        e.preventDefault()
        dispatch(doLogin({email: 'root', passWord: '123456'}))
      }}>123</button>
    </form>
  )
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps
)(LoginPage)
