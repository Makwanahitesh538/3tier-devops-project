pipeline {
  agent any

  stages {

    stage('Checkout Code') {
      steps {
        git 'https://github.com/yourname/3tier-devops-project.git'
      }
    }

    stage('Backend Build') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Deploy Backend') {
      steps {
        sh '''
        rsync -av backend/ ec2-user@BACKEND_IP:/home/ec2-user/backend
        ssh ec2-user@BACKEND_IP "pm2 restart app || node app.js &"
        '''
      }
    }

    stage('Deploy Frontend') {
      steps {
        sh '''
        rsync -av frontend/ ec2-user@FRONTEND_IP:/usr/share/nginx/html
        ssh ec2-user@FRONTEND_IP "sudo systemctl restart nginx"
        '''
      }
    }
  }
}
