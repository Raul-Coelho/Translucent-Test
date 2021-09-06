mvn clean package -DskipTests

sudo docker build -t back-end .

sudo docker-compose up