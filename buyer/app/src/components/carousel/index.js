import React from "react";
import "./style";
// import Transition from 'react-transition-group/Transition';
import Slide from "./slide";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      slideWidth: 0,
      slideHeight: 0,
      listWidth: 0,
      left: 0,
      duration: 500,
      jumpFromIndex: 0,
      jumpToIndex: 0,
      slideCount: 0

    }
    this.container = React.createRef();
    this.getTouchEvents = this.getTouchEvents.bind(this);
  }

  getTouchEvents() {
    return {
      onTouchStart: e => {
        //stop auto play
        this.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        }
      },
      onTouchMove: e => {
        const direction = this.getDirection(
          this.touchObject.startX,
          e.touches[0].pageX,
          this.touchObject.startY,
          e.touches[0].pageY
        )

        if (direction !== 0) {
          e.preventDefault();
        }

        const length = Math.abs(e.touches[0].pageX - this.touchObject.startX);
        this.touchObject = {
          ...this.touchObject,
          endX: e.touches[0].pageX,
          endY: e.touches[0].pageY,
          length,
          direction
        }

        // console.log(this.getLeft(this.touchObject.length * this.touchObject.direction));
        this.beforeSlide();
        this.setState({
          left: this.getLeft(this.touchObject.length * this.touchObject.direction),
          duration: 0
        })
      },
      onTouchEnd: e => {
        this.handleSwipe();
      },
      onTouchCancel: e => {
        this.touchObject = {}
      }
    }
  }

  handleSwipe() {
    if (this.touchObject.length > this.state.slideWidth / 3) {
      if (this.touchObject.direction === 1) {
        this.slideNext();
      } else if (this.touchObject.direction === -1) {
        this.slidePrev();
      }
    } else {
      //拖拽距离不够，回到原位置
      this.setState((prevState) => (
        {
          left: this.getLeft(0, prevState.currentIndex),
          duration: 500
        }
      ),
        () =>
          setTimeout(() => {
            // this.afterSlide();
          }, 500)
      )
    }
  }

  slideNext() {
    this.slideTo(this.state.currentIndex + 1);
  }

  slidePrev() {
    this.slideTo(this.state.currentIndex - 1);
  }

  beforeSlide() {
    if (this.state.currentIndex === 0 && this.touchObject.direction === -1) {
      //在第一张图片向前轮播
      this.setState({
        jumpFromIndex: this.state.slideCount - 1,
        jumpToIndex: -1
      })
      return;
    }

    if (this.state.currentIndex === this.state.slideCount - 1 && this.touchObject.direction === 1) {
      //在最后一张图片向后轮播
      this.setState({
        jumpFromIndex: 0,
        jumpToIndex: this.state.slideCount
      })
      return;
    }
  }

  afterSlide(index) {
    let currentIndex;
    if (index === -1) {
      currentIndex = this.state.slideCount - 1;
    } else if (index === this.state.slideCount) {
      currentIndex = 0;
    } else {
      currentIndex = this.state.currentIndex;
    }

    this.setState({
      jumpFromIndex: null,
      jumpToIndex: null,
      duration: 0,
      currentIndex: currentIndex,
      left: this.getLeft(0, currentIndex)
    })
  }

  slideTo(index) {
    this.setState((prevState) => (
      {
        left: this.getLeft(this.touchObject.direction * prevState.slideWidth, prevState.currentIndex),
        duration: 500,
        currentIndex: index
      }
    ),
      () =>
        setTimeout(() => {
          this.afterSlide(index);
        }, 500)
    )
  }

  getDirection(x1, x2, y1, y2) {
    const distX = x1 - x2;
    const distY = y1 - y2;
    const r = Math.atan2(distY, distX);
    let angle = Math.round(r * 180 / Math.PI);

    if (angle < 0) {
      angle = 360 - Math.abs(angle);
    }

    if (angle >= 0 && angle <= 45) {
      return 1;
    }

    if (angle >= 315 && angle <= 360) {
      return 1;
    }

    if (angle >= 135 && angle <= 225) {
      return -1;
    }

    return 0;
  }

  getLeft(offset, slideIndex) {
    let index = slideIndex !== undefined ? slideIndex : this.state.currentIndex;
    let left = index * this.state.slideWidth;
    return (left + offset) * -1;
  }

  componentDidMount() {
    console.log('[Carousel::componentDidMount]轮播组件挂载完成');
    console.log('组件宽度：', this.container.current.offsetWidth);
    this.setWidthAndHeight();
  }

  static getDerivedStateFromProps(props, state) {
    return Object.assign({}, state, {
      listWidth: state.slideWidth * props.children.length,
      slideCount: props.children.length
    })
  }

  setWidthAndHeight() {
    this.setState({
      slideWidth: this.container.current.offsetWidth,
      slideHeight: this.container.current.offsetHeight
    })
  }

  render() {
    let slideStyle = {
      width: this.state.slideWidth,
      height: this.state.slideHeight,
      lineHeight: this.state.slideHeight + 'px'
    }

    let listStyle = {
      width: this.state.listWidth,
      height: this.state.slideHeight
    }

    let touchEvents = this.getTouchEvents();

    let calcLeft = (index) => {
      return {
        left: this.state.jumpFromIndex !== null && this.state.jumpFromIndex === index ? this.state.jumpToIndex * this.state.slideWidth : this.state.slideWidth * index
      }
    }

    return (
      <div className="carousel"
        style={{
          ...this.props.style,
          width: this.state.slideWidth || ''
        }}
        ref={this.container}
      >
        <div className="slider-list" style={{
          ...listStyle,
          left: this.state.left,
          transitionDuration: this.state.duration + 'ms'
        }}
          {...touchEvents}
        >
          {
            this.props.children.map((child, i) => {
              return (
                <Slide key={i} style={{
                  ...slideStyle,
                  ...calcLeft(i)
                }}>
                  {child}
                </Slide>
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default Carousel;