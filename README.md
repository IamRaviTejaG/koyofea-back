# Koyofea Backend
Contains the backend, written completely in ExpressJS.

## Routes
All the routes are classified into three categories.
* College routes (Endpoint: `/college`)
* Recruiter routes (Endpoint: `/recruiter`)
* Student routes (Endpoint: `/student`)

### College Routes
**All the college routes are available at base URL `/college`**

|URL|Requests|Action|Data Parameters|
|:---:|:-:|:---:|:---:|
|`/`|`GET`|Gets the list of all colleges.|-|
|`/new`|`POST`|Adds a new college information into the database.|- WAIT -|
|`/old`|`POST`|- WAIT -|- WAIT -|
|`/json`|`GET`|Gets the auto-fill data.|-|
|`/role`|`GET`|Gets all the available college roles.|-|
|`/coordinator`|`GET`|Gets all the coordinators list (of all colleges).|-|
|`/coordinator`|`POST`|Adds a new coordinator to the database.|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|
|`/coordinator/:id`|`GET`|Gets a specific coordinator's information.|-|
|`/coordinator/:id`|`PUT`|Updates a specific coordinator's information.|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|
