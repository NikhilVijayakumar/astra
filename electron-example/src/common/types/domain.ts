// Common domain types used across the application

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface SettingsData {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

// Navigation types
export interface Feature {
  id: number;
  name: string;
  display_order: number;
  icon: React.ComponentType;
}

export type FeatureName = 'Dashboard' | 'Users' | 'Settings';
