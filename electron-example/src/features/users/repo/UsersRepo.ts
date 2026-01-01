import { ServerResponse, ApiService } from 'astra';
import { User } from '../../../common/types/domain';

interface ApiUser {
  id: number;
  name: string;
  email: string;
  username: string;
}

export class UsersRepo {
  private api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  async getUsers(): Promise<ServerResponse<User[]>> {
    const response = await this.api.get<ApiUser[]>('/users');
    
    if (response.isSuccess && response.data) {
        // Transform
        const users = response.data.map((u: ApiUser) => ({
            id: u.id,
            name: u.name,
            email: u.email,
            role: u.username.includes('admin') ? 'Admin' : 'User'
        }));
        // Return new success
        return ServerResponse.success({
            status: response.status,
            statusMessage: 'Success',
            data: users
        });
    }
    return ServerResponse.error({ 
      status: response.status, 
      statusMessage: (response.statusMessage || 'Unknown Error').toString() 
    });
  }
}
