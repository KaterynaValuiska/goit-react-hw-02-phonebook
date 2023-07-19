export function Contacts({ contacts, onDeleteContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            {'  '}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => onDeleteContact(id)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
