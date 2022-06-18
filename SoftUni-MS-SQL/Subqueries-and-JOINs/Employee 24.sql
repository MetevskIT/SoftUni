SELECT e.[EmployeeID],e.[FirstName],[ProjectName]=
CASE
WHEN DATEPART(YEAR,pr.[StartDate])>=2005 THEN NULL
ELSE
pr.[Name]
END
FROM [Employees] AS e
JOIN [EmployeesProjects] AS ep
ON e.[EmployeeID]=ep.[EmployeeID]
JOIN [Projects] AS pr
ON ep.[ProjectID]=pr.[ProjectID]
WHERE e.[EmployeeID]=24
