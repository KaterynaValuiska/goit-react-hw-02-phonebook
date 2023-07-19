import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormRegistation } from './FormRegistation/FormRegistation';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  createUser = data => {
    const newUser = { ...data, id: nanoid(10) };
    console.log(newUser);
    return newUser;
  };
  render() {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        <h1>Phonebook</h1>
        <FormRegistation createUser={this.createUser} />
        <Contacts createUser={this.createUser} />
      </div>
    );
  }
}
