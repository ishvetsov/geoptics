# REST API

PUT     /boreholes/:id  
GET     /boreholes?noattached=true  
GET     /boreholes/:id  
GET     /boreholes/:id/depths
POST    /boreholes/:id/depths  
GET     /boreholes/:id/moments  
POST    /boreholes/:id/moments  
GET     /boreholes/:id/perforations  
POST    /boreholes/:id/perforations  
GET     /boreholes/:id/psensors  
GET     /boreholes/:id/tsensors  
PUT     /boreholes/:id/psensors/:number  
PUT     /boreholes/:id/tsensors/:number  
GET     /boreholes/:id/psensors/:number  
GET     /boreholes/:id/tsensors/:number  

PUT     /depths/:id  
DELETE  /depths/:id  

PUT     /moments/:id  
DELETE  /moments/:id  

PUT     /perforations/:id
DELETE  /perforations/:id

PUT     /clusters/:id  
DELETE  /clusters/:id  
GET     /clusters/:id  
GET     /clusters/:id/boreholes  

GET     /fields  
POST    /fields  
POST    /fields/:id/clusters  
PUT     /fields/:id  
DELETE  /fields/:id  
GET     /fields/:id  
GET     /fields/:id/clusters  

GET     /users  
POST    /users/:id  
PUT     /users/:id  
DELETE  /users/:id  
GET     /users/:id  
GET     /users/:id/usergroups  
GET     /users/:id/sensorssets  
POST    /users/:id/sensorssets  

GET     /sensorssets/:id  
GET     /sensorssets/:id/fields  
PUT     /sensorssets/:id  
DELETE  /sensorssets/:id  

POST    /usergroups  
PUT     /usergroups/:id  
DELETE  /usergroups/:id  
GET     /usergroups  
GET     /usergroups/:id  
GET     /usergroups/:id/users  

POST    /login  
POST    /logout  

GET     /data/boreholes/:id/tsensors/:number  
GET     /data/boreholes/:id/psensors/:number  
