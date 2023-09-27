echo "updating container"
docker update --restart no website-container
echo "stopping container"
docker stop website-container
echo "removing container"
docker rm website-container