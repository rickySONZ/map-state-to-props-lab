import React, { Component } from 'react';
import { connect } from 'react-redux'
export class Users extends Component {

  
  render() {

    const displayUsers = this.props.users.map((user, index) => {
      return <li key = {index}>{user.username}</li>
    })


    return (
      <div>
        <ul>
          Users!
          {displayUsers}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users,
  userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
