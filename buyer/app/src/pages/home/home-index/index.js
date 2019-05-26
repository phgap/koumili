import React from 'react'
import "./index.scss"
import Good from "../../../components/good";
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import {
    fetchGoods,
    setTabBarVisibility,
    fetchSlides
} from '../../../redux/_actions'
import Carousel from "../../../components/carousel"

class HomeIndex extends React.Component {
    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(fetchGoods('home/index'))
        dispatch(fetchSlides())
    }
    render() {
        let { dispatch } = this.props;
        dispatch(setTabBarVisibility(true))
        return (
            <div className="home-index">
                <div className="slider">
                    <Carousel style={{
                        width: '100%',
                        height: '100%'
                    }}>
                        {
                            this.props.slides.map((slide, i) => (
                                <div key={i}>
                                    <img src={slide.src} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className="go-to">
                    <span>
                        <span className="icon">></span>
                        <a href="#1">累积评价</a>
                    </span>
                    <span>
                        <span className="icon">></span>
                        <a href="#2">满￥99顺丰包邮</a>
                    </span>
                    <span>
                        <span className="icon">&gt;</span>
                        <a href="#3">退货补贴</a>
                    </span>
                </div>
                <div className="good-list">
                    {
                        this.props.goods.map(good => (
                            <Good key={good.id} {...good}></Good>
                        ))
                    }
                </div>
            </div>
        )
    }
}


HomeIndex.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string,
        price: PropTypes.string
    }))
}
function mapStateToProps(state) {
    const { goods, slides } = state
    const goodsItems = goods['home/index'] || []
    const { slides: slideItems } = slides || { slides: [] }
    return { goods: goodsItems, slides: slideItems };
}

export default connect(mapStateToProps)(HomeIndex)