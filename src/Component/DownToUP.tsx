import React, { Component, useState } from "react";

function DownToUp() {
  const [number, setNumber] = useState(0);

  return (
    <button
      onClick={(e) => {
        setNumber(number + 1);
      }}
    >
      {number%2 === 0 ? "true" : "false"}
    </button>
  );
}

// class DownToUp extends Component<any, any> {
//   constructor(props:any) {
//     super(props);
//     this.state = {
//       number:0,
//     }
//   }
//   render(): React.ReactNode {
//     const after = this.state.number + 1;
//       return(
//         <button onClick={(e)=>{
//           this.setState({number:after});
//         }}>{this.state.number}</button>
//       )
//   }
// }

export default DownToUp;