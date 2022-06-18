SELECT SUM(d) AS [SumDifference] FROM (
SELECT 
[DepositAmount] - LEAD([DepositAmount]) OVER (ORDER BY Id) AS d
FROM [WizzardDeposits]) AS a