# Koyofea Backend
Contains the backend, written entirely in NodeJS.

## Routes
All the routes are classified into the following categories.
* Base (Endpoint: `/`)
* Autofill (Endpoint: `/autofill`)
* Autofill Collections (Endpoint: `/autofill-collections`)
* College (Endpoint: `/college`)
* Recruiter (Endpoint: `/recruiter`)
* Student (Endpoint: `/student`)

### Base Routes
**These routes are directly available at base URL `/`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|Response|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|`/`|`GET`|Check to test if the API is up and running.|-|-|-|`message`|
|`/login`|`POST`|Sign in to your existing user account.|-|`email`, `password`|-|`message`, `token`|
|`/signup`|`POST`|Sign up for a new user account.|-|`first_name`, `last_name`, `email`, `password`, `user_type`|-|`message`, `token`/`error`|
|`/verify/:verificationtoken`|`GET`|Verifies your email.|`verificationtoken`|-|-|`message`/`error`|
|`/email-verify`|`GET`|Verifies your email.|`email_token`|-|**DEPRECATED**|
|`/dashboard`|`GET`|Gets the dashboard data of the logged in user.|-|-|-|
|`/user`|`GET`|Gets the user data of the logged in user.|-|-|-|
|`/drives`|`GET`|Gets all the drives of a recruiter.|-|-|-|
|`/drives/:driveid`|`GET`|Gets a specific drive's info.|`driveid`|-|-|
|`/drives/:driveid/rounds`|`GET`|Gets rounds' info of a specific drive.|`driveid`|-|-|
|`/drives/:driveid/eligibility`|`GET`|Gets a specific drive's eligibility info.|`driveid`|-|-|
|`/drives/:driveid/apply`|`POST`|Allows a college to apply for a specific drive.|`driveid`|`college_id`|-|


### Autofill Routes
**All the autofill routes are available at base URL `/autofill`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|
|:---:|:---:|:---:|:---:|:---:|:---:|
|`/duration`|`GET`|Gets recruitment drive duration autofill data.|-|-|-|
|`/eligibility`|`GET`|Gets eligibility type autofill data.|-|-|-|
|`/emploment`|`GET`|Gets employment type autofill data.|-|-|-|
|`/gender`|`GET`|Gets gender autofill data.|-|-|-|
|`/gradescale`|`GET`|Gets gradescale autofill data.|-|-|-|
|`/industry`|`GET`|Gets industry type autofill data.|-|-|-|
|`/job`|`GET`|Gets job type autofill data.|-|-|-|
|`/major`|`GET`|Gets college major autofill data.|-|-|-|
|`/positions`|`GET`|Gets positions' autofill data.|-|-|-|
|`/schools`|`GET`|Gets schools' autofill data.|-|-|-|
|`/colleges`|`GET`|Gets colleges' autofill data.|-|-|-|
|`/programs`|`GET`|Gets programs' autofill data.|-|-|-|
|`/designations`|`GET`|Gets designations' autofill data.|-|-|-|
|`/organizations`|`GET`|Gets organizations' autofill data.|-|-|-|


### Autofill Collections Routes
**All the autofill routes are available at base URL `/autofill-collections`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|
|:---:|:---:|:---:|:---:|:---:|:---:|
|`/education`|`GET`|Gets a JSON of student education based autofills.|-|-|-|
|`/experience`|`GET`|Gets a JSON of student experience based autofills.|-|-|-|


