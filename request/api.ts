import Request from './index'

const request = new Request().http


interface ApiRequest {
  <T>(url: string, data?: Record<string, any>, hideLoading?: boolean, header?: Record<string, any>): Promise<T>
}


type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE'

// 封装 GET/POST/PUT/DELETE 方法
function get<T>(url: string, data?: Record<string, any>, hideLoading: boolean = false, header?: Record<string, any>) {
  return request<T>({
    url,
    method: 'GET',
    data,
    header,
    hideLoading
  })
}

function post<T>(url: string, data?: Record<string, any>, hideLoading: boolean = false, header?: Record<string, any>) {
  return request<T>({
    url,
    method: 'POST',
    data,
    header,
    hideLoading
  })
}

function put<T>(url: string, data?: Record<string, any>, hideLoading: boolean = false, header?: Record<string, any>) {
  return request<T>({
    url,
    method: 'PUT',
    data,
    header,
    hideLoading
  })
}

function del<T>(url: string, data?: Record<string, any>, hideLoading: boolean = false, header?: Record<string, any>) {
  return request<T>({
    url,
    method: 'DELETE',
    data,
    header,
    hideLoading
  })
}

interface ApiService {
  // AuthService
  login: (data: any) => Promise<any>
}

const api: ApiService = {
  login: (data) => post('/auth/login', data, true),
}

export default api

// 调用示例
// import api from '@/request/api'

// // 登录示例
// api.login({ username: 'test', password: '123456' })
//   .then(res => {
//     console.log('登录成功:', res)
//   })
//   .catch(err => {
//     console.error('登录失败:', err)
//   })