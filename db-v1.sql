CREATE DATABASE  IF NOT EXISTS `kys_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_danish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kys_db`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: kys_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_post`
--

DROP TABLE IF EXISTS `blog_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_post` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `blog_title` longtext COLLATE utf8mb3_danish_ci,
  `therapist_id` int NOT NULL,
  `content` longtext COLLATE utf8mb3_danish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category` enum('Anxiety and Stress Management','Depression and Mood Disorders','Self-Care and Wellness','Mindfulness and Meditation','Relationships and Social Support','Mental Health Awareness','Therapy and Counseling','Mental Health in Specific Populations','Coping with Trauma and PTSD','Substance Abuse and Addiction','Mental Health and Physical Health','Workplace Mental Health') COLLATE utf8mb3_danish_ci DEFAULT NULL,
  `image` longtext COLLATE utf8mb3_danish_ci,
  PRIMARY KEY (`blog_id`),
  KEY `therapist__blogpost_therapist_id_idx` (`therapist_id`),
  CONSTRAINT `therapist__blogpost_therapist_id` FOREIGN KEY (`therapist_id`) REFERENCES `therapist` (`therapist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `diagnosis_history` varchar(45) COLLATE utf8mb3_danish_ci DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `unique_user_id` (`user_id`),
  KEY `user__patient_user_id_idx` (`user_id`),
  CONSTRAINT `user__patient_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `schedule_id` int NOT NULL AUTO_INCREMENT,
  `isBooked` tinyint(1) DEFAULT '0',
  `date_time` datetime NOT NULL,
  `therapist_id` int NOT NULL,
  `patient_id` int DEFAULT NULL,
  PRIMARY KEY (`schedule_id`),
  UNIQUE KEY `unique_combination` (`date_time`,`therapist_id`),
  KEY `therapist__schedule_therapist_id_idx` (`therapist_id`),
  KEY `patient__schedule_patient_id_idx` (`patient_id`),
  CONSTRAINT `patient__schedule_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `therapist__schedule_therapist_id` FOREIGN KEY (`therapist_id`) REFERENCES `therapist` (`therapist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `therapist`
--

DROP TABLE IF EXISTS `therapist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `therapist` (
  `therapist_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `specialty` varchar(45) COLLATE utf8mb3_danish_ci DEFAULT NULL,
  `experience_years` int DEFAULT NULL,
  PRIMARY KEY (`therapist_id`),
  UNIQUE KEY `unique_user_id` (`user_id`),
  KEY `user_therapist__user_id_idx` (`user_id`),
  CONSTRAINT `user_therapist__user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) COLLATE utf8mb3_danish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_danish_ci NOT NULL,
  `username` varchar(45) COLLATE utf8mb3_danish_ci NOT NULL,
  `role` enum('patient','therapist') COLLATE utf8mb3_danish_ci DEFAULT 'patient',
  `isVerified` tinyint DEFAULT '0',
  `user_image` varchar(45) COLLATE utf8mb3_danish_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-07 13:41:33
