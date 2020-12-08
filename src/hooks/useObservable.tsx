import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export default function useObservable<T>(observable$: Observable<T>) {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable$.pipe(
      tap(val => console.log('useEffect inside useObs'))
    ).subscribe(setState);

    return () => sub.unsubscribe();
  }, [observable$]);

  return state;
}
