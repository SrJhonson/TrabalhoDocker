FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (para aproveitar cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Exponha a porta que a aplicação escuta (boa prática, mesmo que o Docker Compose faça o mapeamento)
EXPOSE 3000

# Comando padrão para iniciar o app
CMD ["node", "app.js"]