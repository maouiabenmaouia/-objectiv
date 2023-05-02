import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Liste = ({user}) => {
  // const [listOfUsers, setListOfUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => setListOfUsers(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.address.city}</h3>
      <hr/>
    </div>
  );
};

export default Liste;
