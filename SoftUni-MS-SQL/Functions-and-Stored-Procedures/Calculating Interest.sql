CREATE FUNCTION ufn_CalculateFutureValue(@initialSum DECIMAL(6,2),@interestRate FLOAT,@years INT)
RETURNS DECIMAL(8,4)
AS
BEGIN
RETURN ROUND(@initialSum*(POWER(@interestRate+1,@years)),4)
END

GO
CREATE PROC usp_CalculateFutureValueForAccount(@id INT, @interestRate FLOAT)
AS
BEGIN
SELECT a.[Id] AS [Account Id] ,ah.[FirstName] AS [First Name],
ah.[LastName] AS [Last Name], a.[Balance] AS [Current Balance],
dbo.ufn_CalculateFutureValue (a.[Balance],@interestRate,5) AS [Balance in 5 years]
FROM [AccountHolders] AS ah
JOIN [Accounts] AS a
ON a.AccountHolderId=ah.[Id]
WHERE a.[Id]=@id
END