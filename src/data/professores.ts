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
    departamento: 'Psicologia',
    biografia: 'António Silva é Professor Catedrático de Psicologia na FCSH, com mais de 20 anos de experiência em docência e investigação. Especialista em Psicologia Clínica, tem desenvolvido trabalho relevante na área da avaliação e intervenção psicológica.',
    formacao: [
      'Doutoramento em Psicologia - Universidade de Lisboa (2005)',
      'Mestrado em Psicologia Clínica - Universidade de Coimbra (2000)',
      'Licenciatura em Psicologia - Universidade do Porto (1997)'
    ],
    disciplinas: ['Introdução à Psicologia', 'Psicologia Clínica I', 'Avaliação Psicológica'],
    publicacoes: [
      { titulo: 'Intervenção Psicológica em Contexto Clínico', ano: 2022, tipo: 'livro' },
      { titulo: 'Avaliação Psicológica: Métodos e Instrumentos', ano: 2020, tipo: 'artigo', revista: 'Revista Portuguesa de Psicologia' }
    ],
    telefone: '+244 923 456 789',
    gabinete: 'Sala 201, Bloco A'
  },
  {
    id: '2',
    slug: 'maria-santos',
    nome: 'Prof.ª Dr.ª Maria Santos',
    titulacao: 'Doutora em Serviço Social',
    areas: ['Política Social', 'Direitos Humanos', 'Trabalho Social'],
    email: 'maria.santos@fcsh.edu',
    departamento: 'Serviço Social',
    biografia: 'Maria Santos é Professora Associada de Serviço Social, com vasta experiência em políticas públicas e direitos humanos. Coordena projetos de investigação na área da intervenção social.',
    formacao: [
      'Doutoramento em Serviço Social - Universidade Católica Portuguesa (2008)',
      'Mestrado em Política Social - ISCTE (2003)',
      'Licenciatura em Serviço Social - ISSSL (1999)'
    ],
    disciplinas: ['Fundamentos do Serviço Social', 'Política Social', 'Direitos Humanos'],
    publicacoes: [
      { titulo: 'Políticas Sociais em Angola: Desafios e Perspetivas', ano: 2021, tipo: 'livro' },
      { titulo: 'Intervenção Social e Direitos Humanos', ano: 2019, tipo: 'artigo', revista: 'Serviço Social & Sociedade' }
    ],
    telefone: '+244 923 456 790',
    gabinete: 'Sala 105, Bloco B'
  },
  {
    id: '3',
    slug: 'joao-costa',
    nome: 'Prof. Dr. João Costa',
    titulacao: 'Doutor em Sociologia',
    areas: ['Sociologia Urbana', 'Metodologia de Pesquisa', 'Teoria Social'],
    email: 'joao.costa@fcsh.edu',
    departamento: 'Sociologia',
    biografia: 'João Costa é Professor Catedrático de Sociologia, especializado em estudos urbanos e metodologia de investigação social. Tem coordenado diversos projetos de pesquisa sobre dinâmicas sociais em contextos urbanos africanos.',
    formacao: [
      'Doutoramento em Sociologia - Universidade Nova de Lisboa (2004)',
      'Mestrado em Sociologia Urbana - ISCTE (1999)',
      'Licenciatura em Sociologia - Universidade de Coimbra (1995)'
    ],
    disciplinas: ['Introdução à Sociologia', 'Metodologia de Investigação Social', 'Sociologia Urbana'],
    publicacoes: [
      { titulo: 'Cidades Africanas: Dinâmicas e Transformações', ano: 2023, tipo: 'livro' },
      { titulo: 'Metodologias Qualitativas em Pesquisa Social', ano: 2021, tipo: 'capitulo' }
    ],
    telefone: '+244 923 456 791',
    gabinete: 'Sala 302, Bloco A'
  },
  {
    id: '4',
    slug: 'ana-rodrigues',
    nome: 'Prof.ª Dr.ª Ana Rodrigues',
    titulacao: 'Doutora em Comunicação',
    areas: ['Jornalismo', 'Comunicação Digital', 'Semiótica'],
    email: 'ana.rodrigues@fcsh.edu',
    departamento: 'Comunicação Social',
    biografia: 'Ana Rodrigues é Professora Associada de Comunicação Social, com especialização em jornalismo e comunicação digital. Tem desenvolvido investigação sobre o impacto das novas tecnologias na comunicação social.',
    formacao: [
      'Doutoramento em Ciências da Comunicação - Universidade do Minho (2010)',
      'Mestrado em Jornalismo - Universidade de Coimbra (2005)',
      'Licenciatura em Comunicação Social - Universidade Nova de Lisboa (2001)'
    ],
    disciplinas: ['Teoria da Comunicação', 'Jornalismo Digital', 'Semiótica'],
    publicacoes: [
      { titulo: 'Jornalismo na Era Digital', ano: 2022, tipo: 'livro' },
      { titulo: 'Comunicação e Redes Sociais', ano: 2020, tipo: 'artigo', revista: 'Media & Jornalismo' }
    ],
    telefone: '+244 923 456 792',
    gabinete: 'Sala 203, Bloco C'
  },
  {
    id: '5',
    slug: 'teresa-oliveira',
    nome: 'Prof.ª Dr.ª Teresa Oliveira',
    titulacao: 'Doutora em Psicologia Clínica',
    areas: ['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
    email: 'teresa.oliveira@fcsh.edu',
    departamento: 'Psicologia',
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
    id: '6',
    slug: 'carlos-ferreira',
    nome: 'Prof. Dr. Carlos Ferreira',
    titulacao: 'Doutor em Gestão',
    areas: ['Gestão Social', 'Políticas Públicas', 'Empreendedorismo'],
    email: 'carlos.ferreira@fcsh.edu',
    departamento: 'Serviço Social',
    biografia: 'Carlos Ferreira é Professor Associado e Coordenador do Mestrado em Gestão Social. Especializado em gestão de organizações do terceiro setor e empreendedorismo social.',
    formacao: [
      'Doutoramento em Gestão - ISCTE (2009)',
      'Mestrado em Administração Pública - Universidade do Minho (2004)',
      'Licenciatura em Gestão - Universidade Católica (2000)'
    ],
    disciplinas: ['Gestão de Organizações Sociais', 'Políticas Públicas', 'Empreendedorismo Social'],
    publicacoes: [
      { titulo: 'Gestão Social: Teoria e Prática', ano: 2022, tipo: 'livro' },
      { titulo: 'Empreendedorismo Social em África', ano: 2020, tipo: 'artigo', revista: 'Revista de Gestão Social' }
    ],
    telefone: '+244 923 456 794',
    gabinete: 'Sala 108, Bloco B'
  },
  {
    id: '7',
    slug: 'pedro-martins',
    nome: 'Prof. Dr. Pedro Martins',
    titulacao: 'Doutor em Psicologia Social',
    areas: ['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
    email: 'pedro.martins@fcsh.edu',
    departamento: 'Psicologia',
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
    id: '8',
    slug: 'luisa-fernandes',
    nome: 'Prof.ª Dr.ª Luísa Fernandes',
    titulacao: 'Doutora em Sociologia',
    areas: ['Sociologia da Educação', 'Género', 'Desigualdades Sociais'],
    email: 'luisa.fernandes@fcsh.edu',
    departamento: 'Sociologia',
    biografia: 'Luísa Fernandes é Professora Auxiliar de Sociologia, com investigação nas áreas de sociologia da educação, estudos de género e desigualdades sociais.',
    formacao: [
      'Doutoramento em Sociologia - Universidade de Coimbra (2011)',
      'Mestrado em Sociologia da Educação - Universidade do Porto (2006)',
      'Licenciatura em Sociologia - ISCTE (2002)'
    ],
    disciplinas: ['Sociologia da Educação', 'Estudos de Género', 'Desigualdades Sociais'],
    publicacoes: [
      { titulo: 'Educação e Desigualdade Social', ano: 2022, tipo: 'livro' },
      { titulo: 'Género e Poder nas Organizações', ano: 2020, tipo: 'artigo', revista: 'Sociologia: Problemas e Práticas' }
    ],
    telefone: '+244 923 456 796',
    gabinete: 'Sala 304, Bloco A'
  },
  {
    id: '9',
    slug: 'ricardo-almeida',
    nome: 'Prof. Dr. Ricardo Almeida',
    titulacao: 'Doutor em Comunicação',
    areas: ['Publicidade', 'Marketing Digital', 'Comportamento do Consumidor'],
    email: 'ricardo.almeida@fcsh.edu',
    departamento: 'Comunicação Social',
    biografia: 'Ricardo Almeida é Professor Auxiliar de Comunicação Social, especializado em publicidade e marketing digital. Desenvolve investigação sobre comportamento do consumidor e estratégias de comunicação.',
    formacao: [
      'Doutoramento em Ciências da Comunicação - Universidade Nova de Lisboa (2013)',
      'Mestrado em Marketing - ISCTE (2008)',
      'Licenciatura em Publicidade - Universidade Lusófona (2004)'
    ],
    disciplinas: ['Publicidade', 'Marketing Digital', 'Comportamento do Consumidor'],
    publicacoes: [
      { titulo: 'Marketing Digital: Estratégias e Práticas', ano: 2023, tipo: 'livro' },
      { titulo: 'Publicidade e Consumo na Era Digital', ano: 2021, tipo: 'artigo', revista: 'Comunicação e Sociedade' }
    ],
    telefone: '+244 923 456 797',
    gabinete: 'Sala 205, Bloco C'
  },
  {
    id: '10',
    slug: 'carla-mendes',
    nome: 'Prof.ª Dr.ª Carla Mendes',
    titulacao: 'Doutora em Serviço Social',
    areas: ['Intervenção Social', 'Família e Infância', 'Gerontologia Social'],
    email: 'carla.mendes@fcsh.edu',
    departamento: 'Serviço Social',
    biografia: 'Carla Mendes é Professora Auxiliar de Serviço Social, com especialização em intervenção com famílias, proteção de menores e gerontologia social.',
    formacao: [
      'Doutoramento em Serviço Social - Universidade Católica (2014)',
      'Mestrado em Proteção de Menores - Universidade de Coimbra (2009)',
      'Licenciatura em Serviço Social - ISSSL (2005)'
    ],
    disciplinas: ['Intervenção Social com Famílias', 'Proteção de Menores', 'Gerontologia Social'],
    publicacoes: [
      { titulo: 'Intervenção Social com Famílias Vulneráveis', ano: 2022, tipo: 'livro' },
      { titulo: 'Envelhecimento e Políticas Sociais', ano: 2020, tipo: 'artigo', revista: 'Intervenção Social' }
    ],
    telefone: '+244 923 456 798',
    gabinete: 'Sala 110, Bloco B'
  },
  {
    id: '11',
    slug: 'miguel-sousa',
    nome: 'Prof. Dr. Miguel Sousa',
    titulacao: 'Doutor em Psicologia',
    areas: ['Psicologia Organizacional', 'Recursos Humanos', 'Liderança'],
    email: 'miguel.sousa@fcsh.edu',
    departamento: 'Psicologia',
    biografia: 'Miguel Sousa é Professor Auxiliar de Psicologia, especializado em psicologia organizacional e gestão de recursos humanos. Desenvolve consultoria e investigação em contextos empresariais.',
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
    id: '12',
    slug: 'sofia-pereira',
    nome: 'Prof.ª Dr.ª Sofia Pereira',
    titulacao: 'Doutora em Sociologia',
    areas: ['Sociologia do Trabalho', 'Movimentos Sociais', 'Globalização'],
    email: 'sofia.pereira@fcsh.edu',
    departamento: 'Sociologia',
    biografia: 'Sofia Pereira é Professora Auxiliar de Sociologia, com investigação nas áreas de sociologia do trabalho, movimentos sociais e processos de globalização.',
    formacao: [
      'Doutoramento em Sociologia - Universidade Nova de Lisboa (2016)',
      'Mestrado em Sociologia do Trabalho - ISCTE (2011)',
      'Licenciatura em Sociologia - Universidade de Coimbra (2007)'
    ],
    disciplinas: ['Sociologia do Trabalho', 'Movimentos Sociais', 'Globalização'],
    publicacoes: [
      { titulo: 'Trabalho e Globalização: Perspetivas Críticas', ano: 2023, tipo: 'livro' },
      { titulo: 'Movimentos Sociais na Era Digital', ano: 2021, tipo: 'artigo', revista: 'Revista Crítica de Ciências Sociais' }
    ],
    telefone: '+244 923 456 800',
    gabinete: 'Sala 306, Bloco A'
  }
]

export function getProfessorBySlug(slug: string): Professor | undefined {
  return professores.find(p => p.slug === slug)
}

export function getProfessorById(id: string): Professor | undefined {
  return professores.find(p => p.id === id)
}
