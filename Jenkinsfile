pipeline {
  agent any

  environment {
    VERCEL_PROJECT_NAME = "DevOps11-Quiz1"
    VERCEL_TOKEN = credentials("DevOps11-vercel-token")  // เก็บเป็น Secret Text ใน Jenkins Credentials
  }

  // stages {
  //   stage('Install') {
  //     steps {
  //       sh 'npm ci || npm install'
  //     }
  //   }

  //   stage('Test npm') {
  //     steps {
  //       sh 'npm test'
  //     }
  //   }

  //   stage('Build') {
  //     steps {
  //       sh 'npm run build'
  //     }
  //   }

  //   stage('Test Build') {
  //     steps {
  //       sh 'test -d .next'
  //     }
  //   }

    stage('Deploy') {
      steps {
        sh 'npm i -g vercel@latest'
        sh 'vercel pull --yes --environment=production --token=$VERCEL_TOKEN || true'
        sh 'vercel --prod --token=$VERCEL_TOKEN'
      }
    }
  }