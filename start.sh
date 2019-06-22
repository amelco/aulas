#!/bin/bash

cd backend
echo 'Inicializando mongoDB...'
mongod -dbpath src/mongoDB &> /dev/null &
echo 'Inicializando backend...'
yarn dev &
cd ..
cd frontend
echo 'Inicializando frontend...'
yarn start &

