INSERT INTO Wordle.dbo.UserWords
(word_id, user_id, attempts, insert_time)
VALUES(:wordId, :userId, :attempts, CURRENT_TIMESTAMP);