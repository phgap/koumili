import React, { Component } from 'react'
import './index.scss'

class Good extends Component {
    render() {
        return (
            <div className="good" style={{ backgroundImage: `url("${this.props.img}")` }}>
                <div className="info">
                    <span className="name">{this.props.name}</span>
                    <span className="price"><span>￥</span>{this.props.price}</span>
                </div>
            </div>
        )
    }
}

export default Good;