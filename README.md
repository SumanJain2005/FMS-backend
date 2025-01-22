This is a backend project where we will be dealing with a flight management system, the file structure is elaborated below.
Directory structure:
└── sumanjain2005-fms-backend/
    ├── package.json
    └── `src/`
        ├── index.js
        ├── `config/`
        │   ├── index.js
        │   ├── login-config.js
        │   └── server-config.js
        ├── `controllers/`
        │   ├── index.js
        │   └── info-controller.js
        ├── `routes/`
        │   ├── index.js
        │   └── `v1/`
        │       └── index.js
        └── `services/` 
            └── index.js

winston : https://www.npmjs.com/package/winston?activeTab=readme
sequelize : https://sequelize.org/docs/v6/getting-started/
https-status-code : https://www.npmjs.com/package/http-status-codes

WE implemented sequelize and sequlize CLI just to make life easier, for further details : https://github.com/sequelize/cli, we go to the source directory and initialize the sequelize init.
