'use client';

import _useSWR from 'swr';

const useSWR = <T>(url: string, revalidate = false) => {
  const { data, isLoading, error } = _useSWR(
    url,
    (...args) => fetch(...args).then((res) => res.json()),
    {
      revalidateIfStale: revalidate,
      revalidateOnFocus: revalidate,
      revalidateOnReconnect: revalidate,
    },
  );

  return [data, isLoading, error] as [T, boolean, boolean];
};

export default useSWR;
