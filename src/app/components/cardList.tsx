import { loremText } from "@/utils/default"
import Card from "./card"

export default function CardList(){
  return(
    <section>
      <Card title='Design de excelência' content={loremText} img='/image1.webp'/>
      <Card title='Portabilidade garantida' reverse content={loremText} img='/image2.webp'/> 
    </section>
  )
}