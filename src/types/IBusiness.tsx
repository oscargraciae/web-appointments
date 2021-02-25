import { IBusinessAddress } from "./IBusinessAddress";
import { IBusinessCategory } from "./IBusinessCategory";
import { IService } from "./IService";

export interface IBusiness {
  id?: number
  name: string
  description?: string
  cover?: string 
  phone?: string
  isActive?: boolean
  isCompleted?: boolean
  isPublic?: boolean
  hasParallelBookings?: boolean
  businessCategoryId?: number
  businessAddress?: IBusinessAddress
  businessCategory?: IBusinessCategory
  businessService?: IService[]
  hours?: any
}

// export interface IBusinessGet {
//   id: number
//   name: string
//   description?: string
//   cover?: string 
//   phone?: string
//   isActive?: boolean
//   isCompleted?: boolean
// }


export interface IBusinessResponse {
  business?: IBusiness
  success: boolean
  message?: string
}

export interface IBusinessesResponse {
  business?: IBusiness[]
  success: boolean
  message?: string
}