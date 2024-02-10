# Seja bem vindo(a) a simple_task_API

- Uma aplicação de listagem de tarefas simples, criada para a execução de um teste técnico.

## Guia para execução:

- Faça o clone deste repositório;
- Em um terminal execute o seguinte comando:

```bash
npm install
```

ou

```bash
yarn
```

para instalar as dependências necessárias

- vá até o arquivo *.env.example* e copie seu conteúdo para um arquivo *.env*, por utilizar sqlite, sugiro utilizar o seguinte valor: **file:./dev.db** para a variável **DATABASE_URL**

- ainda no terminal execute:

```bash
npm install
```

ou

```bash
yarn
```

- em seguida:

```bash
npm run start
```

ou

```bash
yarn start
```

- em seguida:

```bash
npm run seed-db
```

ou

```bash
yarn seed-db
```

para criar 51 tarefas no banco

- em seguida:

```bash
npm run dev
```

ou

```bash
yarn dev
```

para colocar a aplicação no ar utilizando a porta 3333.