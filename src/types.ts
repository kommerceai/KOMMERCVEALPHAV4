export interface Client {
  id: number;
  name: string;
  email: string;
  created_at: string;
  total_revenue: number;
  total_orders: number;
  active_creators: number;
  active_campaigns: number;
}

export interface SalesData {
  month: string;
  sales: number;
}

export interface BudgetData {
  current_budget: number;
  current_revenue: number;
  current_roas: number;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}