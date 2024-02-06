import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JSONTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    Axios.get(apiUrl).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">JSON Data</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/home">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default JSONTable;
