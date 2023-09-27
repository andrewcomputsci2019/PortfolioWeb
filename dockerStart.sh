#!/bin/sh
echo "running start script"
docker build --build-arg JAR_FILE=build/libs/*.jar -t mywebsite/app .
docker run -d --restart always --name website-container -p 8080:8080 mywebsite/app
echo "exiting start script"