
for...of

.forEach
* zwraca undefined
* wykonuje daną operację na kazdym elemencie tablicy
* jako argument przyjmuje callback (funkcję), która przyjmuje argumenty: current element tablicy, index, tablicę

.filter
* tworzy shallow copy danej tablicy, wyfiltrowanej tylko do tych elementów, które spełniają warunek podany w funkcji
* jako argument przyjmuje callback (funkcję, która przyjmuje argumenty: current element tablicy, index, tablicę)

.map
* nie mutuje oryginalnej tablicy
* zwraca nową tablicę
* dobry do modyfikacji na istniejącej tablicy

.reduce
* zawsze pytaj: czym teraz jest accumulator
* accumulator to wynik poprzedniej operacji, jest stanem
* zawsze zwracaj accumulator
* initial value reprezentuje mój wynik, czym ma być to, co chcę osiągnać

Mental model:

| Pattern            | Accumulator | Initial value | Use case
| --------           | -------     | -------       | -------  
| Count              | number      |0              | count passed tests
| Bool aggregation   | bool        |true/false     | all passed/any failed
| Collect matches    | array       |[]             | list of failing tests
| First match        | object/null |null           | first failing
| Last match         | object/null |null           | last failing