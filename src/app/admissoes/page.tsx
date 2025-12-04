import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, CreditCard, HelpCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Admissões',
  description: 'Informações sobre o processo de admissão à FCH.',
}

const sections = [
  {
    icon: CheckCircle,
    title: 'Requisitos',
    description: 'Requisitos de admissão para candidatos.',
    href: '/admissoes/requisitos',
  },
  {
    icon: FileText,
    title: 'Documentos',
    description: 'Documentos necessários para candidatura.',
    href: '/admissoes/documentos',
  },
  {
    icon: CreditCard,
    title: 'Taxas',
    description: 'Propinas e taxas académicas.',
    href: '/admissoes/taxas',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Perguntas frequentes sobre admissões.',
    href: '/admissoes/faq',
  },
]

export default function AdmissoesPage() {
  return (
    <>
      <PageHeader
        title="Admissões"
        description="Venha fazer parte da FCH - conheça o processo de admissão."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Faculdade de Ciências Sociais e Humanas recebe candidaturas de estudantes que 
              desejam ingressar nos cursos de graduação e pós-graduação. O processo de admissão 
              é realizado anualmente, com períodos específicos para candidatura.
            </p>
            <div className="bg-secondary/10 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">Período de Candidaturas 2024</h3>
              <p className="text-gray-600">
                <strong>Graduação:</strong> Janeiro a Março de 2024<br />
                <strong>Pós-Graduação:</strong> Fevereiro a Abril de 2024
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center group-hover:text-secondary transition-colors">
                      Ver mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="mb-6 text-gray-200">
              Inicie sua jornada académica na FCH. Escolha seu curso e prepare sua candidatura.
            </p>
            <Link href="/cursos">
              <span className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors font-medium">
                Ver Cursos Disponíveis
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
