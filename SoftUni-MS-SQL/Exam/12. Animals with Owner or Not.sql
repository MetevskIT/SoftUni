CREATE PROC usp_AnimalsWithOwnersOrNot(@AnimalName VARCHAR(100))
AS
BEGIN
 SELECT a.[Name],[OwnersName]=
 CASE
 WHEN a.[OwnerId] IS NULL THEN 'For adoption'
 ELSE O.[Name]
 END
 FROM [Animals] AS a 
 LEFT JOIN [Owners] AS o
 ON a.[OwnerId]=o.[Id]
 WHERE a.[Name]=@AnimalName
END
 
EXEC usp_AnimalsWithOwnersOrNot 'Hippo'