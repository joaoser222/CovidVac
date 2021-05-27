### CovidVac

## Sobre
CovidVac é uma aplicação escrita no framework Laravel PHP versão 8.5 e que utiliza um frontend do framework Quasar, escrito em Vue. Basicamente sua função e realizar um processo básico de vacinação de pacientes.

## Passos da instalação
Para instalar a aplicação é nescessário seguir o processo básico do Laravel: copiar o .env.example para .env e configurar o banco de dados da aplicação. Tendo sido feita a configuração básica do Laravel é nescessário rodar as migrations e inserir as informações do sistema via seeder:
```
php artisan migrate;
php artisan db:seed --class=DatabaseSeeder;
```
Para compilar os assets do Quasar é nescessário instalar o quasar-cli. Você pode encontrar o tutorial <a href="https://quasar.dev/quasar-cli/installation">aqui</a>.tendo sido instalado basta entrar na pasta do frontend e executar o seguinte comando no terminal:

```
quasar build
```
Isso irá gerar todos os assets na pasta public, devidamente configurados.
