document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("date-picker");
    const nextBtn = document.getElementById("next-btn");
    const saveBtn = document.getElementById("save-btn");
    const calendarContainer = document.getElementById("calendar-container");
    const activityContainer = document.getElementById("activity-container");
    const checkboxes = document.querySelectorAll(".activity-option input");
    const customActivityInput = document.getElementById("custom-activity");

    let selectedDate = "";
    let selectedActivities = [];

    nextBtn.addEventListener("click", () => {
        if (datePicker.value) {
            selectedDate = datePicker.value;
            localStorage.setItem("selectedDate", selectedDate);
            calendarContainer.classList.add("hidden");
            activityContainer.classList.remove("hidden");
        } else {
            alert("Please select a date!");
        }
    });

    saveBtn.addEventListener("click", () => {
        selectedActivities = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedActivities.push(checkbox.value);
            }
        });

        if (customActivityInput.value.trim() !== "") {
            selectedActivities.push(customActivityInput.value.trim());
        }

        if (selectedActivities.length === 0) {
            alert("Pick at least one activity!");
            return;
        }

        localStorage.setItem("selectedActivities", JSON.stringify(selectedActivities));
        window.location.href = "sixthpage.html"; 
    });
});
