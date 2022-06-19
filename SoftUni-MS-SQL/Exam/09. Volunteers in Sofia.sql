SELECT v.[Name],v.[PhoneNumber],TRIM(SUBSTRING(TRIM(v.[Address]),8,LEN(v.[Address]))) AS [Address] 
FROM [Volunteers] AS v
LEFT JOIN [VolunteersDepartments] AS vd
ON v.[DepartmentId]=vd.Id
WHERE vd.DepartmentName='Education program assistant' AND
v.[Address] LIKE '%sofia%'
ORDER BY v.[Name]