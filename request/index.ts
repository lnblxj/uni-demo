// 在这里实现全局请求拦截

import { globalConfig } from '@/config/global-config'
import { useUserStore } from '@/stores/modules/user'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE';
interface RequestOptions {
  url: string;
  method: HttpMethod;
  header?: Record<string, any>;
  data?: Record<string, any>;
  hideLoading?: boolean;
  responseType?: 'text' | 'arraybuffer';
}

interface ApiResponse<T = any> {
  isSuccess: boolean;
  code?: number;
  message?: string;
  data?: T;
}

export default class Request {
  http<T = any>(param: RequestOptions): Promise<T> {
    const url = param.url;
    const method = param.method;
    const header = { ...param.header };
    const data = { ...(param.data || {}) };
    const hideLoading = param.hideLoading || false;
    const requestUrl = globalConfig.BASE_URL.url + url;

    const defaultHeader = {
      'content-type': 'application/json',
    };

    // 合并header
    const finalHeader = {
      ...defaultHeader,
      ...header,
    };

    // 获取用户 token 并添加到请求头
    const userStore = useUserStore();
    if (userStore.token) {
      finalHeader['Authorization'] = `Bearer ${userStore.token}`;
    }

    if (!hideLoading) {
      uni.showLoading?.({ title: '加载中' });
    }

    return new Promise<T>((resolve, reject) => {
      uni.request({
        url: requestUrl,
        data: data,
        method: method,
        header: finalHeader,
        responseType: param.responseType || 'text',
        success: (res) => {
          if (!hideLoading) {
            uni.hideLoading?.();
          }
          if (param.responseType === 'arraybuffer') {
            resolve(res.data as T);
            return;
          }
          const apiRes = res.data as ApiResponse<T>;
          if (apiRes.isSuccess) {
            resolve(apiRes.data as T);
          } else {
            switch (apiRes.code) {
              case 504:
                break;
              default:
                resolve(apiRes as unknown as T);
                break;
            }
          }
        },
        fail: (err) => {
          if (!hideLoading) {
            uni.hideLoading?.();
          }
          reject(err);
        },
      });
    });
  }
}