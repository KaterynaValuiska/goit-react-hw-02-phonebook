import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormRegistation } from './FormRegistation/FormRegistation';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Contacts/Filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createUser = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const newUser = { ...data, id: nanoid(10) };

    this.setState(prevState => {
      return { contacts: [newUser, ...prevState.contacts] };
    });
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilterContact = () => {
    const normalized = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        <h1>Phonebook</h1>
        <FormRegistation createUser={this.createUser} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts
          contacts={this.getFilterContact()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
