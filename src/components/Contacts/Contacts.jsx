// import { Children } from 'react';
import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          <li>{this.props.createUser}</li>
          {/* {this.props.Children} */}
        </ul>
      </div>
    );
  }
}
