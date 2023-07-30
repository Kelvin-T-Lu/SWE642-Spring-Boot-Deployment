### HW 3 Swe642/Swe645
  - Swe642
    - Kelvin Lu
    - Ariunsaikhan Munkhbat

## Frontend (Angular (hw3))
  - Install Node.js
  - Install angular via npm
    - npm install -g @angular/cli
    - Verify with - ng version
  - Create new angular project
    - ng new hw3
  - To Run the Frontend (localhost:4200)
    -  ng serve
## Backend (Spring Boot restjpahw3)
  - Currently configured to run with a locally hosted database.
  - To remove target file directory. 
    - rm -rf /restjpahw3/target
  - To create SnapShot/Target file.
    - ./mvnw clean package
  - To Run Locally (HTTP://localhost:8080) with Java 17
    - java -jar restjpahw3/target/restjpahw3-0.0.1-SNAPSHOT.jar
  - To Run Docker Container (Assuming SQL is remotely hosted):
    -Docker Build image:
      - cd restjpahw3
      - docker build -t "{user}/{repo}:{tag}" .
    - Docker Run image. 
      - docker run -p 8080:8080 kelvintlu/swe642_hw3
   
