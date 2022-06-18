SELECT e.[EmployeeID],e.[FirstName],e.[ManagerID],em.[FirstName] 
AS [ManagerName]
FROM [Employees] AS e,[Employees] AS em
WHERE e.[ManagerID]=em.[EmployeeID]
AND 
e.[ManagerID] IN(3,7)
ORDER BY e.[EmployeeID]
