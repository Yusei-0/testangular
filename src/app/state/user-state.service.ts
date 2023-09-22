import { UserModel } from '@/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  user: UserModel = {
    username: '',
  };

  constructor() {}
}
