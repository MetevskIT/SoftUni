CREATE TABLE [People](

[Id] INT PRIMARY KEY IDENTITY(1,1),
[Name] NVARCHAR(200) NOT NULL,
[Picture] VARBINARY(MAX),
[Height] DECIMAL(3,2),
[Weight] DECIMAL(5,2),
[Gender] CHAR(1) NOT NULL,
[Birthdate] DATETIME2 NOT NULL,
[Biography] NVARCHAR(MAX)

)

INSERT INTO [People] VALUES
('Name',NULL,1.95, 77,'f','2003-10-10','Name'),
('NoName',NULL,1.55, 60,'m','2000-11-9','NoName'),
('LLL',NULL,1.34, 40,'m','2010-10-10','Kid'),
('NoName',NULL,1.55, 60,'m','2000-11-9','NoName'),
('LLL2',NULL,1.34, 40,'m','2010-10-10','Kid')

