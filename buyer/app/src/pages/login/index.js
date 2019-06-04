import React, { Component } from 'react';
import {
    login, setTabBarVisibility
} from "../../redux/_actions"
import { connect } from "react-redux"
import "./index.scss"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    componentDidMount() {
        let { dispatch } = this.props
        dispatch(setTabBarVisibility(false))

    }
    handleUserChange(evt) {
        this.setState({ username: evt.target.value })
    }

    handlePasswordChange(evt) {
        this.setState({ password: evt.target.value })
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { history, dispatch } = this.props

        return (
            <div className="login">
                <div className="hat"></div>
                <div className="form">
                    <div className="username">
                        <span>用户名</span><input value={this.state.username} onChange={this.handleUserChange} />
                    </div>
                    <div className="password">
                        <span>密码</span><input value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="submit" onClick={() => dispatch(login(this.state.username, this.state.password, history, from))} > 登录</div>
                    <div className="other">
                        <a href="#" className="forget">忘记密码</a>
                        <a href="#" className="register">注册</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Login)