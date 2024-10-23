function calculateAge() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const date = document.getElementById("date").value;
  
    if (year === "" || month === "" || date === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, date);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
  
    // Adjust age if the birth month hasn't happened yet or the birth date is later in the month
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    document.getElementById("ageDisplay").innerText = age + " years old";
    document.getElementById("result").style.display = "block";
  }
  