# NextAuth Session Undefined Client-Side

This repository demonstrates a common issue encountered when using NextAuth.js with Next.js 15: the session object is undefined in a client-side component after successful login, even though getServerSideProps fetches the session data correctly.

## Problem

The `about.js` file shows a NextAuth session check that returns undefined, leading to an unexpected behavior on the client.  This happens despite correctly fetching the session in `getServerSideProps`.

## Solution

The `aboutSolution.js` file provides a solution that addresses this issue by using the `useSession` hook provided by NextAuth.js for client-side session access.

## How to reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in via NextAuth.
5. Observe the unexpected behavior in the About page.