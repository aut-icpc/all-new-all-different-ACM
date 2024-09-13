FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /usr/app

COPY ./target/server-0.0.1.jar ./app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]