# task-manager-api

A aplicação terá as seguintes funcionalidades:

CRUD de usuários: a aplicação permitirá a criação, leitura, atualização e exclusão de usuários. Os usuários serão armazenados no banco de dados MongoDB e terão email e senha.

Autenticação de usuários: a aplicação terá um endpoint de autenticação que receberá as credenciais de um usuário (email e senha) e retornará um token JWT com expiração de 1 hora. Esse token será utilizado para autenticar o usuário em endpoints que exigem autenticação.

CRUD de tarefas: a aplicação permitirá a criação, leitura, atualização e exclusão de tarefas. As tarefas serão armazenadas no banco de dados MongoDB e terão um título, uma descrição e um campo indicando se a tarefa foi concluída ou não. 


Execução: 

Contem uma collection 'Insomnia_2023-04-19' na pasta raiz do projeto.

Scripts sendo executado pelo comando 'npm run start-dev'.
