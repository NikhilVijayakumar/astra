import { AppState } from 'astra';
import { User } from '../../../common/types/domain';

// Users state extends AppState with User array
export type UsersState = AppState<User[]>;
