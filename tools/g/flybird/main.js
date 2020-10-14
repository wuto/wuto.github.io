var game = document.getElementById("game"),
            restart = document.querySelector('#restart'),
            birdEle = document.getElementById("bird"),
            scoreEle = document.querySelector('#score');
        var gameover = false,
            score = 0;
        const g = 1, //加速度
            GAP = 200, //管道间隙常量
            TUBEWIDTH = 52; //管道宽度
        var birdTimer = null,
            flag=0,//切换小鸟背景图标志
            pipeArr = [],
            pipeX = [400, 600, 800, 1000]; //存放初始化时pipe的X位置。

        var bird = {
                entity: birdEle,
                x: birdEle.offsetLeft,
                y: birdEle.offsetTop,
                speedX: 5,
                speedY: 0
            },
            sky = {
                x: 0
            };
        var init = function() { //初始化函数
            score = 0;
            scoreEle.innerText = 0;
            gameover = false;

            bird.entity.style.top = '100px';
            bird.entity.style.left = '100px';
            bird.x = 100;
            bird.y = 100;
            bird.speedY = 0;
            pipeArr.forEach(function(pipe, i) {
                pipe.x = pipeX[i];
                pipe.pipeEleUp.style.left = pipeX[i] + 'px';
                pipe.pipeEleDown.style.left = pipeX[i] + 'px';
                pipe.timer = setInterval(tubePro.bind(pipe), 10);
            });
            birdTimer = setInterval(gamepro, 30);
        }
        var tubePro = function() { //往左移动
            this.x = this.x - 1;
            if (this.x < 100 && !this.passed) {
                scoreEle.innerText = ++score;
                this.passed = true;

            }
          	//管道移到最左边，重设管道高度
            if (this.x < -TUBEWIDTH) {
                this.pipeUpH = parseInt(Math.random() * 300 + 100); //上管道高度
                console.log(this.pipeUpH);
                this.pipeDownY = this.pipeUpH + GAP; //下管道顶端坐标
                this.pipeDownH = game.offsetHeight - this.pipeDownY; //下管道的高度
                this.pipeEleUp.style.height = this.pipeUpH + "px";
                this.pipeEleDown.style.height = this.pipeDownH + "px";
                this.pipeEleDown.style.top = this.pipeDownY + "px";
                this.passed = false;
                this.x = 800;//把最左边的管道移到最右边
            }
            var downCrash = (bird.x < this.x + TUBEWIDTH) &&
                (bird.x + birdEle.offsetWidth > this.x) &&
                (bird.y + birdEle.offsetHeight > this.pipeDownY);
            var upCrash = (bird.x + birdEle.offsetWidth > this.x) &&
                (bird.x < this.x + TUBEWIDTH) &&
                (bird.y < this.pipeUpH);
            if (downCrash || upCrash) {
                //gameover = true;
                stop();
            }
            if (!gameover) {
                this.pipeEleUp.style.left = this.x + "px";
                this.pipeEleDown.style.left = this.x + "px";
            }
        }
        var gamepro = function() {
            if (!gameover) {

                sky.x = sky.x - bird.speedX;
                game.style.backgroundPositionX = sky.x + "px";
                bird.speedY = bird.speedY + g;
                var step = bird.speedY;
                bird.y = bird.y + step;
                if (bird.y > game.offsetHeight - birdEle.offsetHeight) {
                    bird.y = game.offsetHeight - birdEle.offsetHeight;
                    //gameover = true;
                    stop();
                }
                if (bird.y < 0) {
                    bird.y = 0;
                    //gameover = true;
                    stop();
                }
                bird.entity.style.top = bird.y + "px";
              bird.entity.style.backgroundPosition = `${-flag*52-8}px -10px`;
                flag < 2 ? (flag++) : (flag = 0);

            }
        }

        function Pipe(positionX) { //管道构造函数
            this.x = positionX;
            this.passed = false; //有没有被小鸟通过
            this.reset = false; //高度有没有被重设
            this.width = TUBEWIDTH;

            this.pipeUpY = 0; //上管道顶部坐标
            this.pipeUpH = parseInt(Math.random() * 175 + 100); //上管道高度,defineproperty

            this.pipeDownY = this.pipeUpH + GAP; //下管道顶端坐标
            this.pipeDownH = game.offsetHeight - this.pipeDownY; //下管道的高度
            var that = this;
            this.timer = setInterval(tubePro.bind(that), 10);

            var divUp = document.createElement("div"); //这里初始化管道的高度等
            divUp.className = "pipeU";
            divUp.style.top = this.pipeUpY + "px";
            divUp.style.left = this.x + "px";
            divUp.style.width = this.width + "px";
            divUp.style.height = this.pipeUpH + "px";
            game.appendChild(divUp);
            this.pipeEleUp = divUp; //pipe实例的pipeEleUp属性指向该元素。

            var divDown = document.createElement("div");
            divDown.className = "pipeD";
            divDown.style.left = this.x + "px";
            divDown.style.top = this.pipeDownY + "px";
            divDown.style.width = this.width + "px";
            divDown.style.height = this.pipeDownH + "px";
            game.appendChild(divDown);
            this.pipeEleDown = divDown; //pipe实例的pipeEleDown属性指向该元素。
        }

        function stop() {
            gameover = true;
            clearInterval(birdTimer);
            pipeArr.forEach(function(pipe) {
                clearInterval(pipe.timer);
            });
            restart.style.display = 'block';

        }
        for (var i = 0; i < 4; i++) {
            pipeArr[i] = new Pipe(400 + i * 200); //初始化4个管道
        }
        document.onclick = function() { //鼠标事件
            bird.speedY = -10;
        };
        restart.addEventListener('click', function(e) {
            this.style.display = 'none';
            if (e.target.className == 'yes') {
                init();
            }
        })
        document.onkeydown = function(e) { //键盘事件
            if (e.keyCode === 13) {
                bird.speedY = -10;
            }
        };
        birdTimer = setInterval(gamepro, 30);
