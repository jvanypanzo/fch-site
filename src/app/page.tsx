import { HeroBanner } from '@/components/home/HeroBanner'
import { Destaques } from '@/components/home/Destaques'
import { Noticias } from '@/components/home/Noticias'
import { AcessoRapido } from '@/components/home/AcessoRapido'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Destaques />
      <Noticias />
      <AcessoRapido />
    </>
  )
}
