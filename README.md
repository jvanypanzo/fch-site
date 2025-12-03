# FCSH - Faculdade de Ciências Humanas

Site institucional completo para a Faculdade de Ciências  Humanas (FCH).

## 🛠️ Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas (App Router)
│   ├── sobre/             # Páginas sobre a faculdade
│   ├── cursos/            # Cursos de graduação e pós-graduação
│   ├── corpo-docente/     # Lista de docentes
│   ├── eventos/           # Eventos futuros e realizados
│   ├── associacao-estudantes/  # Associação de estudantes
│   ├── coordenacao-extracurricular/  # Atividades extracurriculares
│   ├── estagios/          # Informações sobre estágios
│   ├── ciei/              # Centro de investigação
│   ├── extensao/          # Cursos de extensão
│   ├── laboratorio-psicologia/  # Serviços de psicologia
│   ├── admissoes/         # Processo de admissão
│   ├── links-uteis/       # Links úteis
│   └── contato/           # Página de contato
├── components/            # Componentes reutilizáveis
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Componentes da página inicial
│   ├── ui/                # Componentes de UI (Button, Card, Input)
│   └── shared/            # Componentes compartilhados
├── data/                  # Dados mockados
├── lib/                   # Utilitários
└── types/                 # Definições de tipos TypeScript
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/fch-site.git
cd fch-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Design

### Cores

- **Primary:** #1e3a5f (Azul escuro)
- **Secondary:** #c9a227 (Dourado)
- **Accent:** #e85d04 (Laranja)

### Tipografia

- **Fonte:** Inter (Google Fonts)

## 📄 Páginas Principais

- **Home** - Página inicial com destaque, notícias e acesso rápido
- **Sobre** - História, missão, visão, valores e estrutura da faculdade
- **Cursos** - Graduação (4 licenciaturas) e Pós-Graduação (2 mestrados)
- **Corpo Docente** - Lista de professores por departamento
- **Eventos** - Agenda de eventos futuros e histórico
- **Admissões** - Requisitos, documentos, taxas e FAQ
- **Contato** - Informações de contato e formulário

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (se necessário):

```env
# Adicione suas variáveis de ambiente aqui
```

## 📝 Licença

Este projeto é de uso institucional da FCSH.
