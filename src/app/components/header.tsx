import Link from "next/link";

export default function Header(){
  return(
    <header className="bg-detail fixed top-0 w-screen flex p-6 justify-between place-items-center rounded-b-3xl">
     <Link href={'/'}>
      <h1 className="text-3xl">Next 
      <code className="text-purple-700 bg-purple-100">Atômic</code> Site</h1>
     </Link> 
      <nav className="flex">
        <span className="px-3 cursor-pointer py-1 hover:scale-125 transition">exemplo</span>
        <span className="px-3 cursor-pointer py-1 hover:scale-125 transition">exemplo</span>
        <span className="px-3 cursor-pointer py-1 hover:scale-125 transition">exemplo</span>
        <Link href={"/login"}>
          <button className="px-3 py-1 border border-black rounded-full">ENTRAR</button>
        </Link>
      </nav>
    </header>
  )
}