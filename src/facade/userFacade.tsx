import { BehaviorSubject, EMPTY, Subject } from "rxjs";
import { fetchUsers } from "../api/api";
import { catchError, debounceTime, map, switchMap, tap } from "rxjs/operators";
import { combineLatest } from "rxjs";

const _dataPerPage$ = new BehaviorSubject<number>(10);
const _currentPage$ = new BehaviorSubject<number>(0);
const isLoading$ = new BehaviorSubject<boolean>(true);
const errorMsg$ = new Subject<string>();
function changeDataPerPage(num: number) {
  _dataPerPage$.next(num);
}

function changePageNumber(num: number) {
  _currentPage$.next(num);
}

const dataPerPage$ = _dataPerPage$.asObservable();
const currentPage$ = _currentPage$.asObservable();

const maxPages$ = dataPerPage$.pipe(map((dpp) => 100 / dpp));

const getUsersOnChange$ = combineLatest([currentPage$, dataPerPage$]).pipe(
  debounceTime(500),
  tap(() => isLoading$.next(true)),
  switchMap(([page, limit]) =>
    fetchUsers(page, limit).pipe(
      tap(() => isLoading$.next(false)),
      catchError((err) => {
        isLoading$.next(false)
        errorMsg$.next(JSON.stringify(err));
        console.log('raw err',err)
        return EMPTY;
      })
    )
  )
);

export {
  getUsersOnChange$,
  dataPerPage$,
  maxPages$,
  errorMsg$,
  isLoading$,
  changeDataPerPage,
  changePageNumber,
};
