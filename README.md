# Koyofea Backend
Contains the backend, written in NodeJS.

## Routes
All the routes are classified into three categories.
* Autofill routes (Endpoint: `/autofill`)
* Autofill Collection routes (Endpoint: `/autofill-collections`)
* College routes (Endpoint: `/college`)
* Recruiter routes (Endpoint: `/recruiter`)
* Student routes (Endpoint: `/student`)

### Autofill Routes
**All the autofill routes are available at base URL `/autofill`**

|URL|Request Type|Action|URL Parameters|Data Parameters|
|:---:|:-:|:---:|:---:|:---:|
|`/duration`|`GET`|Gets recruitment drive duration autofill data.|-|-|
|`/eligibility`|`GET`|Gets eligibility type autofill data.|-|-|
|`/emploment`|`GET`|Gets employment type autofill data.|-|-|
|`/gender`|`GET`|Gets gender autofill data.|-|-|
|`/gradescale`|`GET`|Gets gradescale autofill data.|-|-|
|`/industry`|`GET`|Gets industry type autofill data.|-|-|
|`/job`|`GET`|Gets job type autofill data.|-|-|
|`/major`|`GET`|Gets college major autofill data.|-|-|
|`/positions`|`GET`|Gets positions' autofill data.|-|-|
|`/schools`|`GET`|Gets schools' autofill data.|-|-|
|`/colleges`|`GET`|Gets colleges' autofill data.|-|-|
|`/programs`|`GET`|Gets programs' autofill data.|-|-|
|`/designations`|`GET`|Gets designations' autofill data.|-|-|
|`/organizations`|`GET`|Gets organizations' autofill data.|-|-|


### College Routes
**All the college routes are available at base URL `/college`**

|URL|Request Type|Action|URL Parameters|Data Parameters|
|:---:|:-:|:---:|:---:|:---:|
|`/`|`GET`|Gets the list of all colleges.|-|-|
|`/new`|`POST`|Adds a new college information into the database.|-|`name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_type_id`, `phone`, `description`|
|`/old`|`POST`|- WAIT -|-|- WAIT -|
|`/json`|`GET`|Gets the auto-fill data.|-|-|
|`/role`|`GET`|Gets all the available college roles.|-|-|
|`/:collegeid`|`GET`|Gets the college details given by ID.|`collegeid`|-|
|`/:collegeid`|`PUT`|Updates the college details given by ID.|`collegeid`|`name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_type_id`, `phone`, `description`|
|`/:collegeid/drives`|`GET`|Gets college's applied drives.|`collegeid`|-|
|`/:collegeid/students`|`GET`|Gets a college's students' list.|`collegeid`|-|
|`/:collegeid/students/:studentid/status`|`PUT`|Updates the student status (to verify a student profile).|`collegeid`|`verified_status`|
|`/:collegeid/staff`|`GET`|Gets a college's staffs' list.|`collegeid`|-|
|`/:collegeid/staff/:staffid/role`|`PUT`|Updates a staff's role.|`collegeid`|`updatedrole`|
|`/:collegeid/staff/:staffid/status`|`PUT`|Updates a staff's status (to verify a staff's profile).|`collegeid`|`verified_status`|
|`/coordinator`|`GET`|Gets all the coordinators list (of all colleges).|-|-|
|`/coordinator`|`POST`|Adds a new coordinator to the database.|-|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|
|`/coordinator/:coordinatorid`|`GET`|Gets a specific coordinator's information.|`coordinatorid`|-|
|`/coordinator/:coordinatorid`|`PUT`|Updates a specific coordinator's information.|`coordinatorid`|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|


### Recruiter Routes
**All the recruiter routes are available at base URL `/recruiter`**

|URL|Request Type|Action|URL Parameters|Data Parameters|
|:---:|:-:|:---:|:---:|:---:|
|`/`|`GET`|Gets the list of all recruiters.|-|-|
|`/new`|`POST`|Adds a new recruiter information into the database.|-|`name`, `website_url`, `description`, `verified`, `phone`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `size`, `recruiter_hr_id`, `industry_id`|
|`/old`|`PUT`|Updates a pre-existing recruiter record.|-|`name`, `website_url`, `description`, `verified`, `phone`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `size`, `recruiter_hr_id`, `industry_id`|
|`/json`|`GET`|Gets the auto-fill data.|-|-|
|`/hr`|`GET`|Gets all the HRs' details.|-|-|
|`/hr`|`POST`|Adds a new HR's info into the database.|-|`first_name`, `last_name`, `email`, `linkedin`, `linkedin_id`, `recruitment_hr_role_id`, `verified_status`|
|`/hr/:hrid`|`GET`|Gets a specific HR's profile.|-|-|
|`/hr/:hrid`|`PUT`|Updates a pre-existing HR record.|`hrid`|`first_name`, `last_name`, `email`, `linkedin`, `linkedin_id`, `recruitment_hr_role_id`, `verified_status`|
|`/hr/:hrid`|`GET`|Gets a specific HR's profile.|-|-|
|`/hr/:hrid/extra`|`POST`|Adds extra details of a pre-existing HR.|`hrid`|`recruitment_hr_id`, `public_profile`, `phone`, `bio`, `designation`|
|`/hr/:hrid/extra`|`PUT`|Updates extra details of a pre-existing HR.|`hrid`|`recruitment_hr_id`, `public_profile`, `phone`, `bio`, `designation`|


### Student Routes
**All the student routes are available at base URL `/student`**

|URL|Request Type|Action|URL Parameters|Data Parameters|
|:---:|:-:|:---:|:---:|:---:|
|`/`|`POST`|Adds a new student info to the database.|-|`first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `college_id`, `gender_id`, `college_major_id`, `college_program_id`|
|`/:studentid`|`GET`|Gets a student info from the database.|`studentid`|-|
|`/:studentid`|`PUT`|Adds a new student info to the database.|`studentid`|`first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `college_id`, `gender_id`, `college_major_id`, `college_program_id`|
|`/:studentid/education`|`GET`|Gets a student's education info from the database.|`studentid`|-|
|`/:studentid/education`|`POST`|Adds a student's education info to the database.|`studentid`|`start_date`, `end_date`, `institute_name`, `marks`, `marks_type`, `scale_type`, `college_major_id`, `college_program_id`, `name`|
|`/:studentid/education`|`PUT`|Updates a student's education info pre-existing in the database.|`studentid`|`start_date`, `end_date`, `institute_name`, `marks`, `marks_type`, `scale_type`, `college_major_id`, `college_program_id`, `name`|
|`/:studentid/experience`|`GET`|Gets a student's experience info from the database.|`studentid`|-|
|`/:studentid/experience`|`POST`|Adds a student's experience info to the database.|`studentid`|`start_date`, `end_date`, `position`, `description`, `student_id`, `company_name`|
|`/:studentid/experience`|`PUT`|Updates a student's experience info pre-existing in the database.|`studentid`|`start_date`, `end_date`, `position`, `description`, `student_id`, `company_name`|
|`/:studentid/projects`|`GET`|Gets a student's projects' info from the database.|`studentid`|-|
|`/:studentid/projects`|`POST`|Adds a student's project info to the database.|`studentid`|`name`, `description`, `url`, `student_id`|
|`/:studentid/projects`|`PUT`|Updates a student's project info pre-existing in the database.|`studentid`|`name`, `description`, `url`, `student_id`|
