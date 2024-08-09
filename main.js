const name = 'admin';
let level;

switch (name) {
    case 'user':
    case 'client':
      level = 'First level';
      break;

    case 'admin':
    case 'manager':
      level = 'Two level';
        break;

    default:
        level = 'Unknown name'
        break;
}
console.log(`Роль: ${name}
Уровень доступа: ${level}`);