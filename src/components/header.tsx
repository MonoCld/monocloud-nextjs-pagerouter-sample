import {
  SignIn,
  SignOut,
  SignUp,
  useUser,
} from "@monocloud/monocloud-nextjs/client";
import Link from "next/link";

export default function Header() {
  const { user, isAuthenticated } = useUser();

  return (
    <nav className='flex bg-slate-900 p-4 justify-between text-white'>
      {isAuthenticated ? <h1>Hello {user?.email}</h1> : <div>Welcome</div>}

      <div className='flex gap-4'>
        <Link href='/'>Home</Link>
        {isAuthenticated ? (
          <>
          <Link href='/server'>Server Side Props</Link>
          <Link href='/client'>Client Side</Link>
          <SignOut>Sign Out</SignOut></>
        ) : (
          <>
            <SignIn>Sign In</SignIn>
            <SignUp>Sign Up</SignUp>
          </>
        )}
      </div>
    </nav>
  );
}
