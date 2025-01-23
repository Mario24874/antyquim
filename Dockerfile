# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de dependencias
COPY package.json yarn.lock* package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]