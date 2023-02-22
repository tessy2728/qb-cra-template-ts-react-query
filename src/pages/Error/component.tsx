import React, { FC } from "react";
import { Link, useRouteError } from "react-router-dom";

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

export const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorResponse;
  return (
    <div>
      <h1>Error!</h1>
      <p>
        {error.message}
        <Link to="/">Go back to home.</Link>
      </p>
    </div>
  );
};