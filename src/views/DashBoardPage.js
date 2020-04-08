import React from 'react'
import { connect } from 'react-redux'

const DashBoardPage = (state) => {
  console.log(state)
  return (
    <div>DashBoardPage</div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  state: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardPage)
