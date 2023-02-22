const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
export const QUERY_CONFIG = {
    refetchOnWindowFocus: false,
    // refetchOnmount: false,
    refetchOnReconnect: false,
    staleTime: twentyFourHoursInMs,
};
