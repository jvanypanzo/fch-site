import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, Target, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cursos } from '@/data/cursos'

const curso = cursos.find(c => c.slug === 'comunicacao-social')!

export const metadata: Metadata = {
  title: curso.nome,
  description: curso.descricao,
}

export default function ComunicacaoSocialPage() {
  return (
    <>
      <PageHeader
        title={curso.nome}
        description={curso.descricao}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Sobre o Curso" />
              <p className="text-gray-700 mb-8 leading-relaxed">
                A Licenciatura em Comunicação Social forma profissionais versáteis para atuar em 
                jornalismo, publicidade, relações públicas e produção de conteúdo em diversas 
                plataformas. O curso combina teoria e prática, preparando comunicadores com visão 
                crítica e competências técnicas para o mercado atual.
              </p>
              
              <SectionTitle title="Objetivos do Curso" />
              <ul className="space-y-3 mb-8">
                {curso.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objetivo}</span>
                  </li>
                ))}
              </ul>
              
              <SectionTitle title="Perfil do Egresso" />
              <p className="text-gray-700 mb-8 leading-relaxed">{curso.perfil}</p>
              
              <SectionTitle title="Estrutura Curricular" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-3">1º e 2º Anos - Fundamentos</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Teoria da Comunicação</li>
                      <li>• Técnicas de Redação</li>
                      <li>• Fotografia e Linguagem Visual</li>
                      <li>• Língua Portuguesa</li>
                      <li>• Sociologia da Comunicação</li>
                      <li>• Semiótica</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-3">3º e 4º Anos - Especialização</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Jornalismo Digital</li>
                      <li>• Publicidade e Propaganda</li>
                      <li>• Relações Públicas</li>
                      <li>• Produção Audiovisual</li>
                      <li>• Estágio Supervisionado</li>
                      <li>• Trabalho de Conclusão de Curso</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-secondary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Duração</p>
                        <p className="font-medium">{curso.duracao}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-secondary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Coordenador</p>
                        <p className="font-medium">{curso.coordenador}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-secondary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Grau</p>
                        <p className="font-medium">Licenciatura</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-secondary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Regime</p>
                        <p className="font-medium">Presencial</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-3">Áreas de Atuação</p>
                    <div className="flex flex-wrap gap-2">
                      {curso.areas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Link href="/admissoes" className="block">
                      <Button className="w-full">Candidate-se</Button>
                    </Link>
                    <Link href="/contato" className="block">
                      <Button variant="outline" className="w-full">Mais informações</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
