# Reference MEAN application 

* Inspired by https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/

# Base tech
- MongoDb => v4.0.12  
- Express => 4.17.1
- Angular => 8.3.3
- NodeJs  => 
- git

# Setup Base Tech Stacks on Centos 7 

## MongoDb 
  - sudo cat > /etc/yum.repos.d/mongodb-org.repo
    ```
    [MongoDB]
    name=MongoDB Repository
    baseurl=http://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
    gpgcheck=0
    enabled=1
    ```
  - sudo yum install mongodb-org -y
  - systemctl start mongod.service
  - sudo systemctl enable mongod.service
  - mongo #Get on to mongo prompt 
  - mongod --version
  - ``` > show dbs; ```

## NodeJs 
  - sudo yum install -y gcc-c++ make
  - sudo curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
  - sudo yum install -y nodejs
  - Check installed tools and version 
    ```
    node: v12.10.0
    npm: 6.10.3
    ```

## Angular/CLI 
  - sudo npm install -g @angular/cli  # Make sure you use sudo here 
  - ng --version 
    ```
    Angular CLI: 8.3.3
    ```
  - ng new 'projectname' 
  - ng serve --host 0.0.0.0 --port 4200 