### College Routes
**All the college routes are available at base URL `/college`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|
|:---:|:---:|:---:|:---:|:---:|:---:|
|`/`|`GET`|Gets the list of all colleges.|-|-|-|
|`/new`|`POST`|Adds a new college information into the database.|-|`name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_type_id`, `phone`, `description`|**DEPRECATED**|
|`/old`|`POST`|- WAIT -|-|- WAIT -|**DEPRECATED**|
|`/json`|`GET`|Gets the auto-fill data.|-|-|**DEPRECATED**|
|`/role`|`GET`|Gets all the available college roles.|-|-|-|
|`/:collegeid`|`GET`|Gets the college details given by ID.|`collegeid`|-|-|
|`/:collegeid`|`PUT`|Updates the college details given by ID.|`collegeid`|`name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_type_id`, `phone`, `description`|-|
|`/:collegeid/drives`|`GET`|Gets college's applied drives.|`collegeid`|-|-|
|`/:collegeid/students`|`GET`|Gets a college's students' list.|`collegeid`|-|-|
|`/:collegeid/students/:studentid/status`|`PUT`|Updates the student status (to verify a student profile).|`collegeid`|`verified_status`|-|
|`/:collegeid/staff`|`GET`|Gets a college's staffs' list.|`collegeid`|-|-|
|`/:collegeid/staff/:staffid/role`|`PUT`|Updates a staff's role.|`collegeid`|`updatedrole`|-|
|`/:collegeid/staff/:staffid/status`|`PUT`|Updates a staff's status (to verify a staff's profile).|`collegeid`|`verified_status`|-|
|`/coordinator`|`GET`|Gets all the coordinators list (of all colleges).|-|-|-|
|`/coordinator`|`POST`|Adds a new coordinator to the database.|-|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|-|
|`/coordinator/:coordinatorid`|`GET`|Gets a specific coordinator's information.|`coordinatorid`|-|-|
|`/coordinator/:coordinatorid`|`PUT`|Updates a specific coordinator's information.|`coordinatorid`|`first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`|-|


### Recruiter Routes
**All the recruiter routes are available at base URL `/recruiter`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|
|:---:|:---:|:---:|:---:|:---:|:---:|
|`/`|`GET`|Gets the list of all recruiters.|-|-|-|
|`/new`|`POST`|Adds a new recruiter information into the database.|-|`name`, `website_url`, `description`, `verified`, `phone`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `size`, `recruiter_hr_id`, `industry_id`|**DEPRECATED**|
|`/old`|`PUT`|Updates a pre-existing recruiter record.|-|`name`, `website_url`, `description`, `verified`, `phone`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `size`, `recruiter_hr_id`, `industry_id`|**DEPRECATED**|
|`/json`|`GET`|Gets the auto-fill data.|-|-|**DEPRECATED**|
|`/hr`|`GET`|Gets all the HRs' details.|-|-|-|
|`/hr`|`POST`|Adds a new HR's info into the database.|-|`first_name`, `last_name`, `email`, `linkedin`, `linkedin_id`, `recruitment_hr_role_id`, `verified_status`|-|
|`/hr/:hrid`|`GET`|Gets a specific HR's profile.|-|-|-|
|`/hr/:hrid`|`PUT`|Updates a pre-existing HR record.|`hrid`|`first_name`, `last_name`, `email`, `linkedin`, `linkedin_id`, `recruitment_hr_role_id`, `verified_status`|-|
|`/hr/:hrid`|`GET`|Gets a specific HR's profile.|-|-|-|
|`/hr/:hrid/extra`|`POST`|Adds extra details of a pre-existing HR.|`hrid`|`recruitment_hr_id`, `public_profile`, `phone`, `bio`, `designation`|-|
|`/hr/:hrid/extra`|`PUT`|Updates extra details of a pre-existing HR.|`hrid`|`recruitment_hr_id`, `public_profile`, `phone`, `bio`, `designation`|-|
|`/:rid/drives/requested`|`GET`|Gets colleges' list that requested drives from the specific recruiter.|`rid`|-|-|
|`/:rid/drives/:driveid`|`GET`|Gets a recruiter's specific drive info.|`rid`, `driveid`|-|-|
|`/:rid/drives/:driveid`|`PUT`|Updates a recruiter's specific drive info.|`rid`, `driveid`|`name`, `duration_id`, `work_study_job`, `paid`, `salary_low`, `salary_high`, `joining_date`, `description`, `no_openings`, `no_positions`, `url`, `recruiter_employment_type_id`, `recruiter_hr_id`, `job_type_id`, `job_location_id`, `drive_date`|-|
|`/:rid/staff`|`GET`|Gets a recruiter's staff details.|`rid`|-|-|
|`/:rid/staff/:staffid/role`|`PUT`|Gets a recruiter's staff details.|`rid`, `staffid`|`updatedrole`|-|
|`/:rid/staff/:staffid/status`|`PUT`|Gets a recruiter's staff details.|`rid`, `staffid`|`status`|-|
|`/drives/:driveid/rounds`|`GET`|Gets rounds' info of a specific drive.|`driveid`|-|-|
|`/drives/:driveid/rounds`|`POST`|Adds a new round info of a specific drive.|`driveid`|`name`, `round_no`, `url`, `description`, `no_eligible`, `no_applied`, `round_intake`, `no_passed`, `date`, `duration`, `recruiter_drive_id`, `recruiter_round_type_id`, `is_virtual_drive`|-|
|`/drives/:driveid/rounds/:roundid`|`GET`|Gets specific round's info of a specific drive.|`driveid`, `roundid`|-|-|
|`/drives/:driveid/rounds/:roundid`|`PUT`|Updates specific round's info of a specific drive.|`driveid`, `roundid`|`name`, `round_no`, `url`, `description`, `no_eligible`, `no_applied`, `round_intake`, `no_passed`, `date`, `duration`, `recruiter_drive_id`, `recruiter_round_type_id`, `is_virtual_drive`|-|
|`/drives/:driveid/eligibility/:eid`|`GET`|Gets a specific drive's eligibility info.|`driveid`, `eid`|-|-|
|`/drives/:driveid/eligibility/:eid`|`PUT`|Updates a specific drive's eligibility info.|`driveid`, `eid`|`grade_scale_id`, `cutoff`, `eligibility_type_id`, `recruiter_drive_id`|-|
|`/:recruiterid/colleges`|`GET`|Gets a recruiter's applied colleges list.|`recruiterid`|-|-|
|`/:rid/drives`|`GET`|Gets a recruiter's all drives.|`rid`|-|-|
|`/:rid/drives`|`POST`|Adds a new drive of a specific recruiter.|`rid`|`name`, `duration_id`, `work_study_job`, `paid`, `salary_low`, `salary_high`, `joining_date`, `description`, `no_openings`, `no_positions`, `url`, `recruiter_employment_type_id`, `recruiter_hr_id`, `job_type_id`, `job_location_id`, `drive_date`|-|


