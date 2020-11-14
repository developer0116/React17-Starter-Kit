import { ILoginRequest } from 'models/auth.model';
import { http } from 'services';

export const loginApi = (data: ILoginRequest): Promise<ILoginRequest> =>
  http.post('/auth/login', data);
