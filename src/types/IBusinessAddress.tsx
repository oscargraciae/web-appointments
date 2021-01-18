export interface IBusinessAddress {
  id?: number
  street?: string
  area?: string
  city?: string
  state?: string
  zipcode?: string
  lat: number
  lng: number
  addressMap: string
}

export interface IBusinessAddressResponse {
  success: boolean
  message?: string
  address?: IBusinessAddress
}