import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetProfileResponse } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   private http = inject(HttpClient);
  constructor() { }

  profileDetails$ = this.http.get<GetProfileResponse>('https://api.themoviedb.org/3/account/21596998');
}
