function calc_sleeptime() {
    var sleepTime = document.getElementById('sleepTime').value;
    if (sleepTime == '') {
    document.getElementById('result').innerHTML = 'When are you gonna sleep?';
    document.getElementById('result').classList.add('sleeptime_style');
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
    
    document.getElementById('result').innerHTML = 'When you should wake up: <br><br>' + results.join('<br>');
    document.getElementById('result').classList.add('result_style');
        
    }
function calc_waketime() {
    var wakeTime = document.getElementById('sleepTime').value;
    if (wakeTime == '') {
    document.getElementById('result').innerHTML = 'What time do you wanna wake up?';
    document.getElementById('result').classList.add('sleeptime_style');
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
    
    document.getElementById('result').innerHTML = 'When you should go to bed: <br><br>' + results.join('<br>');
    document.getElementById('result').classList.add('result_style');
        
}