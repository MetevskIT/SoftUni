CREATE FUNCTION ufn_CalculateFutureValue(@initialSum DECIMAL(6,2),@interestRate FLOAT,@years INT)
RETURNS DECIMAL(8,4)
AS
BEGIN
RETURN ROUND(@initialSum*(POWER(@interestRate+1,@years)),4)
END