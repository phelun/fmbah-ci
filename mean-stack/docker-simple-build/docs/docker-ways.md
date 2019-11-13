# Use relevant docker command for variouse layers 

# CICD HINT FLOW 
- Create a docker ignore file as in this root dir for mean stack 
- Build image with below command 
  - docker build -t your_dockerhub_username/imag-name .
- Spin up a container from the image 
  - docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/image-name 
- Log on to docker hub registry 
  - docker login -u your_dockerhub_username 
  - Create' a ~/.docker/config.json file in your user’s home directory with your Docker Hub credentials.
- Push application image to docker registry 
  - docker push your_dockerhub_username/image-name 
- CLEAN UP 
- REMOVE Images and non used container, and dagling images 
  - docker system prune -a