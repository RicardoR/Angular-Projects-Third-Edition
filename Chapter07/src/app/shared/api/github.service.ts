import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