### Student Routes
**All the student routes are available at base URL `/student`**

|URL|Request Type|Action|URL Parameters|Data Parameters|Status|
|:---:|:---:|:---:|:---:|:---:|:---:|
|`/`|`POST`|Adds a new student info to the database.|-|`first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `college_id`, `gender_id`, `college_major_id`, `college_program_id`|-|
|`/:studentid`|`GET`|Gets a student info from the database.|`studentid`|-|-|
|`/:studentid`|`PUT`|Adds a new student info to the database.|`studentid`|`first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `college_id`, `gender_id`, `college_major_id`, `college_program_id`|-|
|`/:studentid/education`|`GET`|Gets a student's education info from the database.|`studentid`|-|-|
|`/:studentid/education`|`POST`|Adds a student's education info to the database.|`studentid`|`start_date`, `end_date`, `institute_name`, `marks`, `marks_type`, `scale_type`, `college_major_id`, `college_program_id`, `name`|-|
|`/:studentid/education`|`PUT`|Updates a student's education info pre-existing in the database.|`studentid`|`start_date`, `end_date`, `institute_name`, `marks`, `marks_type`, `scale_type`, `college_major_id`, `college_program_id`, `name`|-|
|`/:studentid/experience`|`GET`|Gets a student's experience info from the database.|`studentid`|-|-|
|`/:studentid/experience`|`POST`|Adds a student's experience info to the database.|`studentid`|`start_date`, `end_date`, `position`, `description`, `student_id`, `company_name`|-|
|`/:studentid/experience`|`PUT`|Updates a student's experience info pre-existing in the database.|`studentid`|`start_date`, `end_date`, `position`, `description`, `student_id`, `company_name`|-|
|`/:studentid/projects`|`GET`|Gets a student's projects' info from the database.|`studentid`|-|-|
|`/:studentid/projects`|`POST`|Adds a student's project info to the database.|`studentid`|`name`, `description`, `url`, `student_id`|-|
|`/:studentid/projects`|`PUT`|Updates a student's project info pre-existing in the database.|`studentid`|`name`, `description`, `url`, `student_id`|-|
