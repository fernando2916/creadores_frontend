import { HStack, Stack } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/components/ui/skeleton";

export const LoadCard = () => {
  return (
    <>

        <Stack gap='6' maxW='xl' className="gap-6 flex ">

        <Skeleton className="rounded-2xl" />
        </Stack>
        <Stack gap='6' maxW='xl' className="gap-6 flex ">

        <Skeleton className="rounded-2xl" />
        </Stack>
        <Stack gap='6' maxW='xl' className="gap-6 flex ">

        <Skeleton className="rounded-2xl" />
        </Stack>
        

      {/* <li>
        <div className=" bg-nav-800 rounded-2xl flex flex-col">
        <Skeleton className="p-10">
        <SkeletonText />
        <ul className=" mt-2 mb-5 space-y-2">
        <SkeletonCircle size="10" />
                <SkeletonText />
                <SkeletonCircle size="10" />
                <SkeletonText />
                <SkeletonCircle size="10" />
                <SkeletonText />
                <SkeletonCircle size="10" />
                <SkeletonText />
            </ul>
            <Skeleton className="flex w-full justify-center py-2 px-4 border border-transparent rounded-md " />
          </Skeleton>
          </div>
          </li> */}
          </>
  );
};
