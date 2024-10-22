enum Colors {
  red = 'red',
  black = 'black',
}

const mapper = (value: string): Colors => {
  if (value === Colors.red || value === Colors.black) {
    return value as Colors;
  } else {
    return Colors.red;
  }
};

const color1: Colors = mapper('red'); // red, вернулось Colors.red, так как есть совпадение
const color2: Colors = mapper('black'); // black, вернулось Colors.black, так как есть совпадение
const color3: Colors = mapper('it is not a color'); // red, вернулось Colors.red "по умолчанию"
