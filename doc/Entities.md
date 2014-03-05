# Entities

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

SensorsSet
- id
- name
- fields
