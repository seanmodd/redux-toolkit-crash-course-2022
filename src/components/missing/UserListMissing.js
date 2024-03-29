import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: '',
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      const dataUrl = `https://jsonplaceholder.typicode.com/users`;
      const response = await axios.get(dataUrl);
      setState({
        ...state,
        users: response.data,
        loading: false,
      });
    } catch (error) {
      setState({
        ...state,
        errorMessage: error,
        loading: false,
      });
    }
  }, []);

  const { loading, errorMessage, users } = state;

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-primary">User List Missing Redux</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum
            minus recusandae voluptate. Animi assumenda consequatur deserunt
            dignissimos eaque expedita natus omnis quaerat? A culpa ea expedita
            illum possimus quo.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {loading && <h2 className="fw-bold">...Loading</h2>}
          {!loading && errorMessage.length > 0 && (
            <h3 className="text-danger">{errorMessage}</h3>
          )}
          {!loading && users.length > 0 && (
            <table className="table text-center table-hover table-sthiped">
              <thead className="text-white bg-primary">
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                    <td>{user.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserList;
