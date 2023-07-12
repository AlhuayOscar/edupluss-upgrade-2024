import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Area } from "../../utils/demodb";

interface initState {
	areas: Array<Area>
	status: string
}

const initialState:initState = {
	areas: [],
	status: 'idle'
};

///
export const fetchCompanyAreas = createAsyncThunk('areas/fetchCompanyAreas', async (id: number) => {
	try {
		const {data} = await axios(`http://localhost:3001/areas/${id}`);
		const active = data.filter((area: Area) => area.active === true)
		return active;
	} catch (error: any) {
		throw new Error(error.message);
	}
} ) 


const areasSlice = createSlice({
	name: "areas",
	initialState,
	reducers: {
		resetAreas: (state) =>{
			state.areas = [];
			state.status = 'idle'
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCompanyAreas.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchCompanyAreas.fulfilled, (state, action: PayloadAction<Area[]>) => {
			state.status = 'success';
			state.areas = action.payload;
		});
		builder.addCase(fetchCompanyAreas.rejected, (state) => {
			state.status = 'rejected';
		});
	},
});

export const {
	resetAreas
} = areasSlice.actions;
export default areasSlice.reducer;
export const allAreas = (state: RootState) =>	state.areas;
