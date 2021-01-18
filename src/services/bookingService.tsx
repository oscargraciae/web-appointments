import { URL_API } from "../config/constants";
import { IBooking } from "../types/IBooking";
import HttpClient from "./HttpClient";

export class BookingService extends HttpClient {
  constructor() {
    super(URL_API)
  }

  create = (booking :IBooking) => this.instance.post('/booking', booking);
}