const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// liczba choinek
let n;

// za kadym razem, gdy przyjdzie nowa linia tekstu, zrób coś
rl.on("line", (line) => {
  if (!n) {
    n = BigInt(line.trim());
    solve();
  }
});

// zadaj pytanie o choinkę i poczekaj na odpowiedź, nasłuchuj tylko raz na kolejną linię tekstu
function ask(x) {
  return new Promise((resolve) => {
    console.log(`? ${x}`);
    process.stdout.flush?.();
    rl.once("line", (ans) => {
      resolve(ans.trim());
    });
  });
}

async function solve() {
  let l = 1n;
  let r = n;

  while (l <= r) {
    let mid = (l + r) / 2n;

    const res = await ask(mid);

    if (res === "=") {
      return;
    } else if (res === "<") {
      r = mid - 1n;
    } else {
      l = mid + 1;
    }
  }
}
