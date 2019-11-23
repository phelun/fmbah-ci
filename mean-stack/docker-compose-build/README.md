## Key points for containerizing our application 

### App Related Points 
    - Modifying our application for a containerized workflow means making our code more modular 
    - dynamically assign configuration information at runtime with environment variables
      - Meaning refactor our code to allow dynamic assignment of the port at RUNTIME
    - We added som resiliency and check point to our DB connections 

### Docker-Compose Related Points 
    - Service in compose = Running Container + service definitions 
    - Add a "wait-for" tool to ensure that our application only attempts to connect to our database once the database startup tasks are complete
      - Wrapper script uses netcat to poll whether or not a specific host and port are accepting TCP connections
      - Compose' depends_on option, does same BUT, specific to whether container is running rather than readiness 