import { IBusiness } from "./IBusiness";
import { IService } from "./IService";

export interface IBooking {
  id?: number
  bookingDate?: Date
  bookingTime?: string
  message?: string
  businessId?: number
  totalTime?: number
  totalPrice?: number
  businessServices?: IService[]
  business?: IBusiness
  createdAt?: Date
  bookingStatusId?: number
  bookingStatus?: IBookingStatus
}

interface IBookingStatus {
  id: number
  name: string
}