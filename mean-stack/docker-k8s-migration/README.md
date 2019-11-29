## Using kompose to translate docker-compose.yaml to k8s yaml files 

https://www.digitalocean.com/community/tutorials/how-to-migrate-a-docker-compose-workflow-to-kubernetes

STEPS Completed 
1. Build image from current directory 
2. Push image to registry 
3. Translating docker-compose.yaml file 
   - Need to modify some parts of your docker-compose.yaml file 
   - Finally use kompose convert to translate
   - Additional modifications required on generated files  
4. create a secret file ans use base64 to convert your original username/passwd 
   - echo -n 'your_database_password' | base64


## 
https://www.xtivia.com/minikube-install-guide-centos/

Logon to anbible 66 box 
minikube status 
minikube start # If not started 
kubectl proxy --address='0.0.0.0' --disable-filter=true     # Allow for Remote Dashboard access 
http://192.168.1.66:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/#/overview?namespace=kube-system
https://github.com/kubernetes/minikube/issues/877

