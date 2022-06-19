SELECT a.[Name],DATEPART(YEAR,a.[BirthDate]) AS [BirthYear] ,
t.[AnimalType] FROM [Animals] AS a
LEFT JOIN [AnimalTypes] AS t
ON t.[Id]=a.[AnimalTypeId]
WHERE (a.[OwnerId] IS NULL AND a.[BirthDate]>'2018-01-01')
AND t.[AnimalType] != 'Birds'
ORDER BY a.[Name]