SELECT TOP(5) o.[Name] AS [Owner],COUNT(a.[OwnerId]) AS [CountOfAnimals] FROM [Owners] AS o
   LEFT JOIN [Animals] AS a
   ON o.[Id]=a.[OwnerId]
   GROUP BY o.[Name],a.[OwnerId]
   ORDER BY COUNT(a.[OwnerId])DESC,o.[Name]