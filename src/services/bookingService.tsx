import { URL_API } from "../config/constants";
import { IBooking } from "../types/IBooking";
import { propsToParams } from "../utils/propsToParams";
import HttpClient from "./HttpClient";

export class BookingService extends HttpClient {
  constructor() {
    super(URL_API)
  }

  create = (booking :IBooking) => this.instance.post('/bookings', booking);
  getAll = (params?: any) => this.instance.get(`/bookings?${propsToParams(params)}`);
}