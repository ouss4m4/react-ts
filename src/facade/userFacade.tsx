import { BehaviorSubject } from "rxjs";
import { IUser } from "../typings/typings";
import { fetchUsers } from "../api/api";

const _userList$ = new BehaviorSubject<IUser[]>([]);

export const getUsers = (page: string, limit: string) => {
  fetchUsers(page, limit).subscribe(
    (res) => {
      _userList$.next(res);
    },
    (err) => alert(JSON.stringify(err)),
    () => console.log("done deal")
  );
};

export const userList$ = _userList$.asObservable();
