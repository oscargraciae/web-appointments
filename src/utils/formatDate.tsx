import moment from 'moment';

export const formatTime = (time :string) => {
  return moment(time, [moment.ISO_8601, 'HH:mm']).format('H:mm a');
}

export const formatDate = (date: Date) => {
  return moment(date).format('DD MMMM YYYY HH:mm');
}