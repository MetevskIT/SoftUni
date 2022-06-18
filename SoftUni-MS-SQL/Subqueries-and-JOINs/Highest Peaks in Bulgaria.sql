SELECT cc.[CountryCode],m.[MountainRange],p.[PeakName],p.[Elevation]
FROM [Peaks] AS p
JOIN [Mountains] AS m
ON p.[MountainId]=m.[Id]
JOIN [MountainsCountries] AS cc
ON p.[MountainId]= cc.[MountainId]
WHERE cc.CountryCode='BG' AND p.[Elevation]>2835
ORDER BY p.[Elevation] DESC