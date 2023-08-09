export default function Form(){
  return(
    <form action='/' className="p-4 flex w-[25%] flex-col gap-5 shadow-lg rounded bg-gradient-to-br from-detail to-purple-800">
      <input className="p-2 rounded border bg-[rgba(255,255,255,0.5)] text-white font-semibold" type="text" placeholder="Nome"/>
      <input className="p-2 rounded border bg-[rgba(255,255,255,0.5)] text-white font-semibold" type="password" placeholder="Senha"/>
      <hr />
      <button className="border rounded p-2" type="submit">Confirmar</button>
    </form>
  )
}