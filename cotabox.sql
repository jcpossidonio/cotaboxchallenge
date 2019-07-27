-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 26-Jul-2019 às 23:52
-- Versão do servidor: 5.7.26
-- versão do PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cotabox`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `data`
--

DROP TABLE IF EXISTS `data`;
CREATE TABLE IF NOT EXISTS `data` (
  `dat_id` int(11) NOT NULL AUTO_INCREMENT,
  `dat_first_name` varchar(200) NOT NULL,
  `dat_last_name` varchar(200) NOT NULL,
  `dat_participation` float NOT NULL,
  PRIMARY KEY (`dat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `data`
--

INSERT INTO `data` (`dat_id`, `dat_first_name`, `dat_last_name`, `dat_participation`) VALUES
(5, 'Anderson', 'Santos', 40),
(4, 'Eliza', 'Souza', 20),
(3, 'Hugo', 'Silva', 20),
(2, 'Fernanda', 'Oliveira', 15),
(1, 'Carlos', 'Moura', 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
