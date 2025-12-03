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
    cursoSlug: 'psicologia',
    cursoNome: 'Licenciatura em Psicologia',
    pdfUrl: '/documentos/plano-curricular-psicologia.pdf',
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
              { nome: 'Filosofia das Ciências Sociais', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 4 },
              { nome: 'Metodologia Científica', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Psicologia do Desenvolvimento I', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 6 },
              { nome: 'Neurociências', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Estatística I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Psicologia Social I', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Antropologia', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 4 }
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
              { nome: 'Estatística II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
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
              { nome: 'Psicologia Organizacional I', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Dinâmicas de Grupo', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Avaliação Psicológica II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 6 },
              { nome: 'Psicologia Clínica II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 5 },
              { nome: 'Psicologia Organizacional II', professor: 'Prof. Dr. Miguel Sousa', professorSlug: 'miguel-sousa', creditos: 5 },
              { nome: 'Psicologia Educacional', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 },
              { nome: 'Neuropsicologia', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 5 }
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
              { nome: 'Estágio Supervisionado I', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 8 },
              { nome: 'Seminário de Investigação I', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Estágio Supervisionado II', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 10 },
              { nome: 'Seminário de Investigação II', professor: 'Prof.ª Dr.ª Teresa Oliveira', professorSlug: 'teresa-oliveira', creditos: 4 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    cursoSlug: 'servico-social',
    cursoNome: 'Licenciatura em Serviço Social',
    pdfUrl: '/documentos/plano-curricular-servico-social.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Fundamentos do Serviço Social', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 },
              { nome: 'Introdução à Sociologia', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Introdução à Psicologia', professor: 'Prof. Dr. António Silva', professorSlug: 'antonio-silva', creditos: 4 },
              { nome: 'Filosofia Social', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 4 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'História do Serviço Social', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 },
              { nome: 'Economia Social', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Antropologia Cultural', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 4 },
              { nome: 'Estatística Aplicada', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Direitos Humanos', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 }
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
              { nome: 'Teoria do Serviço Social I', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 },
              { nome: 'Política Social I', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 },
              { nome: 'Psicologia Social', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Sociologia do Desenvolvimento', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Métodos de Investigação Social', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Teoria do Serviço Social II', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 },
              { nome: 'Política Social II', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 },
              { nome: 'Gestão de Organizações Sociais', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Ética Profissional', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 4 },
              { nome: 'Intervenção Social com Famílias', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 5 }
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
              { nome: 'Metodologia de Intervenção Social I', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 },
              { nome: 'Proteção de Menores', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 5 },
              { nome: 'Gerontologia Social', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 5 },
              { nome: 'Direito Social', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 },
              { nome: 'Desenvolvimento Comunitário', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Metodologia de Intervenção Social II', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 },
              { nome: 'Planeamento e Avaliação de Projetos', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Saúde e Serviço Social', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 5 },
              { nome: 'Empreendedorismo Social', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Estágio Curricular I', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 6 }
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
              { nome: 'Supervisão em Serviço Social', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 5 },
              { nome: 'Políticas Públicas', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 8 },
              { nome: 'Seminário de Investigação I', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Estágio Curricular III', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 10 },
              { nome: 'Seminário de Investigação II', professor: 'Prof.ª Dr.ª Carla Mendes', professorSlug: 'carla-mendes', creditos: 4 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof.ª Dr.ª Maria Santos', professorSlug: 'maria-santos', creditos: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    cursoSlug: 'sociologia',
    cursoNome: 'Licenciatura em Sociologia',
    pdfUrl: '/documentos/plano-curricular-sociologia.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Introdução à Sociologia', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 6 },
              { nome: 'História do Pensamento Sociológico', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Filosofia das Ciências Sociais', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 4 },
              { nome: 'Introdução à Economia', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 4 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Teoria Sociológica I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 6 },
              { nome: 'Antropologia Social', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Estatística I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Psicologia Social', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 5 },
              { nome: 'Ciência Política', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 4 }
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
              { nome: 'Teoria Sociológica II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 6 },
              { nome: 'Sociologia da Educação', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 5 },
              { nome: 'Estatística II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Sociologia do Trabalho', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Demografia', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Teoria Sociológica III', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 6 },
              { nome: 'Sociologia Urbana', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Métodos de Investigação Sociológica I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Sociologia da Família', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 5 },
              { nome: 'Estudos de Género', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 4 }
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
              { nome: 'Sociologia Política', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Desigualdades Sociais', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 5 },
              { nome: 'Métodos de Investigação Sociológica II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Movimentos Sociais', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Globalização', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Sociologia das Organizações', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Análise de Dados Qualitativos', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Planeamento Social', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 5 },
              { nome: 'Sociologia da Saúde', professor: 'Prof.ª Dr.ª Luísa Fernandes', professorSlug: 'luisa-fernandes', creditos: 5 },
              { nome: 'Estágio Curricular I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 6 }
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
              { nome: 'Seminário de Investigação I', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Sociologia Africana', professor: 'Prof.ª Dr.ª Sofia Pereira', professorSlug: 'sofia-pereira', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 8 },
              { nome: 'Consultoria Social', professor: 'Prof. Dr. Carlos Ferreira', professorSlug: 'carlos-ferreira', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Seminário de Investigação II', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Estágio Curricular III', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 10 },
              { nome: 'Trabalho de Conclusão de Curso', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 10 }
            ]
          }
        ]
      }
    ]
  },
  {
    cursoSlug: 'comunicacao-social',
    cursoNome: 'Licenciatura em Comunicação Social',
    pdfUrl: '/documentos/plano-curricular-comunicacao-social.pdf',
    anos: [
      {
        ano: 1,
        semestres: [
          {
            semestre: 1,
            disciplinas: [
              { nome: 'Teoria da Comunicação', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 },
              { nome: 'História da Comunicação Social', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Introdução à Sociologia', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 4 },
              { nome: 'Língua Portuguesa I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 },
              { nome: 'Metodologia Científica', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Semiótica', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Técnicas de Redação', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Psicologia da Comunicação', professor: 'Prof. Dr. Pedro Martins', professorSlug: 'pedro-martins', creditos: 4 },
              { nome: 'Língua Portuguesa II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 },
              { nome: 'Introdução ao Jornalismo', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 }
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
              { nome: 'Jornalismo Impresso', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 },
              { nome: 'Fotojornalismo', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Sociologia da Comunicação', professor: 'Prof. Dr. João Costa', professorSlug: 'joao-costa', creditos: 5 },
              { nome: 'Publicidade I', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Ética e Deontologia', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Jornalismo Radiofónico', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Jornalismo Televisivo', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Publicidade II', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Relações Públicas', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Análise do Discurso', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 }
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
              { nome: 'Jornalismo Digital', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 6 },
              { nome: 'Marketing Digital', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Produção Audiovisual', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Comportamento do Consumidor', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Direito da Comunicação', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Gestão de Redes Sociais', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Assessoria de Imprensa', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Comunicação Organizacional', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 5 },
              { nome: 'Investigação em Comunicação', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
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
              { nome: 'Projeto de Comunicação', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Seminário de Investigação I', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Estágio Curricular II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 8 },
              { nome: 'Empreendedorismo na Comunicação', professor: 'Prof. Dr. Ricardo Almeida', professorSlug: 'ricardo-almeida', creditos: 4 }
            ]
          },
          {
            semestre: 2,
            disciplinas: [
              { nome: 'Seminário de Investigação II', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 5 },
              { nome: 'Estágio Curricular III', professor: 'Prof.ª Dr.ª Ana Rodrigues', professorSlug: 'ana-rodrigues', creditos: 10 },
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
