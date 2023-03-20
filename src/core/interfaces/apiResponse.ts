export interface IAPIResponse<T> {
    errors: Array<string>;
    message: string;
    result: Array<T>;
    status: number;
    success: boolean;
}

export interface IPostAPIResponse<T> {
    errors: Array<string>;
    message: string;
    result: T;
    status: number;
    success: boolean;
    token: string;
}

export interface IDetailsAPIResponse<T> {
    errors: Array<string>;
    message: string;
    result: T;
    status: number;
    success: boolean;
}