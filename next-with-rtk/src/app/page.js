import Link from "next/link";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <AddUsers/>
      <DisplayUsers/>
      <Link href="./removeUser" className="border-b border-sky-500">Remove Users</Link><br/>
      <Link href="./todolist" className="border-b border-sky-500">TodoList</Link><br/>
      <Link href="./apiusers" className="border-b border-sky-500">Api User Data</Link>
    </main>
  );
}
