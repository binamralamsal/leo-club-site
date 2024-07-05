import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Club, IClub } from "@/models/club";
import { IRegion, Region } from "@/models/region";
import { MoreHorizontal } from "lucide-react";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export async function ClubTable({ clubs }: { clubs: IClub[] }) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.n.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Logo</TableHead>
              <TableHead className="hidden md:table-cell">President</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clubs.map((club, index) => (
              <TableRow key={(club._id as string).toString() as string}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{club.name}</TableCell>
                <TableCell className="font-medium">
                  <Image
                    src={club.logo}
                    alt="Logo"
                    height={200}
                    width={200}
                    className="w-auto h-8"
                  />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {/* @ts-ignore */}
                  {club.president.name}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <form
                        action={async () => {
                          "use server";

                          await Club.deleteOne({ _id: club._id });
                          revalidatePath("/region-dashboard");
                        }}
                      >
                        <DropdownMenuItem asChild>
                          <button className="w-full">Delete</button>
                        </DropdownMenuItem>
                      </form>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
