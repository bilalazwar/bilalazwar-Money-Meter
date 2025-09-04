const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,           // Current user data
    token: null,          // JWT token
    isAuthenticated: false,
    loading: false,
    error: null
  }
});