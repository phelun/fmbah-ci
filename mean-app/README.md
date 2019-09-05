# Reference MEAN application 

* Inspired by https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/

# Base tech
- MongoDb => v4.0.12  
- Express => 
- Angular 
- NodeJs 

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
  - yum install -y gcc-c++ make
  - sudo curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
  - sudo yum install -y nodejs
  - Check installed tools and version 
    ```
    node: v12.10.0
    npm: 6.10.3
    ```
