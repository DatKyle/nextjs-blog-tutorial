import { SignedIn, SignedOut, UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import SignOutButton from "../components/sign-out";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <SignedIn>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ paddingRight: '1rem' }}>
            Welcome, {user ? `${user.firstName} ${user.lastName}` : `User`}
          </h1>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <div>
          {user ? user.id : null}
        </div>
        <div>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <Link href={'/sign-in'}> Sign in!</Link>
      </SignedOut>
    </div>
  )
}