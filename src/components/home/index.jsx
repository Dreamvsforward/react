import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
class My extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>这是首面</h1>
                <hr/>
                <Link to="/My">去到我的页面</Link>
            </div>
        )
    }
}

export default My
