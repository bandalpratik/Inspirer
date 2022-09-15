pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
    post {
        failure {
            mail to: 'pratikbandal55@gmail.com',
                subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                body: "Something is wrong with ${env.BUILD_URL}"
        }
        success {
            mail to: 'pratikbandal55@gmail.com',
                subject: "Pipeline succeeded: ${currentBuild.fullDisplayName}",
                body: "Application is up and running ${env.BUILD_URL}"
        }
    }
}
