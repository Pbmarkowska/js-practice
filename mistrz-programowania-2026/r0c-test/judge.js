// Użycie: node judge.js <n> <sekret>
// np: node judge.js 1000000000000000000 777
const { spawn } = require("child_process");

const n = process.argv[2];
const secret = BigInt(process.argv[3]);

const child = spawn("node", ["solve.js"], {
  stdio: ["pipe", "pipe", "inherit"],
});

let queryCount = 0;
let buffer = "";

child.stdout.on("data", (data) => {
  buffer += data.toString();
  let lines = buffer.split("\n");
  buffer = lines.pop(); // ostatni fragment może być niepełny
  for (const line of lines) {
    if (!line.trim()) continue;
    queryCount++;
    const x = BigInt(line.trim().split(" ")[1]);
    let answer;
    if (x === secret) answer = "=";
    else if (x < secret)
      answer = ">"; // Ty (sekret) jesteś wyższy niż x
    else answer = "<";
    console.log(
      `[judge] pytanie #${queryCount}: ${line.trim()}  ->  odpowiedź: ${answer}`
    );
    child.stdin.write(answer + "\n");
    if (answer === "=") {
      child.stdin.end();
    }
  }
});

child.on("close", () => {
  console.log(`\nGotowe. Liczba pytań (Q) = ${queryCount}`);
});

child.stdin.write(n + "\n");
