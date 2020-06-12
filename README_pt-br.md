# Ecoleta
[Ecoleta Apresentação](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/Ecoleta%20-%20Web%20Home%20%2B%20Mobile%20Home.png)
[Pagina Home Mobile + Web para ver mais click aqui!](https://github.com/lucasdeosantana/Ecoleta/tree/master/Images)
Ecoleta é um aplicativo de encontro de pontos de coletas! Sendo desenvolvido para versão Web e Mobile utilizando ReactJS e React Native. Também desenvolvido um servidor Rest utilizando Nodejs e Express.

## Tecnologias Usadas

[Typescript](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-typescript.svg)
[ReactJS e React Native](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-reagir.svg)
[NodeJs](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-npm.svg)

## Requisitos

Para a instalação do pacote é necessário o nodejs, sua instalação pode ser encontrada no link abaixo:

![NodeJs](https://nodejs.org/en/download/) @12.16.3 Ultima versão testada.

## Instalação

Para o uso basta você clonar o repositório, acessar a pasta “Server” com e rodar os seguintes comandos:

```bash
npm run migrate
npm run seed
npm run start
```
Agora o sistema já está funcionando basta apenas acessar a url:
```url
http://localhost:3333
````
Se você desejar utilizar o aplicativo de celular, o mesmo está disponível na pasta “Mobile”, com o nome “Ecoleta.apk”. Após instalar em seu dispositivo, no primeiro login  será solicitado o IP do servidor, se o server estiver rodando em seu computador local, basta digitar o IP e a porta e se tudo estiver correto, será aberta a tela “Home” e o sistema estará pronto para funcionar!

### Configurações
O servidor conta com um arquivo de configurações, localizado no caminho:
“Server/src/config/variables.ts”. Nesse caminho a três variáveis de interesse:

* DEBUG: Se estiver em “true” mostra logs na tela, se estiver em “false” os logs não são exibidos.
* PORT: Determina em qual porta a aplicação irá se comunicar.
BASE_URL: Determina qual a url base do sistema, caso você deseje publicar esse servidor na internet, deve-se alterar esse valor.

## Mobile sem instalação

Se você deseja testar o mobile sem instalar o app em seu celular recomendamos a seguinte utilização:

Primeiro baixe o aplicativo ![Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), esse aplicativo está disponível nas lojas de aplicativos padrões, e instale o ![Expo-cli](https://docs.expo.io/workflow/expo-cli/) e com o seguinte comando:

```bash
npm install -g expo-cli

```

Dentro da pasta mobile rode os seguintes comandos.
```bash
yarn add expo
expo install
yarn add
expo start
```

Será aberto um navegador com um QrCode basta, abrir o expo e utilizar o scanner para ver o app sendo emulado.
## Contribuição

Pull Requests são bem vindos, para maiores mudanças solicitamos a abertura de uma issue para discutir as mudanças desejadas. 


## Licença

![MIT](https://choosealicense.com/licenses/mit/)




Itens externos.
![Icons by Icons8](https://icons8.com/)
