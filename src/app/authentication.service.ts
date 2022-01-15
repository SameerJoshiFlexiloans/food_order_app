import { Injectable } from '@angular/core';
import { AuthGuard } from './services/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authGuard:AuthGuard) { }
  
}
