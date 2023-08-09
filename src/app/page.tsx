import Image from 'next/image'
import Header from './components/header'
import Banner from './components/banner'
import CardList from './components/cardList'

import { loremText } from '@/utils/default'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Banner/>
      <CardList/>
    </>
  )
}
