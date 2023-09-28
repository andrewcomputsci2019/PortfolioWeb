FROM eclipse-temurin:17-jdk-alpine
LABEL authors="andrew"
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Xmx2048m","-jar","/app.jar"]