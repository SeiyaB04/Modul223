INSERT INTO USER (id, username, password) VALUES (1, Halalbrötli, 12345);
INSERT INTO USER (id, username, password) VALUES (2, SeiyaB04, 1234);

INSERT INTO TICKET (id, ticketName) VALUES (1,'Program at frontend');
INSERT INTO TICKET (id, ticketName) VALUES (2,'Program at backend');
INSERT INTO TICKET (id, ticketName) VALUES (3,'Create README.md');

INSERT INTO WORKTYPE (id, worktypename) VALUES (1,'Work');
INSERT INTO WORKTYPE (id, worktypename) VALUES (2,'Internal education');
INSERT INTO WORKTYPE (id, worktypename) VALUES (3,'sick');
INSERT INTO WORKTYPE (id, worktypename) VALUES (4,'holiday');

INSERT INTO ENTRY (id, checkIn, checkOut, ticketName, worktypename) VALUES (1,'03.09.2021 21:15', '03.09.2021 22:00', 'Cerate README.md', 'Work');
INSERT INTO ENTRY (id, checkIn, checkOut, ticketName, worktypename) VALUES (1,'05.09.2021 16:00', '06.09.2021 22:00', 'Program at frontend', 'Work');
