export interface IHour {
  id?: number
  openFrom?: string
  openTill?: string
  isOpen?: boolean
  dayOfWeek?: number
}

export interface IHourResponse {
  success: boolean
  message?: string
  hour?: IHour
}

export interface IHoursResponse {
  success: boolean
  message?: string
  hours?: IHour[]
}