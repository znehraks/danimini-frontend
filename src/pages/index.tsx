import React from "react";

export default function HomePage() {
  // const queryClient = useQueryClient();
  // const { data, error, isLoading } = useQuery(
  //   ["restaurantData"],
  //   getRestaurantData,
  //   {
  //     _optimisticResults: "optimistic",
  //     refetchOnWindowFocus: true,
  //     retryDelay: 3000,
  //   }
  // );

  // const mutation = useMutation(["updateRestaurantData"], updateRestaurantData, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["restaurantData"]);
  //   },
  // });
  // console.log("data", data);
  // if (!data) return null;
  // if (error) return <div>에러</div>;
  // if (isLoading) return <div>로딩</div>;
  return (
    <div>
      메인
      {/* <div>{data.map((item) => item.name)}</div>
    <button
      onClick={() => {
        mutation.mutate({
          id: data.length + 1 ?? 0,
          name: "1",
          description: "1",
          image: "1",
          thumb: "1",
        });
      }}
    >
      버튼
    </button> */}
    </div>
  );
}

// export const getServerSideProps:GetServerSideProps = () => {

// }
