import Link from "next/link";
import Image from "next/image";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Header() {
  const { user } = await getSession();

  return (
    <header className="header">
      <Link href="/">
        <h2>Lightwerk</h2>
      </Link>

      <nav>
        {user ? (
          <>
            {user && <a href="/api/auth/logout">Logout</a>}
            <Image
              src={user.picture ? user.picture : ""}
              className="rounded-full w-12 h-12 pic pic--profile"
              alt="User Profile Picture"
              width={48}
              height={48}
            />
          </>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </nav>
    </header>
  );
}
