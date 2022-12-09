import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../github.json";
class Github extends Component {
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
export default Github;
