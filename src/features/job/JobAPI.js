// A mock function to mimic making an async request for data
import allJobs from './Jobs.Data'

export function fetchJobs() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: allJobs }), 1)
  );
}
