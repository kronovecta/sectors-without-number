export const capitalizeFirstLetter = str =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const isBetween = (num, min, max) => num >= min && num <= max;

export const coordinateKey = (x, y) => {
  const stringX = x - 1 < 10 ? `0${x - 1}` : `${x - 1}`;
  const stringY = y - 1 < 10 ? `0${y - 1}` : `${y - 1}`;
  return `${stringX}${stringY}`;
};

export const stringSortByKey = key => (a, b) => {
  const keyA = a[key].toUpperCase();
  const keyB = b[key].toUpperCase();
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
};

export const toCommaArray = (element, i) => {
  let string = '';
  if (i !== 0) {
    string += ', ';
  }
  string += element;
  return string;
};

export const toReadableArray = (element, i, arr) => {
  let string = '';
  if (i === arr.length - 1) {
    string += 'and ';
  }
  if (i === 0) {
    string += capitalizeFirstLetter(element);
  } else {
    string += element;
  }
  if (i < arr.length - 1) {
    string += ', ';
  }
  return string;
};
