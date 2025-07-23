async function updateViews() {
  const res = await fetch('/views', { method: 'POST' });
  const data = await res.json();
  document.getElementById('views').textContent = `👁️ Nombre de vues : ${data.views}`;
}

updateViews();
