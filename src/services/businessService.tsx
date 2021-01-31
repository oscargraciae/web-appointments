import { URL_API } from "../config/constants";
import { IBusinessesResponse, IBusinessResponse } from "../types/IBusiness";
import { propsToParams } from "../utils/propsToParams";
import HttpClient from "./HttpClient";

export class BusinessService extends HttpClient {
  constructor() {
    super(URL_API)
  }

  get = (params :any) => this.instance.get<IBusinessesResponse>(`/businesses?${propsToParams(params)}`);
  getById = (id:number) => this.instance.get<IBusinessResponse>(`/businesses/${id}`);

  getPhotos = (id :number) => this.instance.get(`/businesses/${id}/photos`);

}