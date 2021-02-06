import HttpClient from './HttpClient';
import { IUser, IUserResponse } from "../types/IUser";
import { URL_API } from "../config/constants";

export class UserService extends HttpClient {

  public constructor() {
    super(URL_API);
  }

  public login = (data: IUser) => this.instance.post<IUserResponse>('/users/auth', data);
  public signup = (data: IUser) => this.instance.post<IUserResponse>('/users', data);

  public forgotPasword = (data: IUser) => this.instance.post('/users/forgot-password', data);
  public changePasword = (data: any) => this.instance.post('/users/change-password', data);

  public logout = () => this.instance.get<IUserResponse>('/users/auth/logout');
  public getMe = () => this.instance.get<IUserResponse>('/users');
}