CREATE FUNCTION ufn_IsWordComprised(@setOfLetters NVARCHAR(MAX), @word NVARCHAR(MAX)) 
RETURNS BIT
AS
BEGIN 
DECLARE @result BIT = 1;
DECLARE @lenght INT = 1;
WHILE @lenght <= LEN(@word)
BEGIN 
IF @setOfLetters NOT LIKE ('%' + SUBSTRING(@word, @lenght, 1) + '%')
	BEGIN
	SET @result=0;
	BREAK
	END
				
SET @lenght += 1;
				
END
RETURN @result
END

