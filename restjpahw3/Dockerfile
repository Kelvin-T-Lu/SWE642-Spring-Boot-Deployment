

FROM openjdk:17-alpine

COPY . .

RUN rm -rf /restjpahw3/target
RUN ./mvnw clean package

WORKDIR /app
COPY ./target/restjpahw3-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

CMD ["java", "-jar", "/app/restjpahw3-0.0.1-SNAPSHOT.jar"]