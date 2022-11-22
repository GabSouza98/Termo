SELECT count(1)
FROM Wordle.dbo.UserWords
WHERE user_id = :userId
AND attempts < 7