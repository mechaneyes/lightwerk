"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
};

export default Header;
