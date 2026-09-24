/* =========================================================
   HOTEL RESERVATION MANAGEMENT SYSTEM
   Microsoft SQL Server
   ========================================================= */

-- 1. Create Database
CREATE DATABASE HotelReservationDb;
GO

USE HotelReservationDb;
GO


/* =========================================================
   2. TABLES
   ========================================================= */

-- 1. Hotels
CREATE TABLE Hotels
(
    HotelId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(200) NOT NULL,
    City NVARCHAR(100) NOT NULL,
    Country NVARCHAR(100) NOT NULL,
    Address NVARCHAR(300),
    Rating INT NOT NULL DEFAULT 0,
    CHECK (Rating BETWEEN 1 AND 5)
);
GO


-- 2. Rooms
CREATE TABLE Rooms
(
    RoomId INT IDENTITY(1,1) PRIMARY KEY,
    HotelId INT NOT NULL,
    RoomNumber NVARCHAR(20) NOT NULL,
    RoomType NVARCHAR(50) NOT NULL,
    Capacity INT NOT NULL,
    PricePerNight DECIMAL(10,2) NOT NULL,
    IsAvailable BIT NOT NULL DEFAULT 1,

    CONSTRAINT FK_Rooms_Hotels
        FOREIGN KEY (HotelId)
        REFERENCES Hotels(HotelId),

    CONSTRAINT UQ_Room_Hotel_Number
        UNIQUE (HotelId, RoomNumber),

    CONSTRAINT CK_Room_Capacity
        CHECK (Capacity > 0),

    CONSTRAINT CK_Room_Price
        CHECK (PricePerNight > 0)
);
GO


-- 3. Customers
CREATE TABLE Customers
(
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(150) NOT NULL,
    Phone NVARCHAR(30) NOT NULL,
    Email NVARCHAR(150) NOT NULL UNIQUE,
    Nationality NVARCHAR(100),
    CreatedAt DATETIME NOT NULL DEFAULT GETDATE()
);
GO


-- 4. Bookings
CREATE TABLE Bookings
(
    BookingId INT IDENTITY(1,1) PRIMARY KEY,

    CustomerId INT NOT NULL,
    HotelId INT NOT NULL,
    RoomId INT NOT NULL,

    CheckInDate DATE NOT NULL,
    CheckOutDate DATE NOT NULL,

    Adults INT NOT NULL,
    Children INT NOT NULL DEFAULT 0,

    TotalPrice DECIMAL(10,2) NOT NULL,

    Status NVARCHAR(30) NOT NULL DEFAULT 'Confirmed',

    CreatedAt DATETIME NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_Bookings_Customers
        FOREIGN KEY (CustomerId)
        REFERENCES Customers(CustomerId),

    CONSTRAINT FK_Bookings_Hotels
        FOREIGN KEY (HotelId)
        REFERENCES Hotels(HotelId),

    CONSTRAINT FK_Bookings_Rooms
        FOREIGN KEY (RoomId)
        REFERENCES Rooms(RoomId),

    CONSTRAINT CK_Booking_Dates
        CHECK (CheckOutDate > CheckInDate),

    CONSTRAINT CK_Booking_Adults
        CHECK (Adults > 0),

    CONSTRAINT CK_Booking_Children
        CHECK (Children >= 0),

    CONSTRAINT CK_Booking_Price
        CHECK (TotalPrice >= 0),

    CONSTRAINT CK_Booking_Status
        CHECK (Status IN
        (
            'Confirmed',
            'Cancelled',
            'Completed'
        ))
);
GO


-- 5. Payments
CREATE TABLE Payments
(
    PaymentId INT IDENTITY(1,1) PRIMARY KEY,

    BookingId INT NOT NULL,

    Amount DECIMAL(10,2) NOT NULL,

    PaymentMethod NVARCHAR(30) NOT NULL DEFAULT 'Cash',

    PaymentStatus NVARCHAR(30) NOT NULL DEFAULT 'Pending',

    PaymentDate DATETIME NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_Payments_Bookings
        FOREIGN KEY (BookingId)
        REFERENCES Bookings(BookingId)
        ON DELETE CASCADE,

    CONSTRAINT CK_Payment_Amount
        CHECK (Amount > 0),

    CONSTRAINT CK_Payment_Method
        CHECK (PaymentMethod IN
        (
            'Cash',
            'Card',
            'Bank Transfer'
        )),

    CONSTRAINT CK_Payment_Status
        CHECK (PaymentStatus IN
        (
            'Pending',
            'Paid',
            'Failed'
        ))
);
GO


