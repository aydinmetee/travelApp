import { Crew } from './../models/crew';
import { Trip } from './../models/trip';
import { Comment } from './../models/comment';
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
  oUser: User;

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

  getUsersById(id: string): Observable<User> {
    return this.http.get<User>(this.path + '/users/' + id);
  }

  addUsers(user: User): Observable<User> {
    return this.http
      .post<User>(this.path + '/users', user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.path + '/comments');
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(
      this.path + '/comments',
      comment,
      this.httpOptions
    );
  }

  getCrew(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.path + '/crews');
  }

  createCrew(crew: Crew): Observable<Crew> {
    return this.http
      .post<Crew>(this.path + '/crews', crew, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateCrew(user: User) {
    return this.http
      .put(this.path + '/users/' + user.id, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getMemberById(): Observable<User[]> {
    return this.http.get<User[]>(
      this.path + '/users?myCrew.id=' + localStorage.getItem('oncrew')
    );
  }

  createTrip(trip: Trip) {
    return this.http
      .post<Trip>(this.path + '/trips', trip, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateTrip(trip: Trip) {
    return this.http
      .put(this.path + '/trips/' + trip.id, trip, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.path + '/trips');
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
