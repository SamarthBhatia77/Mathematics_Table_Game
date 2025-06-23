	let highScore=Number(localStorage.getItem("highScore"));
	if(isNaN(highScore)) {
		highScore=0;
	}
	let score=0;
	let i=0;
	function startGameEasy() {
		difficultySection.style.display = "none";
		i=1;
		const questionBox = document.querySelector(".displayQuestion");
		const answerBox = document.querySelector(".answerBox");
		const highScoreBox = document.querySelector(".displayHighScore");
		
		const num1= Math.floor(Math.random() * 10) + 10; //random num from 1 to 10
		const num2= Math.floor(Math.random() * 10) + 1;
		const ans= num1 * num2;

		questionBox.innerHTML = `What is ${num1} × ${num2}?`;
		answerBox.innerHTML = `
		<input type="number" id="userAnswer" placeholder="Enter your answer" onkeydown="if(event.key === 'Enter') checkAnswer(${ans}, ${num1}, ${num2})"> 
		<button id="submitButton" onclick="checkAnswer(${ans}, ${num1},${num2})">Submit</button>`;

		//so that user does not have to press the input box again and again
		setTimeout(() => {
		document.getElementById("userAnswer").focus();
	}, 0);

	}

	function startGameMedium() {
		difficultySection.style.display = "none";
		i=2;
		const questionBox = document.querySelector(".displayQuestion");
		const answerBox = document.querySelector(".answerBox");
		const highScoreBox = document.querySelector(".displayHighScore");
		
		const num1= Math.floor(Math.random() * 10) + 10; //random num from 10 to 20
		const num2= Math.floor(Math.random() * 10) + 10; // number from 10 to 20
		const ans= num1 * num2;

		questionBox.innerHTML = `What is ${num1} × ${num2}?`;
		answerBox.innerHTML = `
		<input type="number" id="userAnswer" placeholder="Enter your answer" onkeydown="if(event.key === 'Enter') checkAnswer(${ans}, ${num1}, ${num2})">
		<button id="submitButton" onclick="checkAnswer(${ans}, ${num1},${num2})">Submit</button>`;

		//so that user does not have to press the input box again and again
		setTimeout(() => {
		document.getElementById("userAnswer").focus();
	}, 0);
	}

	function startGameTough() {
		difficultySection.style.display = "none";
		i=3;
		const questionBox = document.querySelector(".displayQuestion");
		const answerBox = document.querySelector(".answerBox");
		const highScoreBox = document.querySelector(".displayHighScore");
		
		const num1= Math.floor(Math.random() * 10) + 20; //random num from 20 to 30
		const num2= Math.floor(Math.random() * 10) + 20; // number from 20 to 20
		const ans= num1 * num2;

		questionBox.innerHTML = `What is ${num1} × ${num2}?`;
		answerBox.innerHTML = `
		<input type="number" id="userAnswer" placeholder="Enter your answer" onkeydown="if(event.key === 'Enter') checkAnswer(${ans}, ${num1}, ${num2})">
		<button id="submitButton" onclick="checkAnswer(${ans}, ${num1},${num2})">Submit</button>`;

		//so that user does not have to press the input box again and again
		setTimeout(() => {
		document.getElementById("userAnswer").focus();
	}, 0);
	}

	function restartGame() {
		if(i==1) {
			element1=document.querySelector(".answerBox");
			element1.style.display="";
			element2=document.querySelector(".answerStatus");
			element2.style.display="none";
			element3=document.querySelector(".displayHighScore");
			element3.style.display="none";
			element4=document.querySelector(".afterLossButtons");
			element4.style.display="none";
			startGameEasy();
		}
		else if(i==2) {
			element1=document.querySelector(".answerBox");
			element1.style.display="";
			element2=document.querySelector(".answerStatus");
			element2.style.display="none";
			element3=document.querySelector(".displayHighScore");
			element3.style.display="none";
			element4=document.querySelector(".afterLossButtons");
			element4.style.display="none"; 
			startGameMedium();
		}
		else {
			element1=document.querySelector(".answerBox");
			element1.style.display="";
			element2=document.querySelector(".answerStatus");
			element2.style.display="none";
			element3=document.querySelector(".displayHighScore");
			element3.style.display="none";
			element4=document.querySelector(".afterLossButtons");
			element4.style.display="none";
			startGameTough();
		}
	}

	function displayAfterLoss() {
		element1=document.querySelector(".answerBox")
		element1.style.display="none";
		element2=document.querySelector(".displayAfterLoss");
		element2.innerHTML=`
			<div class="afterLossButtons">
				<button id="restartButton" onclick="restartGame();">Retry</button> <button id="selectDifficultyButton" onclick="location.reload();"> Select Difficulty</button>
			</div> `
	}

	function checkAnswer(ans,num1,num2) {
		const userAnswer = document.getElementById("userAnswer").value; // takes as a string not a number
		const highScoreBox = document.querySelector(".displayHighScore");

		const answerStatus=document.querySelector(".answerStatus");
		if (Number(userAnswer) === ans) {
			document.querySelector(".answerStatus").style.display="";
			document.querySelector(".answerStatus").classList.remove("answerStatusWrong");
			answerStatus.innerHTML="Correct!"
			if(i==1) {
				score++;
				startGameEasy();
			}
			else if(i==2){
				score++;
				startGameMedium();
			}
			else {
				score++;
				startGameTough();
			}
		} 
		else {
			if(score>highScore) {
				highScore=score;
				localStorage.setItem("highScore",highScore);
			}
			document.querySelector(".answerStatus").style.display="";
			document.querySelector(".displayHighScore").style.display="";
			document.querySelector(".answerStatus").classList.add("answerStatusWrong");
			answerStatus.innerHTML=`Wrong! ${num1} x ${num2} = ${ans}`
			highScoreBox.innerHTML = `Your Score: ${score} , All-time High Score: ${highScore}`;
			score=0; // reseting the score after user gives a wrong answer!
			displayAfterLoss();
		}
	}

// UPDATE-> custom modes- enter your own table ranges