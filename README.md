# lookbookDemo

# fashion worldmap  
fashion worldmap [link](http://fashionworldmap.citi.sinica.edu.tw/)

## Development
### Install
``` bash
# Clone the repository
$ git clone https://github.com/behappycc/lookbookDemo

# Go into the repository
$ cd lookbookDemo
$ git checkout feature/refactor
* Modify your server ip in src/constants/config.js

# Install dependencies
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ npm install -g webpack
$ npm install -g yarn
$ yarn install
```

### Usage
```
# Webpack builds once and watches for changes to apply
$ webpack -w

# Start lookbookDemo
$ yarn start

# json-server
$ json-server --watch --port 8000 user.json
$ http://localhost:8000/user/a123
```

## Production
### Install Docker for Ubuntu 14.04
```
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce

```

### Docker run
```
$ git checkout feature/refactor
$ sudo docker build -t lookbook-demo .
$ sudo docker run -it -p 80:8888 lookbook-demo
```
