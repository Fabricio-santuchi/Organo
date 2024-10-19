# Organo - Projeto de Organização de Equipes

![Preview](./public/preview.png)

Veja o projeto em funcionamento: [Organo na Vercel](https://cine-tag-alura-amber.vercel.app/)

Este projeto foi desenvolvido como parte de um curso da **Alura**, com o objetivo de praticar habilidades em **React** e **Vite**, criando uma plataforma para organização de equipes. A aplicação permite criar e gerenciar diferentes times, personalizando suas cores e atribuindo colaboradores a cada um deles.

## Tecnologias Utilizadas

- **React** (versão 18.3.1)
- **Vite** (versão 5.3.4)
- **ESLint** para análise estática de código
- **Hooks** do React para gerenciamento de estado e efeitos
- **UUID** para geração de identificadores únicos

## Funcionalidades

- Adicionar, editar e remover times.
- Atribuir colaboradores a diferentes times.
- Visualizar times com cores personalizadas para fácil identificação.
- Persistência de dados usando um arquivo JSON local.

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/projeto-organo.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Organo
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:

   O projeto será aberto no endereço `http://localhost:5173`.

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão otimizada para produção.
- **`npm run lint`**: Executa o ESLint para verificar erros de código.

## Estrutura de Pastas

Abaixo está a estrutura de diretórios e arquivos deste projeto:

```bash
PROJETO-ORG/
│
├── node_modules/          # Dependências do Node.js
├── public/                # Arquivos públicos
│   └── index.html         # Ponto de entrada HTML
│
├── src/                   # Diretório principal de código-fonte
│   ├── assets/            # Recursos estáticos como imagens
│   │   ├── banner.png
│   │   └── btn-form.png
│   ├── components/        # Componentes React do projeto
│   │   ├── Banner/        # Componente Banner
│   │   ├── Botao/         # Componente Botão
│   │   ├── Campo/         # Componente Campo
│   │   ├── Colaborador/   # Componente Colaborador
│   │   ├── Footer/        # Componente Footer
│   │   ├── Formulario/    # Componente Formulário
│   │   ├── MinhaOrganizacao/ # Componente Minha Organização
│   │   ├── SelectTime/    # Componente Select Time
│   │   └── Time/          # Componente Time
│   ├── App.jsx            # Componente principal do App
│   ├── index.css          # Arquivo de estilos globais
│   └── main.jsx           # Ponto de entrada da aplicação React
│
├── .eslintrc.cjs          # Configurações do ESLint
├── .gitignore             # Arquivo Gitignore
├── db.json                # Banco de dados JSON (mock)
├── package.json           # Configurações do projeto e dependências
├── package-lock.json      # Arquivo de bloqueio de dependências do npm
├── README.md              # Documentação do projeto
├── reset.css              # Estilos CSS reset
└── vite.config.js         # Configurações do Vite (build tool)
```

## Dependências

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React DOM**: Pacote para renderizar componentes React no DOM.
- **Vite**: Ferramenta de build ultrarrápida para projetos front-end.

### Dependências de Desenvolvimento

- **@types/react** e **@types/react-dom**: Tipos TypeScript para React.
- **ESLint**: Ferramenta para identificar e corrigir problemas no código.
- **Vite Plugin React**: Suporte para React dentro do Vite.

## Projeto do Curso da Alura

Este projeto faz parte do curso de **React** oferecido pela **Alura**, onde o foco é a prática de desenvolvimento web com ferramentas modernas e metodologias ágeis.

## Autor

**Fabrício Santuchi**  
Estudante de **Sistemas de Informação** e desenvolvedor front-end. Apaixonado por criar interfaces de usuário modernas e eficientes usando as mais recentes tecnologias.
