SELECT CountryCode, COUNT(CountryCode) AS [MountainRanges]
FROM [MountainsCountries] AS p
WHERE CountryCode IN('BG','RU','US')
GROUP BY (CountryCode)
