import React from 'react'
import { Link } from 'react-router-dom'
class My extends React.Component {
    render() {
        return (
            <div>
                <h1>这是购物页</h1>
                <hr/>
                <Link to="/">去首页</Link>
            </div>
        )
    }
}

export default My