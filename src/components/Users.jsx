import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/users/income-lower-than-5-with-bmw-mercedes').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car Model</th>
          <th>Quote</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
            <td>{user.car_model}</td>
            <td>{user.quote}</td>
            <td>{user.phone_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
