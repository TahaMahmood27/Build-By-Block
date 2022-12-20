import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/twitter.json";
class Twitter extends Component {
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
export default Twitter;
