import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Auth layout</h1>
      <div>
        <Link href="/">Home page</Link>
      </div>
      {children}
    </div>
  );
}
