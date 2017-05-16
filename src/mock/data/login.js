import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'clearives',
    password: '123456',
    avatar: 'https://avatars1.githubusercontent.com/u/8925862?v=3&s=460',
    name: '曾祥辉'
  }
];

const Users = [];


for (let i = 0; i < 12; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
