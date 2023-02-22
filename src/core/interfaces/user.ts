export interface UserAuth {
    name: string;
    accessToken: string;
    isSignedIn?: boolean;
    loading?: boolean;
    loginError?: string;
    userDetails?: any;
}

export interface IUser {
    name: string;
    id: string;
    phone: string,
    email: string;
    created_at: Date;
    updated_at: Date;
    email_verified_at: Date;
}