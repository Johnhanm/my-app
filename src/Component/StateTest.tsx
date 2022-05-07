// 测试类组件下的setState

import { Component, ReactNode } from "react";


export class StateTest extends Component {
  state = {
    name:"Tom",
    age:18,
  }

  render(): ReactNode {
      return(
        <>
          my name is {this.state.name}, {this.state.age} years old;
        </>
      )
  }
}