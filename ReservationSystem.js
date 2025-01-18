document.getElementById('searchForm').addEventListener('submit', function(event) {
  const checkinDate = document.getElementById('checkinDate').value;
  const checkoutDate = document.getElementById('checkoutDate').value;

  if (new Date(checkoutDate) <= new Date(checkinDate)) {
    event.preventDefault();
    alert("Check-out date must be later than check-in date.");
  }
});