-- 6. Employees
CREATE TABLE Employees
(
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,

    HotelId INT NOT NULL,

    FullName NVARCHAR(150) NOT NULL,

    JobTitle NVARCHAR(100) NOT NULL,

    Salary DECIMAL(10,2) NOT NULL,

    HireDate DATE NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_Employees_Hotels
        FOREIGN KEY (HotelId)
        REFERENCES Hotels(HotelId),

    CONSTRAINT CK_Employee_Salary
        CHECK (Salary > 0)
);
GO


/* =========================================================
   3. INSERT HOTELS
   ========================================================= */

INSERT INTO Hotels
(
    Name,
    City,
    Country,
    Address,
    Rating
)
VALUES
(
    N'Buyuk Abant Hotel',
    N'Abant',
    N'Turkey',
    N'Abant Lake Road',
    5
),
(
    N'Sheraton Grand Adana',
    N'Adana',
    N'Turkey',
    N'Haci Sabanci Boulevard',
    5
),
(
    N'Birlik Sahin Hotel',
    N'Agri',
    N'Turkey',
    N'Kagizman Street',
    3
),
(
    N'Grand Istanbul Hotel',
    N'Istanbul',
    N'Turkey',
    N'Taksim',
    4
);
GO


/* =========================================================
   4. INSERT ROOMS
   ========================================================= */

INSERT INTO Rooms
(
    HotelId,
    RoomNumber,
    RoomType,
    Capacity,
    PricePerNight,
    IsAvailable
)
VALUES
-- Buyuk Abant Hotel
(1, N'101', N'Single', 1, 20800, 1),
(1, N'102', N'Double', 2, 22000, 1),
(1, N'103', N'Suite', 4, 30000, 1),

-- Sheraton Grand Adana
(2, N'201', N'Deluxe', 2, 17350, 1),
(2, N'202', N'Suite', 4, 25000, 1),
(2, N'203', N'Double', 2, 19000, 1),

-- Birlik Sahin Hotel
(3, N'301', N'Standard', 2, 5450, 1),
(3, N'302', N'Double', 2, 6500, 1),

-- Grand Istanbul Hotel
(4, N'401', N'Deluxe', 2, 15000, 1),
(4, N'402', N'Suite', 4, 24000, 1);
GO


/* =========================================================
   5. INSERT CUSTOMERS
   ========================================================= */

INSERT INTO Customers
(
    FullName,
    Phone,
    Email,
    Nationality
)
VALUES
(
    N'Nouh Sayed',
    N'05555555555',
    N'nouh@example.com',
    N'Egyptian'
),
(
    N'Ahmed Mohamed',
    N'05555555556',
    N'ahmed@example.com',
    N'Egyptian'
),
(
    N'Omar Ali',
    N'05555555557',
    N'omar@example.com',
    N'Turkish'
),
(
    N'Youssef Hassan',
    N'05555555558',
    N'youssef@example.com',
    N'Egyptian'
);
GO


/* =========================================================
   6. INSERT EMPLOYEES
   ========================================================= */

INSERT INTO Employees
(
    HotelId,
    FullName,
    JobTitle,
    Salary,
    HireDate
)
VALUES
(1, N'Mohamed Ali', N'Manager', 45000, '2024-01-10'),
(1, N'Ahmed Hassan', N'Receptionist', 25000, '2025-03-15'),

(2, N'Omar Khaled', N'Manager', 48000, '2023-05-20'),
(2, N'Mahmoud Samir', N'Receptionist', 24000, '2025-01-15'),

(3, N'Yasser Ahmed', N'Manager', 30000, '2024-07-01'),

(4, N'Karim Mohamed', N'Manager', 50000, '2022-10-10');
GO


/* =========================================================
   7. INSERT BOOKINGS
   ========================================================= */

