export interface Professor {
  id: string
  slug: string
  nome: string
  titulacao: string
  areas: string[]
  email: string
  foto?: string
  departamento: string
  biografia: string
  formacao: string[]
  disciplinas: string[]
  publicacoes: {
    titulo: string
    ano: number
    tipo: 'artigo' | 'livro' | 'capitulo'
    revista?: string
  }[]
  telefone?: string
  gabinete?: string
}

export const professores: Professor[] = [
  {
    id: '1',
    slug: 'antonio-silva',
    nome: 'Prof. Dr. António Silva',
    titulacao: 'Doutor em Psicologia',
    areas: ['Psicologia Clínica', 'Psicoterapia', 'Avaliação Psicológica'],
    email: 'antonio.silva@fcsh.edu',
    departamento: 'Psicologia Clínica',
    biografia: 'António Silva é Professor Catedrático de Psicologia na FCSH, com mais de 20 anos de experiência em docência e investigação. Especialista em Psicologia Clínica, tem desenvolvido trabalho relevante na área da avaliação e intervenção psicológica.',
    formacao: [
      'Doutoramento em Psicologia - Universidade de Lisboa (2005)',
      'Mestrado em Psicologia Clínica - Universidade de Coimbra (2000)',
      'Licenciatura em Psicologia - Universidade do Porto (1997)'
    ],
    disciplinas: ['Introdução à Psicologia Clínica', 'Psicologia Clínica I', 'Avaliação Psicológica'],
    publicacoes: [
      { titulo: 'Intervenção Psicológica em Contexto Clínico', ano: 2022, tipo: 'livro' },
      { titulo: 'Avaliação Psicológica: Métodos e Instrumentos', ano: 2020, tipo: 'artigo', revista: 'Revista Portuguesa de Psicologia' }
    ],
    telefone: '+244 923 456 789',
    gabinete: 'Sala 201, Bloco A'
  },
  {
    id: '2',
    slug: 'teresa-oliveira',
    nome: 'Prof.ª Dr.ª Teresa Oliveira',
    titulacao: 'Doutora em Psicologia Clínica',
    areas: ['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
    email: 'teresa.oliveira@fcsh.edu',
    departamento: 'Psicologia Clínica',
    biografia: 'Teresa Oliveira é Professora Associada e Coordenadora do Mestrado em Psicologia Clínica. Especialista em neuropsicologia, desenvolve investigação sobre avaliação neuropsicológica e intervenção clínica.',
    formacao: [
      'Doutoramento em Psicologia Clínica - Universidade de Lisboa (2007)',
      'Mestrado em Neuropsicologia - Universidade de Coimbra (2002)',
      'Licenciatura em Psicologia - Universidade do Porto (1998)'
    ],
    disciplinas: ['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
    publicacoes: [
      { titulo: 'Avaliação Neuropsicológica: Fundamentos e Aplicações', ano: 2021, tipo: 'livro' },
      { titulo: 'Psicopatologia do Desenvolvimento', ano: 2019, tipo: 'artigo', revista: 'Análise Psicológica' }
    ],
    telefone: '+244 923 456 793',
    gabinete: 'Sala 205, Bloco A'
  },
  {
    id: '3',
    slug: 'miguel-sousa',
    nome: 'Prof. Dr. Miguel Sousa',
    titulacao: 'Doutor em Psicologia',
    areas: ['Psicologia Organizacional', 'Recursos Humanos', 'Liderança'],
    email: 'miguel.sousa@fcsh.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Miguel Sousa é Professor Catedrático de Psicologia, especializado em psicologia organizacional e gestão de recursos humanos. Coordenador do curso de Psicologia do Trabalho e das Organizações.',
    formacao: [
      'Doutoramento em Psicologia Organizacional - ISCTE (2015)',
      'Mestrado em Gestão de Recursos Humanos - Universidade do Minho (2010)',
      'Licenciatura em Psicologia - Universidade de Lisboa (2006)'
    ],
    disciplinas: ['Psicologia Organizacional', 'Gestão de Recursos Humanos', 'Liderança'],
    publicacoes: [
      { titulo: 'Psicologia Organizacional: Fundamentos e Aplicações', ano: 2023, tipo: 'livro' },
      { titulo: 'Liderança e Motivação nas Organizações', ano: 2021, tipo: 'artigo', revista: 'Psychologica' }
    ],
    telefone: '+244 923 456 799',
    gabinete: 'Sala 209, Bloco A'
  },
  {
    id: '4',
    slug: 'pedro-martins',
    nome: 'Prof. Dr. Pedro Martins',
    titulacao: 'Doutor em Psicologia Social',
    areas: ['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
    email: 'pedro.martins@fcsh.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Pedro Martins é Professor Auxiliar de Psicologia, especializado em psicologia social e comunitária. Desenvolve projetos de intervenção comunitária e investigação sobre dinâmicas de grupo.',
    formacao: [
      'Doutoramento em Psicologia Social - Universidade de Lisboa (2012)',
      'Mestrado em Psicologia Comunitária - ISPA (2007)',
      'Licenciatura em Psicologia - Universidade do Porto (2003)'
    ],
    disciplinas: ['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
    publicacoes: [
      { titulo: 'Intervenção Comunitária: Fundamentos e Práticas', ano: 2021, tipo: 'livro' },
      { titulo: 'Dinâmicas de Grupo em Contextos Organizacionais', ano: 2019, tipo: 'artigo', revista: 'Psicologia: Teoria e Pesquisa' }
    ],
    telefone: '+244 923 456 795',
    gabinete: 'Sala 207, Bloco A'
  },
  {
    id: '5',
    slug: 'ana-rodrigues',
    nome: 'Prof.ª Dr.ª Ana Rodrigues',
    titulacao: 'Doutora em Linguística',
    areas: ['Linguística Aplicada', 'Tradução', 'Ensino de Línguas'],
    email: 'ana.rodrigues@fcsh.edu',
    departamento: 'Línguas',
    biografia: 'Ana Rodrigues é Professora Associada e Coordenadora do curso de Línguas. Especialista em linguística aplicada e tradução, desenvolve investigação sobre ensino de línguas e comunicação intercultural.',
    formacao: [
      'Doutoramento em Linguística - Universidade do Minho (2010)',
      'Mestrado em Tradução - Universidade de Coimbra (2005)',
      'Licenciatura em Línguas e Literaturas Modernas - Universidade Nova de Lisboa (2001)'
    ],
    disciplinas: ['Teoria da Tradução', 'Linguística Aplicada', 'Português'],
    publicacoes: [
      { titulo: 'Tradução e Comunicação Intercultural', ano: 2022, tipo: 'livro' },
      { titulo: 'Ensino de Línguas no Contexto Africano', ano: 2020, tipo: 'artigo', revista: 'Linguística & Ensino' }
    ],
    telefone: '+244 923 456 792',
    gabinete: 'Sala 203, Bloco C'
  },
  {
    id: '6',
    slug: 'ricardo-almeida',
    nome: 'Prof. Dr. Ricardo Almeida',
    titulacao: 'Doutor em Estudos Literários',
    areas: ['Literatura Comparada', 'Literaturas Africanas', 'Língua Inglesa'],
    email: 'ricardo.almeida@fcsh.edu',
    departamento: 'Línguas',
    biografia: 'Ricardo Almeida é Professor Auxiliar de Línguas, especializado em literatura comparada e literaturas africanas de expressão inglesa.',
    formacao: [
      'Doutoramento em Estudos Literários - Universidade Nova de Lisboa (2013)',
      'Mestrado em Literatura Comparada - ISCTE (2008)',
      'Licenciatura em Línguas e Literaturas - Universidade Lusófona (2004)'
    ],
    disciplinas: ['Literatura Inglesa', 'Língua Inglesa', 'Literatura Africana'],
    publicacoes: [
      { titulo: 'Literaturas Africanas de Expressão Inglesa', ano: 2023, tipo: 'livro' },
      { titulo: 'Identidade e Literatura no Contexto Pós-Colonial', ano: 2021, tipo: 'artigo', revista: 'Revista de Estudos Literários' }
    ],
    telefone: '+244 923 456 797',
    gabinete: 'Sala 205, Bloco C'
  },
  {
    id: '7',
    slug: 'carlos-ferreira',
    nome: 'Prof. Dr. Carlos Ferreira',
    titulacao: 'Doutor em Gestão',
    areas: ['Gestão Social', 'Políticas Públicas', 'Empreendedorismo'],
    email: 'carlos.ferreira@fcsh.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Carlos Ferreira é Professor Associado e Coordenador do Mestrado em Gestão Social. Especializado em gestão de organizações do terceiro setor e empreendedorismo social.',
    formacao: [
      'Doutoramento em Gestão - ISCTE (2009)',
      'Mestrado em Administração Pública - Universidade do Minho (2004)',
      'Licenciatura em Gestão - Universidade Católica (2000)'
    ],
    disciplinas: ['Gestão de Organizações', 'Políticas Públicas', 'Empreendedorismo Social'],
    publicacoes: [
      { titulo: 'Gestão Social: Teoria e Prática', ano: 2022, tipo: 'livro' },
      { titulo: 'Empreendedorismo Social em África', ano: 2020, tipo: 'artigo', revista: 'Revista de Gestão Social' }
    ],
    telefone: '+244 923 456 794',
    gabinete: 'Sala 108, Bloco B'
  },
  {
    id: '8',
    slug: 'maria-fernandes',
    nome: 'Prof.ª Dr.ª Maria Fernandes',
    titulacao: 'Doutora em Psicologia',
    areas: ['Saúde Ocupacional', 'Stress e Burnout', 'Bem-estar no Trabalho'],
    email: 'maria.fernandes@fcsh.edu',
    departamento: 'Psicologia do Trabalho e das Organizações',
    biografia: 'Maria Fernandes é Professora Auxiliar de Psicologia, com investigação nas áreas de saúde ocupacional, stress e bem-estar no trabalho.',
    formacao: [
      'Doutoramento em Psicologia - Universidade de Coimbra (2011)',
      'Mestrado em Psicologia da Saúde - Universidade do Porto (2006)',
      'Licenciatura em Psicologia - ISCTE (2002)'
    ],
    disciplinas: ['Saúde Ocupacional', 'Psicologia da Saúde no Trabalho', 'Bem-estar Organizacional'],
    publicacoes: [
      { titulo: 'Saúde Mental no Trabalho', ano: 2022, tipo: 'livro' },
      { titulo: 'Stress e Burnout em Organizações Africanas', ano: 2020, tipo: 'artigo', revista: 'Psicologia: Saúde & Doenças' }
    ],
    telefone: '+244 923 456 796',
    gabinete: 'Sala 304, Bloco A'
  },
  {
    id: '9',
    slug: 'joao-santos',
    nome: 'Prof. Dr. João Santos',
    titulacao: 'Doutor em Línguas e Literaturas',
    areas: ['Língua Francesa', 'Tradução Literária', 'Francofonia'],
    email: 'joao.santos@fcsh.edu',
    departamento: 'Línguas',
    biografia: 'João Santos é Professor Auxiliar de Línguas, especializado em língua e literatura francesa, com foco na tradução literária e estudos francófonos.',
    formacao: [
      'Doutoramento em Línguas e Literaturas - Universidade de Lisboa (2014)',
      'Mestrado em Tradução Literária - Universidade de Coimbra (2009)',
      'Licenciatura em Línguas e Literaturas - Universidade Nova de Lisboa (2005)'
    ],
    disciplinas: ['Língua Francesa', 'Literatura Francesa', 'Tradução Literária'],
    publicacoes: [
      { titulo: 'Tradução Literária: Teoria e Prática', ano: 2023, tipo: 'livro' },
      { titulo: 'A Francofonia Africana na Literatura', ano: 2021, tipo: 'artigo', revista: 'Estudos Francófonos' }
    ],
    telefone: '+244 923 456 800',
    gabinete: 'Sala 207, Bloco C'
  }
]

export function getProfessorBySlug(slug: string): Professor | undefined {
  return professores.find(p => p.slug === slug)
}

export function getProfessorById(id: string): Professor | undefined {
  return professores.find(p => p.id === id)
}
