import { auth } from "@/lib/auth";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserAccountDropdown } from "./user-account-dropdown";
import { getLoggedInUser } from "@/services/user/get-logged-in-user";

export async function SideNav() {
  const { session, user } = await getLoggedInUser();

  return (
    <div>
      {!session?.user ? (
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      ) : (
        <UserAccountDropdown
          name={
            session.user.name
              ?.split(" ")
              .map((part) => part.charAt(0).toUpperCase())
              .join("") as string
          }
          role={user?.role}
        />
      )}
    </div>
  );
}
