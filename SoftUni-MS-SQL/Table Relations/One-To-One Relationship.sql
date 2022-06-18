CREATE TABLE [Passports](
   [PassportID] INT PRIMARY KEY
  ,[PassportNumber] NVARCHAR(8) NOT NULL
)

INSERT INTO [Passports] VALUES
 (101,'N34FG21B')
,(102,'K65LO4R7')
,(103,'ZE657QP2')

CREATE TABLE [Persons](
   [PersonID] INT PRIMARY KEY
  ,[FirstName] NVARCHAR(25) NOT NULL
  ,[Salary] DECIMAL(10,2)
  ,[PassportID] INT FOREIGN KEY REFERENCES [Passports]([PassportID]) UNIQUE
)

INSERT INTO [Persons] VALUES
 (1,'Roberto',43300.00,102)
,(2,'Tom',56100.00,103)
,(3,'Yana',60200.0,101)
