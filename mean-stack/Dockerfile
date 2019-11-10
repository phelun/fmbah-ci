###############################
# DOCKER FILE BEST PRACTICES
# Lets Bake Our Image 
# - REF TO https://www.digitalocean.com/community/tutorials/building-optimized-containers-for-kubernetes
# - Create a running container from this image 
# - Minimize image layers as much as possible 
# - We use node imag : Has a default node user(non-root)
# - Avoid using root as user to run container works
# - REF TO image security: https://docs.docker.com/engine/security/security/#linux-kernel-capabilities
# - WORKINDIR will be node user /home dir 
# - MORE BEST PRACTICES: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# - If a WORKDIR isn’t set, Docker will create one by default, so it’s a good idea to set it explicitly.
# - Learn to take advantage of Docker’s caching mechanism.
# - Switch docker user on the fly 

FROM node:10-alpine 

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY packages*.json ./
USER node  
RUN npm install 
