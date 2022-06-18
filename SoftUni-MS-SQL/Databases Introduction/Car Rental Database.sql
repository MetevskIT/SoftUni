CREATE DATABASE [CarRental]
USE [CarRental]

CREATE TABLE [Categories](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[CategoryName] NVARCHAR(25) NOT NULL
	 ,[DailyRate] DECIMAL(2,1)
	 ,[WeeklyRate] DECIMAL(2,1)
	 ,[MonthlyRate] DECIMAL(2,1)
	 ,[WeekendRate] DECIMAL(2,1)
)

CREATE TABLE [Cars](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[PlateNumber] NVARCHAR(6) NOT NULL
	 ,[Manufacturer] NVARCHAR(25) NOT NULL
	 ,[Model] NVARCHAR(20) NOT NULL
	 ,[CarYear] INT NOT NULL
	 ,[CategoryId] INT FOREIGN KEY REFERENCES [Categories]([Id])
	 ,[Doors] TINYINT
	 ,[Picture] VARBINARY
	 ,[Condition] NVARCHAR(3)
	 ,[Available] BIT
)

CREATE TABLE [Employees](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[FirstName] NVARCHAR(25) NOT NULL
	 ,[LastName] NVARCHAR(25) NOT NULL
	 ,[Title] NVARCHAR(20) NOT NULL
	 ,[Notes] NVARCHAR(MAX) 
)

CREATE TABLE [Customers](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[DriverLicenceNumber] INT NOT NULL
	 ,[FullName] NVARCHAR(25) NOT NULL
	 ,[Address] NVARCHAR(40)
	 ,[City] NVARCHAR(35)
	 ,[ZIPCode] INT
	 ,[NOTES] NVARCHAR(MAX)
)

CREATE TABLE [RentalOrders](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id])
	 ,[CustomerId] INT FOREIGN KEY REFERENCES [Customers]([Id])
	 ,[CarId] INT FOREIGN KEY REFERENCES [Cars]([Id])
	 ,[TankLevel] INT
	 ,[KilometrageStart] INT
	 ,[KilometrageEnd] INT
	 ,[TotalKilometrage] INT
	 ,[StartDate] DATETIME2
	 ,[EndDate] DATETIME2
	 ,[TotalDays] INT
	 ,[RateApplied] DECIMAL(2,1)
	 ,[TaxRate] DECIMAL(2,1)
	 ,[OrderStatus] NVARCHAR(10)
	 ,[Notes] NVARCHAR(MAX)
)

INSERT INTO [Categories] VALUES 
('Cat1',NULL,NULL,NULL,NULL),
('Cat2',NULL,NULL,NULL,NULL),
('Cat3',NULL,NULL,NULL,NULL)

INSERT INTO [Cars] VALUES 
('CM2020','BMW','E46',2002,1,NULL,NULL,NULL,NULL),
('CM2030','BMW','E39',1999,3,NULL,NULL,NULL,NULL),
('CM2040','BMW','E60',2006,2,NULL,NULL,NULL,NULL)

INSERT INTO [Employees] VALUES 
('Name1','Name1.2','Title1',NULL),
('Name2','Name2.2','Title2',NULL),
('Name3','Name3.2','Title3',NULL)

INSERT INTO [Customers] VALUES 
(222222,'Name2',NULL,NULL,NULL,NULL),
(111111,'Name1',NULL,NULL,NULL,NULL),
(333333,'Name3',NULL,NULL,NULL,NULL)

INSERT INTO [RentalOrders] VALUES 
(2,1,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1,3,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3,2,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)
