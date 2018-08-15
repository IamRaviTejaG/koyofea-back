-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: koyofea_development
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `placement_url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `created_date` datetime NOT NULL,
  `live` tinyint(1) NOT NULL DEFAULT '0',
  `address_1` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_2` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `landmark` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` int(11) NOT NULL,
  `college_coordinator_id` int(11) NOT NULL,
  `college_type_id` int(11) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `college_id_uindex` (`id`),
  KEY `college_college_coordinator_id_fk` (`college_coordinator_id`),
  KEY `college_college_type_id_fk` (`college_type_id`),
  CONSTRAINT `college_college_coordinator_id_fk` FOREIGN KEY (`college_coordinator_id`) REFERENCES `college_coordinator` (`id`),
  CONSTRAINT `college_college_type_id_fk` FOREIGN KEY (`college_type_id`) REFERENCES `college_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` (`id`, `name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_coordinator_id`, `college_type_id`, `phone`, `description`) VALUES (11,'IIIT','www.google.com','sd',0,'0000-00-00 00:00:00',0,'df','df','df','Bhubaneswar','Odisha','India',34,11,1,892,NULL);
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_coordinator`
--

DROP TABLE IF EXISTS `college_coordinator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_coordinator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `college_role_id` int(11) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `designation` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verified_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `coordinator_id_uindex` (`id`),
  KEY `college_coordinator_gender_id_fk` (`gender_id`),
  KEY `college_coordinator_role_id_fk` (`college_role_id`),
  CONSTRAINT `college_coordinator_gender_id_fk` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`),
  CONSTRAINT `college_coordinator_role_id_fk` FOREIGN KEY (`college_role_id`) REFERENCES `college_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_coordinator`
--

