# Getting credentials
docker login

# Creating images and pushing DockerHub
docker build -t khangtgr/nestjs-server .
docker push khangtgr/nestjs-server

# Running Postgress container
docker run \
  --name postgres-demo \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=123 \
  -e POSTGRES_USER=admin \
  -v data:/var/lib/postgresql/data \
  postgres

# Cleanning docker system
docker stop $(docker ps -aq)
docker rmi -f $(docker images -aq)
docker system prune -a --force
docker volume prune -f
docker volume rm $(docker volume ls -q)
docker network prune -f
docker system df
docker volume ls
docker network ls
docker images -a

# Starting up docker compose
docker compose down
docker compose up --build -d

# Cleanning up docker compose
docker compose down --rmi all --volumes --remove-orphans
docker system df
docker volume ls
docker images -a
