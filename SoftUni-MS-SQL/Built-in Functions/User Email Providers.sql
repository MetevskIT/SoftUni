SELECT [Username], SUBSTRING([Email],CHARINDEX('@',[Email])+1,LEN([Email])) AS [Email Provaider] FROM [Users]
ORDER BY [Email Provaider],[Username]