CREATE DATABASE [Hotel]
USE [Hotel]

CREATE TABLE [Employees](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
     ,[FirstName] NVARCHAR(25) NOT NULL
	 ,[LastName] NVARCHAR(25) NOT NULL
	 ,[Title] NVARCHAR(15) NOT NULL
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Customers](
      [AccountNumber] INT PRIMARY KEY NOT NULL
	 ,[FirstName] NVARCHAR(25) NOT NULL
	 ,[LastName] NVARCHAR(25) NOT NULL
	 ,[PhoneNumber] NVARCHAR(25) NOT NULL
	 ,[EmergencyName] NVARCHAR(30)
	 ,[EmergencyNumber] NVARCHAR(30)
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [RoomStatus](
      [RoomStatus] NVARCHAR(20) PRIMARY KEY NOT NULL
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [RoomTypes](
      [RoomType] NVARCHAR(20) PRIMARY KEY NOT NULL
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [BedTypes](
      [BedType] NVARCHAR(20) PRIMARY KEY NOT NULL
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Rooms](
      [RoomNumber] INT PRIMARY KEY
	 ,[RoomType] NVARCHAR(20) FOREIGN KEY REFERENCES [RoomTypes]([RoomType])
	 ,[BedType] NVARCHAR(20) FOREIGN KEY REFERENCES [BedTypes]([BedType])
	 ,[Rate] DECIMAL(4,2)
	 ,[RoomStatus] NVARCHAR(20) FOREIGN KEY REFERENCES [RoomStatus]([RoomStatus])
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Payments](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id])
	 ,[PaymentDate] DATETIME2 NOT NULL
	 ,[AccountNumber] INT FOREIGN KEY REFERENCES [Customers]([AccountNumber])
	 ,[FirstDateOccupied] DATETIME2 
	 ,[LastDateOccupied] DATETIME2 
	 ,[TotalDays] SMALLINT 
	 ,[AmountCharged] DECIMAL(6,2)
	 ,[TaxRate] DECIMAL(2,1)
	 ,[TaxAmount] DECIMAL(6,2)
	 ,[PaymentTotal] DECIMAL(6,2)
	 ,[Notes] NVARCHAR(MAX)
)

CREATE TABLE [Occupancies](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[EmployeeId] INT FOREIGN KEY REFERENCES [Employees]([Id])
	 ,[DateOccupied] DATETIME2
	 ,[AccountNumber] INT FOREIGN KEY REFERENCES [Customers]([AccountNumber])
	 ,[RoomNumber] INT FOREIGN KEY REFERENCES [Rooms]([RoomNumber])
	 ,[RateApplied] DECIMAL(2,1)
	 ,[PhoneCharge] BIT
	 ,[Notes] NVARCHAR(MAX)
)
