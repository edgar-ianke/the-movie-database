import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { Store } from '@ngrx/store';
import { getProfileInfo, loginSuccess } from './store/auth.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  store = inject(Store)
  ngOnInit(): void {
  const token = localStorage.getItem('access_token')
  if (token) {
    this.store.dispatch(loginSuccess())
    this.store.dispatch(getProfileInfo())
  }
  }
}
