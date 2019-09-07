import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const imgHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'})
};

@Injectable({ providedIn: 'root' })
export class PostService {

  private domain = 'http://127.0.0.1:3000';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getList (): Observable<any> {
    return this.http.get<any>(`${this.domain}/posts/list`)
      .pipe(
        tap(res => this.log('fetched list')),
        catchError(this.handleError('getList', []))
      );
  }

  getDetail(id): Observable<any> {
    return this.http.get<any>(`${this.domain}/posts/detail?id=${id}`)
      .pipe(
        tap(res => this.log('fetched detail')),
        catchError(this.handleError('getList', []))
      );
  }

  updatePost(post: any): Observable<any> {
    return this.http.post<any>(`${this.domain}/posts/update`, post, httpOptions)
      .pipe(
        tap(res => this.log('update detail')),
        catchError(this.handleError('update', []))
      );
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.domain}/posts/add`, post, httpOptions)
      .pipe(
        tap(res => this.log('add detail')),
        catchError(this.handleError('add', []))
      );
  }

  deletePost(id: string): Observable<any> {
    return this.http.post<any>(`${this.domain}/posts/delete`, {id: id}, httpOptions)
      .pipe(
        tap(res => this.log('delete post')),
        catchError(this.handleError('post', []))
      );
  }

  uploadImg(data: Object): Observable<any> {
    return this.http.post<any>(`${this.domain}/posts/upload`, this.toQueryString(data), imgHeaders)
      .pipe(
        tap(res => this.log('upload img')),
        catchError(this.handleError('img', []))
      );
  }

  toQueryString(obj) {
    let result = [];
    for (let key in obj) {
      if (obj[key]) {
        key = encodeURIComponent(key);
        const values = obj[key];
        if (values && values.constructor === Array) {
          const queryValues = [];
          for (let i = 0, len = values.length, value; i < len; i++) {
            value = values[i];
            queryValues.push(this.toQueryPair(key, value));
          }
          result = result.concat(queryValues);
        } else {
          result.push(this.toQueryPair(key, values));
        }
      }
   }
    return result.join('&');
  }

  toQueryPair(key, value) {
    if (typeof value === 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

  /** GET heroes from the server */
  // getHeroes (): Observable<any> {
  //   return this.http.get<any>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log('fetched heroes')),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<any> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<any>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<any>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<any> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<any>(`getHero id=${id}`))
  //   );
  // }

  /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<any> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<any>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<any>('searchHeroes', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  // addHero (hero: Hero): Observable<any> {
  //   return this.http.post<any>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<any>('addHero'))
  //   );
  // }

  /** DELETE: delete the hero from the server */
  // deleteHero (hero: Hero | number): Observable<any> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<any>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<any>('deleteHero'))
  //   );
  // }

  /** PUT: update the hero on the server */
  // updateHero (hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

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
