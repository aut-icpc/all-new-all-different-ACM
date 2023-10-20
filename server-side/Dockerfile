FROM maven:3.8.4-openjdk-17-slim

# Set the working directory
WORKDIR /app

COPY . .

COPY ./settings.xml $HOME/.m2/settings.xml

RUN mvn clean install -DskipTests

ENTRYPOINT ["mvn", "spring-boot:run", "-DskipTests=true"]

