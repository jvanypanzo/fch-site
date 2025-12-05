import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroBanner() {
  return (
    <section className="relative bg-accent dark:bg-gray-800 min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Faculdade de Ciências Humanas
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl">
            Formando profissionais que transformam a sociedade
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cursos">
              <Button size="lg" variant="default" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white">
                Conhecer Cursos
              </Button>
            </Link>
           
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">3</p>
            <p className="text-sm text-gray-300 dark:text-gray-400">Cursos de Graduação</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">2</p>
            <p className="text-sm text-gray-300 dark:text-gray-400">Mestrados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">12+</p>
            <p className="text-sm text-gray-300 dark:text-gray-400">Docentes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">18+</p>
            <p className="text-sm text-gray-300 dark:text-gray-400">Anos de História</p>
          </div>
        </div>
      </div>
    </section>
  )
}
