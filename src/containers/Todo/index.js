import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            todoList: []
        }
    }
    render () {
        return (
            <div className="todo">
                <Input submitFn={this.submitFn.bind(this)} />
                <List list={this.state.todoList} delAction={this.delAction.bind(this)} />
            </div>
        )
    }

    submitFn (item) {
        let len = this.state.todoList.length
        this.setState({
            todoList: this.state.todoList.concat({
                id: len,
                text: item
            })
        })
    }

    delAction (id) {
        this.setState({
            todoList: this.state.todoList.filter(i => {
                return i.id !== id
            })
        })
    }
}

export default Todo