INSERT INTO Bookings
(
    CustomerId,
    HotelId,
    RoomId,
    CheckInDate,
    CheckOutDate,
    Adults,
    Children,
    TotalPrice,
    Status
)
VALUES
(
    1,
    1,
    1,
    '2026-10-01',
    '2026-10-05',
    2,
    1,
    83200,
    'Confirmed'
),
(
    2,
    2,
    4,
    '2026-10-10',
    '2026-10-13',
    2,
    0,
    52050,
    'Confirmed'
),
(
    3,
    3,
    7,
    '2026-11-01',
    '2026-11-04',
    2,
    0,
    16350,
    'Completed'
),
(
    4,
    4,
    10,
    '2026-11-15',
    '2026-11-18',
    2,
    1,
    72000,
    'Confirmed'
);
GO


/* =========================================================
   8. INSERT PAYMENTS
   ========================================================= */

INSERT INTO Payments
(
    BookingId,
    Amount,
    PaymentMethod,
    PaymentStatus
)
VALUES
(1, 83200, 'Card', 'Paid'),
(2, 52050, 'Cash', 'Paid'),
(3, 16350, 'Card', 'Paid'),
(4, 72000, 'Bank Transfer', 'Pending');
GO


/* =========================================================
   9. BASIC SELECT
   ========================================================= */

SELECT * FROM Hotels;
GO

SELECT * FROM Rooms;
GO

SELECT * FROM Customers;
GO

SELECT * FROM Bookings;
GO

SELECT * FROM Payments;
GO

SELECT * FROM Employees;
GO


/* =========================================================
   10. WHERE
   ========================================================= */

SELECT *
FROM Hotels
WHERE City = N'Istanbul';
GO


/* =========================================================
   11. ORDER BY
   ========================================================= */

SELECT *
FROM Rooms
ORDER BY PricePerNight DESC;
GO


/* =========================================================
   12. DISTINCT
   ========================================================= */

SELECT DISTINCT City
FROM Hotels;
GO


/* =========================================================
   13. BETWEEN
   ========================================================= */

SELECT *
FROM Rooms
WHERE PricePerNight BETWEEN 10000 AND 25000;
GO


/* =========================================================
   14. LIKE
   ========================================================= */

SELECT *
FROM Customers
WHERE FullName LIKE N'%Ahmed%';
GO


/* =========================================================
   15. IN
   ========================================================= */

SELECT *
FROM Hotels
WHERE City IN
(
    N'Adana',
    N'Istanbul'
);
GO


/* =========================================================
   16. INNER JOIN
   ========================================================= */

SELECT
    h.Name AS HotelName,
    r.RoomNumber,
    r.RoomType,
    r.PricePerNight
FROM Hotels h
INNER JOIN Rooms r
    ON h.HotelId = r.HotelId;
GO


/* =========================================================
   17. MULTIPLE JOIN
   ========================================================= */

SELECT
    b.BookingId,
    c.FullName AS CustomerName,
    h.Name AS HotelName,
    r.RoomNumber,
    b.CheckInDate,
    b.CheckOutDate,
    b.TotalPrice,
    b.Status
FROM Bookings b
INNER JOIN Customers c
    ON b.CustomerId = c.CustomerId
INNER JOIN Hotels h
    ON b.HotelId = h.HotelId
INNER JOIN Rooms r
    ON b.RoomId = r.RoomId;
GO


/* =========================================================
   18. LEFT JOIN
   ========================================================= */

SELECT
    h.Name AS HotelName,
    e.FullName AS EmployeeName,
    e.JobTitle
FROM Hotels h
LEFT JOIN Employees e
    ON h.HotelId = e.HotelId;
GO


/* =========================================================
   19. COUNT
   ========================================================= */

SELECT COUNT(*) AS TotalHotels
FROM Hotels;
GO


/* =========================================================
   20. AVG
   ========================================================= */

SELECT AVG(PricePerNight) AS AverageRoomPrice
FROM Rooms;
GO


/* =========================================================
   21. MAX / MIN
   ========================================================= */

SELECT
    MAX(PricePerNight) AS HighestPrice,
    MIN(PricePerNight) AS LowestPrice
FROM Rooms;
GO


/* =========================================================
   22. GROUP BY
   ========================================================= */

SELECT
    HotelId,
    COUNT(*) AS NumberOfRooms
FROM Rooms
GROUP BY HotelId;
GO


/* =========================================================
   23. GROUP BY + HAVING
   ========================================================= */

