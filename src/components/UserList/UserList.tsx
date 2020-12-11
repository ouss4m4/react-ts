import React, { ReactElement } from "react";
import { IUser } from "../../typings/typings";
import UserProfile from "../UserProfile/UserProfile";

interface UserListProps {
  list: IUser[];
}

const UserList = ({ list }: UserListProps): ReactElement => {
  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.map((user) => (
          <UserProfile {...user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
