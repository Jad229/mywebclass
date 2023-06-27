import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

export const useNextRouting = (config, basePathUrl) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const router = useRouter();
  const { asPath } = router;

  const routingOptions = {
    // read and write only the query string to search UI
    // as we are leveraging existing stateToUrl and urlToState functions
    // which are based on the query string
    readUrl: () => {
      return searchParams;
    },
    writeUrl: (url, { replaceUrl }) => {
      const method = router[replaceUrl ? "replace" : "push"];
      const params = Object.fromEntries(new URLSearchParams(url).entries());
      method({ query: { ...router.query, ...params } }, undefined, {
        shallow: true
      });
    },
  };

  return useMemo(() => {
    return {
      ...config,
      routingOptions
    };
  }, [router.isReady]);
};