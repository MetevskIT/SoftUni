CREATE FUNCTION udf_ClientWithCigars(@name VARCHAR(10))
RETURNS INT
AS
BEGIN 
  DECLARE @idOfUser INT = (SELECT [Id] FROM [Clients] WHERE [FirstName]=@name);
 DECLARE @Result INT= (SELECT COUNT([CigarId]) FROM [ClientsCigars]
  WHERE [ClientId]=@idOfUser)
  RETURN @Result
END
