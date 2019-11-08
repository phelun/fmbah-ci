#############################
REFERENCE: 
##########
https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

#############################
TASK: 
#####
- Create Static website that USES Express Framework and Bootstrap 
- Build an image of this website 
- Creating a running instance of the site from image as container 

Proposed steps: 
	1. Develop package.json file to generate dependencies and static files 
	2. Verify MAIN(entry point for app) and DEPENDENCIES in package.json 
	3. Install dependencies <npm install> where package.json is 
	4. Verify dependencies and static files are in place 

#############################
FILES AND KEY CONCEPTS 
######################
package.json [generate dependencies]
	- defines dependencies 
	- most importantl defines entry point in main stanza 


app.js [entrypoints]
	- Creates express application 
	- Creates routers objects 
	- Defines base directory and port as constant
