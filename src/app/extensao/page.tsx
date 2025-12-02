import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Award } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Extensão',
  description: 'Programas de extensão e cursos complementares da FCSH.',
}

export default function ExtensaoPage() {
  return (
    <>
      <PageHeader
        title="Extensão"
        description="Cursos complementares e programas de formação contínua."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Coordenação de Extensão da FCSH oferece cursos complementares e programas de 
              formação contínua para profissionais e comunidade em geral. Os cursos são 
              ministrados por docentes da Faculdade e profissionais convidados, com certificação 
              emitida pela instituição.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/extensao/cursos-complementares">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    Cursos Complementares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Cursos de curta duração em diversas áreas das Ciências Sociais e Humanas.
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center group-hover:text-secondary transition-colors">
                    Ver cursos <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/extensao/inscricao">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    Inscrição
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Informações sobre o processo de inscrição nos cursos de extensão.
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center group-hover:text-secondary transition-colors">
                    Inscrever-se <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Benefícios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Atualização Profissional</h4>
                <p className="text-sm text-gray-600">
                  Cursos voltados para as necessidades do mercado de trabalho.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Certificação</h4>
                <p className="text-sm text-gray-600">
                  Certificados emitidos pela FCSH reconhecidos no mercado.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Networking</h4>
                <p className="text-sm text-gray-600">
                  Oportunidade de conhecer profissionais da área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
