import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
}

useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setListOfUsers(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
}, []);

return (
  <div>
    <h1>User List</h1>
    <ul>
      {listOfUser.map(user => (
        <li key={user.id}>
          <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);