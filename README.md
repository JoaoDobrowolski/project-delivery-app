# Delivery App

Neste projeto Full Stack realizado em grupo foi desenvolvido um app de delivery para uma distribuidora de bebidas.

Este App necessitou ter:

Acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;

Comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega.

-----

# Habilidades

O projeto foi realizado com o intuito de desenvolver e aperfeiçoar as habilidades de Front-End e Back-End, bem como sua integração também. Para isto, foram desenvolvidos e utilizados:
  - Context API do _React_ para gerenciar estado;
  - _React Hook useState_;
  - _React Hook useContext_;
  - _React Hook useEffect_;
  - Uma API e também a integração - através do docker-compose - das aplicações para que elas funcionem consumindo um banco de dados;
  - Back-end dockerizado utilizando modelagem de dados através do Sequelize capaz de ser consumida pelo Front-End;
  - Criptografia de senhas.
  - Utilização das Metodologias Ágeis.

-----

# Instalação

Para instalar as dependências, execute o seguinte comando no terminal dentro da pasta raiz, na pasta Back-End e na pasta Front-End:

`npm install` ou `npm run dev:prestart`

-----

# Uso

Para restaurar o banco de dados, executar no terminal da pasta Back-End:

`npm run db:reset`

Para iniciar o projeto, execute o seguinte comando no terminal na pasta raiz:

`npm start`

Isso iniciará a aplicação. Abra http://localhost:3000 para visualizá-la no navegador.

-----

# Contribuindo

Etapas a seguir para contribuir com o projeto:

- Realizar o fork do repositório;

- Criar uma branch: git checkout -b (minha-contribuicao);

- Fazer as mudanças desejadas e commit: git commit -m "(Minha contribuição)";

- Enviar para a sua branch: git push origin (minha-contribuicao);

- Abrir um pull request no repositório original.

-----

# Autor

O projeto Delivery App foi desenvolvido por João Felipe Dobrowolski durante o curso da <a href="https://www.betrybe.com/" target="_blank">Trybe</a>, juntamente com os integrantes do grupo:

<a href="https://github.com/andremarcos13" target="_blank">André Marcos César</a>

<a href="https://github.com/jenifergs" target="_blank">Jenifer Gonçalves</a>

<a href="https://github.com/EduMLAlmeida" target="_blank">Eduardo Almeida</a>

<a href="https://github.com/Danieldsvn" target="_blank">Daniel Saraiva</a>
