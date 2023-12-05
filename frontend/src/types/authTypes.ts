import { User } from './index';

export interface AuthState {
  user: User | null;
  isFetching: boolean;
  error: string;
}