FROM node:16-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файл package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем проект
RUN npm run build

# Экспортируем порт
EXPOSE 8080

# Команда для запуска Next.js
CMD ["npm", "start"]