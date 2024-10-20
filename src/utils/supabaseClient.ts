import { createClient } from '@supabase/supabase-js';
import { demoClients, demoSalesData, demoBudgetData } from './demoData';
import { Client, SalesData, BudgetData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock Supabase functions for demo purposes
export const mockSupabase = {
  from: (table: string) => ({
    select: () => ({
      eq: (column: string, value: any) => ({
        single: () => {
          if (table === 'clients') {
            return Promise.resolve({ data: demoClients.find(client => client.id === value), error: null });
          } else if (table === 'budget_data') {
            return Promise.resolve({ data: demoBudgetData[value as number], error: null });
          }
          return Promise.resolve({ data: null, error: 'Not found' });
        },
        order: () => Promise.resolve({ data: demoSalesData[value as number], error: null })
      }),
      single: () => Promise.resolve({ data: null, error: 'Not implemented' }),
    }),
  }),
};

// Use mockSupabase instead of real Supabase client
export const supabaseClient = mockSupabase;