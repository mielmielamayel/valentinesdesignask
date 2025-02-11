document.addEventListener("DOMContentLoaded", () => {
    const receiptDate = document.getElementById("receipt-date");
    const activityDate = document.getElementById("activity-date");
    const receiptActivities = document.getElementById("receipt-activities");
    const receiptNo = document.getElementById("receipt-no");

    const randomReceiptNo = "#143143143143";
    receiptNo.textContent = randomReceiptNo;

    const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    receiptDate.textContent = today;

    const selectedDate = localStorage.getItem("selectedDate") || "No date selected 😢";
    const selectedActivities = JSON.parse(localStorage.getItem("selectedActivities")) || [];

    activityDate.textContent = selectedDate;

    if (selectedActivities.length > 0) {
        selectedActivities.forEach(activity => {
            let listItem = document.createElement("li");
            listItem.textContent = `${activity}`;
            receiptActivities.appendChild(listItem);
        });
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = "No activities selected 😢";
        receiptActivities.appendChild(listItem);
    }
});
