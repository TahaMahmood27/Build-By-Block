import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/email.json";
class Email extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
export default Email;
