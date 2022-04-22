import { Injectable } from '@angular/core';
import {
  tap,
  Observable,
  BehaviorSubject,
  of,
  delay,
  map,
  throwError,
} from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { UsersService } from './users.service';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userProfileSubject!: BehaviorSubject<User>;
  private readonly accessTokenSubject!: BehaviorSubject<string>;

  constructor(
    private readonly storage: StorageService,
    private readonly userService: UsersService
  ) {
    this.userProfileSubject = new BehaviorSubject(null as any);
    this.accessTokenSubject = new BehaviorSubject(
      this.storage.get(ACCESS_TOKEN_KEY)
    );

    /**
     * I had to call the init method within the timeout to
     * prevent angular from throwing a circular dependency error
     * due to immediate instatiation with the httpClient
     */
    setTimeout(() => {
      this.init();
    });
  }

  login(data: { email: string; password: string }) {
    return this.apiLogin(data).pipe(
      tap((profile) => {
        this.userProfileSubject.next(profile);
        this.accessTokenSubject.next(profile.email);
      })
    );
  }

  logout() {
    this.accessTokenSubject.next(null as any);
  }

  apiLogin(data: { email: string; password: string }): Observable<User> {
    try {
      return of(
        this.userService.findOneOrFail({
          email: data.email,
          password: data.password,
        })
      ).pipe(delay(2_000));
    } catch (error) {
      return throwError(error);
    }
  }

  get loggedInUser(): User {
    return this.userProfileSubject.value;
  }

  get loggedInUserObservable(): Observable<User> {
    return this.userProfileSubject;
  }

  get loggedIn(): boolean {
    return this.accessToken != null;
  }

  get loggedInObservable(): Observable<boolean> {
    return this.accessTokenObservable.pipe(map((newToken) => newToken != null));
  }

  get accessTokenObservable(): Observable<string> {
    return this.accessTokenSubject;
  }

  get accessToken(): string {
    return this.accessTokenSubject.value;
  }

  private init() {
    this.accessTokenSubject.subscribe((newToken) => {
      this.storage.set(ACCESS_TOKEN_KEY, newToken);
    });

    this.loggedInObservable.subscribe((loggedIn) => {
      if (loggedIn) {
        this.getUserProfile().subscribe((res) => {
          console.log('Got user profile');
        });
      } else {
        this.userProfileSubject.next(null as any);
      }
    });
  }

  getUserProfile() {
    return of(
      this.userService.findOneOrFail({
        email: this.accessToken,
      })
    ).pipe(
      tap((res) => {
        this.userProfileSubject.next(res);
      })
    );
  }
}
