CREATE FUNCTION udf_GetVolunteersCountFromADepartment (@VolunteersDepartment VARCHAR(MAX))
RETURNS INT
AS
BEGIN 
  
   DECLARE @DepartmentId INT= (SELECT [Id] FROM [VolunteersDepartments] WHERE [DepartmentName]=@VolunteersDepartment)
   RETURN (SELECT COUNT([Id]) FROM [Volunteers]
   WHERE [DepartmentId]=@DepartmentId)
END

GO
SELECT dbo.udf_GetVolunteersCountFromADepartment ('Education program assistant')
