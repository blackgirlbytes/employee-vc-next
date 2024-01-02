import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Web5 VC Demo</h1>
      <Link href="/employer">
        Employer Page
      </Link>
      <br />
      <Link href="/employee">
        Employee Page
      </Link>
    </div>
  );
}
