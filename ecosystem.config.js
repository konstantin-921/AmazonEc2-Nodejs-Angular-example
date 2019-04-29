module.exports = {
  apps: [
    {
      name: 'AmazonEc2-Nodejs-Angular-example',
      script: './server.js'
    }
  ],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-3-95-158-214.compute-1.amazonaws.com',
      key: '~/kostya-key-Virginia.pem',
      ref: 'origin/master',
      repo: 'git@github.com:konstantin-921/AmazonEc2-Nodejs-Angular-example.git',
      path: '/home/ec2-user/AmazonEc2-Nodejs-Angular-example',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js && npm start '
    }
  }
}