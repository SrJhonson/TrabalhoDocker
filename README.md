
# 📘 Video Game App

## 🎮 Sobre o Projeto

O **Video Game App** é uma aplicação full-stack desenvolvida com foco em boas práticas de DevOps, incluindo:

- Backend em **Node.js + Express**
- Banco de dados **MySQL**
- Frontend em HTML/CSS simples
- Orquestração com **Docker Compose**
- **Análise de código com SonarQube**
- Pipeline de **CI/CD com GitHub Actions**
- **Deploy automatizado via SSH** para servidor remoto

---

## 🧱 Estrutura do Projeto

```
TrabalhoDocker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── db.js
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── sonar-project.properties
├── docker-compose.yml
├── .github/workflows/deploy.yml
└── README.md
```

---

## ⚙️ Como Executar Localmente

> Pré-requisitos:
> - Docker
> - Docker Compose

```bash
git clone https://github.com/SrJhonson/TrabalhoDocker
cd TrabalhoDocker
docker compose up --build
```

Acesse:

- App: http://localhost:8146
- MySQL: localhost:3308 (usuario: root / senha: root123)

---

## 📦 Variáveis de Ambiente

Crie o arquivo `backend/.env` com:

```
DB_HOST=db
DB_USER=root
DB_PASSWORD=root123
DB_NAME=videogamedb
DB_PORT=3306
PORT=3000
```

---

## 🔍 Análise com SonarQube (Local)

> Opcional, apenas se quiser rodar Sonar manualmente:

```bash
docker run -d --name sonar -p 9000:9000 sonarqube:lts
# Acesse em: http://localhost:9000

# Baixe o sonar-scanner e rode:
./sonar-scanner \
  -Dsonar.projectKey=video-game-crud \
  -Dsonar.sources=backend \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=SEU_TOKEN
```

---

## 🚀 CI/CD Automatizado

O fluxo de deploy é feito via **GitHub Actions**:

- Trigger: `push` na branch `main`
- Passos:
  1. Faz build e push da imagem para o Docker Hub
  2. Copia arquivos para o servidor remoto
  3. Sobe o SonarQube no servidor na porta `8151`
  4. Executa a análise estática com o Sonar Scanner
  5. Faz o `docker compose up -d` no servidor

> Necessário configurar os seguintes **Secrets** no GitHub:
- `SSH_PRIVATE_KEY`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
- `SONAR_TOKEN`

---

## 🧪 Qualidade de Código

- Análise com **SonarQube 9.9 LTS**
- Scanner CLI instalado e executado via pipeline
- Porta usada no servidor: `8151`

---

## ✅ Requisitos Atendidos

| Requisito                                    | Status |
|---------------------------------------------|--------|
| CRUD com interface gráfica                  | ✅     |
| Banco de dados relacional com porta custom  | ✅ `3308` |
| Docker + Docker Compose                     | ✅     |
| CI/CD com GitHub Actions                    | ✅     |
| SonarQube (instalado, configurado, analisado) | ✅     |
| Deploy automatizado via SSH                | ✅     |

---

## 👨‍💻 Autor

**Jhonatan Dias**
