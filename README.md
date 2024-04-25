GIT comandos

git init : inicia o git no terminal

git status : verifica se os arquivos estão trackeados ou não, ou seja, se estão no fluxo
de dados do Git.

git add "nome do arquivo" ou . : vai adicionar o arquivo no fluxo de direcionamento

git commit -a -m "Nome" : o -a é pra adicionar todos os tipos de arquivos no commit
o -m adiciona uma mensagem.O commit é pra salvar alterações feitas
em um repositório

git remote add origin https://github.com/Aquila-M/Treino.git : 
adicionando uma origem remota ao repositório

git branch -M main : Vai parear todos os branchs do repositório
e este com main vai ser o principal da aplicação

git push -u origin main : vai enviar o arquivo para o repositório remoto

git checkout -b "teste : muda para um novo branch

git push --set-upstream origin teste : cria um branch lá no reposítorio
remoto tbm pra realizar o envio.

git branch : mostra os branchs existentes e onde vc está

git merge teste : pega o branch teste e joga pro código atual
