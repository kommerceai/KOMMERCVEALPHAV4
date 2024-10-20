import { Client, SalesData, BudgetData, BlogPost } from '../types';

export const demoClients: Client[] = [
  { id: 1, name: "TechGadgets Inc.", email: "contact@techgadgets.com", created_at: "2023-01-15", total_revenue: 1500000, total_orders: 7500, active_creators: 25, active_campaigns: 5 },
  { id: 2, name: "FashionForward", email: "info@fashionforward.com", created_at: "2023-02-20", total_revenue: 2000000, total_orders: 10000, active_creators: 40, active_campaigns: 8 },
  { id: 3, name: "HealthyLiving Co.", email: "support@healthyliving.com", created_at: "2023-03-10", total_revenue: 1200000, total_orders: 6000, active_creators: 20, active_campaigns: 4 },
  { id: 4, name: "GourmetEats", email: "hello@gourmeteats.com", created_at: "2023-04-05", total_revenue: 800000, total_orders: 4000, active_creators: 15, active_campaigns: 3 },
  { id: 5, name: "FitnessPro", email: "support@fitnesspro.com", created_at: "2023-05-12", total_revenue: 1800000, total_orders: 9000, active_creators: 35, active_campaigns: 7 },
  { id: 6, name: "BeautyBliss", email: "info@beautybliss.com", created_at: "2023-06-18", total_revenue: 1000000, total_orders: 5000, active_creators: 18, active_campaigns: 4 },
];

export const demoSalesData: { [key: number]: SalesData[] } = {
  1: [
    { month: "Jan", sales: 120000 },
    { month: "Feb", sales: 150000 },
    { month: "Mar", sales: 180000 },
    { month: "Apr", sales: 200000 },
    { month: "May", sales: 250000 },
    { month: "Jun", sales: 300000 },
  ],
  2: [
    { month: "Jan", sales: 180000 },
    { month: "Feb", sales: 200000 },
    { month: "Mar", sales: 220000 },
    { month: "Apr", sales: 250000 },
    { month: "May", sales: 300000 },
    { month: "Jun", sales: 350000 },
  ],
  3: [
    { month: "Jan", sales: 100000 },
    { month: "Feb", sales: 120000 },
    { month: "Mar", sales: 140000 },
    { month: "Apr", sales: 160000 },
    { month: "May", sales: 180000 },
    { month: "Jun", sales: 200000 },
  ],
  4: [
    { month: "Jan", sales: 70000 },
    { month: "Feb", sales: 80000 },
    { month: "Mar", sales: 90000 },
    { month: "Apr", sales: 100000 },
    { month: "May", sales: 120000 },
    { month: "Jun", sales: 140000 },
  ],
  5: [
    { month: "Jan", sales: 150000 },
    { month: "Feb", sales: 180000 },
    { month: "Mar", sales: 200000 },
    { month: "Apr", sales: 220000 },
    { month: "May", sales: 250000 },
    { month: "Jun", sales: 300000 },
  ],
  6: [
    { month: "Jan", sales: 80000 },
    { month: "Feb", sales: 100000 },
    { month: "Mar", sales: 120000 },
    { month: "Apr", sales: 140000 },
    { month: "May", sales: 160000 },
    { month: "Jun", sales: 200000 },
  ],
};

export const demoBudgetData: { [key: number]: BudgetData } = {
  1: { current_budget: 50000, current_revenue: 150000, current_roas: 3 },
  2: { current_budget: 75000, current_revenue: 200000, current_roas: 2.67 },
  3: { current_budget: 40000, current_revenue: 120000, current_roas: 3 },
  4: { current_budget: 30000, current_revenue: 80000, current_roas: 2.67 },
  5: { current_budget: 60000, current_revenue: 180000, current_roas: 3 },
  6: { current_budget: 35000, current_revenue: 100000, current_roas: 2.86 },
};

export const demoBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Maximizing ROI with TikTok Shop",
    content: "Learn how to leverage TikTok Shop features to boost your return on investment. We'll cover best practices, trending strategies, and case studies of successful campaigns.",
    author: "Jane Doe",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Emerging Trends in Social Commerce",
    content: "Explore the latest trends shaping the future of social commerce. From live shopping events to AI-powered recommendations, stay ahead of the curve in the rapidly evolving e-commerce landscape.",
    author: "John Smith",
    date: "2024-03-10",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Building a Successful Creator Partnership Program",
    content: "Discover the key elements of a thriving creator partnership program. Learn how to identify, onboard, and nurture relationships with influencers to drive sales and brand awareness.",
    author: "Alice Johnson",
    date: "2024-03-05",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];