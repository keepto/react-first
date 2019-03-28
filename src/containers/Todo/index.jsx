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
                <Input />
                <List>
                    <h2>React.js 小书</h2>
                    <div>开源、免费、专业、简单</div>
                    订阅：<input />
                </List>
            </div>
        )
    }
}
export default Todo