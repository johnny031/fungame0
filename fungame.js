document.addEventListener('DOMContentLoaded', function() {

    let blue_kid_number = 9;
    let red_kid_number = 8;
    
    document.querySelector('#change_blue').onclick = function(){
        document.querySelector('#blue_or_red').innerHTML = "藍隊回合!"
    }

    document.querySelector('#change_red').onclick = function(){
        document.querySelector('#blue_or_red').innerHTML = "紅隊回合!"
    }

    document.addEventListener('click', event => {
        const element = event.target;
        if (element.className === 'photo1') {
            blue_kid_number--;
            document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

            if (blue_kid_number === 0) {
                document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
                var audio = document.getElementById("win");
                audio.play();
                setTimeout(stop_animation, 4000);
                    function stop_animation() {
                        document.querySelector('#win_message').innerHTML = "";
                        document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                        document.querySelector('#win_message2_background').style.display = "inline";
                    }
            }

        
            else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
                document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
                var audio = document.getElementById("right");
                audio.play();
            }

            else {
                document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
                document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
                var audio = document.getElementById("wrong_kid");
                audio.play();
            }

            

            document.querySelector('#video1').style.display = "block";
            var Video = document.getElementById("video1"); 
            Video.play(); 
            setTimeout(stop_video, 3000);
            function stop_video() {
                document.querySelector('#video1').style.display = "None";
                document.getElementById("photo1").src="bluekid1.jpg";
                document.querySelector('#alert').innerHTML = "";
                document.getElementById('img1').onclick = null;
            }
        };

        if (element.className === 'photo2') {
            document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

            if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
                document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            }

            else{
                document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            }

            document.querySelector('#video2').style.display = "block";
            var Video = document.getElementById("video2"); 
            Video.play(); 
            var audio = document.getElementById("wrong_sheep");
            audio.play();

            setTimeout(stop_video, 3000);
            function stop_video() {
                document.querySelector('#video2').style.display = "None";
                document.getElementById("photo2").src="sheep.JPG";
                document.querySelector('#photo2').style.opacity = "0.3";
                document.querySelector('#alert').innerHTML = "";
                document.getElementById('img2').onclick = null;
            }
            
        };

    });


    document.querySelector('#img3').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;
        

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video3').style.display = "block";
        var Video = document.getElementById("video3"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video3').style.display = "None";
            document.getElementById("photo3").src="redkid1.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img3').onclick = null;
        }
    };


    document.querySelector('#img4').onclick = function(){
        
        document.querySelector('#video4').style.display = "block";
        var Video = document.getElementById("video4"); 
        Video.play();

        var audio1 = document.getElementById("boom_sound");
        setTimeout(start_audio1, 1700);
        function start_audio1(){
            audio1.play()
        }

        var audio3 = document.getElementById("boom_sound3");
        setTimeout(start_audio3, 7000);
        function start_audio3(){
            audio3.play()
        }

        var audio2 = document.getElementById("boom_sound2");
        setTimeout(start_audio2, 15000);
        function start_audio2(){
            audio2.play()
        }
    
        setTimeout(stop_video, 28000);
        function stop_video() {
            document.querySelector('#video4').style.display = "None";
            document.querySelector('#boom_background').style.display = "inline";
            if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
                document.querySelector('#boom_message').innerHTML = "藍隊引爆炸彈 挑戰失敗...";
                document.querySelector('#boom_message2').innerHTML = "紅隊取得勝利!!!";
            }
    
            else{
                document.querySelector('#boom_message').innerHTML = "紅隊引爆炸彈 挑戰失敗...";
                document.querySelector('#boom_message2').innerHTML = "藍隊取得勝利!!!";
            }
        }
    };

    document.querySelector('#img5').onclick = function(){
        document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video5').style.display = "block";
        var Video = document.getElementById("video5"); 
        Video.play(); 
        var audio = document.getElementById("wrong_animal");
        audio.play();

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video5').style.display = "None";
            document.getElementById("photo5").src="fish.JPG";
            document.querySelector('#photo5').style.opacity = "0.4";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img5').onclick = null;
        }
    };

    document.querySelector('#img6').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video6').style.display = "block";
        var Video = document.getElementById("video6"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video6').style.display = "None";
            document.getElementById("photo6").src="redkid2.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img6').onclick = null;
        }
    };

    document.querySelector('#img7').onclick = function(){
        document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video7').style.display = "block";
        var Video = document.getElementById("video7"); 
        Video.play(); 
        var audio = document.getElementById("wrong_animal");
        audio.play();

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video7').style.display = "None";
            document.getElementById("photo7").src="dog2.JPG";
            document.querySelector('#photo7').style.opacity = "0.4";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img7').onclick = null;
        }
    };

    document.querySelector('#img8').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video8').style.display = "block";
        var Video = document.getElementById("video8"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video8').style.display = "None";
            document.getElementById("photo8").src="redkid3.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img8').onclick = null;
        }
    };
    
    document.querySelector('#img9').onclick = function(){
        document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video9').style.display = "block";
        var Video = document.getElementById("video9"); 
        Video.play();
        var audio = document.getElementById("wrong_animal");
        audio.play(); 

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video9').style.display = "None";
            document.getElementById("photo9").src="pig.JPG";
            document.querySelector('#photo9').style.opacity = "0.4";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img9').onclick = null;
        }
    };

    document.querySelector('#img10').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video10').style.display = "block";
        var Video = document.getElementById("video10"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video10').style.display = "None";
            document.getElementById("photo10").src="redkid4.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById("img10").disabled = true;
            document.getElementById('img10').onclick = null;
        }
    };

    document.querySelector('#img11').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video11').style.display = "block";
        var Video = document.getElementById("video11"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video11').style.display = "None";
            document.getElementById("photo11").src="bluekid2.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img11').onclick = null;
        }
    };

    document.querySelector('#img12').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video12').style.display = "block";
        var Video = document.getElementById("video12"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video12').style.display = "None";
            document.getElementById("photo12").src="redkid5.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById("img12").disabled = true;
            document.getElementById('img12').onclick = null;
        }
    };

    document.querySelector('#img13').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video13').style.display = "block";
        var Video = document.getElementById("video13"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video13').style.display = "None";
            document.getElementById("photo13").src="bluekid3.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img13').onclick = null;
        }
    };

    document.querySelector('#img14').onclick = function(){
        document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video14').style.display = "block";
        var Video = document.getElementById("video14"); 
        Video.play(); 
        var audio = document.getElementById("wrong_animal");
        audio.play();

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video14').style.display = "None";
            document.getElementById("photo14").src="sheep2.JPG";
            document.querySelector('#photo14').style.opacity = "0.3";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img14').onclick = null;
        }
    };

    document.querySelector('#img15').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video15').style.display = "block";
        var Video = document.getElementById("video15"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video15').style.display = "None";
            document.getElementById("photo15").src="redkid6.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById("img15").disabled = true;
            document.getElementById('img15').onclick = null;
        }
    };

    document.querySelector('#img16').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video16').style.display = "block";
        var Video = document.getElementById("video16"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video16').style.display = "None";
            document.getElementById("photo16").src="redkid7.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById("img16").disabled = true;
            document.getElementById('img16').onclick = null;
        }
    };

    document.querySelector('#img17').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video17').style.display = "block";
        var Video = document.getElementById("video17"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video17').style.display = "None";
            document.getElementById("photo17").src="bluekid4.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img17').onclick = null;
        }
    };

    document.querySelector('#img18').onclick = function(){
        document.querySelector('#alert').innerHTML = "啊啊啊啊被發現了QQ...";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video18').style.display = "block";
        var Video = document.getElementById("video18"); 
        Video.play(); 
        var audio = document.getElementById("wrong_animal");
        audio.play();

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video18').style.display = "None";
            document.getElementById("photo18").src="sheep3.JPG";
            document.querySelector('#photo18').style.opacity = "0.3";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img18').onclick = null;
        }
    };

    document.querySelector('#img19').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video19').style.display = "block";
        var Video = document.getElementById("video19"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video19').style.display = "None";
            document.getElementById("photo19").src="bluekid5.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img19').onclick = null;
        }
    };

    document.querySelector('#img20').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video20').style.display = "block";
        var Video = document.getElementById("video20"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video20').style.display = "None";
            document.getElementById("photo20").src="bluekid6.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img20').onclick = null;
        }
    };

    document.querySelector('#img21').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video21').style.display = "block";
        var Video = document.getElementById("video21"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video21').style.display = "None";
            document.getElementById("photo21").src="bluekid7.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img21').onclick = null;
        }
    };

    document.querySelector('#img22').onclick = function(){
        red_kid_number--;
        document.querySelector('#red_kid_number').innerHTML = red_kid_number;

        if (red_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜紅隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜紅隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

        else if (document.querySelector('#blue_or_red').innerHTML === "紅隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到紅色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成紅小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        document.querySelector('#video22').style.display = "block";
        var Video = document.getElementById("video22"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video22').style.display = "None";
            document.getElementById("photo22").src="redkid8.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById("img22").disabled = true;
            document.getElementById('img22').onclick = null;
        }
    };

    document.querySelector('#img23').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video23').style.display = "block";
        var Video = document.getElementById("video23"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video23').style.display = "None";
            document.getElementById("photo23").src="bluekid8.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img23').onclick = null;
        }
    };

    document.querySelector('#img24').onclick = function(){
        document.querySelector('#alert').innerHTML = "嘿嘿嘿~~找錯人啦哈哈哈!!!";

        if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!") {
            document.querySelector('#blue_or_red').innerHTML = "紅隊回合!";
        }

        else{
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
        }

        document.querySelector('#video24').style.display = "block";
        var Video = document.getElementById("video24"); 
        Video.play(); 
        var audio = document.getElementById("wrong_animal");
        audio.play();

        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video24').style.display = "None";
            document.getElementById("photo24").src="dog3.JPG";
            document.querySelector('#photo24').style.opacity = "0.3";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img24').onclick = null;
        }
    };

    document.querySelector('#img25').onclick = function(){
        blue_kid_number--;
        document.querySelector('#blue_kid_number').innerHTML = blue_kid_number;

        if (blue_kid_number === 0) {
            document.querySelector('#win_message').innerHTML = "恭喜藍隊獲勝!!!";
            var audio = document.getElementById("win");
            audio.play();
            setTimeout(stop_animation, 4000);
                function stop_animation() {
                    document.querySelector('#win_message').innerHTML = "";
                    document.querySelector('#win_message2').innerHTML = "恭喜藍隊";
                    document.querySelector('#win_message2_background').style.display = "inline";
                }
        }

       
        else if (document.querySelector('#blue_or_red').innerHTML === "藍隊回合!"){
            document.querySelector('#alert').innerHTML = "恭喜找到藍色小孩!!!";
            var audio = document.getElementById("right");
            audio.play();
        }

        else {
            document.querySelector('#blue_or_red').innerHTML = "藍隊回合!";
            document.querySelector('#alert').innerHTML = "QQ~找成藍小孩ㄌ...";
            var audio = document.getElementById("wrong_kid");
            audio.play();
        }

        

        document.querySelector('#video25').style.display = "block";
        var Video = document.getElementById("video25"); 
        Video.play(); 
        setTimeout(stop_video, 3000);
        function stop_video() {
            document.querySelector('#video25').style.display = "None";
            document.getElementById("photo25").src="bluekid9.JPG";
            document.querySelector('#alert').innerHTML = "";
            document.getElementById('img25').onclick = null;
        }
    };

});











