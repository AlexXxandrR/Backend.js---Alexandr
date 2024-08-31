type Client = 1 | 2 | 3;

type registration = {
  name: string;
  surname: string;
  email: string;
  client: Client;
};
const user = {
    name: 'jhonn';
    surname: 'Terminatorovich';
    email: 'jhonn@mail.ru';
    client: 1;
}