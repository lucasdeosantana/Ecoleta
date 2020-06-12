# Ecoleta
![Ecoleta Apresentation](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/Ecoleta%20-%20Web%20Home%20%2B%20Mobile%20Home.png)
![Page Home Mobile + Web to see more click here!](https://github.com/lucasdeosantana/Ecoleta/tree/master/Images)

Ecoleta is an application where people can find selective collect points! Was developed to use in Web and Mobile using ReactJS and React Native. Also was developed a server Rest with NodeJS and Express.
<hr />


### Translations
[Portuguese](https://github.com/lucasdeosantana/Ecoleta/blob/master/README_pt-br.md)


<hr />


## Technologies Used

![Typescript](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-typescript.svg)
![ReactJS e React Native](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-reagir.svg)
![NodeJs](https://github.com/lucasdeosantana/Ecoleta/blob/master/Images/icons/icons8-npm.svg)

## Requirements

For the installation of the package nodejs is necessary, its installation can be found in the link below:

[NodeJs](https://nodejs.org/en/download/) @12.16.3 Ultima versão testada.

## Installation

To use it, just clone the repository, access the “Server” folder with and run the following commands:

```bash
npm run migrate
npm run seed
npm run start
```
Now the system is working, just access the url:
```url
http://localhost:3333
````
If you want to use the mobile application, it is available in the “Mobile” folder, with the name “Ecoleta.apk”. After installing on your device, at the first login you will be asked for the server's IP, if the server is running on your local computer, just enter the IP and the port and if everything is correct, the "Home" screen will open and the system will be ready to work!

### Settings
The server has a configuration file, located in the path:
“Server / src / config / variables.ts”. In this way, there are three variables of interest:

* DEBUG: If it is "true" it shows logs on the screen, if it is "false" the logs are not displayed.
* PORT: Determines which port the application will communicate on.
* BASE_URL: Determines the base url of the system, if you want to publish this server on the internet, you must change this value.

## Mobile without installation

If you want to test the mobile without installing the app on your phone, we recommend the following use:

First download the app [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), this application is available on marketplace for app more common, and install the [Expo-cli](https://docs.expo.io/workflow/expo-cli/) with command:

```bash
npm install -g expo-cli

```

Inside your folder mobile, run the commands.
```bash
yarn add expo
expo install
yarn add
expo start
```

A browser with a QrCode will open, open the expo and use the scanner to see the app being emulated.
## Contribution

Pull Requests are welcome, for bigger changes we request the opening of an issue to discuss the desired changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)



### External itens
![Icons by Icons8](https://icons8.com/)
