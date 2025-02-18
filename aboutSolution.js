```javascript
// pages/aboutSolution.js
import { useSession } from 'next-auth/react';

export default function About() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      {session && (
        <div>
          <p>Logged in as {session.user.email}</p>
        </div>
      )}
      {!session && <p>Not logged in</p>}
    </div>
  );
}
```