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

export const estruturasCurriculares: EstruturaCurricular[] = [
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

export function getEstruturaByCursoSlug(slug: string): EstruturaCurricular | undefined {
  return estruturasCurriculares.find(e => e.cursoSlug === slug)
}
