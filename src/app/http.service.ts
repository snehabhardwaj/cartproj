import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }
  baseUrl: string = 'http://localhost:5001/api/Values';

  public getData = (route: string) => {
    return this.httpService.get(route);
  }

  getUsers() {
    return this.httpService.get<cart[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.httpService.get<cart>(this.baseUrl + '/' + id);
  }

  createUser(user: cart) {
    return this.httpService.post(this.baseUrl, user);
  }

  updateUser(user: cart) {
    return this.httpService.put(this.baseUrl + '/' + user.itemid, user);
  }

  deleteUser(id: string) {
    return this.httpService.delete(this.baseUrl + '/' + id);
  }
}
