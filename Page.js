import React from "react";
function Page({ user }) {
  return <UserInforWithTitle user={user} />;
}

function UserInforWithTitle({ user }) {
  return (
    <div>
      <h1>User Info</h1>
      <UserInfo user={user} />
    </div>
  );
}

function UserInfo({ user }) {
  return <div data-testid="userinfo">{user.firstName}{user.lastName}</div>;
}

export default Page; 