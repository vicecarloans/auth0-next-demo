import React from 'react';
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0";

const Profile = () => {
  const {user, error, isLoading} = useUser()
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
      <div>
        <img src={user.picture ?? ""} alt={user.name ?? ""} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
  ) : <div>No user</div>

};

export default withPageAuthRequired(Profile);
