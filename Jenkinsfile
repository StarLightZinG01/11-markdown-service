pipeline {
  environment {
    VERCEL_PROJECT_NAME = "DevOps11-Quiz1"
    VERCEL_TOKEN = credentials("DevOps11-vercel-token")
  }

   agent {
    kubernetes {
      // This YAML defines the "Docker Container" you want to use
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: my-builder  # We will refer to this name later
            image: node:20-alpine
            command:
            - cat
            tty: true
      '''
    }
  }

  stages {

    stage('Install') {
      steps {
        sh 'npm ci || npm install'
      }
    }

    stage('Test npm') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test Build') {
      steps {
        sh 'test -d .next'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm i -g vercel@latest'
        sh 'vercel pull --yes --environment=production --token=$VERCEL_TOKEN || true'
        sh 'vercel --prod --token=$VERCEL_TOKEN'
      }
    }
  }
}