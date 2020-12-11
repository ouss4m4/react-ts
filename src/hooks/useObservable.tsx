import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export default function useObservable<T>(observable$: Observable<T>) {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable$.pipe(
    ).subscribe(setState);

    return () => sub.unsubscribe();
  }, [observable$]);

  return state;
}
