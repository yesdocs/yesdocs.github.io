import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './JobAPI';
import jobData from './Jobs.Data';
const initialState = {
  jobs: jobData.allJobs, // array of jobs
  jobHighlights: jobData.allJobHighlights,
  status: 'idle',
  filter: '',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'jobs/fetchJobs',
  async () => {
    const response = await fetchJobs();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const jobSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.jobs.push(action.payload) ;
    },
    setFilter: (state, action) => {
      let newFilter = action.payload;
      state.filter = newFilter.trim()
    },    
  },
});

export const { add, setFilter } = jobSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectJobs = (state) => {
  let jobs = state.job.jobs ? state.job.jobs.filter(f => f.title !== 'Summary') : []
  if( state.job.filter ) {
    jobs = jobs.filter( j => j.tags.find( g => g === state.job.filter ))
  }
  return jobs;
}

export const selectAllJobs = (state) => {
  return state.job.jobs ? state.job.jobs.filter(f => f.title !== 'Summary') : []
}

export const selectSummary = (state) => {
  return state.job.jobs ? state.job.jobs.find(f => f.title === 'Summary') : {};
}

export const selectHighlights = (state) => {
  return state.job.jobHighlights ? state.job.jobHighlights : [];
}

export const selectTechnologies = (state) => {
  let result = []
  if( state.job.jobs ) {
     state.job.jobs.forEach(f => {
        if( f.tags ) {
          f.tags.forEach( tag => {
            if( tag && !result.find(k => k === tag)) {
              result.push(tag);
            }
          })
        }
     })
    }
    return result.sort() 
}

export const selectFilter = (state) => {
  return state.job.filter || '';
}

export default jobSlice.reducer;
