CREATE PROC usp_SearchByTaste(@taste VARCHAR(10))
AS
BEGIN
SELECT c.[CigarName], CONCAT('$',c.[PriceForSingleCigar]) AS [Price],
t.[TasteType],b.[BrandName],CONCAT(s.[Length],' cm') AS [CigarLength],
CONCAT(s.[RingRange],' cm') AS [CigarRingRange]
FROM [Cigars] AS c
LEFT JOIN [Tastes] AS t
ON c.[TastId]=t.[Id]
LEFT JOIN [Brands] AS b
ON c.[BrandId]=b.[Id]
LEFT JOIN [Sizes] AS s
ON c.[SizeId]=s.[Id]
WHERE t.[TasteType]=@taste
ORDER BY [CigarLength],[CigarRingRange] DESC
END

