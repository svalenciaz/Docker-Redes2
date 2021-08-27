# Docker-Redes2

## Python y Django

Verificar instalación
```
python3 --version
pip3 --version
```

### Para generar el entorno (En Ubuntu)
```
mkdir .env
apt install python3.8-venv
python3 -m venv .env
```
### Activar el entorno

```
source .env/bin/activate
```

### Desactivar el entorno
```
deactivate
```

### Instalar django
```
pip install django -U
```
### Librerías python necesarias
```
pip install djangorestframework
pip install django-cors-headers
```
### dentro de backend
```
python3 manage.py runserver
python3 manage.py migrate
python3 manage.py makemigrations
```

## NodeJS y Vue

```
apt install nodejs
apt install npm
```
### En el entorno
```
npm install -g @vue/cli
npm install -g @vue/cli-init
```
### Dentro de frontend
```
npm install
npm run dev
```

### Librerias necesarias
```
npm install axios
npm install vue bootstrap bootstrap-vue
```