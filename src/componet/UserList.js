import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Liste from './Liste';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setListOfUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Checkpoint Objective</h1>
      <ul>
        {listOfUsers.map(user => (
          <Liste user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
