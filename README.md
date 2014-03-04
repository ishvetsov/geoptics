# Geoptics

//-----------------------------------------------
RESTapi:

PUT     /boreholes  
GET     /boreholes?noattached=true  
GET     /boreholes/:id  
GET     /boreholes/:id/depths  
GET     /boreholes/:id/moments  
GET     /boreholes/:id/perforations  
GET     /boreholes/:id/psensors  
GET     /boreholes/:id/tsensors  
PUT     /boreholes/:id/depths  
PUT     /boreholes/:id/moments  
PUT     /boreholes/:id/perforations  
PUT     /boreholes/:id/psensors  
PUT     /boreholes/:id/tsensors  
GET     /boreholes/:id/psensors/:number  
GET     /boreholes/:id/tsensors/:number  

POST    /clusters  
PUT     /clusters  
DELETE  /clusters  
GET     /clusters/:id  
GET     /clusters/:id/boreholes  

GET     /fields  
POST    /fields  
PUT     /fields  
DELETE  /fields  
GET     /fields/:id  
GET     /fields/:id/clusters  

GET     /users  
POST    /users  
PUT     /users  
DELETE  /users  
GET     /users/:id  
GET     /users/:id/usergroups  
GET     /users/:id/sensorssets  

POST    /usergroups  
PUT     /usergroups  
DELETE  /usergroups  
GET     /usergroups  
GET     /usergroups/:id  
GET     /usergroups/:id/users  

POST    /login  
POST    /logout  

GET     /data/boreholes/:id/tsensors/:number  
GET     /data/boreholes/:id/psensors/:number  

//------------------------------------------
Entities:

Borehole
- id
- code               // Обозначение
- location           // Местоположение
- number             // Номер
- fieldStation       // Промысел 
- ownerCompany       // Компания владелец
- serviceCompany     // Сервисная компания
- paramsDescription  // Текстовое описание параметров скважины
- installedEquipmentDescription // Описание установленного оборудования
- altitude           // Высота над уровнем моря
- craterDepth        // Глубина воронки
- bottomholeDepth    // Глубина забоя
- perforations       // Список зон перфораций 
- depths             // Список интересных глубин
- moments            // Список интересных моментов времени
- сomments           // Комментарии
- tsensors           // Список датчиков температуры
- psensors           // Список датчиков давления

Cluster
- id
- name
- number
- comments
- boreholes

Comment
- id
- createDate
- text
- author

Depth
- id
- value
- comment

Field
- id
- name
- number
- comments
- clusters

Moment
- id
- date
- comment

Perforation
- id
- depth

PSensor
- name
- channelNumber
- depth
- comments

TSensor
- name
- channelNumber
- depth
- comments

User
- id
- firstName
- middleName
- lastName
- login
- password
- org
- email
- tel
- comment
- isActive
- groups

Usergroup
- id
- name
- access
- users
