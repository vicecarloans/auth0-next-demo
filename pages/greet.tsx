import React from 'react';
import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import useSWR from "swr";

const fetcher = async (uri: string) => {
  const response = await fetch(uri)
  return response.json()
}

const Greet = () => {
  const {data,error} = useSWR("/api/hello", fetcher)
  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;
  return <div>{data.message}</div>;
};

export default withPageAuthRequired(Greet);