LOCK TABLES `college_coordinator` WRITE;
/*!40000 ALTER TABLE `college_coordinator` DISABLE KEYS */;
INSERT INTO `college_coordinator` (`id`, `first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`) VALUES (11,'College','Signup','collegesignup@gmail.com',98612,'0000-00-00 00:00:00',1,1,'opop','Hello',0),(12,'New','User','college12345@gmail.com',9861251200,'0000-00-00 00:00:00',5,2,'awesome','Coord head',2),(13,'Ip','man','ipman123@gmail.com',5,'0000-00-00 00:00:00',5,1,'op','i',0),(14,'Nw','coord','newcoordiunator@gmail.com',948758945,'0000-00-00 00:00:00',3,2,'op','Herp',0);
/*!40000 ALTER TABLE `college_coordinator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_extra`
--

DROP TABLE IF EXISTS `college_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_extra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_students` int(11) NOT NULL,
  `college_major_id` int(11) NOT NULL,
  `college_program_id` int(11) NOT NULL,
  `college_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `college_extra_id_uindex` (`id`),
  KEY `college_extra_college_major_id_fk` (`college_major_id`),
  KEY `college_extra_college_program_id_fk` (`college_program_id`),
  KEY `college_extra_college_id_fk` (`college_id`),
  CONSTRAINT `college_extra_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `college_extra_college_major_id_fk` FOREIGN KEY (`college_major_id`) REFERENCES `major` (`id`),
  CONSTRAINT `college_extra_college_program_id_fk` FOREIGN KEY (`college_program_id`) REFERENCES `college_program` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_extra`
--

LOCK TABLES `college_extra` WRITE;
/*!40000 ALTER TABLE `college_extra` DISABLE KEYS */;
/*!40000 ALTER TABLE `college_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_program`
--

DROP TABLE IF EXISTS `college_program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `program_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_program`
--

LOCK TABLES `college_program` WRITE;
/*!40000 ALTER TABLE `college_program` DISABLE KEYS */;
INSERT INTO `college_program` (`id`, `name`, `code`) VALUES (1,'btech','btech');
/*!40000 ALTER TABLE `college_program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_role`
--

DROP TABLE IF EXISTS `college_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create` tinyint(1) NOT NULL DEFAULT '0',
  `read` tinyint(1) NOT NULL DEFAULT '0',
  `update` tinyint(1) NOT NULL DEFAULT '0',
  `delete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id_uindex` (`id`),
  UNIQUE KEY `role_code_uindex` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_role`
--

LOCK TABLES `college_role` WRITE;
/*!40000 ALTER TABLE `college_role` DISABLE KEYS */;
INSERT INTO `college_role` (`id`, `role_name`, `code`, `create`, `read`, `update`, `delete`) VALUES (1,'admin','admin',1,1,1,1),(2,'staff','staff',1,1,1,0),(3,'maintainer','maintainer',0,1,1,0),(4,'student','student',0,1,0,0),(5,'member','member',0,0,0,0);
/*!40000 ALTER TABLE `college_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_type`
--

DROP TABLE IF EXISTS `college_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `college_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_type`
--

LOCK TABLES `college_type` WRITE;
/*!40000 ALTER TABLE `college_type` DISABLE KEYS */;
INSERT INTO `college_type` (`id`, `name`, `code`) VALUES (1,'engineering','eng'),(2,'engineering and management','eng&m');
/*!40000 ALTER TABLE `college_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_level`
--

DROP TABLE IF EXISTS `education_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `education_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `education_level_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_level`
--

LOCK TABLES `education_level` WRITE;
/*!40000 ALTER TABLE `education_level` DISABLE KEYS */;
/*!40000 ALTER TABLE `education_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eligibility_type`
--

DROP TABLE IF EXISTS `eligibility_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eligibility_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `eligibility_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eligibility_type`
--

LOCK TABLES `eligibility_type` WRITE;
/*!40000 ALTER TABLE `eligibility_type` DISABLE KEYS */;
INSERT INTO `eligibility_type` (`id`, `name`, `code`) VALUES (1,'10th Marks','x'),(2,'12th Marks','xii'),(3,'Graduation Marks','GRAD'),(4,'Post Graduation Marks','PGRAD');
/*!40000 ALTER TABLE `eligibility_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employment_type`
--

DROP TABLE IF EXISTS `employment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employment_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_employment_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employment_type`
--

LOCK TABLES `employment_type` WRITE;
/*!40000 ALTER TABLE `employment_type` DISABLE KEYS */;
INSERT INTO `employment_type` (`id`, `name`, `code`) VALUES (1,'full time','FULL'),(2,'part time','PART'),(3,'work from home','WFH');
/*!40000 ALTER TABLE `employment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empty`
--

DROP TABLE IF EXISTS `empty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `empty_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empty`
--

LOCK TABLES `empty` WRITE;
/*!40000 ALTER TABLE `empty` DISABLE KEYS */;
/*!40000 ALTER TABLE `empty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gender` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `gender_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` (`id`, `name`) VALUES (1,'male'),(2,'female'),(3,'other');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade_scale`
--

DROP TABLE IF EXISTS `grade_scale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grade_scale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `grade_scale_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_scale`
--

LOCK TABLES `grade_scale` WRITE;
/*!40000 ALTER TABLE `grade_scale` DISABLE KEYS */;
INSERT INTO `grade_scale` (`id`, `name`, `code`) VALUES (1,'CGPA','gpa'),(2,'Percentage','percent');
/*!40000 ALTER TABLE `grade_scale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `industry`
--

DROP TABLE IF EXISTS `industry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `industry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `industry_id_uindex` (`id`),
  UNIQUE KEY `industry_code_uindex` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industry`
--

LOCK TABLES `industry` WRITE;
/*!40000 ALTER TABLE `industry` DISABLE KEYS */;
INSERT INTO `industry` (`id`, `name`, `code`) VALUES (1,'technology','tech'),(2,'food and beverages','f&b');
/*!40000 ALTER TABLE `industry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_type`
--

DROP TABLE IF EXISTS `job_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_type` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_job_type_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_type`
--

LOCK TABLES `job_type` WRITE;
/*!40000 ALTER TABLE `job_type` DISABLE KEYS */;
INSERT INTO `job_type` (`id`, `name`, `code`) VALUES (1,'internship','intern'),(2,'job','job');
/*!40000 ALTER TABLE `job_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major`
--

DROP TABLE IF EXISTS `major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `major` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `major_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major`
--

LOCK TABLES `major` WRITE;
/*!40000 ALTER TABLE `major` DISABLE KEYS */;
INSERT INTO `major` (`id`, `name`, `code`) VALUES (1,'etc','etc');
/*!40000 ALTER TABLE `major` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapping_college_coordinator`
--

DROP TABLE IF EXISTS `mapping_college_coordinator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mapping_college_coordinator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_id` int(11) NOT NULL,
  `coordinator_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mapping_college_coordinator_id_uindex` (`id`),
  KEY `mapping_college_coordinator_college_id_fk` (`college_id`),
  KEY `mapping_college_coordinator_college_coordinator_id_fk` (`coordinator_id`),
  CONSTRAINT `mapping_college_coordinator_college_coordinator_id_fk` FOREIGN KEY (`coordinator_id`) REFERENCES `college_coordinator` (`id`),
  CONSTRAINT `mapping_college_coordinator_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapping_college_coordinator`
--

LOCK TABLES `mapping_college_coordinator` WRITE;
/*!40000 ALTER TABLE `mapping_college_coordinator` DISABLE KEYS */;
INSERT INTO `mapping_college_coordinator` (`id`, `college_id`, `coordinator_id`) VALUES (4,11,11),(5,11,12),(6,11,13),(7,11,14);
/*!40000 ALTER TABLE `mapping_college_coordinator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapping_drive_college`
--

DROP TABLE IF EXISTS `mapping_drive_college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mapping_drive_college` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_id` int(11) NOT NULL,
  `drive_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mapping_drive_college_college_id_fk` (`college_id`),
  KEY `mapping_drive_college_drive_id_fk` (`drive_id`),
  CONSTRAINT `mapping_drive_college_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `mapping_drive_college_drive_id_fk` FOREIGN KEY (`drive_id`) REFERENCES `recruiter_drive` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapping_drive_college`
--

LOCK TABLES `mapping_drive_college` WRITE;
/*!40000 ALTER TABLE `mapping_drive_college` DISABLE KEYS */;
INSERT INTO `mapping_drive_college` (`id`, `college_id`, `drive_id`, `status`) VALUES (4,11,10,0),(5,11,13,0),(6,11,6,0),(7,11,8,0);
/*!40000 ALTER TABLE `mapping_drive_college` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapping_hr_role`
--

DROP TABLE IF EXISTS `mapping_hr_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mapping_hr_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `recruiter_hr_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mapping_hr_role_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapping_hr_role`
--

LOCK TABLES `mapping_hr_role` WRITE;
/*!40000 ALTER TABLE `mapping_hr_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `mapping_hr_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapping_recruiter_drive_position`
--

DROP TABLE IF EXISTS `mapping_recruiter_drive_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mapping_recruiter_drive_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recruiter_drive_id` int(11) DEFAULT NULL,
  `recruiter_position_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mapping_recruiter_drive_position_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapping_recruiter_drive_position`
--

LOCK TABLES `mapping_recruiter_drive_position` WRITE;
/*!40000 ALTER TABLE `mapping_recruiter_drive_position` DISABLE KEYS */;
/*!40000 ALTER TABLE `mapping_recruiter_drive_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapping_recruiter_hr`
--

DROP TABLE IF EXISTS `mapping_recruiter_hr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mapping_recruiter_hr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recruiter_id` int(11) NOT NULL,
  `recruiter_hr_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hr_recruiter_mapping_id_uindex` (`id`),
  UNIQUE KEY `hr_recruiter_mapping_recruiter_hr_id_uindex` (`recruiter_hr_id`),
  KEY `mapping_recruiter_hr_recruiter_id_fk` (`recruiter_id`),
  CONSTRAINT `mapping_recruiter_hr_recruiter_hr_id_fk` FOREIGN KEY (`recruiter_hr_id`) REFERENCES `recruiter_hr` (`id`),
  CONSTRAINT `mapping_recruiter_hr_recruiter_id_fk` FOREIGN KEY (`recruiter_id`) REFERENCES `recruiter` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapping_recruiter_hr`
--

LOCK TABLES `mapping_recruiter_hr` WRITE;
/*!40000 ALTER TABLE `mapping_recruiter_hr` DISABLE KEYS */;
INSERT INTO `mapping_recruiter_hr` (`id`, `recruiter_id`, `recruiter_hr_id`) VALUES (13,49,91),(14,51,94),(15,52,95),(16,52,96);
/*!40000 ALTER TABLE `mapping_recruiter_hr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_position_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` (`id`, `name`, `code`) VALUES (1,'Software Developer',NULL),(2,'UI Engineers',NULL);
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `program_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program`
--

LOCK TABLES `program` WRITE;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` (`id`, `name`, `code`) VALUES (1,'btech','btech');
/*!40000 ALTER TABLE `program` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter`
--

DROP TABLE IF EXISTS `recruiter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website_url` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `phone` bigint(20) NOT NULL,
  `address_1` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_2` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landmark` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` int(11) NOT NULL,
  `size` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `recruiter_hr_id` int(11) NOT NULL,
  `industry_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_id_uindex` (`id`),
  UNIQUE KEY `recruiter_recruiter_hr_id_uindex` (`recruiter_hr_id`),
  KEY `recruiter_industry_id_fk` (`industry_id`),
  CONSTRAINT `recruiter_industry_id_fk` FOREIGN KEY (`industry_id`) REFERENCES `industry` (`id`),
  CONSTRAINT `recruiter_recruiter_hr_id_fk` FOREIGN KEY (`recruiter_hr_id`) REFERENCES `recruiter_hr` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter`
--

LOCK TABLES `recruiter` WRITE;
/*!40000 ALTER TABLE `recruiter` DISABLE KEYS */;
INSERT INTO `recruiter` (`id`, `name`, `website_url`, `description`, `verified`, `phone`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `size`, `recruiter_hr_id`, `industry_id`) VALUES (49,'wewe','ewsa.com','we',0,23,'we','we','w','Bhubaneswar','Odisha','w',3,'10-100',91,2),(51,'vivo','https://iiit-bh.ac.in','kj',0,897000,'dkfj','kjk','kk','Bhubaneswar','Odisha','India',32,'1-10',94,2),(52,'oppo','sdfwwddw','aweosme',0,4,'dsf','dsf','sdf','Bhubaneswar','Odisha','edfsd',3,'1-10',95,2);
/*!40000 ALTER TABLE `recruiter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_apply_type`
--

DROP TABLE IF EXISTS `recruiter_apply_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_apply_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_apply_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_apply_type`
--

LOCK TABLES `recruiter_apply_type` WRITE;
/*!40000 ALTER TABLE `recruiter_apply_type` DISABLE KEYS */;
INSERT INTO `recruiter_apply_type` (`id`, `name`, `code`) VALUES (1,'option1',NULL);
/*!40000 ALTER TABLE `recruiter_apply_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_category`
--

DROP TABLE IF EXISTS `recruiter_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_category_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_category`
--

LOCK TABLES `recruiter_category` WRITE;
/*!40000 ALTER TABLE `recruiter_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiter_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive`
--

DROP TABLE IF EXISTS `recruiter_drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration_id` int(11) NOT NULL,
  `work_study_job` tinyint(1) NOT NULL DEFAULT '0',
  `paid` tinyint(1) NOT NULL DEFAULT '1',
  `salary_low` double DEFAULT NULL,
  `salary_high` double DEFAULT NULL,
  `joining_date` date DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_openings` int(11) NOT NULL,
  `no_positions` int(11) NOT NULL,
  `url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recruiter_employment_type_id` int(11) NOT NULL,
  `recruiter_hr_id` int(11) NOT NULL,
  `display_contact_to_student` tinyint(1) DEFAULT '0',
  `recruiter_id` int(11) NOT NULL,
  `job_type_id` int(11) NOT NULL,
  `job_location_id` text COLLATE utf8mb4_unicode_ci,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) DEFAULT '0',
  `drive_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_id_uindex` (`id`),
  KEY `recruiter_drive_recruiter_employment_type_id_fk` (`recruiter_employment_type_id`),
  KEY `recruiter_drive_recruiter_hr_id_fk` (`recruiter_hr_id`),
  KEY `recruiter_drive_recruiter_id_fk` (`recruiter_id`),
  KEY `recruiter_drive_recruiter_drive_duration_id_fk` (`duration_id`),
  KEY `recruiter_drive_recruiter_drive_job_type_id_fk` (`job_type_id`),
  CONSTRAINT `recruiter_drive_recruiter_drive_duration_id_fk` FOREIGN KEY (`duration_id`) REFERENCES `recruiter_drive_duration` (`id`),
  CONSTRAINT `recruiter_drive_recruiter_drive_job_type_id_fk` FOREIGN KEY (`job_type_id`) REFERENCES `job_type` (`id`),
  CONSTRAINT `recruiter_drive_recruiter_employment_type_id_fk` FOREIGN KEY (`recruiter_employment_type_id`) REFERENCES `employment_type` (`id`),
  CONSTRAINT `recruiter_drive_recruiter_hr_id_fk` FOREIGN KEY (`recruiter_hr_id`) REFERENCES `recruiter_hr` (`id`),
  CONSTRAINT `recruiter_drive_recruiter_id_fk` FOREIGN KEY (`recruiter_id`) REFERENCES `recruiter` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive`
--

LOCK TABLES `recruiter_drive` WRITE;
/*!40000 ALTER TABLE `recruiter_drive` DISABLE KEYS */;
INSERT INTO `recruiter_drive` (`id`, `name`, `duration_id`, `work_study_job`, `paid`, `salary_low`, `salary_high`, `joining_date`, `description`, `no_openings`, `no_positions`, `url`, `recruiter_employment_type_id`, `recruiter_hr_id`, `display_contact_to_student`, `recruiter_id`, `job_type_id`, `job_location_id`, `created`, `status`, `drive_date`) VALUES (6,'dsvr',1,1,1,23,345,'2018-07-04','[object Object]',3,2,'',2,96,1,52,2,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(7,'hel',2,1,1,10,45,'2018-07-04','<p>hello</p><p>adc</p><p>asdc</p>',2,4,'',2,96,1,52,1,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(8,'SDc',2,1,1,123,564,'2018-07-04','<p>hello</p>',3,6,'',2,96,1,52,2,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(9,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(10,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(11,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(12,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(13,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(14,'asd',2,1,1,23,456,'2018-07-04','<p>dfvsd</p>',3,4,'',2,96,1,52,2,'d13','2018-07-04 20:28:37',0,'0000-00-00'),(15,'asdc',1,1,1,12,2435,'2018-07-04','<p>34sdfv</p>',3,4,'',2,96,1,52,1,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(16,'sdc',1,1,1,2110,425,'2018-07-04','<p>sfb</p>',3,4,'',2,96,1,52,2,'b11','2018-07-04 20:28:37',0,'0000-00-00'),(17,'sdc',1,1,1,2110,425,'2018-07-04','<p>sfb</p>',3,4,'',2,96,1,52,2,'b11','2018-07-04 20:28:37',0,'0000-00-00'),(18,'ASC',2,1,1,12,45,'2018-07-05','<p>qsdf</p>',3,4,'',1,96,1,52,1,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(19,'ASC',2,1,1,12,45,'2018-07-05','<p>qsdf</p>',3,4,'',1,96,1,52,1,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(20,'aef',1,1,1,10,34,'2018-07-05','<p>asefc</p>',10,10,'',2,96,1,52,2,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(21,'aef',1,1,1,10,34,'2018-07-05','<p>asefc</p>',10,10,'',2,96,1,52,2,'c12','2018-07-04 20:28:37',0,'0000-00-00'),(22,'sfd',2,1,1,10,546,'2018-07-05','<p>ghd</p>',4,5,'',2,96,1,52,2,'b11','2018-07-04 20:28:37',0,'0000-00-00'),(23,'sfd',2,1,1,10,546,'2018-07-05','<p>ghd</p>',4,5,'',2,96,1,52,2,'b11','2018-07-04 20:28:37',0,'0000-00-00');
/*!40000 ALTER TABLE `recruiter_drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_duration`
--

DROP TABLE IF EXISTS `recruiter_drive_duration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_duration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_duration_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_duration`
--

LOCK TABLES `recruiter_drive_duration` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_duration` DISABLE KEYS */;
INSERT INTO `recruiter_drive_duration` (`id`, `name`, `code`) VALUES (1,'permanent','per'),(2,'temporary','temp');
/*!40000 ALTER TABLE `recruiter_drive_duration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_eligibility`
--

DROP TABLE IF EXISTS `recruiter_drive_eligibility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_eligibility` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade_scale_id` int(11) DEFAULT NULL,
  `cutoff` double DEFAULT NULL,
  `eligibility_type_id` int(11) NOT NULL,
  `recruiter_drive_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_eligibility_id_uindex` (`id`),
  KEY `recruiter_drive_eligibility_grade_scale_id_fk` (`grade_scale_id`),
  KEY `recruiter_drive_eligibility_eligibility_type_id_fk` (`eligibility_type_id`),
  KEY `recruiter_drive_eligibility_recruiter_drive_id_fk` (`recruiter_drive_id`),
  CONSTRAINT `recruiter_drive_eligibility_eligibility_type_id_fk` FOREIGN KEY (`eligibility_type_id`) REFERENCES `eligibility_type` (`id`),
  CONSTRAINT `recruiter_drive_eligibility_grade_scale_id_fk` FOREIGN KEY (`grade_scale_id`) REFERENCES `grade_scale` (`id`),
  CONSTRAINT `recruiter_drive_eligibility_recruiter_drive_id_fk` FOREIGN KEY (`recruiter_drive_id`) REFERENCES `recruiter_drive` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_eligibility`
--

LOCK TABLES `recruiter_drive_eligibility` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_eligibility` DISABLE KEYS */;
INSERT INTO `recruiter_drive_eligibility` (`id`, `grade_scale_id`, `cutoff`, `eligibility_type_id`, `recruiter_drive_id`) VALUES (1,2,60,2,6),(2,1,7,3,6),(3,2,60,2,6),(4,1,7,3,6),(5,2,60,2,6),(6,2,60,2,6),(7,2,34,2,6),(8,1,3,3,6),(9,1,3,3,6);
/*!40000 ALTER TABLE `recruiter_drive_eligibility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_extra`
--

DROP TABLE IF EXISTS `recruiter_drive_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_extra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fcfs` tinyint(1) NOT NULL DEFAULT '0',
  `college_id` int(11) DEFAULT NULL,
  `college_type_id` int(11) NOT NULL,
  `recruiter_drive_id` int(11) NOT NULL,
  `recruiter_drive_type_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_extra_id_uindex` (`id`),
  KEY `recruiter_drive_extra_college_id_fk` (`college_id`),
  KEY `recruiter_drive_extra_college_type_id_fk` (`college_type_id`),
  KEY `recruiter_drive_extra_recruiter_drive_id_fk` (`recruiter_drive_id`),
  KEY `recruiter_drive_extra_recruiter_drive_type_id_fk` (`recruiter_drive_type_id`),
  CONSTRAINT `recruiter_drive_extra_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `recruiter_drive_extra_college_type_id_fk` FOREIGN KEY (`college_type_id`) REFERENCES `college_type` (`id`),
  CONSTRAINT `recruiter_drive_extra_recruiter_drive_id_fk` FOREIGN KEY (`recruiter_drive_id`) REFERENCES `recruiter_drive` (`id`),
  CONSTRAINT `recruiter_drive_extra_recruiter_drive_type_id_fk` FOREIGN KEY (`recruiter_drive_type_id`) REFERENCES `recruiter_drive_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_extra`
--

LOCK TABLES `recruiter_drive_extra` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_extra` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiter_drive_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_response`
--

DROP TABLE IF EXISTS `recruiter_drive_response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_response` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_accept` tinyint(1) DEFAULT NULL,
  `recruiter_accept` tinyint(1) DEFAULT NULL,
  `college_id` int(11) NOT NULL,
  `recruiter_drive_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_response_id_uindex` (`id`),
  KEY `recruiter_drive_response_college_id_fk` (`college_id`),
  KEY `recruiter_drive_response_recruiter_drive_id_fk` (`recruiter_drive_id`),
  CONSTRAINT `recruiter_drive_response_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `recruiter_drive_response_recruiter_drive_id_fk` FOREIGN KEY (`recruiter_drive_id`) REFERENCES `recruiter_drive` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_response`
--

LOCK TABLES `recruiter_drive_response` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_response` DISABLE KEYS */;
INSERT INTO `recruiter_drive_response` (`id`, `college_accept`, `recruiter_accept`, `college_id`, `recruiter_drive_id`) VALUES (1,10,5,11,10),(2,15,8,11,6);
/*!40000 ALTER TABLE `recruiter_drive_response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_round`
--

DROP TABLE IF EXISTS `recruiter_drive_round`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_round` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `round_no` int(11) DEFAULT NULL,
  `url` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_eligible` int(11) DEFAULT NULL,
  `no_applied` int(11) DEFAULT NULL,
  `round_intake` int(11) DEFAULT NULL,
  `no_passed` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `recruiter_drive_id` int(11) NOT NULL,
  `recruiter_round_type_id` int(11) NOT NULL,
  `is_virtual_drive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_round_id_uindex` (`id`),
  KEY `recruiter_drive_round_recruiter_drive_id_fk` (`recruiter_drive_id`),
  KEY `recruiter_drive_round_recruiter_round_type_id_fk` (`recruiter_round_type_id`),
  CONSTRAINT `recruiter_drive_round_recruiter_drive_id_fk` FOREIGN KEY (`recruiter_drive_id`) REFERENCES `recruiter_drive` (`id`),
  CONSTRAINT `recruiter_drive_round_recruiter_round_type_id_fk` FOREIGN KEY (`recruiter_round_type_id`) REFERENCES `recruiter_round_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_round`
--

LOCK TABLES `recruiter_drive_round` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_round` DISABLE KEYS */;
INSERT INTO `recruiter_drive_round` (`id`, `name`, `round_no`, `url`, `description`, `no_eligible`, `no_applied`, `round_intake`, `no_passed`, `date`, `duration`, `recruiter_drive_id`, `recruiter_round_type_id`, `is_virtual_drive`) VALUES (1,'xfg',1,'dg','cgh',NULL,NULL,2,NULL,'2018-07-24','00:00:43',6,3,1);
/*!40000 ALTER TABLE `recruiter_drive_round` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_drive_type`
--

DROP TABLE IF EXISTS `recruiter_drive_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_drive_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_drive_type_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_drive_type`
--

LOCK TABLES `recruiter_drive_type` WRITE;
/*!40000 ALTER TABLE `recruiter_drive_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiter_drive_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_extra`
--

DROP TABLE IF EXISTS `recruiter_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_extra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recruiter_industry_id` int(11) NOT NULL,
  `recruiter_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_extra_id_uindex` (`id`),
  KEY `recruiter_extra_recruiter_industry_id_fk` (`recruiter_industry_id`),
  KEY `recruiter_extra_recruiter_id_fk` (`recruiter_id`),
  CONSTRAINT `recruiter_extra_recruiter_id_fk` FOREIGN KEY (`recruiter_id`) REFERENCES `recruiter` (`id`),
  CONSTRAINT `recruiter_extra_recruiter_industry_id_fk` FOREIGN KEY (`recruiter_industry_id`) REFERENCES `industry` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_extra`
--

LOCK TABLES `recruiter_extra` WRITE;
/*!40000 ALTER TABLE `recruiter_extra` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiter_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_functional_area`
--

DROP TABLE IF EXISTS `recruiter_functional_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_functional_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_functional_area_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_functional_area`
--

LOCK TABLES `recruiter_functional_area` WRITE;
/*!40000 ALTER TABLE `recruiter_functional_area` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruiter_functional_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_hr`
--

DROP TABLE IF EXISTS `recruiter_hr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_hr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkedin` tinyint(1) NOT NULL DEFAULT '0',
  `linkedin_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recruiter_hr_role_id` int(11) DEFAULT NULL,
  `verified_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `hr_id_uindex` (`id`),
  UNIQUE KEY `recruiter_hr_work_mail_uindex` (`email`),
  KEY `recruiter_hr_role_id_fk` (`recruiter_hr_role_id`),
  CONSTRAINT `recruiter_hr_role_id_fk` FOREIGN KEY (`recruiter_hr_role_id`) REFERENCES `recruiter_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_hr`
--

LOCK TABLES `recruiter_hr` WRITE;
/*!40000 ALTER TABLE `recruiter_hr` DISABLE KEYS */;
INSERT INTO `recruiter_hr` (`id`, `first_name`, `last_name`, `email`, `linkedin`, `linkedin_id`, `recruiter_hr_role_id`, `verified_status`) VALUES (91,'recr','uiter','recruiteronboard@gmail.com',0,NULL,1,0),(92,'Anmo','L','anmol23@gmail.com',0,NULL,1,0),(93,'Popo','ok','asdfpo23@gmail.com',0,NULL,1,0),(94,'Popo','Ili','pospmklm2@gmail.com',0,NULL,1,0),(95,'New','Rec','newrecr21@gmail.com',0,NULL,1,0),(96,'Soumya','Yolo','srm2323@gmail.com',0,NULL,2,0);
/*!40000 ALTER TABLE `recruiter_hr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_hr_extra`
--

DROP TABLE IF EXISTS `recruiter_hr_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_hr_extra` (
  `recruiter_hr_id` int(11) NOT NULL,
  `public_profile` tinyint(1) DEFAULT '1',
  `phone` bigint(20) DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `designation` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  UNIQUE KEY `recruiter_hr_extra_recruiter_id_uindex` (`recruiter_hr_id`),
  CONSTRAINT `recruiter_hr_extra_recruiter_hr_id_fk` FOREIGN KEY (`recruiter_hr_id`) REFERENCES `recruiter_hr` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_hr_extra`
--

LOCK TABLES `recruiter_hr_extra` WRITE;
/*!40000 ALTER TABLE `recruiter_hr_extra` DISABLE KEYS */;
INSERT INTO `recruiter_hr_extra` (`recruiter_hr_id`, `public_profile`, `phone`, `bio`, `designation`) VALUES (94,1,0,'','fsg'),(95,1,0,'','CEO'),(96,0,0,'lauda le lo','c');
/*!40000 ALTER TABLE `recruiter_hr_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_role`
--

DROP TABLE IF EXISTS `recruiter_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  `code` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_role`
--

LOCK TABLES `recruiter_role` WRITE;
/*!40000 ALTER TABLE `recruiter_role` DISABLE KEYS */;
INSERT INTO `recruiter_role` (`id`, `role_name`, `code`) VALUES (1,'admin','admin'),(2,'member','member');
/*!40000 ALTER TABLE `recruiter_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_round_type`
--

DROP TABLE IF EXISTS `recruiter_round_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_round_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_round_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_round_type`
--

LOCK TABLES `recruiter_round_type` WRITE;
/*!40000 ALTER TABLE `recruiter_round_type` DISABLE KEYS */;
INSERT INTO `recruiter_round_type` (`id`, `name`, `code`) VALUES (1,'Personal Interview',NULL),(2,'Group Discussion',NULL),(3,'Aptitude',NULL);
/*!40000 ALTER TABLE `recruiter_round_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruiter_salary_type`
--

DROP TABLE IF EXISTS `recruiter_salary_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recruiter_salary_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recruiter_salary_type_id_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruiter_salary_type`
--

LOCK TABLES `recruiter_salary_type` WRITE;
/*!40000 ALTER TABLE `recruiter_salary_type` DISABLE KEYS */;
INSERT INTO `recruiter_salary_type` (`id`, `name`, `code`) VALUES (1,'job',NULL);
/*!40000 ALTER TABLE `recruiter_salary_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `skill_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `mobile` bigint(20) NOT NULL,
  `linkedin` tinyint(1) NOT NULL DEFAULT '0',
  `linkedin_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `college_id` int(11) NOT NULL,
  `gender_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id_uindex` (`id`),
  KEY `student_gender_id_fk` (`gender_id`),
  KEY `student_college_id_fk` (`college_id`),
  CONSTRAINT `student_college_id_fk` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`),
  CONSTRAINT `student_gender_id_fk` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `created_date`, `college_id`, `gender_id`) VALUES (3,'ravi','teja','raviteja@gmail.com','1998-04-08',1,993,0,'google.com','2018-07-09 00:00:00',11,1),(4,'Ankit','Choudhary','ankit@koyofea.com','1998-08-16',0,9416050764,0,NULL,'2018-07-18 11:33:08',11,1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_education`
--

DROP TABLE IF EXISTS `student_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `institute_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percentage` double DEFAULT NULL,
  `cgpa` double NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_id` int(11) NOT NULL,
  `college_major_id` int(11) NOT NULL,
  `college_program_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `education_id_uindex` (`id`),
  KEY `student_education_student_id_fk` (`student_id`),
  KEY `student_education_college_program_id_fk` (`college_program_id`),
  KEY `student_education_college_major_id_fk` (`college_major_id`),
  CONSTRAINT `student_education_college_major_id_fk` FOREIGN KEY (`college_major_id`) REFERENCES `major` (`id`),
  CONSTRAINT `student_education_college_program_id_fk` FOREIGN KEY (`college_program_id`) REFERENCES `college_program` (`id`),
  CONSTRAINT `student_education_student_id_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_education`
--

LOCK TABLES `student_education` WRITE;
/*!40000 ALTER TABLE `student_education` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_education_new`
--

DROP TABLE IF EXISTS `student_education_new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_education_new` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x_school` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `x_board` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `x_grade_scale_id` int(11) NOT NULL,
  `x_mark` double NOT NULL,
  `x_end` date NOT NULL,
  `xii_school` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xii_board` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `xii_grade_scale_id` int(11) NOT NULL,
  `xii_stream` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `xii_mark` double NOT NULL,
  `xii_end` date NOT NULL,
  `grad_school` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `grad_program_id` int(11) NOT NULL,
  `grad_major_id` int(11) NOT NULL,
  `grad_grade_scale_id` int(11) NOT NULL,
  `grad_mark` double NOT NULL,
  `grad_start` date NOT NULL,
  `grad_end` date NOT NULL,
  `student_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_education_new_id_uindex` (`id`),
  KEY `student_education_new_major_id_fk` (`grad_major_id`),
  KEY `student_education_new_program_id_fk` (`grad_program_id`),
  KEY `student_education_new_grade_scale_id_fk` (`x_grade_scale_id`),
  KEY `student_education_new_grade_scale_id_fk_2` (`xii_grade_scale_id`),
  KEY `student_education_new_grade_scale_id_fk_3` (`grad_grade_scale_id`),
  KEY `student_education_new_student_id_fk` (`student_id`),
  CONSTRAINT `student_education_new_grade_scale_id_fk` FOREIGN KEY (`x_grade_scale_id`) REFERENCES `grade_scale` (`id`),
  CONSTRAINT `student_education_new_grade_scale_id_fk_2` FOREIGN KEY (`xii_grade_scale_id`) REFERENCES `grade_scale` (`id`),
  CONSTRAINT `student_education_new_grade_scale_id_fk_3` FOREIGN KEY (`grad_grade_scale_id`) REFERENCES `grade_scale` (`id`),
  CONSTRAINT `student_education_new_major_id_fk` FOREIGN KEY (`grad_major_id`) REFERENCES `major` (`id`),
  CONSTRAINT `student_education_new_program_id_fk` FOREIGN KEY (`grad_program_id`) REFERENCES `program` (`id`),
  CONSTRAINT `student_education_new_student_id_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_education_new`
--

LOCK TABLES `student_education_new` WRITE;
/*!40000 ALTER TABLE `student_education_new` DISABLE KEYS */;
INSERT INTO `student_education_new` (`id`, `x_school`, `x_board`, `x_grade_scale_id`, `x_mark`, `x_end`, `xii_school`, `xii_board`, `xii_grade_scale_id`, `xii_stream`, `xii_mark`, `xii_end`, `grad_school`, `grad_program_id`, `grad_major_id`, `grad_grade_scale_id`, `grad_mark`, `grad_start`, `grad_end`, `student_id`) VALUES (5,'DAV','CBSE',1,9,'2013-03-31','DAV','CBSE',2,'Science',81.8,'2015-03-31','IIIT',1,1,1,7.75,'2016-08-01','2020-04-30',3);
/*!40000 ALTER TABLE `student_education_new` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_experience`
--

DROP TABLE IF EXISTS `student_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `designation` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_id` int(11) NOT NULL,
  `organization_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `experience_id_uindex` (`id`),
  KEY `student_experience_student_id_fk` (`student_id`),
  CONSTRAINT `student_experience_student_id_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_experience`
--

LOCK TABLES `student_experience` WRITE;
/*!40000 ALTER TABLE `student_experience` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_experience_type`
--

DROP TABLE IF EXISTS `student_experience_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_experience_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `experience_type_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_experience_type`
--

LOCK TABLES `student_experience_type` WRITE;
/*!40000 ALTER TABLE `student_experience_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_experience_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_position`
--

DROP TABLE IF EXISTS `student_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `position_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_position`
--

LOCK TABLES `student_position` WRITE;
/*!40000 ALTER TABLE `student_position` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_project`
--

DROP TABLE IF EXISTS `student_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id_uindex` (`id`),
  KEY `student_project_student_id_fk` (`student_id`),
  CONSTRAINT `student_project_student_id_fk` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_project`
--

LOCK TABLES `student_project` WRITE;
/*!40000 ALTER TABLE `student_project` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_type_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` (`id`, `name`, `code`) VALUES (1,'recruiter',NULL),(2,'coordinator',NULL),(3,'student',NULL);
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `verification_token` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified` tinyint(1) DEFAULT '0',
  `email_token` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data1` tinyint(1) DEFAULT '0',
  `data2` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_id_uindex` (`id`),
  UNIQUE KEY `users_email_uindex` (`email`),
  KEY `users_user_type_id_fk` (`user_type_id`),
  CONSTRAINT `users_user_type_id_fk` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_type_id`, `verification_token`, `email_verified`, `email_token`, `data1`, `data2`) VALUES (145,'recr','uiter','recruiteronboard@gmail.com','$2b$10$Ym5yeujGaOesvOio2lMZzOwyiM66fQt5QN7fCnh.INuFm/xlxK1Vq',1,'',1,NULL,1,1),(146,'Anmo','L','anmol23@gmail.com','$2b$10$e3.RCgSyZMES9kX163AtSOuCiYOBzeNWYBVFVZoasp.h9qFkDQZP.',1,'',1,NULL,1,1),(147,'Popo','ok','asdfpo23@gmail.com','$2b$10$2Ou889YG6CpoW9hJes7z7u2bhaF1YBSbYjVJ8DakNld9Oxb11oPRi',1,'',1,NULL,1,1),(148,'Popo','Ili','pospmklm2@gmail.com','$2b$10$wO0Rl50Luhx.HFCENF4zdeLA3xlyjS41tbzgtCTz4uOQheucN0b36',1,'',1,NULL,1,1),(149,'New','Rec','newrecr21@gmail.com','$2b$10$issZ1QrPp22jG8TREwmp5OxLxUruKxZq79W9KiLiALXFBTDO96RTq',1,'',1,NULL,1,1),(150,'Soumya','Mohanty','srm2323@gmail.com','$2b$10$9gQOcP56iOfGyNhkCY35Hez29jLAZyZWNj34B80FkZik9/mv5zmEe',1,'',1,NULL,1,1),(151,'College','Signup','collegesignup@gmail.com','$2b$10$wYjNfgDRwdInb16TpMCUlua7h4Tm7Lil9T4218u6WOFJzbjskW6Ym',2,'',1,NULL,1,1),(152,'New','User','college12345@gmail.com','$2b$10$YJvUypxr44.GnxGMZcXFCeq2pX6KDpp4dzUUSm4UH8isBT5LIltoO',2,'',1,NULL,1,1),(153,'Ip','man','ipman123@gmail.com','$2b$10$g8.N3ZnRm2HoE05/IPMUkeYBxDLHi9Dfa90wh9ZokVMnfN80F4pRC',2,'',1,NULL,1,1),(154,'Nw','coord','newcoordiunator@gmail.com','$2b$10$iBnu8nVIRP7nDqNJuZt/iOKb9ZbkKJAfdXpfHVKSCje0ZHGNbgRny',2,'',1,NULL,1,1),(155,'se','sddad','asdasd@fddf.ghh','$2b$10$94m87cjWSX3Wi9ifbK1Ppu96VR1iHS9709lnIbxNoYRb46Bf0Y08i',3,'',0,NULL,0,0),(156,'sadd','asd','adasd@ffdg.ggf','$2b$10$uPB7bgV54OwiqgUlAJD.0eCl2m8gGRE2CURSRYCas9e2IHkA4aPGS',3,'',0,NULL,0,0),(158,'ravi','teja','raviteja@gmail.com','$2b$10$mbtjchmycK3Z/bofBaYglOOU7.6CExnijM.4WUIHfnvPjfrB2leGG',3,'bb19ae20-b51a-4f99-b997-07d5dc44b2ef',1,NULL,1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-26 17:34:09
