import HttpClient from './HttpClient';

import { URL_API } from "../config/constants";

export class CategoryService extends HttpClient {

  public constructor() {
    super(URL_API);
  }

  public getAll = () => this.instance.get('/categories');
}