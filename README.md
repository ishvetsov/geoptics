# Geoptics

Restapi:

GET /psensors/:id  
POST /psensors  
PUT /psensors  
DELETE /psensors  

GET /tsensors/:id  
POST /tsensors  
PUT /tsensors  
DELETE /tsensors  

GET /boreholes/:id  
POST /boreholes  
PUT /boreholes  
DELETE /boreholes  
GET /boreholes/:id/psensors  
GET /boreholes/:id/tsensors  
GET /boreholes/noattached  

GET /clusters/:id  
POST /clusters  
PUT /clusters  
DELETE /clusters  
GET /clusters/:id/boreholes  

GET /fields/:id  
GET /fields  
POST /fields  
PUT /fields  
DELETE /fields  
GET /fields/:id/clusters  

GET /users/:id  
GET /users  
POST /users  
PUT /users  
DELETE /users  
GET /users/:id/groups  
GET /users/:id/sensorssets  

GET /usergroups/:id  
POST /usergroups  
PUT /usergroups    
DELETE /usergroups  
GET /usergroups  
GET /usergroups/:id/users  
