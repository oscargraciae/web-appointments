export const stringToUrl = (str :string) => {
  // return str.replace(/[^A-Z0-9]+/ig, "_");
  return str.replace(/ /g, '-');
}

export const urlToString = (str :string) => {
  // return str.replace(/[^A-Z0-9]+/ig, "_");
  return str.replace(/-/g, ' ');
}