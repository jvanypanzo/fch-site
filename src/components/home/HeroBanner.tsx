import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroBanner() {
  return (
    <section className="relative bg-primary min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Faculdade de Ciências Sociais e Humanas
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
            Formando profissionais que transformam a sociedade
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cursos">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Conhecer Cursos
              </Button>
            </Link>
            <Link href="/admissoes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Inscreva-se
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary">4</p>
            <p className="text-sm text-gray-300">Cursos de Graduação</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary">2</p>
            <p className="text-sm text-gray-300">Mestrados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary">12+</p>
            <p className="text-sm text-gray-300">Docentes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary">30+</p>
            <p className="text-sm text-gray-300">Anos de História</p>
          </div>
        </div>
      </div>
    </section>
  )
}
