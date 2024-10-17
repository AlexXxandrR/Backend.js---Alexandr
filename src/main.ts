const merge = (a: any, b: any, order: 1 | 2 = 1) => {
  if (order === 1) {
    return { ...a, ...b };
  } else {
    return { ...b, ...a };
  }
};
const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' }, merged: 'NO!' };

console.log(merge(obj1, obj2));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj1, obj2, 1));
/* Вывод:
{
  a: 20,
  b: [ 'b' ],
  c: 100,
  child: { aa: 'aa', bb: 'bb' },
  d: 200,
  merged: 'NO!'
}
*/

console.log(merge(obj1, obj2, 2));
/* Вывод:
{
  a: 10,
  b: 'b',
  c: 100,
  child: { name: 'ch', surname: 'hc' },
  d: 200,
  merged: 'YES!'
}
*/
