export interface IMutationResponse {
    data: any;
    error: any;
    isSuccess: boolean;
    isError: boolean;
    mutate: () => void;
    isLoading: boolean;
}