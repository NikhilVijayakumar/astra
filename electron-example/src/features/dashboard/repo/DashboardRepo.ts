import { ServerResponse, ApiService } from 'astra';
import { DashboardData } from '../../../common/types/domain';

export class DashboardRepo {
  constructor(private api: ApiService) {}

  async getDashboardStats(): Promise<ServerResponse<DashboardData>> {
    try {
      // Simulate fetching dashboard data
      // In a real app, this would call an actual API endpoint
      const response = await this.api.get<any[]>('/users');
      
      if (response.isSuccess && response.data) {
        // Mock dashboard data based on user count
        const totalUsers = response.data.length || 10;
        const dashboardData: DashboardData = {
          totalUsers,
          activeUsers: Math.floor(totalUsers * 0.7),
          revenue: totalUsers * 1250.50,
          growth: 12.5,
        };
        
        return ServerResponse.success({
          status: response.status,
          statusMessage: 'Dashboard data fetched successfully',
          data: dashboardData,
        });
      }
      
      return ServerResponse.error({
        status: response.status,
        statusMessage: (response.statusMessage || 'Failed to fetch dashboard data').toString(),
      });
    } catch (error) {
      return ServerResponse.error({
        status: 500,
        statusMessage: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}
