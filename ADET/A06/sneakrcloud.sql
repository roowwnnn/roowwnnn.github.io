-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2025 at 07:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sneakrcloud`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Men\'s Shoes'),
(2, 'Women\'s Shoes');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `isAvailable` varchar(5) NOT NULL DEFAULT 'true',
  `name` varchar(50) NOT NULL,
  `code` varchar(30) NOT NULL,
  `img` varchar(50) NOT NULL,
  `category` varchar(10) NOT NULL,
  `categoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `isAvailable`, `name`, `code`, `img`, `category`, `categoryID`) VALUES
(1, 'true', 'Nike Air Jordan 1 Lows', 'ARJRDN1LWS', 'airjordan1.png', 'Men\'s', 1),
(2, 'true', 'Adidas Samba', 'SMBA', 'samba.png', 'Men\'s', 1),
(3, 'true', 'Golden Goose SuperStar', 'GGS', 'goldengoosesuperstarmen.png', 'Men\'s', 1),
(4, 'true', 'Nike Cortez', 'CRTZ', 'cortez.png', 'Women\'s', 2),
(5, 'true', 'Adidas Stan Smith x Liberty', 'SSL', 'stansmithxliberty.png', 'Women\'s', 2),
(6, 'true', 'Golden Goose SuperStar', 'GGS', 'goldengoosesuperstarwomen.png', 'Women\'s', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(11) NOT NULL,
  `size` varchar(5) NOT NULL,
  `code` varchar(10) NOT NULL,
  `price` float NOT NULL,
  `productID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `size`, `code`, `price`, `productID`) VALUES
(1, '8.5', 'AJ1LWS8.5', 6495, 1),
(2, '9', 'AJ1LWS9', 6495, 1),
(3, '10.5', 'AJ1LWS10.5', 6495, 1),
(4, '8.5', 'SMBA8.5', 4495, 2),
(5, '9', 'SMBA9', 4495, 2),
(6, '10.5', 'SMBA10.5', 4495, 2),
(7, '8.5', 'GGS8.5', 32195, 3),
(8, '9', 'GGS9', 32195, 3),
(9, '10.5', 'GGS10.5', 32195, 3),
(10, '5', 'CRTZ5', 4695, 4),
(11, '8', 'CRTZ8', 4695, 4),
(12, '5', 'SSL5', 5500, 5),
(13, '8', 'SSL8', 5500, 5),
(14, '9.5', 'SSL9.5', 5500, 5),
(15, '5', 'GGSW5', 32195, 6),
(16, '8', 'GGSW8', 32195, 6),
(17, '9.5', 'GGSW9.5', 32195, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
