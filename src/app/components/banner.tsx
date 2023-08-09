export default function Banner() {
  return(
    <section className="w-screen mt-[4vw] h-[50vw] bg-contain bg-[url('https://blog.trello.com/hubfs/DashboardFinal.png')]">
      <div className='h-full w-[80%] bg-gradient-to-r from-black to-transparent flex pl-10 text-9xl text-white font-bold place-items-center'>
        <h1>
          <span className='text-detail'>Our</span> product <br /> 
            admin system
        </h1>
      </div>
    </section>
  )
}