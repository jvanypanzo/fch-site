import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Curso } from '@/types/database'

// Course display interface for frontend
export interface CursoDisplay {
  id: string
  nome: string
  tipo: 'graduacao' | 'pos-graduacao'
  duracao: string
  descricao: string
  coordenador: string
  slug: string
  objetivos: string[]
  perfil: string
  areas: string[]
  pdfUrl?: string
}

// Structure for curriculum (internal to this module)
interface CurriculumDisciplina {
  nome: string
  professor: string
  professorSlug: string
  creditos: number
}

export interface Semestre {
  semestre: number
  disciplinas: CurriculumDisciplina[]
}

export interface AnoCurricular {
  ano: number
  semestres: Semestre[]
}

export interface EstruturaCurricular {
  cursoSlug: string
  cursoNome: string
  pdfUrl?: string
  anos: AnoCurricular[]
}

// Fallback courses data
const fallbackCursos: CursoDisplay[] = [
  {
    id: '1',
    nome: 'Licenciatura em Psicologia do Trabalho e das Organizações',
    tipo: 'graduacao',
    duracao: '5 anos',
    descricao: 'O curso de Psicologia do Trabalho e das Organizações forma profissionais capacitados para compreender e intervir nos processos psicológicos em contextos organizacionais, desenvolvendo competências em gestão de pessoas, comportamento organizacional e saúde ocupacional.',
    coordenador: 'A definir',
    slug: 'psicologia-trabalho-organizacoes',
    objetivos: [
    'O licenciado do curso de Psicologia do Trabalho e das Organizações procurará desenvolver e aprofundar as relações do indivíduo com o grupo ou a organização englobante e as relações interpessoais que determinam a vida interna das instituições, fomentando a dinâmica afectiva e comportamental dos seus membros. Trata-se, portanto, do desenvolvimento de uma actividade centrada no acompanhamento dos comportamentos humanos encarados como processos que afectam o funcionamento dos grupos sociais, independentemente da sua natureza e das razões da sua existência.'],
    perfil: 'Colocação em organizações  governamentais  e não governamentais a exercer actividades nas áreas de formação e gestão de pessoas, selecção e recrutamento, diagnóstico da cultura e do  comportamento organizacional, aconselhamento, análise  de funções, gestão de sistemas de remuneração, estudo de mercado de trabalho, marketing, desenvolvimento de campanhas e produtos, estudos de comunicação institucional e de opinião pública. Investigação de fenómenos do domínio da Psicologia do trabalho e organizações. Docência da Psicologia em instituições de ensino ( médio e superior).',
    areas: ['Psicologia Organizacional', 'Gestão de Recursos Humanos', 'Comportamento Organizacional', 'Saúde Ocupacional'],
    pdfUrl: '/documentos/plano-curricular-psicologia-trabalho-organizacoes.pdf',
  },
  {
    id: '2',
    nome: 'Licenciatura em Psicologia Clínica',
    tipo: 'graduacao',
    duracao: '5 anos',
    descricao: 'O curso de Psicologia Clínica forma profissionais capacitados para compreender, avaliar e intervir em processos de saúde mental, desenvolvendo competências em avaliação psicológica, psicoterapia e intervenção clínica.',
    coordenador: 'A definir',
    slug: 'psicologia-clinica',
    objetivos: [
      'Formar profissionais com sólida base teórica e prática em Psicologia Clínica',
      'Desenvolver competências para avaliação e intervenção psicológica',
      'Capacitar para atuação ética e socialmente responsável em saúde mental',
      'Promover a investigação científica na área clínica',
    ],
    perfil: 'Enquadramento em organizações governamentais e não governamentais como, consultórios, serviços  de psicologia clínica, de saúde mental, instituições de reabilitação psicossocial,  hospitais, programas de saúde pública e projectos comunitários;',
    areas: ['Psicologia Clínica', 'Avaliação Psicológica', 'Psicoterapia', 'Saúde Mental'],
    pdfUrl: '/documentos/plano-curricular-psicologia-clinica.pdf',
  },
  {
    id: '3',
    nome: 'Licenciatura em Línguas e Administração',
    tipo: 'graduacao',
    duracao: '4 anos',
    descricao: 'O curso de Línguas e Administração forma profissionais com competências linguísticas avançadas e conhecimentos em gestão administrativa, capacitando-os para atuar em contextos multilíngues e multiculturais.',
    coordenador: 'A definir',
    slug: 'linguas',
    objetivos: [
      'Formar profissionais com domínio de múltiplas línguas estrangeiras',
      'Desenvolver competências em tradução e interpretação',
      'Capacitar para o ensino de línguas em diferentes contextos',
      'Promover o conhecimento das literaturas e culturas associadas às línguas estudadas',
    ],
    perfil: 'Atuação em instituições públicas e privadas, empresas multinacionais, organizações internacionais, escolas de línguas, agências de tradução e interpretação, entre outros;',
    areas: ['Tradução', 'Interpretação', 'Ensino de Línguas', 'Literaturas'],
    pdfUrl: '/documentos/plano-curricular-linguas.pdf',
  },
 
]

