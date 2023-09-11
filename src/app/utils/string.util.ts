const capitalizeFirstString = (str: string) =>
  str.replace(/\b\w/g, (l) => l.toUpperCase());

const getFirstLetter = (str: string) => {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase();
};

export { capitalizeFirstString, getFirstLetter };
