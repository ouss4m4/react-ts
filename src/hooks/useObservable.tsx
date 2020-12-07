import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export default function useObservable<T>(observable$: Observable<T>) {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const sub = observable$.subscribe(setState);

    return () => sub.unsubscribe();
  }, []);

  return state;
}
