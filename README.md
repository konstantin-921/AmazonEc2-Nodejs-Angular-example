# Project Title

This Angular application is designed to be deployed on an EC2 AWS instance. Using pm2, automation of application deployment on a remote server is achieved.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

1. ```git clone git@github.com:konstantin-921/AmazonEc2-Nodejs-Angular-example.git```
2. Bind this repository to your new empty repository on Github:
```
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
git push origin master
```
3. Install package
```
npm install -g @angular/cli
npm install
```

### EC2 server setup

1. Create an AWS Account
2. Create free EC2 instance with Amazon Linux OS (or Ubuntu)
3. When creating a server in the Configure Security Group step, click Add Rule and select the HTTP type, the default settings for this will use TCP as the protocol and set port 80 for all IP addresses. Then create two more rules and select the Custom TCP Rule type for them and set the ports - 4200 and 3000 (for the dev server and for express).
4. Choose create a new key pair, and name the key. Download this key and save it (for examle in folder ~/.ssh)
5. Launch instance

### SSH into your server

1. ```chmod 400 ~/.ssh/whatever-your-key-name-is.pem```
2. By right click your instance and select Connect we can see Example comand (like ssh -i "your-key-Virginia.pem" ec2-user@ec2-54-173-71-216.compute-1.amazonaws.com). Execude it in command line.

### Install NVM and Node on the EC2 instance

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bashrc
nvm install node
```

### Clone repo and create ssh-keys for EC2 instance

1. Create ssh-keys as specified in the tutorial https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
2. ```git clone git@github.com:USERNAME/REPOSITORY.git```