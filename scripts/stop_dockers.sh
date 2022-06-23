docker stop frontend backend
docker rm frontend backend
docker ps
docker system prune -f -a
docker images