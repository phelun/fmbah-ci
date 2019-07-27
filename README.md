Repo Author: 
F.Mbah

## Repo Purpose: 
    - This simple repo builds/test(unit,coverage) variouse projects using vraioouse buils tools(gradle/maven/ant/npm) 
    - Packages built artifact 
    - Push artifacts to artifactory/ecs/docker registry 
    - Auto trigger this job based on project 

## To Do: 
    - Organise project types (java/nodejs) 
    - Trigger job at comit 
    - Notify build status to slack/email
    - Trigger CD job
    - 

## Sample Apps: 
    - calculator : This is a Java/Spring Boot application.
        * Does a simple calculation
        * Runs on port 8080  docker run -it -d -p 8091:8080 phelun/calc_cicd:2.0
        * Inspired by Rafal Leszco in CD with docker 
        * Runs a unit test with Junit
        * Code coverage with Jacoco 
        * BUilds and uploads to docker hub
    - 
