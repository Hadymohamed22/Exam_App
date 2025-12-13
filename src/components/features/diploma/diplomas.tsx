"use client";
import { useMemo } from "react";
import DiplomaBox from "./diploma-box";
import ErrorMessage from "@/components/shared/error-message";
import useDiplomas from "@/hooks/use-diplomas";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "@/components/shared/loading-component";

export default function Diplomas() {
  const { error, data, hasNextPage, fetchNextPage, isLoading } = useDiplomas();

  // Calculate total items across all pages
  const totalItems = useMemo(
    () => data?.pages.flatMap((page) => page.subjects).length ?? 0,
    [data?.pages]
  );

  const items = useMemo(
    () =>
      data?.pages.flatMap((page) =>
        page.subjects.map((diploma) => (
          <DiplomaBox
            id={diploma._id}
            image={diploma.icon}
            title={diploma.name}
            key={diploma._id}
          />
        ))
      ),
    [data?.pages]
  );

  return (
    <>
      {isLoading && <LoadingComponent />}
      {error && <ErrorMessage message={error.message} />}
      {totalItems !== 0 && (
        <InfiniteScroll
          dataLength={totalItems}
          next={fetchNextPage}
          hasMore={hasNextPage || false}
          loader={<LoadingComponent />}
          endMessage={
            <p className="text-center text-sm text-gray-500 my-4">
              You have seen it all
            </p>
          }
          scrollThreshold={0.9}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">{items}</div>
        </InfiniteScroll>
      )}
    </>
  );
}
