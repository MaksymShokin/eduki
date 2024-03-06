import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchResults } from '@/helpers/fetchResults';

type ItemData = {
  firstPreviewImage: { watermarked: string };
  title: string;
  author: { details: { publicName: string } };
  price: string;
  description: string;
};

type SearchResult = {
  code: number;
  data: { items: { materials: ItemData[] }; total: number };
  errors: unknown[];
  status: string;
};

export const useGetSearchResults = (searchQuery: string) => {
  const { isPending, isFetchingNextPage, error, data, fetchNextPage, hasNextPage } = useInfiniteQuery<SearchResult>({
    queryKey: ['searchResults', searchQuery],
    queryFn: ({ pageParam }) => fetchResults(pageParam, searchQuery),
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages?.length + 1
  });

  const onEndReached = () => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };

  const allPagesData = useMemo(
    () =>
      data?.pages.flatMap(page =>
        page.data.items.materials.map(({ author, firstPreviewImage, price, title, description }) => ({
          imageUri: firstPreviewImage.watermarked,
          author: author.details.publicName,
          title,
          price,
          description
        }))
      ),
    [data?.pages]
  );

  return { isPending, isFetching: isFetchingNextPage, error, data: allPagesData, onEndReached };
};
