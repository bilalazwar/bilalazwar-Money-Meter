// uiSlice.js - Application UI state
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: false,    // Mobile sidebar state
    currentPage: 'dashboard',
    theme: 'light',        // Light/dark theme
    modals: {              // Which modals are open
      addExpense: false,
      editExpense: false
    },
    notifications: []      // Toast notifications
  }
});