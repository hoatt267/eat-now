import ButtonRedirect from "@/app/components/ButtonRedirect";
import Link from "next/link";
import { redirect } from "next/navigation";

const isLogin = false;
export default function Home() {
  if (!isLogin) redirect("/login");
  return (
    <main>
      <div className="w-[700px] h-[700px] bg-red-300">
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
        <ButtonRedirect />
      </div>
    </main>
  );
}
