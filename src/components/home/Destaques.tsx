import Link from 'next/link'
import { BookOpen, Calendar, Briefcase, FlaskConical, Users, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'

const destaques = [
  {
    icon: BookOpen,
    title: 'Cursos',
    description: '4 licenciaturas e 2 mestrados nas áreas de Ciências Sociais e Humanas.',
    href: '/cursos',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Calendar,
    title: 'Eventos',
    description: 'Conferências, seminários e workshops ao longo do ano letivo.',
    href: '/eventos',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Users,
    title: 'Extensão',
    description: 'Cursos complementares e programas de formação contínua.',
    href: '/extensao',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Briefcase,
    title: 'Estágios',
    description: 'Parcerias com instituições para estágios curriculares e profissionais.',
    href: '/estagios',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    icon: FlaskConical,
    title: 'CIEI',
    description: 'Centro de Investigação e Estudos Interdisciplinares.',
    href: '/ciei',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: Brain,
    title: 'Laboratório de Psicologia',
    description: 'Serviços de avaliação e acompanhamento psicológico.',
    href: '/laboratorio-psicologia',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
]

export function Destaques() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Destaques"
          subtitle="Conheça as principais áreas e serviços da nossa Faculdade"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaques.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