// Fallback curriculum structures
const fallbackEstruturasCurriculares: EstruturaCurricular[] = [
  {
    cursoSlug: 'psicologia-trabalho-organizacoes',
    cursoNome: 'Licenciatura em Psicologia do Trabalho e das Organizações',
    pdfUrl: '/documentos/plano-curricular-psicologia-trabalho-organizacoes.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Introdução à Psicologia', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'Psicologia Social I', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Fundamentos de Gestão', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 4 },
              { nome: 'Comunicação Empresarial', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Psicologia do Desenvolvimento', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Psicologia Social II', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Comportamento Organizacional I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Estatística Aplicada', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Economia do Trabalho', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 4 }
            ]
          }
        ]
      },
      {
        ano: 2,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Psicologia Organizacional I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 6 },
              { nome: 'Comportamento Organizacional II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Gestão de Recursos Humanos I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Dinâmicas de Grupo', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Métodos de Investigação', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Psicologia Organizacional II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 6 },
              { nome: 'Gestão de Recursos Humanos II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Recrutamento e Seleção', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Saúde Ocupacional I', professor: 'Prof.ª Dr.ª Maria Fernandes', professorSlug: 'maria-fernandes', creditos: 5 },
              { nome: 'Ética Profissional', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 4 }
            ]
          }
        ]
      },
      {
        ano: 3,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Liderança e Motivação', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 6 },
              { nome: 'Avaliação de Desempenho', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Saúde Ocupacional II', professor: 'Prof.ª Dr.ª Maria Fernandes', professorSlug: 'maria-fernandes', creditos: 5 },
              { nome: 'Formação e Desenvolvimento', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Psicologia do Trabalho', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Ergonomia e Fatores Humanos', professor: 'Prof.ª Dr.ª Maria Fernandes', professorSlug: 'maria-fernandes', creditos: 5 },
              { nome: 'Cultura Organizacional', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Gestão de Conflitos', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Consultoria Organizacional', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Estágio Curricular I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 6 }
            ]
          }
        ]
      },
      {
        ano: 4,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Intervenção Organizacional', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 6 },
              { nome: 'Gestão da Mudança', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 8 },
              { nome: 'Seminário de Investigação I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Estágio Curricular III', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 10 },
              { nome: 'Seminário de Investigação II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 4 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    cursoSlug: 'psicologia-clinica',
    cursoNome: 'Licenciatura em Psicologia Clínica',
    pdfUrl: '/documentos/plano-curricular-psicologia-clinica.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Introdução à Psicologia', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'História da Psicologia', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 },
              { nome: 'Biologia Humana', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Filosofia das Ciências Humanas', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 4 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Psicologia do Desenvolvimento I', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 6 },
              { nome: 'Neurociências', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Estatística I', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Psicologia Social I', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Antropologia', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          }
        ]
      },
      {
        ano: 2,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Psicologia do Desenvolvimento II', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 6 },
              { nome: 'Psicologia da Personalidade', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 },
              { nome: 'Estatística II', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Psicologia Social II', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Psicologia da Aprendizagem', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Psicopatologia I', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 6 },
              { nome: 'Métodos de Investigação em Psicologia', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 },
              { nome: 'Psicologia Cognitiva', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Ética e Deontologia', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 4 },
              { nome: 'Psicologia Comunitária', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 }
            ]
          }
        ]
      },
      {
        ano: 3,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Psicopatologia II', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 6 },
              { nome: 'Avaliação Psicológica I', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'Psicologia Clínica I', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 },
              { nome: 'Entrevista Clínica', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 },
              { nome: 'Psicofarmacologia', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Avaliação Psicológica II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'Psicologia Clínica II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 },
              { nome: 'Psicologia da Saúde', professor: 'Prof.ª Dr.ª Maria Fernandes', professorSlug: 'maria-fernandes', creditos: 5 },
              { nome: 'Neuropsicologia', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Estágio Curricular I', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 }
            ]
          }
        ]
      },
      {
        ano: 4,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Psicoterapias', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'Intervenção Clínica', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 8 },
              { nome: 'Seminário de Investigação I', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Estágio Curricular III', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 10 },
              { nome: 'Seminário de Investigação II', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    cursoSlug: 'linguas',
    cursoNome: 'Licenciatura em Línguas',
    pdfUrl: '/documentos/plano-curricular-linguas.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Língua Portuguesa I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 },
              { nome: 'Língua Inglesa I', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 6 },
              { nome: 'Introdução à Linguística', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 4 },
              { nome: 'Literatura Portuguesa I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Língua Portuguesa II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 },
              { nome: 'Língua Inglesa II', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 6 },
              { nome: 'Língua Francesa I', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Fonética e Fonologia', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 },
              { nome: 'Literatura Portuguesa II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          }
        ]
      },
      {
        ano: 2,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Língua Portuguesa III', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Língua Inglesa III', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Língua Francesa II', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Morfologia e Sintaxe', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Literatura Inglesa I', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Língua Portuguesa IV', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Língua Inglesa IV', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Língua Francesa III', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Semântica e Pragmática', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Literatura Inglesa II', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 4 }
            ]
          }
        ]
      },
      {
        ano: 3,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Tradução I (Inglês)', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 6 },
              { nome: 'Tradução I (Francês)', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Literatura Francesa I', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 4 },
              { nome: 'Linguística Aplicada', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Literatura Africana', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Tradução II (Inglês)', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 6 },
              { nome: 'Tradução II (Francês)', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Literatura Francesa II', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 4 },
              { nome: 'Didática das Línguas', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Estágio Curricular I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 }
            ]
          }
        ]
      },
      {
        ano: 4,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Interpretação', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 6 },
              { nome: 'Tradução Especializada', professor: 'Prof. Dr. João Santos', professorSlug: 'joao-santos', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 8 },
              { nome: 'Seminário de Investigação I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Estágio Curricular III', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 10 },
              { nome: 'Seminário de Investigação II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 10 }
            ]
          }
        ]
      }
    ]
  }
]

