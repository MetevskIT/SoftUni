SELECT a.[Name],t.[AnimalType],CONVERT(varchar, a.[BirthDate], 104) AS [BirthDate] FROM [Animals] AS a
   LEFT JOIN [AnimalTypes] AS t
   ON a.[AnimalTypeId]=t.[Id]
   ORDER BY a.[Name]
