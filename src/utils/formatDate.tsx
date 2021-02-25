import moment from 'moment';

export const formatTime = (time :string) => {
  return moment(time, [moment.ISO_8601, 'HH:mm']).format('H:mm a');
}

export const formatTimeAdd = (time :string, minutes :number) => {
  return moment(time, [moment.ISO_8601, 'HH:mm']).add(minutes, 'minutes') .format('H:mm a');
}

export const formatDate = (date: Date) => {
  return moment(date).format('DD MMMM YYYY HH:mm');
}

export const formatOnlyDate = (date: Date) => {
  return moment(date).format('DD MMMM YYYY');
}