import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Supervisores de Estágio',
  description: 'Professores supervisores de estágio da FCSH.',
}

const supervisores = {
  psicologia: [
    { nome: 'Prof. Dr. António Silva', areas: ['Psicologia Clínica', 'Avaliação Psicológica'], email: 'antonio.silva@fcsh.edu' },
    { nome: 'Prof.ª Dr.ª Teresa Oliveira', areas: ['Neuropsicologia', 'Psicopatologia'], email: 'teresa.oliveira@fcsh.edu' },
  ],
  servicoSocial: [
    { nome: 'Prof.ª Dr.ª Maria Santos', areas: ['Política Social', 'Intervenção Social'], email: 'maria.santos@fcsh.edu' },
    { nome: 'Prof.ª Dr.ª Carla Mendes', areas: ['Família e Infância', 'Gerontologia'], email: 'carla.mendes@fcsh.edu' },
  ],
  sociologia: [
    { nome: 'Prof. Dr. João Costa', areas: ['Sociologia Urbana', 'Metodologia'], email: 'joao.costa@fcsh.edu' },
    { nome: 'Prof.ª Dr.ª Sofia Pereira', areas: ['Sociologia do Trabalho', 'Movimentos Sociais'], email: 'sofia.pereira@fcsh.edu' },
  ],
  comunicacao: [
    { nome: 'Prof.ª Dr.ª Ana Rodrigues', areas: ['Jornalismo', 'Comunicação Digital'], email: 'ana.rodrigues@fcsh.edu' },
    { nome: 'Prof. Dr. Ricardo Almeida', areas: ['Publicidade', 'Marketing Digital'], email: 'ricardo.almeida@fcsh.edu' },
  ],
}

export default function SupervisoresPage() {
  return (
    <>
      <PageHeader
        title="Supervisores de Estágio"
        description="Professores responsáveis pelo acompanhamento académico dos estágios."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Psicologia" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supervisores.psicologia.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} areas={sup.areas} email={sup.email} />
            ))}
          </div>
          
          <SectionTitle title="Serviço Social" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supervisores.servicoSocial.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} areas={sup.areas} email={sup.email} />
            ))}
          </div>
          
          <SectionTitle title="Sociologia" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supervisores.sociologia.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} areas={sup.areas} email={sup.email} />
            ))}
          </div>
          
          <SectionTitle title="Comunicação Social" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supervisores.comunicacao.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} areas={sup.areas} email={sup.email} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
