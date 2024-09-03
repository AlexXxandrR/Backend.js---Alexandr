type UserProfile = {
  name: string;
  age: number;
  surname?: string | null;
};
const user1: UserProfile = {
  name: 'Ruslan',
  age: 22,
  surname: 'Semak',
};
const user2: UserProfile = {
  name: 'Alexandr',
  age: 40,
  surname: null,
};
const user3: UserProfile = {
  name: 'Vladimir',
  age: 33,
};
const user4: UserProfile = {
  name: 'Vladimir',
  age: 33,
  surname: '',
};
console.log(
  `User4: ${user4.surname == null ? 'не обнаружено' : user4.surname === '' ? 'пусто' : user4.surname}`,
);
