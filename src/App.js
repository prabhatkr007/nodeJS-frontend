import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState('-> Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.');
  const [selectedEndpoint, setSelectedEndpoint] = useState('API-1');
  const [topCities, setTopCities] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-backend-1lw9.onrender.com/users/${selectedEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        if (selectedEndpoint === 'API-5') {
          setTopCities(data);
        } else {
          setUsers(data);
        }
      });
  }, [selectedEndpoint]);

  const handleEndpointChange = (endpoint,info) => {
    setSelectedEndpoint(endpoint);
    setInfo(info);
  };

  return (
    <>
      <div className="body">
        <nav className="navbar">
          <ul>
            <li>
              <button onClick={() => handleEndpointChange('API-1','-> Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.')}>API 1</button>
            </li>
            <li>
              <button onClick={() => handleEndpointChange('API-2','-> Male Users which have phone price greater than 10,000.')}>API 2</button>
            </li>
            <li>
              <button onClick={() => handleEndpointChange('API-3','-> Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.')}>API 3</button>
            </li>
            <li>
              <button onClick={() => handleEndpointChange('API-4','-> Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.')}>API 4</button>
            </li>
            <li>
              <button onClick={() => handleEndpointChange('API-5','-> Show the data of top 10 cities which have the highest number of users and their average income.')}>API 5</button>
            </li>
          </ul>
        </nav>
        <div className='apiName'>
          <h2>{selectedEndpoint}</h2>
          <h3>{info}</h3>
        </div>
        {selectedEndpoint === 'API-5' ? (
          <table className="styled-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Count</th>
                <th>Average Income</th>
              </tr>
            </thead>
            <tbody>
              {topCities.map((city) => (
                <tr key={city.city}>
                  <td>{city.city}</td>
                  <td>{city.count}</td>
                  <td>{city.avgIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="styled-table">
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
                  <td>{user.car}</td>
                  <td>{user.quote}</td>
                  <td>{user.phone_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
