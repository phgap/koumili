import React, { Component } from 'react';
import { connect } from "react-redux"
import { setTabBarVisibility } from '../../redux/_actions';
import "./index.scss"

class Detail extends Component {
    constructor(props) {
        super(props)
        let { dispatch } = props;
        dispatch(setTabBarVisibility(false))
    }
    render() {
        return (
            <div className="detail">
                <img src={this.props.src} />
            </div>
        )
    }
}

export default connect()(Detail)