function calculate() {
  const potionData = document.getElementById("potion").value.split(",");
  const name = potionData[0];
  const recover = parseInt(potionData[1]);
  const cost = parseInt(potionData[2]);
  const efficiency = (recover / cost).toFixed(2);

  const tbody = document.getElementById("resultTable").querySelector("tbody");
  tbody.innerHTML = `<tr>
    <td>${name}</td>
    <td>${recover}</td>
    <td>${cost}</td>
    <td>${efficiency}</td>
  </tr>`;
}
