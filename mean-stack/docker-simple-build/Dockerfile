###############################
# DOCKER FILE BEST PRACTICES
###############################
# Lets Bake Our Image 
# - REF TO https://www.digitalocean.com/community/tutorial_series/from-containers-to-kubernetes-with-node-js
# - Create a running container from this image 
# - Minimize image layers as much as possible 
# - We use node image : Has a default node user(non-root)
# - Avoid using root as user to run container works
# - REF TO image security: https://docs.docker.com/engine/security/security/#linux-kernel-capabilities
# - WORKINDIR will be node user /home dir 
# - MORE BEST PRACTICES: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# - If a WORKDIR isn’t set, Docker will create one by default, so it’s a good idea to set it explicitly.
# - Learn to take advantage of Docker’s caching mechanism.
# - Switch docker user on the fly 

FROM node:10-alpine 
MAINTAINER fmbah

# TRIGGERS 
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node  
RUN npm install 
COPY --chown=node:node . .
EXPOSE 8080
CMD ["node", "app.js"]