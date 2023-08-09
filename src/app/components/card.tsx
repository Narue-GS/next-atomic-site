import Image from "next/image"

interface CardProps {
  title:string,
  content:string,
  img:string,
  reverse?:boolean
}

export default function Card(props:CardProps) {
  return(
    <section className="flex justify-center mt-5">
      <div className={`bg-gradient-to-${props.reverse? 'l' : 'r'} from-purple-800 to-detail gap-7 w-[80%] flex ${props.reverse? 'flex-row-reverse' : ''} p-6 shadow`}>
        <div className={`w-[50%] h-full flex flex-col justify-center text-white`}>
          <h1 className="text-5xl font-bold">{props.title}</h1>
          <span>{props.content}</span>
        </div>
        <Image
          className='h-[100%]'
          width={500}
          height={200}
          src={props.img}
          alt=''
        />
      </div>
    </section>
  )
}