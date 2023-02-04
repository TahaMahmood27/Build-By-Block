import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/clickhere.json";
class ClickHere extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div className="ml-4">
        <Lottie options={defaultOptions} height={200} />
      </div>
    );
  }
}
export default ClickHere;
