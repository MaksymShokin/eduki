import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { SearchItem } from '@/types/search';

export const DetailsContext = createContext<{
  details: SearchItem | null;
  setDetails: (data: SearchItem) => void;
}>({ details: null, setDetails: () => {} });

export const DetailsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [details, setDetails] = useState<SearchItem | null>(null);

  const contextValue = useMemo(
    () => ({
      details,
      setDetails
    }),
    [details, setDetails]
  );

  return <DetailsContext.Provider value={contextValue}>{children}</DetailsContext.Provider>;
};

export const useDetails = () => useContext(DetailsContext);
