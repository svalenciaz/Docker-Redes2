FROM node:14-alpine

# instalar un simple servidor http para servir nuestro contenido estático
RUN npm install -g http-server

# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

VOLUME [ "/src/images" ]

# construir aplicación para producción minificada
RUN npm run build

RUN rm /app/src/images/unal.png

EXPOSE 8080
CMD [ "http-server", "dist" ]