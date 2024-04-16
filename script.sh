# Creating images and pushing DockerHub
docker build -t khangtgr/nestjs-server .
docker login
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
docker volume rm nextjs-hello_postgres_data
docker volume rm nextjs-hello_pgadmin_data
docker system df
docker volume ls
docker images -a

# Starting up docker compose
docker compose down
docker compose up --build -d

# Cleanning up docker compose
docker compose down --rmi all --volumes --remove-orphans
