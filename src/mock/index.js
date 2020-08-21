import Mock from 'mockjs'
import city_json from '../../public/json/city.json'

Mock.mock('/city.php', 'get', () => {
  return city_json
})