SELECT
    HotelId,
    COUNT(*) AS NumberOfRooms
FROM Rooms
GROUP BY HotelId
HAVING COUNT(*) >= 2;
GO


/* =========================================================
   24. TOTAL REVENUE
   ========================================================= */

SELECT
    SUM(Amount) AS TotalRevenue
FROM Payments
WHERE PaymentStatus = 'Paid';
GO


/* =========================================================
   25. REVENUE BY HOTEL
   ========================================================= */

SELECT
    h.Name AS HotelName,
    SUM(p.Amount) AS TotalRevenue
FROM Hotels h
INNER JOIN Bookings b
    ON h.HotelId = b.HotelId
INNER JOIN Payments p
    ON b.BookingId = p.BookingId
WHERE p.PaymentStatus = 'Paid'
GROUP BY h.Name;
GO


/* =========================================================
   26. CASE
   ========================================================= */

SELECT
    Name,
    Rating,
    CASE
        WHEN Rating = 5 THEN 'Excellent'
        WHEN Rating = 4 THEN 'Very Good'
        WHEN Rating = 3 THEN 'Good'
        ELSE 'Average'
    END AS RatingDescription
FROM Hotels;
GO


/* =========================================================
   27. SUBQUERY
   ========================================================= */

SELECT *
FROM Rooms
WHERE PricePerNight >
(
    SELECT AVG(PricePerNight)
    FROM Rooms
);
GO


/* =========================================================
   28. EXISTS
   ========================================================= */

SELECT *
FROM Customers c
WHERE EXISTS
(
    SELECT 1
    FROM Bookings b
    WHERE b.CustomerId = c.CustomerId
);
GO


/* =========================================================
   29. VIEW
   ========================================================= */

CREATE VIEW vw_BookingDetails
AS
SELECT
    b.BookingId,
    c.FullName AS CustomerName,
    h.Name AS HotelName,
    r.RoomNumber,
    r.RoomType,
    b.CheckInDate,
    b.CheckOutDate,
    b.TotalPrice,
    b.Status
FROM Bookings b
INNER JOIN Customers c
    ON b.CustomerId = c.CustomerId
INNER JOIN Hotels h
    ON b.HotelId = h.HotelId
INNER JOIN Rooms r
    ON b.RoomId = r.RoomId;
GO


SELECT *
FROM vw_BookingDetails;
GO


/* =========================================================
   30. FUNCTION
   ========================================================= */

CREATE FUNCTION fn_CalculateNights
(
    @CheckIn DATE,
    @CheckOut DATE
)
RETURNS INT
AS
BEGIN
    RETURN DATEDIFF(DAY, @CheckIn, @CheckOut);
END;
GO


SELECT
    BookingId,
    CheckInDate,
    CheckOutDate,
    dbo.fn_CalculateNights(CheckInDate, CheckOutDate)
        AS NumberOfNights
FROM Bookings;
GO


/* =========================================================
   31. STORED PROCEDURE
   ========================================================= */

CREATE PROCEDURE sp_GetCustomerBookings
    @CustomerId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        b.BookingId,
        c.FullName,
        h.Name AS HotelName,
        r.RoomNumber,
        b.CheckInDate,
        b.CheckOutDate,
        b.TotalPrice,
        b.Status
    FROM Bookings b
    INNER JOIN Customers c
        ON b.CustomerId = c.CustomerId
    INNER JOIN Hotels h
        ON b.HotelId = h.HotelId
    INNER JOIN Rooms r
        ON b.RoomId = r.RoomId
    WHERE b.CustomerId = @CustomerId;
END;
GO


-- Test Procedure
EXEC sp_GetCustomerBookings @CustomerId = 1;
GO


/* =========================================================
   32. STORED PROCEDURE TO ADD BOOKING
   ========================================================= */

CREATE PROCEDURE sp_AddBooking
    @CustomerId INT,
    @HotelId INT,
    @RoomId INT,
    @CheckInDate DATE,
    @CheckOutDate DATE,
    @Adults INT,
    @Children INT = 0
