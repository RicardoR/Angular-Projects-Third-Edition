import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private httpClient = inject(HttpClient);
  private username = 'ricardo-roguez';
  private apiUrl = 'https://api.github.com';
  constructor() { }
  
  getUserName(): WritableSignal<string> {
    return signal<string>(this.username);
  }
  
  getUser(): Observable<User> {
    throw new Error('Method not implemented');
  }
}
