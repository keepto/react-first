import React from 'react'
import {NavLink} from 'react-router-dom'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id:123
    }
  }
  render () {
    return (
      <div>
        <NavLink to={`/list/${this.state.id}`}>detail page</NavLink> <br />
      </div>
    )
  }
}

export default List