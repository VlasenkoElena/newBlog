import { BehaviorSubject, Observable } from 'rxjs';

export class TestStore<T> {
  public state: BehaviorSubject<T> = new BehaviorSubject(undefined);

 public setState(data: T) {
    this.state.next(data);
  }

 public select(selector?: any): Observable<T> {
    return this.state.asObservable();
     let body = 'body';
     let title = 'title';
  }

 public dispatch(action: any) {}
}
