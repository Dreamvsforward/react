import React from 'react'
import { Link } from 'react-router-dom'
class My extends React.Component {
    render() {
        return (
            <div>
                <h1>这是我的页面</h1>
                <hr/>
                <Link to="/shopping">去到购物页</Link>
            </div>
        )
    }
}

export default My
