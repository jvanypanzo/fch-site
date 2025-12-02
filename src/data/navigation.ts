import { NavItem } from '@/types'

export const navigationItems: NavItem[] = [
  {
    title: 'Sobre',
    href: '/sobre',
    children: [
      { title: 'História', href: '/sobre/historia' },
      { title: 'Missão, Visão e Valores', href: '/sobre/missao-visao-valores' },
      { title: 'Estrutura Organizacional', href: '/sobre/estrutura-organizacional' },
      { title: 'Direção', href: '/sobre/direcao' },
      {
        title: 'Secretaria',
        href: '/sobre/secretaria',
        children: [
          { title: 'Serviços', href: '/sobre/secretaria/servicos' },
          { title: 'Formulários', href: '/sobre/secretaria/formularios' },
          { title: 'Horários e Contatos', href: '/sobre/secretaria/horarios-contatos' },
        ],
      },
    ],
  },
  {
    title: 'Cursos',
    href: '/cursos',
    children: [
      {
        title: 'Graduação',
        href: '/cursos/graduacao',
        children: [
          { title: 'Psicologia', href: '/cursos/graduacao/psicologia' },
          { title: 'Serviço Social', href: '/cursos/graduacao/servico-social' },
          { title: 'Sociologia', href: '/cursos/graduacao/sociologia' },
          { title: 'Comunicação Social', href: '/cursos/graduacao/comunicacao-social' },
        ],
      },
      {
        title: 'Pós-Graduação',
        href: '/cursos/pos-graduacao',
        children: [
          { title: 'Mestrado em Psicologia Clínica', href: '/cursos/pos-graduacao/mestrado-psicologia-clinica' },
          { title: 'Mestrado em Gestão Social', href: '/cursos/pos-graduacao/mestrado-gestao-social' },
        ],
      },
    ],
  },
  {
    title: 'Corpo Docente',
    href: '/corpo-docente',
  },
  {
    title: 'Eventos',
    href: '/eventos',
    children: [
      { title: 'Eventos Futuros', href: '/eventos/futuros' },
      { title: 'Eventos Realizados', href: '/eventos/realizados' },
    ],
  },
  {
    title: 'Associação de Estudantes',
    href: '/associacao-estudantes',
    children: [
      { title: 'Membros', href: '/associacao-estudantes/membros' },
      { title: 'Projetos', href: '/associacao-estudantes/projetos' },
      { title: 'Contatos', href: '/associacao-estudantes/contatos' },
    ],
  },
  {
    title: 'Coordenação Extracurricular',
    href: '/coordenacao-extracurricular',
    children: [
      { title: 'Atividades', href: '/coordenacao-extracurricular/atividades' },
    ],
  },
  {
    title: 'Estágios',
    href: '/estagios',
    children: [
      { title: 'Supervisores', href: '/estagios/supervisores' },
      { title: 'Parceiros', href: '/estagios/parceiros' },
      { title: 'Candidatura', href: '/estagios/candidatura' },
    ],
  },
  {
    title: 'CIEI',
    href: '/ciei',
    children: [
      { title: 'Projetos', href: '/ciei/projetos' },
      { title: 'Investigadores', href: '/ciei/investigadores' },
      { title: 'Publicações', href: '/ciei/publicacoes' },
    ],
  },
  {
    title: 'Extensão',
    href: '/extensao',
    children: [
      { title: 'Cursos Complementares', href: '/extensao/cursos-complementares' },
      { title: 'Inscrição', href: '/extensao/inscricao' },
    ],
  },
  {
    title: 'Laboratório de Psicologia',
    href: '/laboratorio-psicologia',
    children: [
      { title: 'Serviços', href: '/laboratorio-psicologia/servicos' },
      { title: 'Marcação', href: '/laboratorio-psicologia/marcacao' },
    ],
  },
  {
    title: 'Admissões',
    href: '/admissoes',
    children: [
      { title: 'Requisitos', href: '/admissoes/requisitos' },
      { title: 'Documentos', href: '/admissoes/documentos' },
      { title: 'Taxas', href: '/admissoes/taxas' },
      { title: 'FAQ', href: '/admissoes/faq' },
    ],
  },
  {
    title: 'Links Úteis',
    href: '/links-uteis',
  },
  {
    title: 'Contato',
    href: '/contato',
  },
]
