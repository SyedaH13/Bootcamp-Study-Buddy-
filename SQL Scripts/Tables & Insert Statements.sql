CREATE TABLE Question (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    QuestionText NVARCHAR(MAX),
    AnswerText NVARCHAR(MAX)
)

CREATE TABLE Favorites (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	FavoriteId INT FOREIGN KEY REFERENCES Question(Id), -- "FavoriteId" should've been "QuestionId"
)

INSERT INTO Question (QuestionText, AnswerText)
VALUES
('What is a join in SQL?','A join combines rows from two or more tables based on a related column and the specified condition.'),
('What is a left join in SQL?','A left join returns all records from the left table and the matching records from the right table. If there is no match, null values are returned for columns from the right table.'),
('What is a primary key in SQL?','A primary key is a column or set of columns that uniquely identifies each row in a table.'),
('What is a foreign key in SQL?','A foreign key is a column or set of columns that reference the primary key in another table, establishing a relationship between the two.'),
('What is caching?','Caching is the process of storing frequently accessed data in a temporary storage location to improve performance and reduce access time.'),
('What operations are handled on the client side?','Client side operations are executed on user devices and include rendering webpages, handling user input, and managing UI interactions.'),
('What operations are handled on the server side?','Server side operations are executed on a remote server and include managing databases, processing requests, and executing business logic.'),
('What are the four principles of object oriented programming?','Inheritance, polymorphism, abstraction, and encapsulation.'),
('Regarding inheritance, what is the base class?','The base class provides properties and methods to be inherited by other classes.'),
('Regarding inheritance, what is the derived class?','The derived class inherits from the base class and can extend or override its functionality.'),
('Regarding memory, what is stored in the stack?','The stack stores local variables and function call information in a last in, first out manner.'),
('Regarding memory, what is stored in the heap?','The heap stores dynamically allocated objects, which are accessed via references. These objects are not stored in a specific order and are managed by memory allocation mechanisms such as garbage collection.'),
('What is overriding?','Overriding is a feature of inheritance where a derived class provides a new implementation of a method that is already defined in its base class, replacing the base class implementation.'),
('What is overloading?','Overloading refers to methods that have the same name but different parameters, allowing multiple versions of the method to be called based on the information provided.'),
('What are the components of a method signature?','The components of a method signature include the method name, parameters, return type, and an optional access modifier.')

SELECT * FROM Question

SELECT * FROM Favorites

SELECT * 
FROM Favorites
JOIN Question ON Favorites.FavoriteId = Question.Id

DBCC CHECKIDENT ('Question', RESEED, 0)




