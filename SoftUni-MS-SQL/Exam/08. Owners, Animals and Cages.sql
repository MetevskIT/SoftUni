SELECT CONCAT(o.[Name],'-',a.[Name]) AS [OwnersAnimals],
  o.[PhoneNumber],ac.[CageId] FROM [Animals] AS a
  JOIN [Owners] AS o
  ON a.[OwnerId]=o.[Id]
  JOIN [AnimalsCages] AS ac
  ON ac.[AnimalId]=a.[Id]
  JOIN [AnimalTypes] AS t
  ON t.[Id]=a.[AnimalTypeId]
  WHERE t.[AnimalType]='Mammals'
  ORDER BY o.[Name],a.[Name] DESC