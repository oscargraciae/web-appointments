import { IBusiness } from "./IBusiness";
import { IService } from "./IService";

export interface IBooking {
  bookingDate?: Date
  bookingTime?: string
  message?: string
  businessId?: number
  totalTime?: number
  totalPrice?: number
  businessServices?: IService[]
  business?: IBusiness
}
