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
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(12,minmax(0,1fr))",
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
