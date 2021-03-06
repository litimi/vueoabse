import Mock from 'mockjs'
const Random = Mock.Random

// 登录
Mock.mock('api/login', 'post', (option) => {
  if (option && option.body) {
    const { username, password } = option.body
    return (username === 'admin' && password === 'admin')
  }
})

// 用户数据
const userData = () => {
  const users = []
  for (let i = 0; i < 10; i++) {
    const user = {
      id: i + 1,
      date: Random.date('yyyy-MM-dd'),
      name: Random.cname(),
      address: Mock.mock('@county(true)'),
      phone: Mock.mock(/^1[0-9]{10}$/),
      status: Random.integer(0, 1)
    }
    users.push(user)
  }
  return users
}

Mock.mock('/api/users', userData)
