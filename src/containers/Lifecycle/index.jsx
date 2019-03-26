import React from 'react'

class LifeCycle extends React.Component {
  constructor () {
    super()
    console.group('==========constructor')
    this.state = {
      date: new Date()
    }
  }

  componentWillMount () {
    // 一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行
    console.group('==========componentWillMount')

    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 100000)
  }

  componentDidMount () {
    console.group('==========componentDidMount')
  }

  componentWillUnmount () {
    console.group('==========componentWillUnmount')
    clearInterval(this.state)
  }

  render () {
    console.group('==========render')
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default LifeCycle