import React from 'react'

class List extends React.Component {
    render () {
        let list = this.props.list
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
            </ul>
        )
    }
    delAction (id) {
        this.props.delAction(id)
    }
    componentDidMount () {
        console.log(this.props.children)
    }
    componentDidUpdate () {
        // 组件更新了之后触发的事件，一般用于清空并更新数据
        console.log('==================componentDidUpdate')
    }
}

export default List