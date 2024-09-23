# sevn-esportes

Teste prático da SEVN - Página fictícia de esportes

### Estrutura do projeto

- assets
- services
- utils

**assets:** Dentro da pasta assets se encontram todos os recursos essências para o funcionamento da aplicação: (imagens, scripts, estilos, etc...)

**services:** A pasta services é responsável por toda parte de comunicação com o backend. A camada de serviço foi separada por contexto, dentro de contexto estão as chamadas que a aplicação faz para o backend. Exemplo abaixo:

- **services:** camada de serviço
- **services > scoreboardServices:** contexto responsável apenas pelas chamadas do scoreboard
- **scoreboardServices > getAllScoreBoard.js:** Chamada ao serviço responsável por retornar todos os dados do placar

### Quais tecnologias foram utilizadas

- 🟢 HTML
- 🟢 CSS
- 🟢 JavaScript

### Como rodar o projeto?

O projeto possui uma estrutura bastante simples, basta executar o arquivo **index.html** no browser/navegador para executar a aplicação. Se estiver utilizando o Visual Studio Code, você pode utilizar o plugin **Live Server**

<br/>
<br/>

#### Dúvidas

_email:_ <a href="mailto:ueslen.santana@outlook.com">ueslen.santana@outlook.com</a>!
