const backendUrl = "http://127.0.0.1:5000"; // change to Render backend URL later

async function calculate(operation) {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  const response = await fetch(`${backendUrl}/${operation}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a, b })
  });

  const data = await response.json();
  if (data.error) {
    document.getElementById("result").innerText = `Error: ${data.error}`;
  } else {
    document.getElementById("result").innerText = `Result: ${data.result}`;
  }
}
