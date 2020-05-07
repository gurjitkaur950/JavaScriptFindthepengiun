$(document).ready(function () {

    //This code will run after your page loads
    $("#yeti").mousedown(function () {
        alert("Yaaaarrrr!");
    });
    
    var num;
    var score = 0;
    var highScore = 0;
    getRandomImage();
    $(".penguin").on('click', function (event) {
        setgame($(this));

    });

    function setgame(all) {
debugger;
        var number = all.attr('id');
        var lastChar = number.substr(number.length - 1);
        if (all.hasClass("penguin yetti")) {
            all.css('background-image', 'url(images/yeti.png)');

            // .play() function is a asynchronous function, implemented the promise()
            var playPromise = document.getElementById("yetiAudio").play();

            if (playPromise !== undefined) {
                playPromise.then(function() {

                    alert("Game Over!!!!!!!!!");

                    var flag = 0;
                    if (confirm("Do you want to continue the game?")) {
                        flag = 1
                    } else {
                        flag = 0;
                    }
                    if (flag == 1) {

                        default_image(getRandomImage);
                        //getRandomImage();
                        highScore = update_score(score, highScore);
                        $("#score").empty();
                        score=0;
                        $("#score").html('score : ' + score + '<br>High Score : ' + highScore);
                        
                    } else {
                        window.location.reload();
                    }

                }).catch(function() {
                    console.log('Play function has an error.');
                });
            }
        } else {
            score = score + 1;

            // .play() function is a asynchronous function, implemented the promise()
            var playPromise = document.getElementById("penguinAudio").play();

            if (playPromise !== undefined) {
                playPromise.then(function() {
                    $("#score").empty();
                    $("#score").html('score : ' + score + '<br>High Score : ' + highScore);
                    all.css('background-image', 'url(images/penguin_' + lastChar + '.png)');
                    
                    document.getElementById('penguin'+lastChar).style.pointerEvents = 'none';
                   
                    
                    
                }).catch(function() {
                    console.log('Play function has an error.');
                });
            }
        }

    }

    function update_score(score, highScore) {
        if (highScore < score) {
            highScore = score;
            return highScore;
        }
        else{
            highScore = highScore;
            return highScore;
        }

    }

    function getRandomImage() {

        num = Math.floor((Math.random() * 9) + 1);
        $("#penguin" + num).addClass('yetti');
        $("#penguin" + num).attr('id', 'yeti')
    }

    function default_image(fun) {
        $("#yeti").attr('id', 'penguin' + num);
        $("#penguin1").removeClass('yetti');
        $("#penguin2").removeClass('yetti');
        $("#penguin3").removeClass('yetti');
        $("#penguin4").removeClass('yetti');
        $("#penguin5").removeClass('yetti');
        $("#penguin6").removeClass('yetti');
        $("#penguin7").removeClass('yetti');
        $("#penguin8").removeClass('yetti');
        $("#penguin9").removeClass('yetti');

        $("#penguin1").css('background-image', 'url("images/mound_1.png")');
        $("#penguin2").css('background-image', 'url("images/mound_2.png")');
        $("#penguin3").css('background-image', 'url("images/mound_3.png")');
        $("#penguin4").css('background-image', 'url("images/mound_4.png")');
        $("#penguin5").css('background-image', 'url("images/mound_5.png")');
        $("#penguin6").css('background-image', 'url("images/mound_6.png")');
        $("#penguin7").css('background-image', 'url("images/mound_7.png")');
        $("#penguin8").css('background-image', 'url("images/mound_8.png")');
        $("#penguin9").css('background-image', 'url("images/mound_8.png")');
        
         document.getElementById('penguin1').style.pointerEvents = 'auto';
         document.getElementById('penguin2').style.pointerEvents = 'auto';
         document.getElementById('penguin3').style.pointerEvents = 'auto';
         document.getElementById('penguin4').style.pointerEvents = 'auto';
         document.getElementById('penguin5').style.pointerEvents = 'auto';
         document.getElementById('penguin6').style.pointerEvents = 'auto';
         document.getElementById('penguin7').style.pointerEvents = 'auto';
         document.getElementById('penguin8').style.pointerEvents = 'auto';
         document.getElementById('penguin9').style.pointerEvents = 'auto';
        // a callback function.
        fun();
    }


});
