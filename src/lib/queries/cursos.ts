import { supabase, isSupabaseConfigured } from '@/lib/supabase'

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
}

// Structure for curriculum
export interface Disciplina {
  nome: string
  professor: string
  professorSlug: string
  creditos: number
}

export interface Semestre {
  semestre: number
  disciplinas: Disciplina[]
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
    duracao: '4 anos',
    descricao: 'O curso de Psicologia do Trabalho e das Organizações forma profissionais capacitados para compreender e intervir nos processos psicológicos em contextos organizacionais, desenvolvendo competências em gestão de pessoas, comportamento organizacional e saúde ocupacional.',
    coordenador: 'Prof. Dr. Miguel Sousa',
    slug: 'psicologia-trabalho-organizacoes',
    objetivos: [
      'Formar profissionais com sólida base teórica e prática em Psicologia Organizacional',
      'Desenvolver competências para avaliação e intervenção em contextos de trabalho',
      'Capacitar para gestão de recursos humanos e desenvolvimento organizacional',
      'Promover a investigação científica na área do trabalho e das organizações',
    ],
    perfil: 'O egresso será capaz de atuar em contextos organizacionais, desenvolvendo avaliações, intervenções e pesquisas na área da Psicologia do Trabalho, gestão de pessoas e comportamento organizacional.',
    areas: ['Psicologia Organizacional', 'Gestão de Recursos Humanos', 'Comportamento Organizacional', 'Saúde Ocupacional'],
  },
  {
    id: '2',
    nome: 'Licenciatura em Psicologia Clínica',
    tipo: 'graduacao',
    duracao: '4 anos',
    descricao: 'O curso de Psicologia Clínica forma profissionais capacitados para compreender, avaliar e intervir em processos de saúde mental, desenvolvendo competências em avaliação psicológica, psicoterapia e intervenção clínica.',
    coordenador: 'Prof. Dr. António Silva',
    slug: 'psicologia-clinica',
    objetivos: [
      'Formar profissionais com sólida base teórica e prática em Psicologia Clínica',
      'Desenvolver competências para avaliação e intervenção psicológica',
      'Capacitar para atuação ética e socialmente responsável em saúde mental',
      'Promover a investigação científica na área clínica',
    ],
    perfil: 'O egresso será capaz de atuar em contextos clínicos e de saúde, desenvolvendo avaliações, diagnósticos e intervenções psicoterapêuticas.',
    areas: ['Psicologia Clínica', 'Avaliação Psicológica', 'Psicoterapia', 'Saúde Mental'],
  },
  {
    id: '3',
    nome: 'Licenciatura em Línguas',
    tipo: 'graduacao',
    duracao: '4 anos',
    descricao: 'O curso de Línguas forma profissionais capacitados para atuar nas áreas de tradução, interpretação, ensino de línguas e comunicação intercultural, com domínio de múltiplas línguas e suas literaturas.',
    coordenador: 'Prof.ª Dr.ª Ana Rodrigues',
    slug: 'linguas',
    objetivos: [
      'Formar profissionais com domínio de múltiplas línguas estrangeiras',
      'Desenvolver competências em tradução e interpretação',
      'Capacitar para o ensino de línguas em diferentes contextos',
      'Promover o conhecimento das literaturas e culturas associadas às línguas estudadas',
    ],
    perfil: 'O egresso será capaz de atuar em tradução, interpretação, ensino de línguas, assessoria linguística e comunicação intercultural.',
    areas: ['Tradução', 'Interpretação', 'Ensino de Línguas', 'Literaturas'],
  },
  {
    id: '4',
    nome: 'Mestrado em Psicologia Clínica',
    tipo: 'pos-graduacao',
    duracao: '2 anos',
    descricao: 'O Mestrado em Psicologia Clínica forma especialistas em avaliação, diagnóstico e intervenção psicológica, com ênfase na investigação científica e na prática clínica baseada em evidências.',
    coordenador: 'Prof.ª Dr.ª Teresa Oliveira',
    slug: 'mestrado-psicologia-clinica',
    objetivos: [
      'Aprofundar conhecimentos em avaliação psicológica',
      'Desenvolver competências avançadas em intervenção clínica',
      'Formar investigadores na área da Psicologia Clínica',
      'Promover a prática clínica baseada em evidências',
    ],
    perfil: 'O egresso será um especialista em Psicologia Clínica, capaz de desenvolver investigação científica e atuar em contextos clínicos com elevado nível de competência.',
    areas: ['Avaliação Psicológica', 'Psicoterapia', 'Neuropsicologia', 'Psicopatologia'],
  },
  {
    id: '5',
    nome: 'Mestrado em Gestão Social',
    tipo: 'pos-graduacao',
    duracao: '2 anos',
    descricao: 'O Mestrado em Gestão Social forma profissionais especializados na gestão de organizações sociais, projetos de desenvolvimento e políticas públicas.',
    coordenador: 'Prof. Dr. Carlos Ferreira',
    slug: 'mestrado-gestao-social',
    objetivos: [
      'Formar gestores sociais com visão estratégica',
      'Desenvolver competências em gestão de projetos sociais',
      'Capacitar para avaliação de políticas públicas',
      'Promover a inovação social e empreendedorismo',
    ],
    perfil: 'O egresso será capaz de gerir organizações do terceiro setor, coordenar projetos de desenvolvimento social e avaliar políticas públicas.',
    areas: ['Gestão de ONGs', 'Políticas Públicas', 'Empreendedorismo Social', 'Avaliação de Projetos'],
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

export async function getCursos(): Promise<CursoDisplay[]> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return fallbackCursos
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      .order('nome')
    
    if (error) throw error
    
    // If we got data from Supabase, try to use it
    // The database schema may differ from our display format, so we need to transform
    // For now, merge with fallback data to ensure all fields are present
    if (data && data.length > 0) {
      return data.map(dbCurso => {
        // Find matching fallback to get additional fields not in database
        const fallback = fallbackCursos.find(c => c.slug === dbCurso.slug)
        return {
          id: dbCurso.id,
          nome: dbCurso.nome,
          tipo: fallback?.tipo || 'graduacao',
          duracao: dbCurso.duracao || fallback?.duracao || '4 anos',
          descricao: dbCurso.descricao || fallback?.descricao || '',
          coordenador: fallback?.coordenador || '',
          slug: dbCurso.slug,
          objetivos: fallback?.objetivos || [],
          perfil: fallback?.perfil || '',
          areas: fallback?.areas || [],
        }
      })
    }
    
    return fallbackCursos
  } catch {
    // Silently fall back to inline data on error to ensure the page still renders
    // This is intentional - we prioritize showing content over error logging
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
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    // Find matching fallback to get additional fields not in database
    const fallback = fallbackCursos.find(c => c.slug === slug)
    
    if (data) {
      return {
        id: data.id,
        nome: data.nome,
        tipo: fallback?.tipo || 'graduacao',
        duracao: data.duracao || fallback?.duracao || '4 anos',
        descricao: data.descricao || fallback?.descricao || '',
        coordenador: fallback?.coordenador || '',
        slug: data.slug,
        objetivos: fallback?.objetivos || [],
        perfil: fallback?.perfil || '',
        areas: fallback?.areas || [],
      }
    }
    
    return fallback
  } catch {
    // Silently fall back to inline data on error to ensure the page still renders
    // This is intentional - we prioritize showing content over error logging
    return fallbackCursos.find(c => c.slug === slug)
  }
}

