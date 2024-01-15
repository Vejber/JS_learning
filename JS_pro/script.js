document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');

    const scheduleData = [
        {
            "name": "Занятие 1",
            "time": "10:00 - 11:30",
            "maxParticipants": 20,
            "currentParticipants": 10
        },
        {
            "name": "Занятие 2",
            "time": "15:00 - 16:30",
            "maxParticipants": 15,
            "currentParticipants": 5
        },
    ];

    function renderSchedule() {
        scheduleContainer.innerHTML = '';
        scheduleData.forEach(item => {
            const scheduleItem = document.createElement('div');
            scheduleItem.classList.add('schedule-item');

            scheduleItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>Время: ${item.time}</p>
                <p>Макс. участников: ${item.maxParticipants}</p>
                <p>Записано участников: ${item.currentParticipants}</p>
                <button onclick="registerParticipant('${item.name}', ${item.maxParticipants}, ${item.currentParticipants})" ${item.currentParticipants >= item.maxParticipants ? 'disabled' : ''}>Записаться</button>
            `;

            scheduleContainer.appendChild(scheduleItem);
        });
    }

    // Function to register a participant for a class
    window.registerParticipant = (className, maxParticipants, currentParticipants) => {
        if (currentParticipants < maxParticipants) {
            // Simulate a successful registration
            alert('Вы успешно записаны на занятие!');
            
            // Update the current participants count
            scheduleData.forEach(item => {
                if (item.name === className) {
                    item.currentParticipants += 1;
                }
            });

            // Re-render the schedule
            renderSchedule();
        } else {
            alert('Извините, максимальное количество участников уже достигнуто.');
        }
    };

    // Initial rendering of the schedule
    renderSchedule();
});
