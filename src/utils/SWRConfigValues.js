export const fetcher = (...args) =>
  fetch(...args).then((oompas) => oompas.json());

// from SWR docs: dedupe requests with the same key in this time span (1 day in miliseconds as per the requirement)
export const dedupingInterval = 86400000;

export const revalidateOnFocus = false;