AS
BEGIN

    SET NOCOUNT ON;

    DECLARE @PricePerNight DECIMAL(10,2);
    DECLARE @Nights INT;
    DECLARE @TotalPrice DECIMAL(10,2);

    -- Validate dates
    IF @CheckOutDate <= @CheckInDate
    BEGIN
        RAISERROR('Check-out must be after check-in.',16,1);
        RETURN;
    END;

    -- Check room
    SELECT @PricePerNight = PricePerNight
    FROM Rooms
    WHERE RoomId = @RoomId
      AND HotelId = @HotelId
      AND IsAvailable = 1;

    IF @PricePerNight IS NULL
    BEGIN
        RAISERROR('Room not found or unavailable.',16,1);
        RETURN;
    END;

    -- Check overlapping booking
    IF EXISTS
    (
        SELECT 1
        FROM Bookings
        WHERE RoomId = @RoomId
          AND Status <> 'Cancelled'
          AND @CheckInDate < CheckOutDate
          AND @CheckOutDate > CheckInDate
    )
    BEGIN
        RAISERROR('Room is already booked.',16,1);
        RETURN;
    END;

    -- Calculate price
    SET @Nights =
        DATEDIFF(DAY, @CheckInDate, @CheckOutDate);

    SET @TotalPrice =
        @Nights * @PricePerNight;

    -- Insert booking
    INSERT INTO Bookings
    (
        CustomerId,
        HotelId,
        RoomId,
        CheckInDate,
        CheckOutDate,
        Adults,
        Children,
        TotalPrice,
        Status
    )
    VALUES
    (
        @CustomerId,
        @HotelId,
        @RoomId,
        @CheckInDate,
        @CheckOutDate,
        @Adults,
        @Children,
        @TotalPrice,
        'Confirmed'
    );

END;
GO


/* =========================================================
   33. TRIGGER
   ========================================================= */

CREATE TRIGGER trg_PaymentStatus
ON Payments
AFTER INSERT
AS
BEGIN

    SET NOCOUNT ON;

    UPDATE b
    SET b.Status = 'Confirmed'
    FROM Bookings b
    INNER JOIN inserted i
        ON b.BookingId = i.BookingId
    WHERE i.PaymentStatus = 'Paid';

END;
GO


/* =========================================================
   34. INDEXES
   ========================================================= */

CREATE INDEX IX_Hotels_City
ON Hotels(City);
GO

CREATE INDEX IX_Rooms_HotelId
ON Rooms(HotelId);
GO

CREATE INDEX IX_Bookings_CustomerId
ON Bookings(CustomerId);
GO

CREATE INDEX IX_Bookings_CheckInDate
ON Bookings(CheckInDate);
GO


/* =========================================================
   35. TRANSACTION
   ========================================================= */

BEGIN TRY

    BEGIN TRANSACTION;

    INSERT INTO Payments
    (
        BookingId,
        Amount,
        PaymentMethod,
        PaymentStatus
    )
    VALUES
    (
        4,
        72000,
        'Card',
        'Paid'
    );

    UPDATE Bookings
    SET Status = 'Confirmed'
    WHERE BookingId = 4;

    COMMIT TRANSACTION;

    PRINT 'Transaction completed successfully.';

END TRY

BEGIN CATCH

    ROLLBACK TRANSACTION;

    PRINT 'Transaction failed.';
    PRINT ERROR_MESSAGE();

END CATCH;
GO


/* =========================================================
   36. UPDATE EXAMPLE
   ========================================================= */

UPDATE Rooms
SET PricePerNight = 23000
WHERE RoomId = 2;
GO


/* =========================================================
   37. DELETE EXAMPLE
   ========================================================= */

-- Example:
-- DELETE FROM Employees
-- WHERE EmployeeId = 6;


/* =========================================================
   38. FINAL REPORT
   ========================================================= */

SELECT
    h.Name AS Hotel,
    COUNT(DISTINCT r.RoomId) AS TotalRooms,
    COUNT(DISTINCT b.BookingId) AS TotalBookings,
    ISNULL(SUM(p.Amount), 0) AS Revenue
FROM Hotels h
LEFT JOIN Rooms r
    ON h.HotelId = r.HotelId
LEFT JOIN Bookings b
    ON h.HotelId = b.HotelId
LEFT JOIN Payments p
    ON b.BookingId = p.BookingId
    AND p.PaymentStatus = 'Paid'
GROUP BY h.Name
ORDER BY Revenue DESC;
GO