import React from 'react'
import { connect } from 'react-redux'
import { doLogOut } from '../actions/auth.js'

const Header = ({ state, dispatch }) => {
    return (
        <div>
            Header
            <button onClick={ e =>{
                e.preventDefault()
                dispatch(doLogOut())
            }}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state
  })

export default connect(mapStateToProps)(Header)