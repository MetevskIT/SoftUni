CREATE DATABASE [SoftUni]
USE [SoftUni]

CREATE TABLE [Towns](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
     ,[Name] NVARCHAR(25) NOT NULL
)

CREATE TABLE [Addresses](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
     ,[AddressText] NVARCHAR(40)
	 ,[TownId] INT FOREIGN KEY REFERENCES [Towns]([Id]) NOT NULL
)

CREATE TABLE [Departments](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
     ,[Name] NVARCHAR(25) NOT NULL
)

CREATE TABLE [Employees](
      [Id] INT PRIMARY KEY IDENTITY(1,1)
	 ,[FirstName] NVARCHAR(25) NOT NULL
	 ,[MiddleName] NVARCHAR(25)
	 ,[LastName] NVARCHAR(25) NOT NULL
	 ,[JobTitle] NVARCHAR(30)
	 ,[DepartmentId] INT FOREIGN KEY REFERENCES [Departments]([Id]) NOT NULL
	 ,[HireDate] DATETIME2
	 ,[Salary] DECIMAL(4,2)
	 ,[AddressId] INT FOREIGN KEY REFERENCES [Addresses]([Id])

)