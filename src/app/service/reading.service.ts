import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Reading } from '../model/reading';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ReadingService {

  private domain = 'http://127.0.0.1:3000';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getList(): Observable<any> {
  return this.http.get<any>(`${this.domain}/reading/list`)
    .pipe(
      tap(res => this.log('fetched list')),
      catchError(this.handleError('getList', []))
    );
  }

  addReading (item: Reading): Observable<any> {
    return this.http.post<any>(`${this.domain}/reading/add`, item)
      .pipe(
        tap(res => this.log('add reading share')),
        catchError(this.handleError('add reading share', []))
      );
  }

//   updatePost(post: any): Observable<any> {
//     return this.http.post<any>(`${this.domain}/posts/update`, post, httpOptions)
//       .pipe(
//         tap(res => this.log('update detail')),
//         catchError(this.handleError('update', []))
//       );
//   }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
