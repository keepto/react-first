import React from 'react'

class Detail extends React.Component {
  componentWillMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>id: {this.props.match.params.id}</div>
    )
  }

}

export default Detail