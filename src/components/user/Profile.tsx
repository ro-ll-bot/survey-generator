import React from 'react';

interface User {
  id: number,
  username: string
  image?: string
}

function Profile(user: User) {
  return (
    <div className="profile">
      <img src={user.image} alt="profile-picture" />
      <div className="profile-content">
        {user.username}
      </div>
    </div>
  )
}

export default Profile;