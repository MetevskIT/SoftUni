CREATE PROC usp_GetHoldersWithBalanceHigherThan (@number INT)
AS
BEGIN
SELECT [FirstName] AS [First Name],[LastName] AS [Last Name] FROM [AccountHolders] AS a WHERE a.Id IN(
SELECT [AccountHolderID] FROM [Accounts]
GROUP BY ([AccountHolderID])
HAVING SUM([Accounts].Balance)>@number
) 
ORDER BY [FirstName],[LastName]
END


