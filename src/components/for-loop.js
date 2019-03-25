import React from 'react';

class ForLoop extends React.Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            title: '嘻嘻哈哈',
            list: [111, 222, 333]
        }
    }
    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{ item }</li>
                        })
                    }
                </ul>
                <div style={{color: 'red', fontSize: '18px'}}>
                    {
                        true ? <div>true</div> : <div>false</div>
                    }
                </div>
                <h3>{ this.state.title }</h3>
                <div onClick={this.handleClick.bind(this, 'aaaa')}>点击事件 点击</div>
            </div>
            
        )
    }
    handleClick (params, e) {
        console.log(params, e) // aaaa
        console.log(this)
        this.changeTitle()
    }
    changeTitle () {
        this.setState({
            'title': this.state.title === '嘻嘻哈哈' ? '稀罕你' : '嘻嘻哈哈'
        })
    }
    componentDidMount () {
        // 组件第一次加载时渲染完成的事件，一般在此获取网络数据
        console.log('==================componentDidMount')
    }
    shouldComponentUpdate () {
        // 用于性能优化
        console.log()
    }
    componentDidUpdate () {
        // 组件更新了之后触发的事件，一般用于清空并更新数据
        console.log('==================componentDidUpdate')
    }
    componentWillUnmount () {
        // 组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等。
        console.log('==================componentWillUnmount')
    }
}

export default ForLoop