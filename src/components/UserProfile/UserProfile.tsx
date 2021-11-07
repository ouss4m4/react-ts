import React, { ReactElement } from "react";
import { IUser } from "../../typings/typings";

export default function UserProfile(user: IUser): ReactElement {
  return (
    <div className="profile-wrap">
      <div>
        <p>{user.firstName + " " + user.lastName}</p>
      </div>
      <div style={{ width: "120px", height: "120px", margin: "0 auto" }}>
        <img
          alt="avatar"
          src={user.picture}
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "fill",
          }}
        />
      </div>
    </div>
  );
}
