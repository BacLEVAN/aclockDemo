$(function(){

    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for(var i = 0, l = props.length; i < l; i++) {
        if(typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }

    function startClock() {
        var angle = 360/60,
            date = new Date(),
            hour = date.getHours() % 12,
            minute = date.getMinutes(),
            second = date.getSeconds(),
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;

        if(prop) {
            $('#minute')[0].style[prop] = 'rotate('+angle * minute+'deg)';
            $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
            $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
        }

    }

    // Thực hiện chạy đồng hồ ngay khi load trang, thực hiện chạy với tốc độ 5 milisecond
    setInterval(
        function(){
            startClock();
    }, 100);

    /*
    function autoPlay() {
        $("#video_player")[0].autoplay = true;
    }

    setInterval(
        function(){
            autoPlay();
    }, 5000);
    date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    */

    var testObject = {
        'one': 5000, // 5 second
        'two': 15000, 
        'three': 25000,
        'four': 35000,
        'five': 45000,
        'six': 55000 // 55 second
      };
    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

    function autoPlay() {
        // $("#video_player")[0].autoplay = true;
        $("#video_player")[0].play();
    }

    function autoStop() {
        $("#video_player")[0].pause();
    }

    var setSecond = JSON.parse(retrievedObject);

    setTimeout(function() {
        autoPlay();
    }, setSecond.one);

    setTimeout(function() {
       autoStop();
    }, setSecond.two);

    setTimeout(function() {
       autoPlay();
    }, setSecond.three);

    setTimeout(function() {
       autoStop();
    }, setSecond.four);


    setTimeout(function() {
       autoPlay();
    }, setSecond.five);

    setTimeout(function() {
       autoPlay();
    }, setSecond.six);

});