function getFallbackEstruturaByCursoSlug(slug: string): EstruturaCurricular | undefined {
  return fallbackEstruturasCurriculares.find(e => e.cursoSlug === slug)
}

// Transform database curso to display format
function transformCursoToDisplay(dbCurso: Curso & { coordenador?: { nome: string } | null }): CursoDisplay {
  const tipo: 'graduacao' | 'pos-graduacao' = dbCurso.tipo === 'pos-graduacao' ? 'pos-graduacao' : 'graduacao'
  return {
    id: dbCurso.id,
    nome: dbCurso.nome,
    tipo,
    duracao: dbCurso.duracao || '4 anos',
    descricao: dbCurso.descricao || '',
    coordenador: dbCurso.coordenador?.nome || '',
    slug: dbCurso.slug,
    objetivos: dbCurso.objetivos || [],
    perfil: dbCurso.perfil_graduado || '',
    areas: dbCurso.saidas_profissionais || [],
    pdfUrl: dbCurso.pdf_url,
  }
}

export async function getCursos(): Promise<CursoDisplay[]> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return fallbackCursos
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        coordenador:professores!cursos_coordenador_id_fkey(nome)
      `)
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformCursoToDisplay)
    }
    
    return fallbackCursos
  } catch {
    return fallbackCursos
  }
}

export async function getCursoBySlug(slug: string): Promise<CursoDisplay | undefined> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return fallbackCursos.find(c => c.slug === slug)
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        coordenador:professores!cursos_coordenador_id_fkey(nome)
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    if (data) {
      return transformCursoToDisplay(data)
    }
    
    return fallbackCursos.find(c => c.slug === slug)
  } catch {
    return fallbackCursos.find(c => c.slug === slug)
  }
}

export async function getEstruturaCurricular(cursoSlug: string): Promise<EstruturaCurricular | undefined> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  }

  try {
    // First get the curso to get its id and name
    const { data: cursoData, error: cursoError } = await supabase
      .from('cursos')
      .select('id, nome, pdf_url')
      .eq('slug', cursoSlug)
      .single()
    
    if (cursoError) throw cursoError
    if (!cursoData) return getFallbackEstruturaByCursoSlug(cursoSlug)

    // Now fetch disciplinas using the curso id
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoData.id)
      .order('ano')
      .order('semestre')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      // Group disciplinas by ano and semestre
      const anosMap = new Map<number, Map<number, CurriculumDisciplina[]>>()
      
      for (const disc of data) {
        const ano = disc.ano || 1
        const semestre = disc.semestre || 1
        
        if (!anosMap.has(ano)) {
          anosMap.set(ano, new Map())
        }
        const semestreMap = anosMap.get(ano)!
        if (!semestreMap.has(semestre)) {
          semestreMap.set(semestre, [])
        }
        
        const professor = disc.professor as { nome?: string; slug?: string } | null
        semestreMap.get(semestre)!.push({
          nome: disc.nome,
          professor: professor?.nome || 'A definir',
          professorSlug: professor?.slug || '',
          creditos: disc.creditos || 0,
        })
      }
      
      // Convert to our nested structure
      const anos: AnoCurricular[] = []
      const sortedAnos = Array.from(anosMap.keys()).sort((a, b) => a - b)
      
      for (const ano of sortedAnos) {
        const semestreMap = anosMap.get(ano)!
        const semestres: Semestre[] = []
        const sortedSemestres = Array.from(semestreMap.keys()).sort((a, b) => a - b)
        
        for (const semestre of sortedSemestres) {
          semestres.push({
            semestre,
            disciplinas: semestreMap.get(semestre)!,
          })
        }
        
        anos.push({ ano, semestres })
      }
      
      return {
        cursoSlug,
        cursoNome: cursoData.nome,
        pdfUrl: cursoData.pdf_url,
        anos,
      }
    }
    
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  } catch {
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  }
}

// Async helper functions for filtering by type
export async function getCursosGraduacao(): Promise<CursoDisplay[]> {
  const cursos = await getCursos()
  return cursos.filter(c => c.tipo === 'graduacao')
}

export async function getCursosPosGraduacao(): Promise<CursoDisplay[]> {
  const cursos = await getCursos()
  return cursos.filter(c => c.tipo === 'pos-graduacao')
}

// Export all course slugs for static generation
export function getAllCursoSlugs(): string[] {
  return fallbackCursos.map(c => c.slug)
}
