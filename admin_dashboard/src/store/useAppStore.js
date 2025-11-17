import create from 'zustand';
import { fetchUsers, fetchOrders, fetchVendors } from '../services/api';

export const useAppStore = create((set, get) => ({
  user: null,
  users: [],
  vendors: [],
  products: [],
  orders: [],
  zones: [],
  reviews: [],
  
  login: (email, password) => {
    // You would call API here; for now dummy login:
    set({ user: { email, name: 'Admin' } });
  },

  logout: () => set({ user: null }),

  loadUsers: async () => {
    const data = await fetchUsers();
    set({ users: data });
  },

  loadVendors: async () => {
    const data = await fetchVendors();
    set({ vendors: data });
  },

  loadOrders: async () => {
    const data = await fetchOrders();
    set({ orders: data });
  },

  updateOrderStatus: (orderId, status) => {
    const updatedOrders = get().orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    );
    set({ orders: updatedOrders });
  },
}));
