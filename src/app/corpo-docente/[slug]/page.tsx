import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Mail, Phone, MapPin, BookOpen, GraduationCap, FileText, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { professores, getProfessorBySlug } from '@/data/professores'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return professores.map((professor) => ({
    slug: professor.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const professor = getProfessorBySlug(params.slug)
  
  if (!professor) {
    return {
      title: 'Professor não encontrado',
    }
  }

  return {
    title: professor.nome,
    description: `${professor.nome} - ${professor.titulacao} - Departamento de ${professor.departamento}`,
  }
}

export default function ProfessorPage({ params }: PageProps) {
  const professor = getProfessorBySlug(params.slug)

  if (!professor) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={professor.nome}
        description={`${professor.titulacao} | Departamento de ${professor.departamento}`}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link href="/corpo-docente" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Corpo Docente
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar with contact info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  {/* Profile photo placeholder */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl font-bold text-white">
                      {professor.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-center text-primary dark:text-primary mb-1">
                    {professor.nome}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                    {professor.titulacao}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 text-center mb-6">
                    Departamento de {professor.departamento}
                  </p>

                  <div className="border-t pt-4 space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Contactos</h3>
                    
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <a href={`mailto:${professor.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary">
                        {professor.email}
                      </a>
                    </div>

                    {professor.telefone && (
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{professor.telefone}</span>
                      </div>
                    )}

                    {professor.gabinete && (
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{professor.gabinete}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t mt-4 pt-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Áreas de Atuação</h3>
                    <div className="flex flex-wrap gap-2">
                      {professor.areas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a href={`mailto:${professor.email}`}>
                      <Button className="w-full">Enviar Mensagem</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div>
                <SectionTitle title="Biografia" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {professor.biografia}
                </p>
              </div>

              {/* Academic Formation */}
              <div>
                <SectionTitle title="Formação Académica" />
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {professor.formacao.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <GraduationCap className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Disciplines */}
              <div>
                <SectionTitle title="Disciplinas Lecionadas" />
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {professor.disciplinas.map((disciplina, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpen className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{disciplina}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Publications */}
              <div>
                <SectionTitle title="Publicações" />
                <div className="space-y-3">
                  {professor.publicacoes.map((pub, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">
                              {pub.titulo}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {pub.ano} • {pub.tipo === 'artigo' ? 'Artigo' : pub.tipo === 'livro' ? 'Livro' : 'Capítulo de Livro'}
                              {pub.revista && ` • ${pub.revista}`}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
