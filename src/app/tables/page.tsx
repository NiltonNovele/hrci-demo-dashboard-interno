import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { BackgroundCheckTable } from "@/components/Tables/invoice-table";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { CriminalRequestsTable } from "@/components/Tables/top-products";
import { CriminalRequestsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Solicitações",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Solicitações" />

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
          <TopChannels />
        </Suspense>
        
        <Suspense fallback={<CriminalRequestsSkeleton />}>
          <CriminalRequestsTable />
        </Suspense>

        <BackgroundCheckTable />
      </div>
    </>
  );
};

export default TablesPage;
