function updateDateTime() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formatted = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  document.getElementById('datetime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function generateCommit() {
  const input = document.getElementById('commitInput');
  const message = input.value.trim();
  if (!message) return;

  const log = document.getElementById('log');
  const commitLine1 = document.createElement('div');
  commitLine1.textContent = `> git commit -m "${message}"`;

  const commitLine2 = document.createElement('div');
  commitLine2.textContent = '> Commit logged. morale +5%.';

  log.appendChild(commitLine1);
  log.appendChild(commitLine2);

  input.value = '';
  log.scrollTop = log.scrollHeight; // auto-scroll down
}
