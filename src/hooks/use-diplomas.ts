import { getDiplomasService } from "@/lib/services/diplomas.service";
import {
  useInfiniteQuery,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";

export default function useDiplomas() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<
    GetDiplomasAPIResponse,
    Error,
    InfiniteData<GetDiplomasAPIResponse>,
    QueryKey,
    number
  >({
    queryKey: ["diplomas"],
    queryFn: ({ pageParam }) => getDiplomasService(pageParam.toString()),
    getNextPageParam: (lastPage) => lastPage.metadata.nextPage,
    initialPageParam: 1,
  });
  return {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
