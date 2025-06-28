import { useUserStore } from '../stores/modules/user'

// 白名单路由列表
const whiteList = [
  '/pages/index/index',
]

const interceptMethods = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]


function hasPermission(url) {
  const isInWhitelist = whiteList.some(whiteUrl => url.startsWith(whiteUrl))
  // 从userStore获取token状态
  const userStore = useUserStore()
  if (isInWhitelist || userStore.token) {
    return true
  }
  return false
}

// 注册路由拦截器
function setupRouterInterceptor() {
  // interceptMethods.forEach((method) => {
  //   uni.addInterceptor(method, {
  //     invoke(e) {
  //       if (!hasPermission(e.url)) {
  //         const userStore = useUserStore()
  //         userStore.setRedirectUrl(e.url)
          
  //         uni.navigateTo({
  //           url: '/pages/login/login'
  //         })
          
  //         return false
  //       }
  //       return true
  //     }
  //   })
  // })
}

export { setupRouterInterceptor }