#############################
REFERENCE: 
##########
https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

#############################
TASK: 
#####
- Create Static website that USES Express Framework and Bootstrap 
- Build an image of this website 
- Create a running instance of the site from image as container 

Proposed steps: 
	1. Develop package.json file to generate dependencies and static files 
	2. Verify MAIN(entry point for app) and DEPENDENCIES in package.json 
	3. Install dependencies <npm install> with package in root dir. 
	4. Verify dependencies and lock files are in place in the root dir
	5. Develop/define apps entrypoint(Internal routing to static files) 
	6. Add static files to views dir(All HTML|CSS|JS related static files)
	7. Review static files and if happy
	8. start app locally on 8080 <node app.js>
	9. Start authoring DockerFile
	10. 

#############################
FILES AND KEY CONCEPTS 
######################
package.json [generate dependencies]
	- defines dependencies 
	- most importantly, defines entry point in main stanza 


app.js [entrypoints]
	- Creates express application 
	- Creates routers objects 
	- Defines base directory and port as constant
	- Defines how app accept traffic
	- Routing based on GET requests 
	- Targets the content of the view directory

views_directory [StaticHome]
	- contains all htmlws 
	- rules in app.js calls files from here 
	- Index page as the landing home page 
	- Shark Page 
	- css/style.css things - Boostrapped here 
	- 
