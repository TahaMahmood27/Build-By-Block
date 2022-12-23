import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Animation_Json/blockchain.json";
class BlockChain extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={300} width={500} />
      </div>
    );
  }
}
export default BlockChain;
