import Mock from 'mockjs'
import Axios from 'axios'
 
Mock.mock('http://www.bai.com',{'name|3':'lz','age|20-60':25})
         //url，请求路径。       //请求的数据。 
Axios.get('http://www.bai.com').then((res)=>{console.log(res)})