export async function getEstruturaCurricular(cursoSlug: string): Promise<EstruturaCurricular | undefined> {
  // Use fallback data if Supabase is not configured
  if (!isSupabaseConfigured || !supabase) {
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoSlug)
      .order('ano')
      .order('semestre')
    
    if (error) throw error
    
    // If we got data from Supabase, try to transform it
    // The database structure is flat (disciplinas with ano/semestre), 
    // while our display format is nested (anos > semestres > disciplinas)
    if (data && data.length > 0) {
      const fallback = getFallbackEstruturaByCursoSlug(cursoSlug)
      
      // Group disciplinas by ano and semestre
      const anosMap = new Map<number, Map<number, Disciplina[]>>()
      
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
        cursoNome: fallback?.cursoNome || '',
        pdfUrl: fallback?.pdfUrl,
        anos,
      }
    }
    
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  } catch {
    // Silently fall back to inline data on error to ensure the page still renders
    // This is intentional - we prioritize showing content over error logging
    return getFallbackEstruturaByCursoSlug(cursoSlug)
  }
}

// Helper functions for filtering
export function getCursosGraduacao(): CursoDisplay[] {
  return fallbackCursos.filter(c => c.tipo === 'graduacao')
}

export function getCursosPosGraduacao(): CursoDisplay[] {
  return fallbackCursos.filter(c => c.tipo === 'pos-graduacao')
}
