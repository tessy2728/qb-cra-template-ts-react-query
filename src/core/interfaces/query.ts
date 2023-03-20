import { IAPIResponse } from "./apiResponse";

export interface IQueryResponse<T> {
    data: IAPIResponse<T>,
    isSuccess?: boolean,
    isError?: boolean,
    isLoading?: boolean
}