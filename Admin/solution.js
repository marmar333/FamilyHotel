// Global reservation object
let reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

// Change the content based on the class name passed (show and hide forms)
function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    const contentDiv = document.querySelector(`.${className}`);
    if (contentDiv !== null) {
        contentDiv.classList.remove('hidden');
    }
}

// Event listener for the back button in guest details form
document.querySelector('#guest-details-back-btn').addEventListener('click', (e) => {
    e.preventDefault();
    changeContent('search-form-content');
});

// Event listener for the new reservation button in the thank-you form
document.querySelector('#new-reservation').addEventListener('click', (e) => {
    e.preventDefault();
    cleanData();
});

// Function to reset and go back to search form
function cleanData() {
    // Reset reservation object
    reservation = {
        startDate: null,
        endDate: null,
        guestsCount: 0,
        roomType: null,
        name: null,
        phone: null,
        email: null
    };
    // Go back to the search form content
    changeContent('search-form-content');
}

// Event listener for the next button in the guest details form
document.querySelector('#guest-details-next-btn').addEventListener('click', (e) => {
    e.preventDefault();
    getPersonalData();
});

// Function to collect personal data and move to the next form
function getPersonalData() {
    const data = document.querySelector('#guest-details-form'); // Assuming guest form is a single container
    const name = data.querySelector('#name').value;
    const phone = data.querySelector('#phone-number').value;
    const email = data.querySelector('#email').value;

    // Validation for empty fields
    if (name && phone && email) {
        reservation.name = name;
        reservation.phone = phone;
        reservation.email = email;
        console.log(reservation);

        // After saving personal data, move to the next content
        changeContent('room-selection-content'); // Assuming this is the form to select room details
    } else {
        alert("Please fill all the fields.");
    }
}

// Event listener for selecting room details and submitting the reservation form
document.querySelector('#room-selection-next-btn').addEventListener('click', (e) => {
    e.preventDefault();
    // Assuming the room selection form has #room-type, #checkin-date, and #checkout-date fields
    const roomType = document.querySelector('#room-type').value;
    const startDate = document.querySelector('#checkin-date').value;
    const endDate = document.querySelector('#checkout-date').value;

    if (roomType && startDate && endDate) {
        reservation.roomType = roomType;
        reservation.startDate = startDate;
        reservation.endDate = endDate;

        console.log(reservation);
        changeContent('confirm-reservation-content');
        fillConfirmReservationData(reservation);
    } else {
        alert("Please fill all the room details.");
    }
});

// Fill the confirm reservation form with the reservation data
function fillConfirmReservationData(customReservation) {
    document.querySelector('.confirm-reservation #guest-name').textContent = `Name: ${customReservation.name}`;
    document.querySelector('.confirm-reservation #guest-phone').textContent = `Phone Number: ${customReservation.phone}`;
    document.querySelector('.confirm-reservation #guest-email').textContent = `Email: ${customReservation.email}`;
    document.querySelector('.confirm-reservation #guest-room-type').textContent = `Room Type: ${customReservation.roomType}`;
    document.querySelector('.confirm-reservation #guest-data-in').textContent = `Check-in: ${customReservation.startDate}`;
    document.querySelector('.confirm-reservation #guest-data-out').textContent = `Check-out: ${customReservation.endDate}`;
}

// Event listener for confirmation and finishing the reservation
document.querySelector('#confirm-reservation-btn').addEventListener('click', (e) => {
    e.preventDefault();
    // Final confirmation logic can go here (e.g., sending the reservation data to the server)
    alert("Reservation Confirmed!");
    changeContent('thank-you-content');
});
