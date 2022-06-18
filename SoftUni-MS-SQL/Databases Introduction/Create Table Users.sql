CREATE TABLE [Users](

[Id] INT IDENTITY(1,1) PRIMARY KEY,
[Username] VARCHAR(30) NOT NULL,
[Password] VARCHAR(26) NOT NULL,
[ProfilePicture] VARBINARY(MAX),
[LastLoginTime] TIME, 
[IsDeleted] BIT

)

INSERT INTO [Users] VALUES
('First','pass',NULL,NULL,0),
('Profile','123',NULL,NULL,0),
('db','sql123',NULL,NULL,0),
('mssql','345',NULL,NULL,0),
('soft','uni',NULL,NULL,0)
