import React, { ReactElement } from "react";
import { IUser } from "../../typings/typings";

export default function UserProfile(user: IUser): ReactElement {
  return (
    <div className="profile-wrap" style={{fontSize: '9px'}}>
      <p>{user.firstName + " " + user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.title}</p>
      <img alt="avatar" src={user.picture} />
    </div>
  );
}
