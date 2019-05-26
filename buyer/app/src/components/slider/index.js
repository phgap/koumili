import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types';

class Slider extends Component {
    render() {
        return (
            <div className="tab-bar">
                {
                    this.props.items.map((item, i) => (
                        <Item key={i} icon={item.icon} text={item.text}></Item>
                    ))
                }
            </div>
        )
    }
}

// TabBar.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         icon: PropTypes.string,
//         text: PropTypes.string
//     })).isRequired
// }

export default Slider;