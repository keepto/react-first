import React from 'react'

class Input extends React.Component {
    constructor (props, context) {
        super (props, context)
        this.state = {
            value: ''
        }
    }
    componentDidMount () {
        this.input.focus()
    }
    render () {
        return (
            <div>
                <input type="text" 
                    style={{width: '300px', height: '40px', fontSize: '35px'}}
                    value={this.state.value}
                    // 可以用bind方法绑定this值，也可以用箭头函数
                    onChange={(e) => this.handleChange(e)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    // ref属性值是一个函数 （能不用 ref 就不用）
                    ref={(input) => this.input = input}
                />
            </div>
        )
    }
    handleChange (e) {
        // 实时更新value显示值
        this.setState({
            value: e.target.value
        })
    }
    handleKeyUp (e) {
        const value = this.state.value
        if (e.keyCode === 13 && value.trim()) {
            this.props.submitFn(value)
            this.setState({
                value: ''
            })
        }
    }
}

export default Input