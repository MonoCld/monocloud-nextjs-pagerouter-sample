import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="flex bg-slate-900 p-4 justify-between text-white">
        {session ? <h1>Hello {session.user?.email}</h1> : <div>Welcome</div>}

        <div className="flex gap-4">
            <Link href="/">Home</Link>
            {session ? (
                <button onClick={() => signOut()}>Sign Out</button>
            ) : (
                <button onClick={() => signIn('monocloud')}>Sign in</button>
            )}
        </div>
    </nav>
  );
}
