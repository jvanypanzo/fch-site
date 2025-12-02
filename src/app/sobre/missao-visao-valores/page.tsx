import { Metadata } from 'next'
import { Target, Eye, Heart } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Missão, Visão e Valores',
  description: 'Conheça a missão, visão e valores da Faculdade de Ciências Sociais e Humanas.',
}

const valores = [
  {
    title: 'Excelência Académica',
    description: 'Compromisso com a qualidade do ensino, da investigação e da extensão.',
  },
  {
    title: 'Ética',
    description: 'Atuação pautada por princípios éticos e pela integridade em todas as ações.',
  },
  {
    title: 'Responsabilidade Social',
    description: 'Compromisso com o desenvolvimento da sociedade e o bem-estar da comunidade.',
  },
  {
    title: 'Inclusão',
    description: 'Respeito à diversidade e promoção de um ambiente inclusivo e acolhedor.',
  },
  {
    title: 'Inovação',
    description: 'Busca constante por novas abordagens e metodologias de ensino e investigação.',
  },
]

export default function MissaoVisaoValoresPage() {
  return (
    <>
      <PageHeader
        title="Missão, Visão e Valores"
        description="Os princípios que orientam a nossa atuação académica e social."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-primary text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Missão</h2>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Formar profissionais competentes e socialmente responsáveis nas áreas das 
                  Ciências Sociais e Humanas, através de um ensino de qualidade, investigação 
                  relevante e extensão comprometida com o desenvolvimento da sociedade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Visão</h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Ser referência nacional e internacional na formação de profissionais nas áreas 
                  das Ciências Sociais e Humanas, reconhecida pela excelência do ensino, pela 
                  relevância da investigação e pelo impacto social das suas ações.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Nossos Valores</h2>
              <p className="text-gray-600">
                Os princípios fundamentais que guiam todas as nossas ações e decisões.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valores.map((valor, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">{valor.title}</h3>
                    <p className="text-gray-600">{valor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
