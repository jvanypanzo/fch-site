import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Direção',
  description: 'Conheça a equipa de direção da Faculdade de Ciências Sociais e Humanas.',
}

const direcao = [
  {
    nome: 'Prof. Dr. Manuel Ferreira',
    cargo: 'Decano',
    titulacao: 'Doutor em Sociologia',
    email: 'decano@FCH.edu',
    areas: ['Sociologia', 'Gestão Académica'],
  },
  {
    nome: 'Prof.ª Dr.ª Helena Martins',
    cargo: 'Vice-Decana para Assuntos Académicos',
    titulacao: 'Doutora em Psicologia',
    email: 'vice.academico@FCH.edu',
    areas: ['Psicologia Educacional', 'Pedagogia'],
  },
  {
    nome: 'Prof. Dr. Ricardo Santos',
    cargo: 'Vice-Decano para Investigação e Extensão',
    titulacao: 'Doutor em Serviço Social',
    email: 'vice.investigacao@FCH.edu',
    areas: ['Investigação Social', 'Políticas Públicas'],
  },
]

const coordenadores = [
  {
    nome: 'Prof. Dr. António Silva',
    cargo: 'Coordenador de Psicologia',
    email: 'coord.psicologia@FCH.edu',
  },
  {
    nome: 'Prof.ª Dr.ª Maria Santos',
    cargo: 'Coordenadora de Serviço Social',
    email: 'coord.servicosocial@FCH.edu',
  },
  {
    nome: 'Prof. Dr. João Costa',
    cargo: 'Coordenador de Sociologia',
    email: 'coord.sociologia@FCH.edu',
  },
  {
    nome: 'Prof.ª Dr.ª Ana Rodrigues',
    cargo: 'Coordenadora de Comunicação Social',
    email: 'coord.comunicacao@FCH.edu',
  },
]

export default function DirecaoPage() {
  return (
    <>
      <PageHeader
        title="Direção"
        description="Conheça a equipa responsável pela gestão da Faculdade."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Equipa de Direção" 
            subtitle="Órgão de gestão da Faculdade"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {direcao.map((membro, index) => (
              <TeamMember
                key={index}
                nome={membro.nome}
                cargo={membro.cargo}
                titulacao={membro.titulacao}
                email={membro.email}
                areas={membro.areas}
              />
            ))}
          </div>
          
          <SectionTitle 
            title="Coordenadores de Curso" 
            subtitle="Responsáveis pela gestão académica dos cursos"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordenadores.map((coord, index) => (
              <TeamMember
                key={index}
                nome={coord.nome}
                cargo={coord.cargo}
                email={coord.email}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
