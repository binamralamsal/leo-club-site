import { AddRegion } from "./add-region";
import dbConnect from "@/lib/db-connect";
import { Region } from "@/models/region";
import { RegionTable } from "./region-table";
import { getLoggedInUser } from "@/services/user/get-logged-in-user";
import { redirect } from "next/navigation";

export default async function DistrictDashboard() {
  const { user } = await getLoggedInUser();

  if (!user || user.role !== "district") return redirect("/");

  await dbConnect();
  const regions = await Region.find().populate("coordinator");

  return (
    <>
      <AddRegion />
      {regions.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">No Regions</h3>
            <p className="text-sm text-muted-foreground">
              Please add some regions to view it.
            </p>
          </div>
        </div>
      ) : (
        <RegionTable regions={regions} />
      )}
    </>
  );
}
