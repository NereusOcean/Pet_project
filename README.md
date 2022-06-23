Тестовое задание для Jupiter Soft

# Запуск Linux Docker

```
sudo docker-compose up -d --build
```
Docker поднимет два контейнера, для backend и для frontend части.

Проект будет использовать следующие порты:

backend  - http://loaclhost:3001

frontend - http://loaclhost:3000

Для остановки контейнеров и удаления изображений используйте скрипт.
```
bash scripts/stop_dockers.sh
```

# Запуск без Docker
Для начала запустим frontend
```
cd frontend/

npm i

npm run start
```

Далее backend
```
cd backend/

npm i

npm run start
```

Проект будет использовать следующие порты:

backend  - http://loaclhost:3001

frontend - http://loaclhost:3000