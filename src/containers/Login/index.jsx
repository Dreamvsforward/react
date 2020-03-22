import React from 'react'
import {Link} from 'react-router-dom'
class Login extends React.Component{
    render() {
        return (
            <div>
                <Link to="Home">登录</Link>
            </div>
        )
    }
}
export default Login