function calc_sleeptime() {
    var sleepTime = document.getElementById('sleepTime').value;
    if (sleepTime == '') {
    document.getElementById('sleep_result').innerHTML = 'When are you gonna sleep?';
    document.getElementById('sleep_result').classList.add('time_style');
    return;
    }
    
    
    var sleepDateTime = new Date();
    sleepDateTime.setHours(sleepTime.split(':')[0]);
    sleepDateTime.setMinutes(sleepTime.split(':')[1]);
    
    var results = [];
    for (var cycle = 2  ; cycle <= 6; cycle++) {
        var wakeTime = new Date(sleepDateTime.getTime() + (90 * cycle) * 60000);
        results.push(wakeTime.getHours() + 'H ' + wakeTime.getMinutes() + 'M');
    }
    
    document.getElementById('sleep_result').innerHTML = 'When you should wake up: <br><br>' + results.join('<br>');
    document.getElementById('sleep_result').classList.add('result_style');
        
    }
function calc_waketime() {
    var wakeTime = document.getElementById('wakeTime').value;
    if (wakeTime == '') {
    document.getElementById('wake_result').innerHTML = 'What time do you wanna wake up?';
    document.getElementById('wake_result').classList.add('time_style');
    return;
    }
    
    
    var wakeDateTime = new Date();
    wakeDateTime.setHours(wakeTime.split(':')[0]);
    wakeDateTime.setMinutes(wakeTime.split(':')[1]);
    
    var results = [];
    for (var cycle = 2  ; cycle <= 6; cycle++) {
        var wakeTime = new Date(wakeDateTime.getTime() - (90 * cycle) * 60000);
        results.push(wakeTime.getHours() + 'H ' + wakeTime.getMinutes() + 'M');
    }
    
    document.getElementById('wake_result').innerHTML = 'When you should go to bed: <br><br>' + results.join('<br>');
    document.getElementById('wake_result').classList.add('result_style');
        
}
