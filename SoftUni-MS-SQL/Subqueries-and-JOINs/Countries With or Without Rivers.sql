SELECT TOP(5) c.[CountryName],rn.[RiverName] FROM [Countries] AS c
LEFT JOIN [CountriesRivers] as r
ON c.[CountryCode]= r.CountryCode
LEFT JOIN [Rivers] AS rn
ON r.[RiverId]=rn.[Id]
WHERE c.[ContinentCode] = 'AF'
ORDER BY c.[CountryName]
