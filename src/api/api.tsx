import { Observable, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { IUser } from "../typings/typings";

const APP_ID = "5fce783f75d63ad04da2c30b";
const BASE_URL = "https://dummyapi.io/data/api";

export const fetchUsers = (
  page: number,
  limit: number
): Observable<IUser[]> => {
  return ajax
    .getJSON<{ data: IUser[] }>(
      `${BASE_URL}/user?page=${page}&limit=${limit}`,
      {
        "app-id": APP_ID,
      }
    )
    .pipe(
      map(({ data }) => data),
      catchError((error) => {
        console.log("raw error: ", error);
        return throwError(error);
      })
    );
};
