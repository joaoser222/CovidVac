### CovidVac

## Sobre
CovidVac é uma aplicação escrita no framework Laravel PHP versão 8.5 e que utiliza um frontend do framework Quasar, escrito em Vue. Basicamente sua função e realizar um processo básico de vacinação de pacientes.

## Passos da instalação
Para instalar a aplicação é nescessário seguir o processo básico do Laravel: copiar o .env.example para .env e configurar o banco de dados a aplicação. Tendo sido feita a configuração basica do Laravel é nescessário gerar as informações via seeder:
```
php artisan db:seed --class=DatabaseSeeder
```
