module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-211-167-99.ap-southeast-2.compute.amazonaws.com',
      key: '~/.ssh/portfolioEmailNode.pem',
      ref: 'origin/master',
      repo: 'git@github.com:harrypatrick94/emailServer.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
