import { URL_API } from "../config/constants";
import { IBusinessesResponse, IBusinessResponse } from "../types/IBusiness";
import HttpClient from "./HttpClient";

export class BusinessService extends HttpClient {
  constructor() {
    super(URL_API)
  }

  get = () => this.instance.get<IBusinessesResponse>('/businesses');
  getById = (id:number) => this.instance.get<IBusinessResponse>(`/businesses/${id}`);

}