# Cloud Native App

Exemplo de aplicação Cloud Native desenvolvida em Node.js para a atividade prática da disciplina Integração de Aplicações em Nuvem do curso de [Computação em Nuvem da PUC Minas](https://www.pucminas.br/Pos-Graduacao/IEC/Cursos/Paginas/ComputacaoemNuvem_EAD_Especializacao%20e%20Master.aspx?PageID=5249&moda=5&polo=43&curso=141&situ=1).

## Repositório Oficial do professor

Os arquivos oficiais do curso, desenvolvidos pelo professor, estão disponíveis no seguinte repositório no GitHub:

[Cloud Native App](https://github.com/valuedriven/cloudnativeapp).

## Como executar

Para executar este programa, siga os seguintes passos:

### Backend

#### Criação dos arquivos de variáveis de ambiente

Na pasta ```backend```:

- Copie o arquivo ```.env.development.sample``` para ```.env.development```.

- Copie o arquivo ```.env.test.sample``` para ```.env.test```.

- Nos arquivos ```.env.development``` e ```.env.test```, defina o valor das variáveis ```PORT```, ```DB_DIALECT``` e ```DB_STORAGE```.

Exemplo para ```.env.development```:

```
PORT=3001
DB_DIALECT=sqlite
DB_STORAGE=cloudnativedb-dev.db
```

Exemplo para ```.env.test```:

```
PORT=3000
DB_DIALECT=sqlite
DB_STORAGE=cloudnativedb-tes.db
```

#### Instalação dos pacotes Node.js

Na pasta ```backend``` abra um terminal (ou prompt de comando, ou PowerShell) e digite o seguinte comando:

```sh
npm install
```

#### Inicialização do banco de dados

Na pasta ```backend``` abra um terminal (ou prompt de comando, ou PowerShell) e digite os seguintes comandos:

```sh
NODE_ENV=development npx -p sequelize-cli sequelize db:migrate
```

```sh
NODE_ENV=test npx -p sequelize-cli sequelize db:migrate
```

#### Execução do servidor backend

Na pasta ```backend``` abra um terminal (ou prompt de comando, ou PowerShell) e digite os seguinte comando:

```sh
NODE_ENV=development node src/server.js
```

### Frontend

#### Instalação dos pacotes Node.js

Na pasta ```frontend``` abra um terminal (ou prompt de comando, ou PowerShell) e digite o seguinte comando:

```sh
npm install
```

#### Execução do servidor frontend

Na pasta ```frontend``` abra um terminal (ou prompt de comando, ou PowerShell) e digite o seguinte comando:

```sh
npm run dev
```
