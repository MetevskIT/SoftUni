CREATE DATABASE [Movies]
USE [Movies]

CREATE TABLE [Directors](
     [Id] INT PRIMARY KEY IDENTITY(1,1)
	,[DirectorName] NVARCHAR(25) NOT NULL
	,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Genres](
     [Id] INT PRIMARY KEY IDENTITY(1,1)
	,[GenreName] NVARCHAR(25) NOT NULL
	,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Categories] (
     [Id] INT PRIMARY KEY IDENTITY(1,1)
	,[CategoryName] NVARCHAR(25) NOT NULL
	,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Movies](
     [Id] INT PRIMARY KEY IDENTITY(1,1)
	,[Title] NVARCHAR(30) NOT NULL
	,[DirectorId] INT FOREIGN KEY REFERENCES [Directors]([Id])
	,[CopyrightYear] INT NOT NULL
	,[Length] TIME 
	,[GenreId] INT FOREIGN KEY REFERENCES [Genres]([Id])
	,[CategoryId] INT FOREIGN KEY REFERENCES [Categories]([Id])
	,[Rating] DECIMAL(4,2) NOT NULL
	,[Notes] NVARCHAR(MAX) 
)

INSERT INTO [Directors] VALUES
('user1', NULL),
('user2', NULL),
('user3', NULL),
('user4', NULL),
('user5', NULL)
INSERT INTO [Genres] VALUES
('gen1', NULL),
('gen2', NULL),
('gen3', NULL),
('gen4', NULL),
('gen5', NULL)
INSERT INTO [Categories] VALUES
('cat1', NULL),
('cat2', NULL),
('cat3', NULL),
('cat4', NULL),
('cat5', NULL)
INSERT INTO [Movies] VALUES
('movie1', 1, 2019, NULL, 4, 1, 10.0, NULL),
('movie2', 2, 2002, NULL, 2, 4, 2.2, NULL),
('movie3', 3, 2003, NULL, 3, 2, 2.5, NULL),
('movie4', 4, 2019, NULL, 1, 3, 2.6, NULL),
('movie5', 5, 2000, NULL, 5, 5, 9.0, NULL)