
# BIKE CHAIN - BLOCK CHAIN PROJECT

This is a simple block chain project integrated with front-end made with react.
In this project i used both hardhat and truffle with ganache to deploy contreact to localhost blockchain. You can use either hardhat or truffle with ganache.




## Project Setup

### Deploy contract using HardHat
To deploy contract using hardhat open '/contract' folder and run following command

```bash
  yarn
```
or

```bash
  npm install
```

To compile it, simply run:

```bash
  npx hardhat compile
```
Start local Etherium node:

```bash
  npx hardhat node
```

Deploy the contract to local node
```bash
npx hardhat run scripts/deploy.js --network localhost
```

![Console](https://i.ibb.co/37BHStL/image.png)

Copy the contract address. and open '/front-end/src/config.json' and replace the contractAddress with the contract address which you copied'

![Console](https://i.ibb.co/CKJqdCT/image.png)


Or, If you want to use truffle and ganache  skip the above steps and follow bellow steps.

### Deploy contract with truffle and ganache

open '/truffle-contract' folder  and open terminal

install ganache 
```bash
npm install ganache --global
```

install truffle
```bash
npm install truffle -g
```

start local Etherium node using ganache
```bash
ganache
```

compile contract
```bash
truffle compile
```
deploy contract to ganache
```bash
truffle migrate
```

copy the contract address

![Contract Address](https://i.ibb.co/233ZTSr/image.png)

open '/front-end/src/config.json' and replace the contractAddress with the contract address which you copied'

![Console](https://i.ibb.co/CKJqdCT/image.png)


### Run Front end

Open '/front-end' folder in code editor and run bellow commands

install dependies
```bash
npm i
```
or
```bash 
yarn
```

start front end server
```bash
npm run dev
```

or 
```bash
yarn dev
```


### Setup metamask

install metamask or add google chrome extension of metamask

open metamask and add a new network with given figulation

```bash
Network Name: Localhost 8545 or the name you want
New RPC URL : http://localhost:8545
Chain ID: 1337
Currency Symbol: ETH

```

![Network Config](https://i.ibb.co/MBTz5kT/image.png)


Copy one private key of any account given by ganache or hardhat and import  account in matamask using that private key.

Greate job. You are ready to go.








    
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

 [@Shazzad-Hossen](https://www.github.com/Shazzad-Hossen)

