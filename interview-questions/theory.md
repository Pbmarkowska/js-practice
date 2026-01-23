
1. Czym się rózni var/let/const

const ma stala wartosc, ktorej nie mozna zmienic
var i let mozna redeklarowac 

referencja do var przed jej deklaracja zwroci undefined
a referencja do let przed jej deklaracja zwroci ReferenceError
var ma zakres globalny lub funkcyjny
let i const mają zakres blokowy

2. Czym jest hoisting?
Wszystkie deklaracje zmiennych są hoistowane, ale nie wszystkie są inicjalizowane.
Przy var mozna odwołac sie do zmiennej przed jej deklaracja, jest inicjalizowane jako undefined
Przy const i let nie mozna odwolac sie do zmiennej przed jej deklaracja, bo dostaniemy wtedy ReferenceError

3. Czym są funkcje strzałkowe i czym róznia się od zwyklych funkcji?
Arrow function nie ma this'a, a zwykle function declaration ma this.
This czyli kontekst.

4. Jaka jest roznica pomiędzy == i ===?
=== to jest exact match, typ musi sie zgadzac, porownanie bez konwersji typów
== to nie jest exact match, typ nie musi się zgadzac, porównanie z konwersją typow

5. Co to jest Promise i async await?
Promise to jest obiekt reprezentujacy asynchroniczna operacje, ktora moze zakonczyc sie sukcesem (resolve) albo bledem (reject).
async funkcja zawsze zwraca promise, a await zatrzymuje wykonanie funkcji async do momentu zakonczenia promise'a.
Promise.all zwraca tablice wynikow jesli wszystkie zakoncza sie sukcesem, lub rzuca wyjatek przy pierwszym bledzie.


6. Roznice pomiędzy metodami HTTP:
GET - pobierz zasób
POST - stworz zasob
PUT - nadpisanie zasobu (w calosci)
PATCH - update zasobu (w częscie)
DELETE - usunięcie zasobu

7. Co oznaczają poszczególne statusy HTTP:
200 - OK, sukces
201 - OK, created
400 - Bad Request - błąd w zadaniu
401 - Unauthorized - niepoprawne uwierzytelnienie (dane)
403 - Forbidden, sprawdza uprawnienia
404 - not found, zasob nie znaleziony
500 - bład serwera

9. Czym jest parametryzacja w testach API?
Jesli mamy wykonac te same kroki dla kilku zestawow danych, np. chcemy sprawdzic czy przekazanie niepoprawnego id w requescie skonczy się failem, mozemy na raz przetestowac liczbe z niepoprawnej klasy rownowaznosci, jakis znak specjalny i spacje.

10. Co to jest mockowanie w testach API?
To jest tworzenie sztucznego endpointa, który zasymuluje zachowanie prawdziwego API. Uzywamy gdy backend jest niegotowy albo niestabilny albo gdy chcemy testowac aplikacje niezaleznie od faktycznego stanu serwera. 

11. Dlaczego sprawdzamy Content-Type w API?
Zeby upewnic sie, ze serwer zwraca dane w oczekiwanym formacie (json, xml, html). Chroni to przed bledami parsowania danych po stronie klienta.

12. Co sie stanie jesli serwer zwroci json, ale naglowek jest text/html?
Klient moze probowac parsowac odpowiedz jako html, co spowoduje blad parsowania (JSONDecodeError w Pythonie).
