// import { Children } from 'react';
// import { Component } from 'react';

export function Contacts({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export class Contacts extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Contacts</h2>
//         <ul>
//           {this.props.contacts.map(contact => {
//             <li>{contact}</li>;
//           })}
//           {/* {this.props.Children} */}
//         </ul>
//       </div>
//     );
//   }
// }
