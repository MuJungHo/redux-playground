import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../actions'

const LoginPage = ({ state, onClick }) => {
  console.log(state)
  const handleClick = (e) => {
    e.preventDefault()
    onClick()
    console.log(state)
  }
  return (
    <form>
      <input type="text"/>
      <input type="text"/>
      <button onClick={handleClick}>123</button>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(doLogin({email: '123', passWord: '123'}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
