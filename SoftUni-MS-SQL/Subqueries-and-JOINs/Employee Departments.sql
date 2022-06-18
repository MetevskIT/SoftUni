SELECT TOP(5) e.[EmployeeID],e.[FirstName],e.[Salary],d.[Name] AS [DepartmentName]
FROM [Employees] AS e
JOIN [Departments] as d
ON e.[DepartmentID]=d.[DepartmentID]
WHERE e.[Salary] >15000
ORDER BY d.[DepartmentID]