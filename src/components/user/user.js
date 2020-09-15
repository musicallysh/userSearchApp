import React from 'react';

const User = (props) => {
  const { user } = props;
  return (
    <div className='container' key={user.id}>
      <div className='usercard'>
        <h2>Personal Details</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>User Name:</b> {user.username}</p>
        <p><b>Website: </b>{user.website}</p>
        <p><b>Address: </b> {user.address.suite} {user.address.city} {user.address.street}</p>
        <h2>Company Details</h2>
        <p><b>Company Name: </b>{user.company.name}</p>
        <p><b>Company Business: </b>{user.company.bs}</p>
        <p><b>Company catchphrase: </b>{user.company.catchPhrase}</p>

        {props.children}
      </div>
    </div>

  )
};

export default User
