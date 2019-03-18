import { Link, Route, useMatch } from '../src';
import React from 'react';

const users = [
  {
    id: '1',
    name: 'Foo',
  },
  {
    id: '2',
    name: 'Bar',
  },
  {
    id: '3',
    name: 'Baz',
  },
];

const User = () => {
  const match = useMatch();
  const user = users.find(({ id }) => id === match.params.id);

  return <div>User name: {user.name}</div>;
};

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={'/users/:id'}>
        <User />
      </Route>
    </div>
  );
};

export default Users;
