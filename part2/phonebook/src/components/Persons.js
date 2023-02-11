const Persons = ({ filter, persons, handleDelete }) => {
  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter((person) => {
          return person.name.toLowerCase().includes(filter.toLowerCase());
        });

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} - {person.number}{' '}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
