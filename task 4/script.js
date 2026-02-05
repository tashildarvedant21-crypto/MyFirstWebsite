function validateForm() {
  let name = document.getElementById("name").value;
  let people = document.getElementById("people").value;

  if (name === "" || people === "") {
    alert("Please fill all required fields");
    return false;
  }

  alert("Booking request submitted successfully!");
  return true;
}
