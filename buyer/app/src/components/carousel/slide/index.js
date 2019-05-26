import React from "react";
// import "./style/index.scss";
// import Transition from 'react-transition-group/Transition';



class Slide extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="slide" style={{...this.props.style}}>
      {
        // console.log(this.props.children)
        this.props.children
      }
      </div>
    )
  }
}

export default Slide;