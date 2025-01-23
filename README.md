This is a backend project where we will be dealing with a flight management system, the file structure is elaborated below.
Directory structure:
```
Directory structure:
└── sumanjain2005-fms-backend/
    ├── README.md
    ├── package.json
    └── src/
        ├── index.js
        ├── config/
        │   ├── index.js
        │   ├── login-config.js
        │   └── server-config.js
        ├── controllers/
        │   ├── index.js
        │   └── info-controller.js
        ├── models/
        │   └── index.js
        ├── repositories/
        │   └── index.js
        ├── routes/
        │   ├── index.js
        │   ├── v1/
        │   │   └── index.js
        │   └── v2/
        │       └── index.js
        ├── services/
        │   └── index.js
        └── utils/
            └── index.js

```
- winston : https://www.npmjs.com/package/winston?activeTab=readme
- sequelize : https://sequelize.org/docs/v6/getting-started/
- https-status-code : https://www.npmjs.com/package/http-status-codes

- WE implemented sequelize and sequlize CLI just to make life easier, for further details : https://github.com/sequelize/cli, we go to the source directory and initialize the sequelize init.
- Inside the src/config/config.json :
```
{
  "development": {
    "username": "root",
    "password": "set one as per your needs",
    "database": "dev_DataBase",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "test_database",    
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "production_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- To run the project use
```
npm i
```
- setup the .env from the example template, and we are good to go.
- Use the command
```
 npx sequelize init 
```
- the above command will initialize a config folder (we had that pre built), a migrations and a seeder folder. 
- if you are setting up the `config.json` for sequelize cli this is simply the docs, where in the dialect you give the database you want to use.
- if you are setting up production or test environment, make sure you replace the ip or the host to the one running which can be for example an ec2 instance running live.
- the purpose of `seeders` is to give some starter data for dev testing purposes.
