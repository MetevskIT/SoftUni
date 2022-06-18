CREATE PROC usp_GetTownsStartingWith (@string VARCHAR(10))
AS
BEGIN
SELECT [Name] AS [Town] FROM [Towns]
WHERE LEFT([Name],LEN(@string))=@string
END

