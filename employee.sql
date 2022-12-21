-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 19, 2022 at 04:54 PM
-- Server version: 5.5.20
-- PHP Version: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `usertype` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `usertype`) VALUES
('admin', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emp`
--

CREATE TABLE IF NOT EXISTS `tbl_emp` (
  `empid` int(11) NOT NULL,
  `empname` varchar(25) NOT NULL,
  `designation` varchar(25) NOT NULL,
  `place` varchar(25) NOT NULL,
  `contactnumber` int(11) NOT NULL,
  PRIMARY KEY (`empid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_emp`
--

INSERT INTO `tbl_emp` (`empid`, `empname`, `designation`, `place`, `contactnumber`) VALUES
(0, 'Amala', 'Marketting', 'RKY', 1234567897),
(1, 'Neena', 'HR', 'Rky', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE IF NOT EXISTS `tbl_review` (
  `reviewid` int(11) NOT NULL AUTO_INCREMENT,
  `empname` varchar(25) NOT NULL,
  `review` varchar(100) NOT NULL,
  PRIMARY KEY (`reviewid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tbl_review`
--

INSERT INTO `tbl_review` (`reviewid`, `empname`, `review`) VALUES
(2, '$empname', '$review'),
(3, 'asd', 'vb'),
(4, 'a', 'asdfv'),
(5, 'a', 'f gbhnjkl;'),
(7, 'aaaa', 'gbhnj');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
