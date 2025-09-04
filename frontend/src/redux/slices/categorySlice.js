// categorySlice.js - Expense categories
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],           // All categories
    loading: false,
    error: null
  }
});