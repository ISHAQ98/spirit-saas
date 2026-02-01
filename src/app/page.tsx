import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./Client";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "izak server" })
  );
  // const users = await getUsers();
  // console.log("Users in DB:", users);

  // const trpc = useTRPC();
  // const { data } = useQuery(
  //   trpc.createAI.queryOptions({ text: "ishaq! zine" })
  // );
  // trpc.createAI.queryOptions({ text: "Hello!" });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
      <div>{/* Hello world!! <br /> {JSON.stringify(data)} */}</div>
    </HydrationBoundary>
  );
};

export default Page;
