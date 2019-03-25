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
                    }
                }}>forLoop page</Link>
            </div>
        )
    }
}

export default Home