import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import config from 'env';
class HttpService {
  private service: AxiosInstance;
  constructor() {
    this.service = axios.create({
      baseURL: config.baseURL,
    });
    this.interceptor();
  }
  public registered(token: string) {
    this.service.defaults.headers.common['Authorization'] = `Brearer ${token}`;
  }
  private interceptor() {
    this.service.interceptors.response.use(this.handleSuccess, this.handleError);
  }
  private handleSuccess(response: AxiosResponse) {
    return response.data;
  }
  private handleError(error: AxiosError) {
    return Promise.reject(error);
  }
  get<T>(endpoint: string, queryParams: Object): Promise<T> {
    return this.service.get(endpoint, {
      params: queryParams,
    });
  }
  post<T>(endpoint: string, data: any): Promise<T> {
    return this.service.post(endpoint, data);
  }
}

export default new HttpService();
