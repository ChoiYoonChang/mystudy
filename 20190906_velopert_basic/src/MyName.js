//import React, { Component } from 'react';
import React from 'react';

// class MyName extends Component {
//     // static defaultProps = {
//     //     name: '기본이름'
//     // }

//     render() {
//         return (
//             <div>
//                 Name is <b>{this.props.name}</b>
//             </div>
//         );
//     }
// }

const MyName = ({name})=>{
    return(
        <div>
        Myname is {name}
        </div>
    );
}

export default MyName;