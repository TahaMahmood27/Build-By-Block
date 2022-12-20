import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/React.json";
class React_logo extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    );
  }
}
export default React_logo;
