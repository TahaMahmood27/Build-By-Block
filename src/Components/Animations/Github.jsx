import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/github.json";
class Github extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div className="mr-10">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
export default Github;
