# Social Games: A rede social dos jogadores de Board Games

<a href="https://github.com/andrexbass/socialgames"><img src="https://raw.githubusercontent.com/andrexbass/socialgames/master/public/img/logoSocialGames.png" align="left" hspace="10" vspace="6"></a>

**Social Games** é uma plataforma social voltada para os jogadores de Board Games. Ela possibilita que o jogador tenha uma experiência totalmente nova e completa marcando suas partidas e registrando os resultados delas, comparando seu desempenho com seus amigos e até globalmente. Além disso, todas as informações dos jogos e conteúdos relacionados estão aqui!
**Social Games** terá foco principal nos dispositivos mobiles, mas também funcionará como um portal para ser aberto em navegadores.

## Requerimentos

Para utilizar e também colaborar com este projeto você vai precisar ter instalado no seu computador:

* [Meteor 1.4](https://www.meteor.com/)
* [Node +6.9](https://nodejs.org/en/)
* [Npm +4.0](https://www.npmjs.com/)

Além disso, você precisa conhecer o banco de dados que utilizamos [MongoDB](https://www.mongodb.com/) (já vem junto ao instalar o Meteor), o template Bootstrap [Angle](https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123) e principalmente, muito [JavaScript](https://www.javascript.com/).

## Instalação

Após cumprir os requerimentos você deve executar três simples passos em seu console:

`meteor npm install`

`meteor npm install --save bcrypt`

`meteor`

Este último irá rodar o servidor Meteor e disponibilizará a url http://localhost:3000/ para você trabalhar. 

Por fim, você deve configurar o login do Facebook para conseguir acessar as funcionalidades da plataforma. Por enquanto este é o único meio de realizar o login, mas em breve teremos login também por e-mail e senha (Por que você não nos ajuda com isso? Veja como no próximo tópico logo abaixo).
Para configurar, você precisa criar um app de desenvolvedor no seu Facebook e preencher os dados de `appId` e `secret` em \server\oauth.js

E está pronto. Você já pode desfrutar!

## Quer nos ajudar a finalizar o projeto? 

Nossa meta é finalizar logo o [MVP](https://pt.wikipedia.org/wiki/Produto_vi%C3%A1vel_m%C3%ADnimo) do sistema para em seguida já podermos publicar, espalhando e utilizando o sistema o máximo possível, sem nunca deixar de criar novas funcionalidades e melhoramentos.
A principal funcionalidade que queremos deixar pronta é a criação de Partidas. Assim que isto estiver pronto, publicaremos.
Abaixo, deixamos a descrição de tudo o que já está pronto no sistema e o que ainda falta fazer.

* [O que já está pronto](https://github.com/andrexbass/socialgames/blob/master/PRONTO.md)
* [O que ainda falta fazer](https://github.com/andrexbass/socialgames/blob/master/FAZER.md)

Caso você se sinta envolvido com nosso projeto e queira nos ajudar, simplesmente faça funcionar uma funcionalidade que ainda não foi desenvolvida e nos envie um `pull request` que brevemente avaliaremos e disponibilizaremos no Social Games. Não é o máximo?
