import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginResponse, User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'optimo360_token';
  private readonly userKey = 'optimo360_user';

  currentUser = signal<User | null>(this.loadUser());
  isAuthenticated = computed(() => !!this.currentUser());
  userRole = computed(() => this.currentUser()?.role ?? null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.tokenKey, res.token);
          localStorage.setItem(this.userKey, JSON.stringify(res.user));
          this.currentUser.set(res.user);
        }),
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  hasRole(...roles: string[]): boolean {
    const role = this.currentUser()?.role;
    return role ? roles.includes(role) : false;
  }

  refreshUser() {
    return this.http.get<User>(`${environment.apiUrl}/auth/me`).pipe(
      tap((user) => {
        localStorage.setItem(this.userKey, JSON.stringify(user));
        this.currentUser.set(user);
      }),
    );
  }

  private loadUser(): User | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }
}
