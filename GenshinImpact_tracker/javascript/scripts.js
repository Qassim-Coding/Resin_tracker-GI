function updateResin() {
  const currentLevel = document.getElementById('current_level').value;
  const maxResin = 200;
  const resinPerMinute = 1 / 8; // 8 minutes per resin point
  const minutesRemaining = (maxResin - currentLevel) * 8;

  const maxResinTime = new Date();
  maxResinTime.setMinutes(maxResinTime.getMinutes() + minutesRemaining);

  document.getElementById('max_resin_time').textContent = maxResinTime.toLocaleString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  });

  const hoursRemaining = Math.floor(minutesRemaining / 60);
  const minutesRemainingDisplay = minutesRemaining % 60;
  document.getElementById('time_remaining').textContent = `Environ ${hoursRemaining} heures et ${minutesRemainingDisplay} minutes`;
}
