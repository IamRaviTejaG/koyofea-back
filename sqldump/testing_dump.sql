-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: koyofea_test
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` (`id`, `name`, `website_url`, `placement_url`, `verified`, `created_date`, `live`, `address_1`, `address_2`, `landmark`, `city`, `state`, `country`, `pin`, `college_coordinator_id`, `college_type_id`, `phone`, `description`) VALUES (11,'IIIT','www.google.com','sd',0,'0000-00-00 00:00:00',0,'df','df','df','Bhubaneswar','Odisha','India',34,11,1,892,NULL),(12,'IIIT','www.google.com','sd',0,'2018-08-20 14:20:45',0,'df','df','df','Bhubaneswar','Odisha','India',34,11,1,892,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_coordinator`
--

LOCK TABLES `college_coordinator` WRITE;
/*!40000 ALTER TABLE `college_coordinator` DISABLE KEYS */;
INSERT INTO `college_coordinator` (`id`, `first_name`, `last_name`, `email`, `phone`, `created_date`, `college_role_id`, `gender_id`, `bio`, `designation`, `verified_status`) VALUES (11,'College','Signup','collegesignup@gmail.com',98612,'0000-00-00 00:00:00',1,1,'opop','Hello',0),(12,'New','User','college12345@gmail.com',9861251200,'0000-00-00 00:00:00',5,2,'awesome','Coord head',2),(13,'Ip','man','ipman123@gmail.com',5,'0000-00-00 00:00:00',5,1,'op','i',0),(14,'Nw','coord','newcoordiunator@gmail.com',948758945,'0000-00-00 00:00:00',3,2,'op','Herp',0),(15,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(16,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(17,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(18,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(19,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(20,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(21,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(22,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(23,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-02 00:00:00',2,1,'TESTING TESTING','TESTER',0),(24,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(25,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(26,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(27,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(28,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(29,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(30,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(31,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0),(32,'TEST','COORDINATOR','coordinator@test.com',111,'2018-09-03 00:00:00',2,1,'TESTING TESTING','TESTER',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `first_name`, `last_name`, `email`, `dob`, `verified`, `mobile`, `linkedin`, `linkedin_id`, `created_date`, `college_id`, `gender_id`) VALUES (3,'Ravi Teja','Gannavarapu','raviteja@gmail.com','1998-04-08',0,10000,0,'google.com','2018-07-08 18:30:00',11,1),(4,'Ankit','Choudhary','ankit@koyofea.com','1998-08-16',0,9416050764,0,NULL,'2018-07-18 11:33:08',11,1),(5,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(6,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(7,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(8,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(9,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(10,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(11,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(12,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1),(13,'TEST','STUDENT','student@test.com','2018-09-03',0,111,0,NULL,'2018-09-02 18:30:00',11,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_education`
--

LOCK TABLES `student_education` WRITE;
/*!40000 ALTER TABLE `student_education` DISABLE KEYS */;
INSERT INTO `student_education` (`id`, `start_date`, `end_date`, `institute_name`, `percentage`, `cgpa`, `name`, `student_id`, `college_major_id`, `college_program_id`) VALUES (1,'2018-09-04','2018-09-04','TEST',95,9,'TESTER',3,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_education_new`
--

LOCK TABLES `student_education_new` WRITE;
/*!40000 ALTER TABLE `student_education_new` DISABLE KEYS */;
INSERT INTO `student_education_new` (`id`, `x_school`, `x_board`, `x_grade_scale_id`, `x_mark`, `x_end`, `xii_school`, `xii_board`, `xii_grade_scale_id`, `xii_stream`, `xii_mark`, `xii_end`, `grad_school`, `grad_program_id`, `grad_major_id`, `grad_grade_scale_id`, `grad_mark`, `grad_start`, `grad_end`, `student_id`) VALUES (5,'DAV','CBSE',1,9,'2013-03-31','DAV','CBSE',2,'Science',81.8,'2015-03-31','IIIT',1,1,1,7.75,'2016-08-01','2020-04-30',3),(6,'DAV','CBSE',1,9,'2018-09-03','DAV','CBSE',2,'Science',81.8,'2018-09-03','IIIT',1,1,1,9,'2018-09-03','2018-09-03',3),(7,'DAV','CBSE',1,9,'2018-09-03','DAV','CBSE',2,'Science',81.8,'2018-09-03','IIIT',1,1,1,9,'2018-09-03','2018-09-03',3),(8,'TEST','TEST',1,10,'2018-09-03','TEST','TEST',2,'TEST',95,'2018-09-03','TEST',1,1,1,9,'2018-09-03','2018-09-03',3),(9,'TEST','TEST',1,10,'2018-09-03','TEST','TEST',2,'TEST',95,'2018-09-03','TEST',1,1,1,9,'2018-09-03','2018-09-03',3),(10,'TEST','TEST',1,10,'2018-09-03','TEST','TEST',2,'TEST',95,'2018-09-03','TEST',1,1,1,9,'2018-09-03','2018-09-03',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_experience`
--

LOCK TABLES `student_experience` WRITE;
/*!40000 ALTER TABLE `student_experience` DISABLE KEYS */;
INSERT INTO `student_experience` (`id`, `start_date`, `end_date`, `designation`, `description`, `student_id`, `organization_name`) VALUES (1,'2018-09-04','2018-09-04','TESTER','TESTING EVERYTHING!',3,'MOCHA & CHAI');
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
) ENGINE=InnoDB AUTO_INCREMENT=285 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `user_type_id`, `verification_token`, `email_verified`, `email_token`, `data1`, `data2`) VALUES (145,'recr','uiter','recruiteronboard@gmail.com','$2b$10$Ym5yeujGaOesvOio2lMZzOwyiM66fQt5QN7fCnh.INuFm/xlxK1Vq',1,'',1,NULL,1,1),(146,'Anmo','L','anmol23@gmail.com','$2b$10$e3.RCgSyZMES9kX163AtSOuCiYOBzeNWYBVFVZoasp.h9qFkDQZP.',1,'',1,NULL,1,1),(147,'Popo','ok','asdfpo23@gmail.com','$2b$10$2Ou889YG6CpoW9hJes7z7u2bhaF1YBSbYjVJ8DakNld9Oxb11oPRi',1,'',1,NULL,1,1),(148,'Popo','Ili','pospmklm2@gmail.com','$2b$10$wO0Rl50Luhx.HFCENF4zdeLA3xlyjS41tbzgtCTz4uOQheucN0b36',1,'',1,NULL,1,1),(149,'New','Rec','newrecr21@gmail.com','$2b$10$issZ1QrPp22jG8TREwmp5OxLxUruKxZq79W9KiLiALXFBTDO96RTq',1,'',1,NULL,1,1),(150,'Soumya','Mohanty','srm2323@gmail.com','$2b$10$9gQOcP56iOfGyNhkCY35Hez29jLAZyZWNj34B80FkZik9/mv5zmEe',1,'',1,NULL,1,1),(151,'College','Signup','collegesignup@gmail.com','$2b$10$wYjNfgDRwdInb16TpMCUlua7h4Tm7Lil9T4218u6WOFJzbjskW6Ym',2,'',1,NULL,1,1),(152,'New','User','college12345@gmail.com','$2b$10$YJvUypxr44.GnxGMZcXFCeq2pX6KDpp4dzUUSm4UH8isBT5LIltoO',2,'',1,NULL,1,1),(153,'Ip','man','ipman123@gmail.com','$2b$10$g8.N3ZnRm2HoE05/IPMUkeYBxDLHi9Dfa90wh9ZokVMnfN80F4pRC',2,'',1,NULL,1,1),(154,'Nw','coord','newcoordiunator@gmail.com','$2b$10$iBnu8nVIRP7nDqNJuZt/iOKb9ZbkKJAfdXpfHVKSCje0ZHGNbgRny',2,'',1,NULL,1,1),(155,'se','sddad','asdasd@fddf.ghh','$2b$10$94m87cjWSX3Wi9ifbK1Ppu96VR1iHS9709lnIbxNoYRb46Bf0Y08i',3,'',0,NULL,0,0),(156,'sadd','asd','adasd@ffdg.ggf','$2b$10$uPB7bgV54OwiqgUlAJD.0eCl2m8gGRE2CURSRYCas9e2IHkA4aPGS',3,'',0,NULL,0,0),(158,'ravi','teja','raviteja@gmail.com','$2b$10$mbtjchmycK3Z/bofBaYglOOU7.6CExnijM.4WUIHfnvPjfrB2leGG',2,'bb19ae20-b51a-4f99-b997-07d5dc44b2ef',1,NULL,1,1),(159,'RUNNING','TESTS','test@test.com','$2b$10$B6q6gT44JmR/2cXcy1Yw3e7eAno40znqL0uSUBcwVHMwXRJyaT4Ey',1,'63243c70-f911-4690-9c81-aaf1638352c9',1,NULL,0,0),(162,'RUNNING','TESTS','test2@test.com','$2b$10$Kt5qNWLkZmIrJbjup08sY.mlxLg3yYtVcVxadYsLmEcn3M8CKVvOu',1,'192df109-6ebf-4346-a26d-d24fc59098ff',0,NULL,0,0),(164,'RUNNING','TESTS','1534750207306a@test.com','$2b$10$yn7Zcp.Ch.h8RTIpq03c2ui1cSWshOMY5TmoDyREVrweaZtuWxs7.',1,'084ed438-e8f4-4359-9351-300a35b8d5a6',0,NULL,0,0),(165,'RUNNING','TESTS','1534750229241@test.com','$2b$10$oRw.bYiClkMtMXd8poDbEeB0VlbSCGdu4g6xLTcKeSIE/ZUpypTs6',1,'3c93cdfe-f738-4f33-af45-793bb6ebcf59',1,NULL,0,0),(166,'RUNNING','TESTS','1534750292503@test.com','$2b$10$ZoFTWqRNE2TY.2X7u0eLu.pttcRZtJQ.Vguj9lObfRbM8RYmBeRvC',1,'7350bf61-9aca-430e-8433-6bd3d34e8951',0,NULL,0,0),(167,'RUNNING','TESTS','1534750449448@test.com','$2b$10$9GlNdNQtpYq9ebbIOW/hQ.X99Xi.DDksW2/Pv2CZV.NPNW0nCUHDq',1,'e1466b58-f139-461a-b9e2-92bce5895e23',0,NULL,0,0),(168,'RUNNING','TESTS','1534750677428@test.com','$2b$10$VmZJI3wlamYtFN6lwU1X8uw.k1BpMer9Ky4wAwLkwj9e1DZFfa0yi',1,'4fd8b711-5391-415d-8ab4-1e926469ce99',1,NULL,0,0),(169,'RUNNING','TESTS','1534750786907@test.com','$2b$10$iJYC.zonBFCSHBBDgNxb3OM4Ptp3QvBYvtbg/8gWUj4hdugiwFi9C',1,'abe084ac-ee44-4ab4-8473-aefea1e11cb4',1,NULL,0,0),(170,'RUNNING','TESTS','1534751757938@test.com','$2b$10$Sh2j4nPHU4eJfTukpvoZpepsooMMemILQM0kHDC4IgpRtv71xUpgK',1,'cb26bb04-db09-4845-9b13-fbfaf6d9eba1',1,NULL,0,0),(171,'RUNNING','TESTS','1534751864516@test.com','$2b$10$VTmDnx1kIUQgjmpzhRLRFOZSjrJ/31hyLCijtUbpmAc0wX1JBzA7S',1,'e345b1bc-4657-41c5-851b-efbfced58f96',1,NULL,0,0),(172,'RUNNING','TESTS','1534751972797@test.com','$2b$10$PuheyW.hZ49a1dr/c7ThPudxnGoO1HoCCCeZ057conqFzkmvzEEtW',1,'a185566d-d242-4781-bea6-ec45526b59c4',1,NULL,0,0),(173,'RUNNING','TESTS','1534752022764@test.com','$2b$10$EY5ZKUc/0VmU.p6KumBTl.jfFNaPXo2w2TUz32hWyEdF6/jlXeIum',1,'e2c4b768-eda8-4310-bf6c-f4158d33e057',1,NULL,0,0),(174,'RUNNING','TESTS','1534752061171@test.com','$2b$10$wYvJ7MMwEnq/RPBMb2a.4eKn9DvVrDXgg.Nj.BwKc3SjHXv1JC22S',1,'b3cd72bf-883f-4ca0-bc86-fb43a8107799',1,NULL,0,0),(175,'RUNNING','TESTS','1534752113481@test.com','$2b$10$0MVhWEyYdweIqeMKHmfy0eZxOI/.DV7s2V5n1Var747W70stIu/Xe',1,'9cc07077-fda9-4d01-9381-621ae0aad89e',1,NULL,0,0),(176,'RUNNING','TESTS','1534752136561@test.com','$2b$10$557ctnicP28XkLnPMNP18uDqaHgzR3I5gyQFCNuOGZRk.WWKJW0cu',1,'de6c576f-6252-4eac-a8c6-1cad96a3158f',1,NULL,0,0),(177,'RUNNING','TESTS','1534752158190@test.com','$2b$10$yQExQ86tjmRGruQyFpuoU.pudYh9PP7puPLYgV/.Sp.VFrdiTwKEi',1,'6788ef4e-d21f-465f-868c-15f465a33da6',1,NULL,0,0),(178,'RUNNING','TESTS','1534752216613@test.com','$2b$10$TEFseAWNNJoWjaOiY8gFIuPL08EmixrryRU8qowY1O9FQb1/ggxHW',1,'f80f2d83-ffa9-4291-b4fb-13e72e66c4d4',1,NULL,0,0),(179,'RUNNING','TESTS','1534752384801@test.com','$2b$10$kxC48ce3GCD.ue.A.kmwTu4cHgtH/E5Y4Dm7Tt0Xt3bQpfdLhiNym',1,'6a83f03c-42f3-4450-a62c-4b4cf2a3e3a6',1,NULL,0,0),(180,'RUNNING','TESTS','1534774954233@test.com','$2b$10$FnqcB6ZjAlTR6Dn9mYqvAO2lMp4AVbZQKzqB9kgmCPu955KjSdUUy',1,'4fd965e3-e9e3-4aa0-9d37-b705e9651e2e',1,NULL,0,0),(181,'RUNNING','TESTS','1534774993168@test.com','$2b$10$G2HG//nMYlC2DFoAft6g1ukW5ajUT1c6RujQKvLDoLiXsRZGh4Wpi',1,'9579436c-a667-48b8-be56-a3c3032ca587',1,NULL,0,0),(182,'RUNNING','TESTS','1534775019278@test.com','$2b$10$PprpDqakT4wlvQ63GV6/8uFuxzD9RrfvOtAgU/srIeUBhtKIpX2HO',1,'872dcdca-7129-4778-9318-e286ae65934a',1,NULL,0,0),(183,'RUNNING','TESTS','1534775051723@test.com','$2b$10$06mSfD5XDTpXvz.VgG6BfO1pOO5WJplZitCkOP/SQwfxTaZaYzIiC',1,'49bb0420-84f3-4514-b1a2-e61b9d3cc1e5',1,NULL,0,0),(184,'RUNNING','TESTS','1534775305770@test.com','$2b$10$a2I/N0BlEZnReig1MZtnAulNJ2FsPAgSm77cKC9Ztzkl0jDYXcasC',1,'3f80f8f1-7083-4ac2-81f1-a800a8b950fc',1,NULL,0,0),(185,'RUNNING','TESTS','1534775526105@test.com','$2b$10$NgtOukSzosSgszXGKNZyTOXN6x23EYnQ1O1hv/i9OqHc2s/5z2FqK',1,'dea96f82-eb4a-426f-97fa-3821600d47bf',1,NULL,0,0),(186,'RUNNING','TESTS','1534775824290@test.com','$2b$10$TvFqmE9V2gBOaXYCw2Tf4u2WIryNbeY6fqX/eigdrVAfkjWnKA7k2',1,'d06b98d9-adb8-45f6-97ff-f9fe5cdae2af',1,NULL,0,0),(187,'RUNNING','TESTS','1534775975220@test.com','$2b$10$0BCD0.1N0pec4hYhgyiknOfBwE0a65FK.9FhNZ.1nA4u.vuWwSGyK',1,'ea7a7b5c-02f2-466b-a2da-06a6daa87f0f',1,NULL,0,0),(188,'RUNNING','TESTS','1534776019817@test.com','$2b$10$92CZSCY3xuEHFQoAIZdwzOyM.3SiGPINe/GwPvuKZ9gBJH0M4vD2i',1,'8ac51a9e-affa-4737-99f3-0d86cccdaf6e',1,NULL,0,0),(189,'RUNNING','TESTS','1534776112902@test.com','$2b$10$3pgqIwB.lFxBOv6cT3c36.pqO8WljzOkcVE7kFluijFr.rYzSmPHq',1,'b1207730-d8e0-44f9-adf7-56582f6ac423',1,NULL,0,0),(190,'RUNNING','TESTS','1534776219067@test.com','$2b$10$pQQ1uvyvGqKtkEngudhO8.u1d5UvZbnSev43e/6xucatQMY9UVCRq',1,'cadb19b9-70aa-493e-a2e2-1a708d64c198',0,NULL,0,0),(191,'RUNNING','TEST','1534777314253@test.com','$2b$10$.Pen9OTf361qSx1IdOYIzuyexjYWD1qYV7.cM8NrMesVkp0OHbPsK',1,'8842b065-a880-49c8-b6ff-9a0c269e14bd',1,NULL,0,0),(192,'RUNNING','TEST','1534777382824@test.com','$2b$10$gy5I7YgxaPzbMUqyxAB43.iIgYKHH81yq7vbIUOS/s9FCUMT1sxji',1,'f52a8e0f-117a-461c-83fe-122a9e827e82',1,NULL,0,0),(193,'RUNNING','TEST','1534777412977@test.com','$2b$10$bazVV9UYHlRiqwp2lR1scuzGZxIkQP06ry5eO8I9p/12cbO7ukMcW',1,'30dec79e-40a1-4eb3-9780-d080aa6360be',1,NULL,0,0),(194,'RUNNING','TEST','1534787407339@test.com','$2b$10$UKf1xDqBVsrvz8gUGcdBBeL2wDfPpGCX5YTmFwTocfHwk4qn6gCBy',1,'634195b8-0a61-441c-9f1c-26938a01ec4f',1,NULL,0,0),(195,'RUNNING','TEST','1534787976654@test.com','$2b$10$Qxt6O.FiDibm2aox2nkID.ebtq1Xjun5kW02ulvc6ik6y2WFUKk4S',1,'274c754d-6ee3-4b27-90aa-117b4e6a750e',1,NULL,0,0),(196,'RUNNING','TEST','1534788484683@test.com','$2b$10$YN.aMpyvwre0k0ta2pJoDuVVdH3gDn4JPqR1RtAQPIka3Pxjg9.Cy',1,'e5dd9c98-6bb2-4685-959d-41c6c3fa24e5',1,NULL,0,0),(197,'RUNNING','TEST','1534788593070@test.com','$2b$10$p7oAeE3Gny4Fw.Cybw7fPeNDej/hyq7ZrtbaiD8apUH5v1KnoN8wm',1,'6ee6c04e-a540-4ae8-9397-80b34694c7fc',1,NULL,0,0),(198,'RUNNING','TEST','1534789198418@test.com','$2b$10$uM0NjMhQmSZ9.BBkIcO0QetZNsSik7d/M61R.KVIOki6MwvUtSxpm',1,'3a9a81b8-04dd-4d9b-b7e0-e2415136ea9c',1,NULL,0,0),(199,'RUNNING','TEST','1534790107077@test.com','$2b$10$De5snJJ5xPupQGg/tIFh.OhmRGfZpQWm7GTV4M2zKq3YBdUKCUnUa',1,'d26ed7e8-e0b3-4d0c-9f78-9205dfa21970',1,NULL,0,0),(200,'RUNNING','TEST','1534790344028@test.com','$2b$10$vic7Yh0ohTfF4GvPGGEpy./Q044g2Zpvg.eWglxKDmo.Zey7oy5am',1,'3d06b9a9-3ea1-4a4b-9cb5-dd52bfc4e2eb',1,NULL,0,0),(201,'RUNNING','TEST','1534790902408@test.com','$2b$10$l.ND1piJ4wQzQ/VbvmNSH.y1fMLtN.9aGA1rJK9dzgCv.aNuNBSKG',1,'2b71f873-d880-45b2-8c14-66d4556dd368',1,NULL,0,0),(202,'RUNNING','TEST','1534790987030@test.com','$2b$10$SpLfOjFiYhNm04IGHyfYuugWPP.hMmbGI5skvb5AUDkD/iGsUjPjy',1,'5056cea1-6eed-467f-88f7-2d4785d54bd1',1,NULL,0,0),(203,'RUNNING','TEST','1534791062298@test.com','$2b$10$9E9Ny4kma.IoVPhH80EiKu6Nd2LNADazvt6nHRZpLYrmtLo6A9rP.',1,'49f1ab43-8768-4c1a-93d8-04a78d6b7180',1,NULL,0,0),(204,'RUNNING','TEST','1534791105602@test.com','$2b$10$U.wMsULFbCvrR51kY2ILYun39992qpsZWhdI3Gik3tS4ablu9N75K',1,'f7a77d1d-92bd-4fe6-940a-c5db2250cb82',1,NULL,0,0),(205,'RUNNING','TEST','1534791875688@test.com','$2b$10$sddzfruCZmG9X/N9vkjJx.MmfFIeGEGomQPtA.ycAYrL6ktZFS8Yy',1,'1e54464b-1d09-4c33-bdb4-4ad455c9a02e',1,NULL,0,0),(206,'RUNNING','TEST','1534791903483@test.com','$2b$10$8mADv0SsBuFGdIHqIMws2.uhu35OrsKdmO3KZRXaD3tZN4WSiTX0W',1,'664915d1-7ec6-43e4-b4e0-3bb72ceba86a',1,NULL,0,0),(207,'RUNNING','TEST','1534792047843@test.com','$2b$10$zAhUkiu1/H.to9wqIAydWe.Dju6GB4FfcEh0sNh76az3s0vVSiRnK',1,'234907bb-2666-4979-ab7f-bb73946d63ff',1,NULL,0,0),(208,'RUNNING','TEST','1534792105671@test.com','$2b$10$GOcXhhpzwD.G/wT2B.rPMuux/py0V9LWiLHWbup7QLNRWNMJB4NHS',1,'3c2d625a-3fd9-4c96-b2a8-da6efdf43a24',1,NULL,0,0),(209,'RUNNING','TEST','1534792168815@test.com','$2b$10$UuIXcTlcpPL0sVx2IdUVsO6xBgtgDcWI9oCBxpY6LqWYhscv8KOa2',1,'712e5aea-e456-4ca8-acf6-fdca436a7110',1,NULL,0,0),(210,'RUNNING','TEST','1534792726315@test.com','$2b$10$BrMAUEmVHUK7aEQw1wQ8ru9QLBD/pr3duL5bkhJ79vJyx1bT3yAPe',1,'1ae56abf-54ac-42d6-bdeb-5e6b8e89dcb8',1,NULL,0,0),(211,'RUNNING','TEST','1534793084101@test.com','$2b$10$XBuF.TleC4Ke06Lsvu4jy.LfMV7UwB7kYDeNbMbD.A/B9GX5iuLu2',1,'66e8c3f5-3391-4302-8413-8e5a6ca0b871',0,NULL,0,0),(212,'RUNNING','TEST','1534793084292@test.com','$2b$10$t02bF960U4izxM/qzZxXs.f1sij0C2rE6zCkgf/ktZtV4hGm85x3C',1,'f26d1c19-e72f-4e71-9a37-836a9c2e8eb1',1,NULL,0,0),(213,'RUNNING','TEST','1534793176092@test.com','$2b$10$7OR.DKGt5yLoG1T1nLgzPeJ.QJLtZSYNyGygq6K9EpBbyGxa6hInC',1,'1ccd9d5d-e4fe-4ac0-a8fb-1ba123191bf3',0,NULL,0,0),(214,'RUNNING','TEST','1534793176272@test.com','$2b$10$BlPkWoWOMPBucq6Vy4dz6uM.iGX2KOXSBoRvsGRBM3pNj5N7fshRC',1,'07ca641f-0dd4-47f2-8571-7c6162b3c215',1,NULL,0,0),(215,'RUNNING','TEST','1534793273859@test.com','$2b$10$1z9V/nLGMYG25bSSG/fB8OxACP8ICw.Yy.ZapFqT442bKYOS38o4a',1,'adb4ab69-fcac-4431-b025-98ef125acd52',0,NULL,0,0),(216,'RUNNING','TEST','1534793274042@test.com','$2b$10$XHQ8IIN0pIhF53kuJOL1U.D922a.YYsYPvLs5xc7tJp86ULMsjQf6',1,'a072fab7-5e2e-41a0-a82e-3569cab3b466',1,NULL,0,0),(217,'RUNNING','TEST','1534882881912@test.com','$2b$10$IUlYogOudBcn100av.pxiu/Entpb9IcW87h1jVYSXR6mHKs3FzO7e',1,'34259bea-5dad-4a6c-a304-c19f8a99e452',0,NULL,0,0),(218,'RUNNING','TEST','1534882882132@test.com','$2b$10$n6svONX7GA5K.bXLmfWKQettpUFsEHbztQ14xZQ7RFUORpqhb3DnG',1,'7fc1c26e-4651-4e8c-9db7-8f45a055b946',1,NULL,0,0),(219,'RUNNING','TEST','1534883092454@test.com','$2b$10$R03faOsB7NXZ8cV8cygF7.JRSpmcwZew6FGnw3yjmxo51P5S9aOlq',1,'99b16ee4-4f56-4d4d-85cc-0092d735b9f7',0,NULL,0,0),(220,'RUNNING','TEST','1534883092636@test.com','$2b$10$IzacEdbZbq10nV3Hcqtd7.ZyG39DGrLZZhdsusK8jg68Jqxud1Sp2',1,'e2bc5966-07ec-4ec1-bc66-032f6a033aac',1,NULL,0,0),(221,'RUNNING','TEST','1534883201861@test.com','$2b$10$kny/XY6pYkpA4sUbKo8M/.u45HuhmFfUWGcQ7lW/8q5VFBGvCXlzW',1,'17ac38ec-2282-427d-8e2c-b1e4a779da26',0,NULL,0,0),(222,'RUNNING','TEST','1534883202076@test.com','$2b$10$Q9VEUX/jsgjSpJwNknG5geQQhot9x3wIzZ.55SGYi4/kdGT/EWjYC',1,'0ba6cbde-69af-4960-9710-b170e5988f2c',1,NULL,0,0),(223,'RUNNING','TEST','1534883352059@test.com','$2b$10$.Wpbgma7cA4lqYnS/o09s.f38hL93optAfDuJGh0cPypthjh3W9eq',1,'d33e2322-457c-447c-8a2e-ec30c71fd99b',0,NULL,0,0),(224,'RUNNING','TEST','1534883352270@test.com','$2b$10$90JB8mA.bUshR.03kzwF4Oxt2I4C2tm7xk26sv0FBCvCAdtmXQiq6',1,'1a639096-5ab3-4d91-afd7-2579da4672ff',1,NULL,0,0),(225,'RUNNING','TEST','1534883421888@test.com','$2b$10$/8zCMPnKdaPYH9Nc.e2S2.uDa7JS1.K81AweeZlb5/6oG1iHdxRpm',1,'82e50c29-9606-4b12-9edd-7f2a75b58046',0,NULL,0,0),(226,'RUNNING','TEST','1534883422107@test.com','$2b$10$8d5EnZb8cpQ6h/zvLb5kC.ChrSsncQ/XPYx/2YWnqcS148G4Zj1im',1,'d6ca4dac-8f17-4ef9-ab75-52afa39b5218',1,NULL,0,0),(227,'RUNNING','TEST','1534883558788@test.com','$2b$10$HYW1uymo1Tg84F.FEyS8ZOo0OtAWDRLeqeqcHocWUD8s7dqOL5iqe',1,'36984173-e26b-41b7-a447-744492d0694b',0,NULL,0,0),(228,'RUNNING','TEST','1534883558968@test.com','$2b$10$1w.cJRqW3dS64.szPu6a8e3VFFSKvgYlL0NOnaKCEirwmWJTENGDe',1,'4af58383-6461-47b8-944e-21d3a9db78f1',1,NULL,0,0),(229,'RUNNING','TEST','1535391074045@test.com','$2b$10$QF4Fa5I4Mgc5ZLW4SZivGucifNJP5jXsfG1li6Nr6J.WBaFCOkB9G',1,'be7b64d4-e7b6-40aa-b7c6-c380a92748b1',0,NULL,0,0),(230,'RUNNING','TEST','1535391074241@test.com','$2b$10$zWMUL8mW50ozq0w7lIuLZuoMyEmBIW1B03646QDGPlbFW4BmIGwWS',1,'adb1f010-bc70-4d99-ae10-30680cce043e',1,NULL,0,0),(231,'RUNNING','TEST','1535480467041@test.com','$2b$10$76oHJPbRHjPUuZzND9Z5qu3AKhakv.StoLH35t.8Hg8wIQJeJ6Wd2',1,'96541ec5-954b-4beb-b655-3770be6ab57e',0,NULL,0,0),(232,'RUNNING','TEST','1535480467215@test.com','$2b$10$zi/2aCOuM7sQXNaJfMj5HeyG3a.EDQMJNlaZAXsYqtuqywdXie1ie',1,'c6a43d27-2ac2-4486-aa8f-02e1f9f3aa73',1,NULL,0,0),(233,'RUNNING','TEST','1535712049204@test.com','$2b$10$ca1wHAwTto.2a0m9tbj1UOEosus8/hCKlFQpCTzjBeqBB1D2h9gZ6',1,'93bcf769-e093-4816-bda1-f78815789640',0,NULL,0,0),(234,'RUNNING','TEST','1535712049540@test.com','$2b$10$fZTJCos3cOsFtitBIO18besyf7ei2cQJbc750TWosQ9yBL5buAkUG',1,'119637d1-3fc7-48cc-a92f-d15fcd69d208',1,NULL,0,0),(235,'RUNNING','TEST','1535712323092@test.com','$2b$10$0ih7z1CXqjtFBm1va9ZuJOm6MwBZrUoNyInmUD/.h4.5QEseTfHOa',1,'d5da7fd5-7c7d-451f-938f-f9c3afc81533',0,NULL,0,0),(236,'RUNNING','TEST','1535712323300@test.com','$2b$10$DHBnA1rpseN5c3EoPMUvSOGBaZR5YulGXqriJI/lu6.qug2FaaUva',1,'3fe703cb-8a4f-4a81-a0a0-45bebc568077',1,NULL,0,0),(237,'RUNNING','TEST','1535712393222@test.com','$2b$10$.x/CvPeKS6.8loqtX11G/uoThtXf/Ut7A8j06piDGPu9PO0xjxc.a',1,'a781ad30-44ed-4dfb-a387-543b95d7e222',0,NULL,0,0),(238,'RUNNING','TEST','1535712393430@test.com','$2b$10$vcqUiAir7S.63.KppLY8D.GA0g3wS88miWJD1J67zsJ8U7orsGLom',1,'7693445e-5742-4b15-90e5-5c7a956bb4d8',1,NULL,0,0),(239,'RUNNING','TEST','1535900487707@test.com','$2b$10$M1Q.57E/JH6KMNosfaTpSe03p4PM8iB4en1HL9TaDAMaYHI7jQ78S',1,'58a62ae0-1052-4036-9a3b-4efa66e86f7e',0,NULL,0,0),(240,'RUNNING','TEST','1535900487989@test.com','$2b$10$eRKoEZJFYWvPtmVdf3WZieBStAW4XgitZa0PyOyhf/spm9Z1X0kbG',1,'c179fdde-b659-4e4f-b70e-b1ee56ba6136',1,NULL,0,0),(241,'RUNNING','TEST','1535900723872@test.com','$2b$10$0sgnJtiwcVYstQAJkfdk3OtsYzUMEGUpswQRtP9gx9i8R3fTFYkDm',1,'e616edef-b8e1-46b1-8c5a-46e5d694102f',0,NULL,0,0),(242,'RUNNING','TEST','1535900724128@test.com','$2b$10$G3xAja6lRxdtn02b5jzzIeRD9Scq9ccak5ehNztvBBM7yXlzhw1Uq',1,'d73617a0-66fa-421e-9273-f77215c4f050',1,NULL,0,0),(243,'RUNNING','TEST','1535900838128@test.com','$2b$10$D/naBb2uzbZNt78WxSuLk.NxkGL1lukQsQ74SO9T79z4e5we0X6rO',1,'97b7e813-5d75-4148-ad1d-e7e818c7219e',0,NULL,0,0),(244,'RUNNING','TEST','1535900838338@test.com','$2b$10$3PUiYXQTjN4uDF8et8ZI9e3pfD2bxROiRnZta5CDRM.adE9IS3Vv6',1,'fa6746dd-9ce1-4044-b531-ee129a528004',1,NULL,0,0),(245,'RUNNING','TEST','1535900979897@test.com','$2b$10$RMJ81QJAQ9z1yoK6H1Bcl.9hoqRgZJNIoPADNs1x5mXF9vv0c8WEi',1,'9e258a37-c1c7-4469-878d-7286d2fa14f2',0,NULL,0,0),(246,'RUNNING','TEST','1535900980131@test.com','$2b$10$eizeDmGkQNmvhhkJrAaU..ye2Rk2qm8dagVfeqBcxY04KXOmoZhJO',1,'458d9df6-0512-4bd3-b356-0bc75eaef377',1,NULL,0,0),(247,'RUNNING','TEST','1535901059756@test.com','$2b$10$NYmXn5UP.KXYou3/04U0H.t5UP.Zde7OBs4WPotaurRKHVqvzQSxS',1,'d4a42b4d-f02e-4794-832b-8ad0e75618d7',0,NULL,0,0),(248,'RUNNING','TEST','1535901059969@test.com','$2b$10$9EdDtuWw4t4j9Q7h5JHKuOKtfG0l0TU/G3DTMIAyw004hJxHO/mvm',1,'1835e9f0-804e-4a3f-a5fb-bcab027b4c91',1,NULL,0,0),(249,'RUNNING','TEST','1535901123049@test.com','$2b$10$yxy1JHjoDqLpGF4xZA/gGuQ00vC8blc9BezXMf/6weHyJ9lCKskxW',1,'00e4b9a3-fef6-4064-a215-935d8537a905',0,NULL,0,0),(250,'RUNNING','TEST','1535901123244@test.com','$2b$10$IC/yFniUzGZBQlW6DzTvfO3snpeRih0UhAswm/o39SUHc3nEmwpLO',1,'f7ee42cf-5d3b-4b4a-b9b5-6db6e4ec71ee',1,NULL,0,0),(251,'RUNNING','TEST','1535901243733@test.com','$2b$10$URHc9iIZpiA/yPBUUo33xugD1R7a.SBicSmGd3gu3gGAS5J2I/Iz2',1,'901d9619-b69c-41d5-acb0-ad048fe5998a',0,NULL,0,0),(252,'RUNNING','TEST','1535901243940@test.com','$2b$10$nf9mCY27.lW5fB.gfgdkTO9vlDaZNvL9IcQ9a4fTybj0fmTeJKFcG',1,'93e69b6d-440c-4344-8439-d5bbfe181bcc',1,NULL,0,0),(253,'RUNNING','TEST','1535901618568@test.com','$2b$10$yCnn3PM41eZthF9l06dtAuYy5kDL/nhgagv6XnHyly5jgDrcyxpEy',1,'eba32a04-607a-458d-b73d-dc6a9a47eb41',0,NULL,0,0),(254,'RUNNING','TEST','1535901618800@test.com','$2b$10$wakyP9h/U0WJ7JG.9wDWveCi1DPWdn53jdDk0N6dsC427KICIHe7y',1,'16c8523c-a1c0-426b-b3b7-1166217fcf01',1,NULL,0,0),(255,'RUNNING','TEST','1535901680093@test.com','$2b$10$.BTM3XRnRED2dog1mUwL1.ieeHug5KjVTFPOR2HBJ19C7pujw02Fq',1,'b8196a08-f8a5-460b-93ae-5aac1ec64262',0,NULL,0,0),(256,'RUNNING','TEST','1535901680271@test.com','$2b$10$telm6YGC87EEWsMFYs.vzOVbga1sGTMfhpeomPPXH37Pnzwz5Y5tC',1,'1fc011ee-6664-4048-8832-502a9eb2785d',1,NULL,0,0),(257,'RUNNING','TEST','1535901738802@test.com','$2b$10$SNGavsMMbyyQwDjFmYOqT.ffZHP/NGQRDiRUVD/XHKPEV49IxffIm',1,'2030dec0-d1ce-45a9-b906-62415f25692e',0,NULL,0,0),(258,'RUNNING','TEST','1535901739030@test.com','$2b$10$xQtMq4Tm2zFizRqpycNTOe5JY3Ml3aoOi7OLFd7DVH7TZPYef/Oyu',1,'91a0834b-de5b-4ed2-a8ab-a0dd04930ca8',1,NULL,0,0),(259,'RUNNING','TEST','1535901788603@test.com','$2b$10$kly.8hneaGJwlk9wpFxU8.BlhZcWB9eRFEefEaWBJCHzAm5GGQDrm',1,'0e290700-81b8-4800-b1ca-abac529978bd',0,NULL,0,0),(260,'RUNNING','TEST','1535901788811@test.com','$2b$10$upQwPFEbEzkZhcdPNF684u9eOykRY626EHrNPxmqK4Zcg.KhDFtWm',1,'23616588-7cca-46fb-a302-6a3079cb65dc',1,NULL,0,0),(261,'RUNNING','TEST','1535901821386@test.com','$2b$10$FiQVgo1HtXMbaaCw6xFAOeakAYmUMHyGnbcFRJWA4EgrG5LTVATA2',1,'2fa5451e-31f6-41d6-8b54-769efb002759',0,NULL,0,0),(262,'RUNNING','TEST','1535901821611@test.com','$2b$10$6QaMOG/MKfKtBIbKqDqEEelFxcHFW8Aji5658Kh60bVLG3q11x4Ky',1,'21c8cd55-03ba-46c7-813f-ac64fad46c0f',1,NULL,0,0),(263,'RUNNING','TEST','1535901896601@test.com','$2b$10$pQdHqsqTk2gneJJUCwim..t/gkwSbP7MlifqujOWoeNWX3VJ9LaAu',1,'185e7762-5b0e-48f8-8685-d5ad1e6f960c',0,NULL,0,0),(264,'RUNNING','TEST','1535901896959@test.com','$2b$10$Kn1WZYmvFcyhlaBsIFnoruv2EjEWfc4rDnpIkDEHD3f/ntGkMsev.',1,'de15ee51-fefd-4de8-872c-e521e7e6f814',1,NULL,0,0),(265,'RUNNING','TEST','1535902279594@test.com','$2b$10$4CCR.NXX5yOnfEje8JncyO8qxYZxr0tjhAYl0uzHZsGWwOJPrTCva',1,'4c3b7244-36da-4fee-a933-6934c97b15b4',0,NULL,0,0),(266,'RUNNING','TEST','1535902279784@test.com','$2b$10$5dh/gKr.gjMC1vtx9Jt5YuGBSOL4e1j.Un1H9/49WHYKfcZHFhAvi',1,'9bb3b329-d703-4f21-b247-9e629203fc1a',1,NULL,0,0),(267,'RUNNING','TEST','1536003093976@test.com','$2b$10$DnYEgseTM1CXifSsQaH.qeAXuSeqqtPPtITp20Kq/VljepV1RVM8m',1,'e1bbdc50-f7ac-4d83-a543-85ec6ec50e9e',0,NULL,0,0),(268,'RUNNING','TEST','1536003094198@test.com','$2b$10$Onblyrev26YUIdBpQCTwyuUJKQNxqmQoIDSO8tWIFq.x0bsPk094e',1,'d700d8b6-3cdc-4087-99d3-76b51cd85265',1,NULL,0,0),(269,'RUNNING','TEST','1536003404624@test.com','$2b$10$6MhJUEdwbxSmio6NvfSuIubxpT7a3rZrIbSqXKMu7WdoPlmsbs1wi',1,'9ec4fb9f-cada-4eda-a5c9-4cbcc03a87be',0,NULL,0,0),(270,'RUNNING','TEST','1536003404807@test.com','$2b$10$ViTKR3kWFhjzzG59CJIm7ugteYfkjdt477/5qvgZ32UHwGCegILx6',1,'8cf58df7-30c0-4ed5-b85e-a696167e2ce0',1,NULL,0,0),(271,'RUNNING','TEST','1536003621995@test.com','$2b$10$Wgo1ycxUncmNlp/byUXJPupsVYXxo2jPj/4kkBaHrjCCKdoQyNyW6',1,'452bd4ee-9057-476a-bde8-c3e597b334c4',0,NULL,0,0),(272,'RUNNING','TEST','1536003622219@test.com','$2b$10$YfeFDZZNVIX1TS8/SnJHp.PMzartQpxiIYoPXiFVPctLrnQE7cWMK',1,'10abf6c5-25dd-4405-a2f4-193656780957',1,NULL,0,0),(273,'RUNNING','TEST','1536003697569@test.com','$2b$10$qIvApJjyZqcNNLEjIwIiXeuTuhDnW8Rr2TI2NSVs4FrVFx7JLWO/W',1,'95ffb823-f296-4bfd-938c-42405c3c623f',0,NULL,0,0),(274,'RUNNING','TEST','1536003697772@test.com','$2b$10$x/Qykj7WOniRvMXXoocmMeJ6eToHkrS9QYwWTPOINri9Gfk2L8avG',1,'033bec9e-cc95-435a-a4be-c1df124ef3fa',1,NULL,0,0),(275,'RUNNING','TEST','1536003942346@test.com','$2b$10$DwDlTRS6r0YJFy9Q0fGAduEXVIQnaZFPOVefvZ1Hszk4llBXEOBwG',1,'4bae5f61-4dfe-41d7-b50b-24e55787c148',0,NULL,0,0),(276,'RUNNING','TEST','1536003942549@test.com','$2b$10$1k2t2t902.QMrEfOWpoI8eSVVoS2QOBnZZ9yiI5GvllMAoBDO/gym',1,'3913e884-7758-4319-ae5a-8716e126e9cd',1,NULL,0,0),(277,'RUNNING','TEST','1536004002131@test.com','$2b$10$jlMryAjlUZ0ZilFKbArrBuiD2pWVue4YrvIhN0QLN7S07DD9eP0De',1,'8cc143f7-6f0d-411c-be2b-3137dc561c41',0,NULL,0,0),(278,'RUNNING','TEST','1536004002321@test.com','$2b$10$B0bTGev5aEMuUVC6eSGF0uA6CCB7zLkDm463Ec27xkWU5JX0tfX2C',1,'9cc2bd33-5af0-4357-b4f6-a096411d3594',1,NULL,0,0),(279,'RUNNING','TEST','1536004073808@test.com','$2b$10$NRj6Zz33hxmoBAqr0AEhG.PqsNg78Kh.9zJcGMGn0nwyKtaTLbaC6',1,'06c71d84-9334-46f2-895b-0fdfaf4be4ef',0,NULL,0,0),(280,'RUNNING','TEST','1536004073994@test.com','$2b$10$Z/6tvWSXoiLt5d1niCERNOMM2MB/kfTRGMJJ8TWjco8YhWH3lYaAm',1,'b4b5582b-a747-4fb8-975d-ddef821bacb8',1,NULL,0,0),(281,'RUNNING','TEST','1536004196887@test.com','$2b$10$az0MeOJ.8d1p3yy6zKilNOjgAf1V0Hv2yP5b7mg0VJrn8D11Q.I1u',1,'9d71ecaf-b397-4a9f-95d0-b7839dd12460',0,NULL,0,0),(282,'RUNNING','TEST','1536004197091@test.com','$2b$10$d0bxuy1WP1OcchhVgULwsOibhqaaAji0oDguFQAN3zU26Evp5jCtK',1,'74a8f403-a0fa-482a-9b9c-a63070a7ad4a',1,NULL,0,0),(283,'RUNNING','TEST','1536004395846@test.com','$2b$10$vqPDgMANW/TQDm/XcZmJsu1nxMHB1fGk5BeCgX8lsEwuLRtcBVmWG',1,'c2549d39-7c3e-440c-a723-09b049be4a32',0,NULL,0,0),(284,'RUNNING','TEST','1536004396139@test.com','$2b$10$VoG.3hl9Sd1p4v1QhXuuw.zb8yQIXCDv2T1bvPigPMPTS/ltXGSKu',1,'7a1ceb54-049f-42e1-b3ba-315525fe735b',1,NULL,0,0);
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

-- Dump completed on 2018-09-04  1:24:08
