pipeline {
  agent any
  environment {
    VERCEL_PROJECT_NAME = 'DevOps11-Quiz1'
    VERCEL_TOKEN = credentials('DevOps11-vercel-token') // ดึงจาก Jenkins
  }
  stages {
    stage('Test npm') {
      agent {
                docker {
                    image 'node:16-alpine' // ใช้ Image นี้ที่มี Node.js มาให้แล้ว
                    reuseNode true
                }
            }
      steps {
          sh 'npm --version'
          sh 'node --version'
      }
    }
    stage('Build') {
      steps {
          sh 'npm ci'
          sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
          sh 'npm install -g vercel@latest'
          // Deploy using token-only (non-interactive)
          sh '''
            vercel link --project $VERCEL_PROJECT_NAME --token $VERCEL_TOKEN --yes
            vercel --token $VERCEL_TOKEN --prod --confirm
          '''
      }
    }

  }
}