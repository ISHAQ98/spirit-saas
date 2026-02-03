"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [value, setValue] = useState("");
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.createAI.queryOptions({ text: "izak server" })
  // );
  // const users = await getUsers();
  // console.log("Users in DB:", users);

  // const trpc = useTRPC();
  // const { data } = useQuery(
  //   trpc.createAI.queryOptions({ text: "ishaq! zine" })
  // );
  // trpc.createAI.queryOptions({ text: "Hello!" });

  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job started");
      },
    })
  );
  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoke Background Job
      </Button>
    </div>
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <Suspense fallback={<p>Loading...</p>}>

    //   </Suspense>
    //   <div>{/* Hello world!! <br /> {JSON.stringify(data)} */}</div>
    // </HydrationBoundary>
  );
};

export default Page;
