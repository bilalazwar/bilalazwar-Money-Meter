// expenseSlice.js - Central expense management
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    items: [],           // All expenses
    filteredItems: [],   // Filtered expenses
    loading: false,
    filters: {           // Current filter settings
      category: '',
      dateRange: {},
      search: ''
    },
    stats: {             // Calculated statistics
      total: 0,
      byCategory: {},
      monthly: {}
    }
  }
});