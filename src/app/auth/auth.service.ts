import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected readonly http = inject(HttpClient)
  protected readonly baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/'

  public login(payload: { username: string, password: string }): Observable<Object> {
    const fd: FormData = new FormData();

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post(`${ this.baseApiUrl }token`, fd)
  }
}
