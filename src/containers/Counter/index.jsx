import React from 'react'

class Counter extends React.Component {
  render () {
    return (
      <div>
          <p>{this.props.count}</p>
          <button onClick={this.props.onAdd}>Add</button>
        </div>
    )
  }
}

export default Counter