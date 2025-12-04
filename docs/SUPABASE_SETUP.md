# Configuração do Supabase

Este documento descreve como configurar o Supabase para o projeto FCSH.

## 1. Criar Projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com) e faça login ou crie uma conta
2. Clique em "New Project"
3. Preencha os dados:
   - Nome do projeto: `fcsh-site`
   - Senha do banco de dados: (guarde em local seguro)
   - Região: Escolha a mais próxima
4. Aguarde a criação do projeto

## 2. Obter Credenciais

1. No painel do Supabase, vá para **Settings** > **API**
2. Copie os seguintes valores:
   - **Project URL** (supabaseUrl)
   - **anon public key** (supabaseAnonKey)

## 3. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.local.example` para `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edite o arquivo `.env.local` com as credenciais obtidas:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
   ```

## 4. Executar o Schema SQL

1. No painel do Supabase, vá para **SQL Editor**
2. Clique em "New query"
3. Copie e cole o conteúdo do arquivo `supabase/schema.sql`
4. Clique em "Run" para executar o script

## 5. Inserir Dados Iniciais (Seed)

Após criar as tabelas, você pode inserir dados iniciais. Exemplo para a tabela `decana`:

```sql
INSERT INTO decana (nome, titulo, foto_url, mensagem) VALUES (
  'Prof.ª Dr.ª Helena Fernandes',
  'Decana da Faculdade de Ciências Sociais e Humanas',
  NULL,
  'É com imenso orgulho que dou as boas-vindas a todos os visitantes do nosso site institucional...'
);
```

## 6. Verificar Configuração

Execute o projeto localmente para verificar se a conexão está funcionando:

```bash
npm run dev
```

## Estrutura das Tabelas

### Professores
- `id`: UUID (chave primária)
- `nome`: Nome completo
- `slug`: URL amigável
- `titulo`: Titulação acadêmica
- `departamento`: Departamento
- `email`: Email institucional
- `telefone`: Telefone
- `linkedin`: URL do LinkedIn
- `foto_url`: URL da foto
- `biografia`: Texto da biografia
- `created_at`: Data de criação

### Formação (Relacionada a Professores)
- `id`: UUID (chave primária)
- `professor_id`: Referência ao professor
- `grau`: Grau acadêmico
- `instituicao`: Instituição
- `ano`: Ano de conclusão

### Publicações (Relacionada a Professores)
- `id`: UUID (chave primária)
- `professor_id`: Referência ao professor
- `titulo`: Título da publicação
- `revista`: Nome da revista/editora
- `ano`: Ano de publicação

### Cursos
- `id`: UUID (chave primária)
- `nome`: Nome do curso
- `slug`: URL amigável
- `descricao`: Descrição do curso
- `duracao`: Duração
- `grau`: Tipo (graduação/pós-graduação)
- `pdf_url`: URL do plano curricular

### Disciplinas (Relacionada a Cursos e Professores)
- `id`: UUID (chave primária)
- `curso_id`: Referência ao curso
- `professor_id`: Referência ao professor
- `nome`: Nome da disciplina
- `ano`: Ano curricular
- `semestre`: Semestre
- `creditos`: Número de créditos
- `horas`: Carga horária

### Decana
- `id`: UUID (chave primária)
- `nome`: Nome
- `titulo`: Título/cargo
- `foto_url`: URL da foto
- `mensagem`: Mensagem de boas-vindas

### Eventos
- `id`: UUID (chave primária)
- `titulo`: Título do evento
- `descricao`: Descrição
- `data`: Data e hora
- `local`: Local do evento
- `imagem_url`: URL da imagem

### Notícias
- `id`: UUID (chave primária)
- `titulo`: Título
- `slug`: URL amigável
- `resumo`: Resumo
- `conteudo`: Conteúdo completo
- `imagem_url`: URL da imagem
- `data_publicacao`: Data de publicação
- `autor`: Nome do autor

## Segurança (RLS)

O schema inclui Row Level Security (RLS) habilitado em todas as tabelas com políticas de leitura pública. Para adicionar políticas de escrita (para administradores), adicione:

```sql
-- Exemplo: permitir inserção apenas para usuários autenticados
CREATE POLICY "Permitir inserção para admins" ON professores
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
```

## Troubleshooting

### Erro de conexão
- Verifique se as variáveis de ambiente estão corretas
- Confirme que o projeto Supabase está ativo

### Dados não aparecem
- Verifique se as políticas RLS estão configuradas
- Confirme que os dados foram inseridos corretamente

### Erro de CORS
- Adicione o domínio do seu site nas configurações do Supabase (Settings > API > CORS)
