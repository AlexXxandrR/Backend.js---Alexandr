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

const CheckSurname = (user: UserProfile) => {
  console.log((user.surname ?? 'Не обнаружено') || 'Пусто');
};
CheckSurname(user1);
CheckSurname(user2);
CheckSurname(user3);
CheckSurname(user4);
