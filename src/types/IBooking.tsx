import { IService } from "./IService";

export interface IBooking {
  bookingDate?: Date
  bookingTime?: string
  message?: string
  businessId?: number
  totalTime?: number
  businessServices?: IService[]
}
