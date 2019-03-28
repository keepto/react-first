import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delTodo } from '../../action'

import Forloop from '../for-loop'

class List extends Component {
    render () {
        let list = this.props.todos
        return (
            <ul>
                {
                    list.map((i) => {
                        return <li key={i.id} onClick={() => this.delAction(i.id)}>{ i.text }</li>
                    })
                }
                {
                    this.props.children
                }
                <Forloop />
            </ul>
        )
    }
    delAction (id) {
        console.log(this)
        this.props.delHandler(id)
        // this.props.dispatch(delTodo(id))
        // this.props.delAction(id)
    }
    componentDidMount () {
        console.log(this.props.children)
    }
    componentDidUpdate () {
        // 组件更新了之后触发的事件，一般用于清空并更新数据
        console.log('==================componentDidUpdate')
    }
}

const mapStateToProps =  (state) => {
    console.log(state)
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delHandler: (id) => {
            dispatch(delTodo(id))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)