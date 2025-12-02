import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'

const noticias = [
  {
    id: '1',
    titulo: 'Abertas as inscrições para o ano letivo 2024/2025',
    resumo: 'A FCSH inicia o período de candidaturas para novos estudantes em todos os cursos de graduação e pós-graduação.',
    data: '2024-01-15',
    slug: 'inscricoes-2024-2025',
  },
  {
    id: '2',
    titulo: 'FCSH celebra 30 anos de excelência académica',
    resumo: 'A Faculdade de Ciências Sociais e Humanas comemora três décadas de formação de profissionais de referência.',
    data: '2024-01-10',
    slug: 'fcsh-30-anos',
  },
  {
    id: '3',
    titulo: 'Novo acordo de cooperação com universidade internacional',
    resumo: 'Parceria permite intercâmbio de estudantes e docentes, fortalecendo a internacionalização da instituição.',
    data: '2024-01-05',
    slug: 'acordo-cooperacao-internacional',
  },
]

export function Noticias() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle
            title="Notícias"
            subtitle="Fique por dentro das novidades da FCSH"
          />
          <Link href="/eventos">
            <Button variant="ghost" className="hidden sm:flex items-center">
              Ver todas <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <Card key={noticia.id} className="h-full">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(noticia.data).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <CardTitle className="text-base hover:text-secondary transition-colors cursor-pointer">
                  {noticia.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{noticia.resumo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center sm:hidden">
          <Link href="/eventos">
            <Button variant="ghost" className="flex items-center mx-auto">
              Ver todas as notícias <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
