import PropTypes from 'prop-types';
const { Component } = require('react');

export class FormRegistation extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.createUser({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              aria-describedby="emailHelp"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number{' '}
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              aria-describedby="emailHelp"
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

FormRegistation.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.shape({
      state: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
      handleInputChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
    }).isRequired
  ),
  createUser: PropTypes.func.isRequired,
};
