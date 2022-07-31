// pipeline {
//     agent any
//     tools { nodejs 'node' }

//     stages {
//         stage('Code') {
//             steps {
//                 echo 'Zaczynam pobierac kod'
//                 git 'https://michalbordo@bitbucket.org/michalbordo/cypress_testing.git'
                
//             }
//         }

//         stage('NPM install') {
//             steps {
//                 sh 'node -v'
//                 sh encoding: 'UTF-8', label: 'Install cypress', returnStdout: true, returnStatus: false, script: 'npm install'
//                  sh 'cypress -v'
//             }
//         }
//     }
// }
