CREATE VIEW [V_EmployeeNameJobTitle] AS
SELECT CONCAT([FirstName],' ',ISNULL([MiddleName],'')+' ',[LastName]) AS [FullName],[JobTitle] AS [Job Title] FROM [Employees]
