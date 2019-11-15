import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MyDB} from '../models/my-db'; 
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class MyDBService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
{
  
}
/** POST: add a new myDB to the server */
aaddMyDB (myDB: MyDB): Observable<MyDB> {
    return this.http.post<MyDB>(this.baseUrl+'api/myDB', myDB, httpOptions).pipe(
    tap((newMyDB: MyDB) => this.log(`added NewMyDB w/ id=${newMyDB.id}`)),
    catchError(this.handleError<MyDB>('addMyDB'))
    );
    }
addMyDB(myDB: MyDB): Observable<MyDB> {
        return this.http.post<MyDB>(this.baseUrl+'api/myDB', JSON.stringify(myDB), httpOptions)
        .pipe(
            tap((newMyDB: MyDB) => this.log(`added NewMyDB w/ id=${newMyDB.id}`)),
          catchError(this.handleError<MyDB>('addMyDB'))
        );
    }

/** GET MyDB from the server */
getAll():Observable<MyDB[]>
{
return
this.http.get<MyDB[]>(this.baseUrl+'api/MyDB').pipe(
tap(_=>this.log('Se Consulta la información')),
catchError(this.handleError<MyDB[]>('getAll',[]))
);
}
/** GET MyDB by id. Will 404 if id not found */
get(id: number): Observable<MyDB>
{
const url = `{this.baseUrl + 'api/MyDB'}/{id}`;
return this.http.get<MyDB>(url).pipe(
tap(_ => this.log(`fetched myDB id=${id}`)),
catchError(this.handleError<MyDB>(`getHero id=${id}`))
);
}
/** PUT: update the MyDB on the server */
update (myDB: MyDB): Observable<any> {
    const url =
    
    `${this.baseUrl + 'api/MyDB'}/${myDB.id}`;
    return this.http.put(url, myDB, httpOptions).pipe(
    tap(_ => this.log(`updated myDB id=${myDB.id}`)),
    catchError(this.handleError<any>('myDB'))
    );
    }
    /** DELETE: delete the myDB from the server */
delete (myDB: MyDB | number): Observable<MyDB> {
    const id = typeof myDB === 'number' ? myDB : myDB.id;
    const url =
    
    `${this.baseUrl + 'api/MyDB'}/${id}`;
    
    return this.http.delete<MyDB>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted myDB id=${id}`)),
    catchError(this.handleError<MyDB>('deleteMyDB'))
    );
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
        };
        }
        /** Log a HeroService message with the MessageService */
        private log(message: string) {
        alert(`MyDBService: ${message}`);
        }

}
