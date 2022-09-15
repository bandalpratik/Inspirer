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
        success {
            mail to: pratikbandal55@gmail.com, subject: ‘The Pipeline success :(‘
        }
        failure {
            mail to: team@example.com, subject: ‘The Pipeline failed :(‘
        }
    }
}
