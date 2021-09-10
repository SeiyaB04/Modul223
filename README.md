# M223 Punchclock

##Beschreibung

Die Applikation erfässt die Arbeitszeit. Da kann man die Länge der Zeit, den Arbeitstyp und ein Ticket angeben. Um dies zu tun, muss man sich zuerst einloggen. Zudem kann man auch noch User und Tickets erstellen, bearbeiten und löschen. Wenn man fertig ist, kann man sich ausloggen.

Allerding funktioniert nicht alles. Beim Zeiteintragen wusste ich nicht / hatte zu wenig zeit um ein Dropdown aus Tickets zu erstellen. Ansonsten sollte alles funktionieren.

Die Applikation kann man starten, indem man dieses Script im Terminal bei diesem Pfad eingibt. Danach geht man in den Browser und gibt "localhost:8080" ein.
```shell script
./mvnw compile quarkus:dev
```


Swagger API: http://localhost:8080/q/swagger-ui/
