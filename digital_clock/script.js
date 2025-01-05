//DIGITAL CLOCK PROGRAM


function updateClock(useAMPM = false){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const min  = now.getMinutes().toString().padStart(2,0);
    const sec  = now.getSeconds().toString().padStart(2,0);
    const timestr = formatTime(hour, min, sec, useAMPM);
    document.getElementById("clock").textContent = timestr;
}

function formatTime(hour, min, sec, useAMPM = false){
    let meridiem = "";
    if (useAMPM) {
        meridiem = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12; 
    }
    return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} ${meridiem}`;
}

//setInterval(() => updateClock(true), 1000);
setInterval(() => updateClock(false), 1000);