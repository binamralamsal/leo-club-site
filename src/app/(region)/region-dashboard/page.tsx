import dbConnect from "@/lib/db-connect";
import { Region } from "@/models/region";
import { getLoggedInUser } from "@/services/user/get-logged-in-user";
import { redirect } from "next/navigation";
import { AddClub } from "./add-club";
import { IClub } from "@/models/club";
import { ClubTable } from "./club-table";

export default async function DistrictDashboard() {
  const { user } = await getLoggedInUser();
  await dbConnect();

  if (!user) return redirect("/");

  const region = await Region.find({ coordinator: user._id })
    .populate("clubs")
    .populate("clubs.president");

  if (!region) return redirect("/");
  // @ts-ignore
  const clubs = region.clubs as IClub[];

  if (!region) return redirect("/");

  return (
    <>
      {/* @ts-ignore */}
      <AddClub regionId={region._id.toString()} />

      {clubs.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">No Regions</h3>
            <p className="text-sm text-muted-foreground">
              Please add some regions to view it.
            </p>
          </div>
        </div>
      ) : (
        <ClubTable clubs={clubs} />
      )}
    </>
  );
}
