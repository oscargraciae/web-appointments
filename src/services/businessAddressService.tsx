import { URL_API } from "../config/constants";
import { IBusinessAddress, IBusinessAddressResponse } from "../types/IBusinessAddress";
import HttpClient from "./HttpClient";

export class BusinessAddressService extends HttpClient {
  constructor() {
    super(URL_API)
  }

  get = (businessId: number) => this.instance.get<IBusinessAddressResponse>(`/businesses/${businessId}/addresses`);
  create = (data: IBusinessAddress, businessId: number) => this.instance.post(`/businesses/${businessId}/addresses`, data);
  update = (data: IBusinessAddress, businessId: number, id: number) => this.instance.put<IBusinessAddressResponse>(`/businesses/${businessId}/addresses/${id}`, data);
}