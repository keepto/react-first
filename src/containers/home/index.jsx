import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 123
        }
    }
    render () {
        return (
            <div>
                <h3>home page</h3>
                <Link to={`/todo?id=${this.state.id}`}>todoList page</Link> <br />
                <Link to={{
                    pathname: 'forLoop',
                    params: {
                        name: 'aaa'
                    },
                    state: {
                        state1: 111
                    }
                }}>forLoop page</Link><br />
                <Link to='/list'>list page</Link> <br />
                <Link to='/lifecycle'>lifecycle page</Link> <br />
            </div>
        )
    }
}

export default Home