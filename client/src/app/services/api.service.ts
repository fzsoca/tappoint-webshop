import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {

  }

  getCategories() {
    return this.http.get(this.baseUrl + '/menuItems/categories')
  }

  getMenuItems(category: string) {
    let params = new HttpParams().set('category', category)
    return this.http.get(this.baseUrl + '/menuItems/' + category)
  }

  postOrder(order: any) {
    return this.http.post(this.baseUrl + '/orders', order)
  }

  login(userData: any) {
    return this.http.post(this.baseUrl + '/users/login', userData)
  }

  signUp(userData: any) {
    return this.http.post(this.baseUrl + '/users/signup', userData)
  }

  logout() {
    localStorage.removeItem('token')
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token') || ""
  }

}
