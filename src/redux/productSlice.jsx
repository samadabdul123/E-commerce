import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchTerm: '',
    filteredData: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       setProducts(state, action) {
        state.products = action.payload    
       },
    //    setSearchTerm(state, action){
    //     state.searchTerm = action.payload
    //     state.filteredData = state.products.filter(product => 
    //         product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    //     )
    //    } 
    setSearchTerm(state, action) {
  const term = action.payload.toLowerCase();
  state.searchTerm = action.payload;
  state.filteredData = state.products.filter(product =>
    product.name.toLowerCase().includes(term)
  );
}

    },
})

export const {setProducts, setSearchTerm} = productSlice.actions;
export default productSlice.reducer