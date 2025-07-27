import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  protected readonly http = inject(HttpClient);
  protected readonly baseApiUrl: string = 'https://icherniakov.ru/yt-course/'

  public getTestAccounts(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${ this.baseApiUrl }account/test_accounts`)
  }
}
