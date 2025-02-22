import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { SearchBar } from "@/app/ui/spaces/searchbar";
import SpaceList from "@/app/ui/spaces/spaceList";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const params = await searchParams;
  const type = params.type;

  return (
    <div>
        
        <h1 className={`mb-4 text-xl md:text-3xl`}>
          Navigate your Groups
        </h1>

        <SearchBar />

        {/* <Suspense key={type} fallback={<RevenueChartSkeleton />}>  */}
          <SpaceList type={type} />
        {/* </Suspense> */}
      
  </div>
  );
}