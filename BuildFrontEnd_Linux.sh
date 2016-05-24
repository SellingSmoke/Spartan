#!/bin/sh
cd FrontEnd
ng build --output-path ./../Backend/src/main/resources/static
cd ..
cd Backend
mvn -U clean install
