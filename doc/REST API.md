# REST API

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
POST    /users/:id/sensorssets  

GET     /sensorssets/:id  
GET     /sensorssets/:id/fields  
PUT     /sensorssets  
DELETE  /sensorssets  

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