ALTER TABLE [Users]
DROP CONSTRAINT [PK__Users__3214EC07EF28DD0F]

ALTER TABLE [Users]
ADD CONSTRAINT [PK_Id_Username] PRIMARY KEY ([Id],[Username])

