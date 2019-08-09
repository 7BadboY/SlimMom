// import React, { Component } from 'react';
// import { DropdownMenu } from '';

// export default class DropdownMenu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menuOpen: false,
//       highlight: false,
//       count: this.props.count | 0
//     };
//     this.showDropdown = this.showDropdown.bind(this);
//   }

//   componentDidMount() {}

//   showDropdown() {
//     this.setState({
//       menuOpen: !this.state.menuOpen
//     });
//   }

//   render() {
//     return (
//       <div className="filter_container">
//         <DropdownMenu text="New" count={127} disabled />
//         <DropdownMenu text="Only show">
//           <li>New</li>
//           <li>Old</li>
//         </DropdownMenu>
//         <DropdownMenu text="Other">
//           <li>one</li>
//           <li>two</li>
//         </DropdownMenu>
//         <DropdownMenu text="Sort by">
//           <li>Name</li>
//           <li>Age</li>
//           <li>Value</li>
//         </DropdownMenu>
//       </div>
//     );
//   }
// }
