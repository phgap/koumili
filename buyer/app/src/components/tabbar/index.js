import React, { Component } from 'react'
import './index.scss'
import Item from './item'
import PropTypes from 'prop-types';
import { connect } from "react-redux"
class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    render() {
        let { visiable } = this.props
        return (
            <div className={`tab-bar ${visiable ? "" : "hidden"}`}>
                {
                    this.props.items.map((item, i) => (
                        <Item
                            key={i}
                            to={item.to}
                            icon={`icon-${item.icon}`}
                            text={item.text}
                        />
                    ))
                }
            </div>
        )
    }
}

TabBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string
    })).isRequired
}

function mapStateToProps(state) {
    let { ui } = state
    let visiable = ui.tabBarVisibility

    return { visiable }
}
TabBar = connect(mapStateToProps)(TabBar)
export default TabBar;