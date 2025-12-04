import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'
import { getProfessores } from '@/lib/queries/professores'

export const metadata: Metadata = {
  title: 'Corpo Docente',
  description: 'Conheça o corpo docente da Faculdade de Ciências Sociais e Humanas.',
}

const departamentos = ['Psicologia Clínica', 'Psicologia do Trabalho e das Organizações', 'Línguas']

export default async function CorpoDocentePage() {
  const professores = await getProfessores()

  return (
    <>
      <PageHeader
        title="Corpo Docente"
        description="Conheça os professores e investigadores da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {departamentos.map((departamento) => {
            const docentesDept = professores.filter(d => d.departamento === departamento)
            if (docentesDept.length === 0) return null
            
            return (
              <div key={departamento} className="mb-12 last:mb-0">
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {docentesDept.map((docente) => (
                    <TeamMember
                      key={docente.id}
                      nome={docente.nome}
                      titulacao={docente.titulacao}
                      areas={docente.areas}
                      email={docente.email}
                      foto_url={docente.foto_url}
                      departamento={docente.departamento}
                      slug={docente.slug}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
