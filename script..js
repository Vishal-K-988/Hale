
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const phone = document.querySelector("input[type='tel']").value;
    const date = document.querySelector("input[type='date']").value;
    // You can add logic to handle form data, for example, sending it to a server.
    // For this simplified example, let's just log the form data.
    console.log(`Appointment booked for ${name} on ${date}. Contact: ${email}, ${phone}`);
});
