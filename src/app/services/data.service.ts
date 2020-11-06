import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  path = 'http://localhost:3000';
  users: User[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'creater',
    }),
  };
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/users');
  }

  getUsersById(id:string): Observable<User> {
    return this.http.get<User>(this.path + '/users/' + id);
  }

  addUsers(user: User): Observable<User> {
    return this.http
      .post<User>(this.path + '/users', user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getCrewMember() {
    return this.http.get(this.path + '/users')
                .toPromise()
                .then(res => <User[]> res)
                .then(data => { return data; });
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
