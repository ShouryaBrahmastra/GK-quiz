function startButton(e) {
    var stdName = document.getElementById("stdName");
    if (stdName.value == "") {
        stdName.classList.add('error');
        setTimeout(function() {
            stdName.classList.remove('error');
        }, 300);
        e.preventDefault();
    } else {
        var name = stdName.value;
        sessionStorage.setItem("name", name);
        stdName.value = "";
        window.location.href = "index1.html";
    }
}

function countdown(element, minutes, seconds) {
    // set time for the particular countdown
    var time = minutes * 60 + seconds;
    var interval = setInterval(function() {
        var el = document.getElementById(element);
        //if the time is 0 then end the counter
        if (time <= 0) {
            el.innerHTML = "quiz expired";
            document.getElementById('question1').remove();
            document.getElementById('question2').remove();
            document.getElementById('question3').remove();
            document.getElementById('result').remove();

        }
        var minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        var text = "Solve Quiz with in this time and press the show result button to show result " + minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}
countdown('time', 5, 0);
var quiz = [{
        question1: "Q1.> Which of the following is the largest planet?",
        options: {
            a: "Venus",
            b: "Mars",
            c: "Neptune",
            d: "Jupiter",
        },
        correctAnswer1: "Jupiter"
    },
    {
        question2: "Q2.> The first woman prime minister of India was?",
        options: {
            a: "Indira Gandhi",
            b: "Rabri Devi",
            c: "Sonia Gandhi",
            d: "None of the above"
        },
        correctAnswer2: "Indira Gandhi"
    },
    {
        question3: "Q3.> Dhyanchand was famous for playing which sport?",
        options: {
            a: "Cricket",
            b: "Hockey",
            c: "Football",
            d: "Rugby"
        },
        correctAnswer3: "Hockey"
    },
    {
        question4: "Q4.> The capital of India is?",
        options: {
            a: "Mumbai",
            b: "Delhi",
            c: "Ahmedabad",
            d: "None of the above"
        },
        correctAnswer4: "Delhi"
    },
    {
        question5: "Q5.> Which famous personality is printed on Indian Rupees note?",
        options: {
            a: "Bapu",
            b: "Mohandas Karamchand Gandhi",
            c: "Mahatma Gandhi",
            d: "All of the above"
        },
        correctAnswer5: "All of the above"
    },
    {
        question6: "Q6.> The folk dance of Gujarat is?",
        options: {
            a: "Bhangra",
            b: "Garba",
            c: "Kathak",
            d: "Bharatanatyam"
        },
        correctAnswer6: "Garba"
    },
    {
        question7: "Q7.> Malayalam is a traditional language from which part of India?",
        options: {
            a: "North India",
            b: "South India",
            c: "East India",
            d: "West India"
        },
        correctAnswer6: "South India"
    },
    {
        question8: "Q8.> The city of lakes in India is",
        options: {
            a: "Upaipur",
            b: "Shimla",
            c: "Bhopal",
            d: "Mumbai"
        },
        correctAnswer6: "Upaipur"
    },
    {
        question9: "Q9.> Who is the inventor of the light bulb?",
        options: {
            a: "Charles Babbage",
            b: "Newton",
            c: "Thomas Edison",
            d: "None of the above"
        },
        correctAnswer6: "Thomas Edison"
    },
    {
        question10: "Q10.> Which is the highest mountain in the world?",
        options: {
            a: "Mt Abu",
            b: "Himalayas",
            c: "Everest",
            d: "None of these"
        },
        correctAnswer6: "Everest"
    }

];
//creating 1st question
document.getElementById('q1').innerHTML = quiz[0].question1;
document.getElementById('question1_ans1').innerHTML = quiz[0].options.a
document.getElementById('question1_ans2').innerHTML = quiz[0].options.b
document.getElementById('question1_ans3').innerHTML = quiz[0].options.c
document.getElementById('question1_ans4').innerHTML = quiz[0].options.d

//creating 2nd question
document.getElementById('q2').innerHTML = quiz[1].question2;
document.getElementById('question2_ans1').innerHTML = quiz[1].options.a
document.getElementById('question2_ans2').innerHTML = quiz[1].options.b
document.getElementById('question2_ans3').innerHTML = quiz[1].options.c
document.getElementById('question2_ans4').innerHTML = quiz[1].options.d

//creating 3rd question
document.getElementById('q3').innerHTML = quiz[2].question3;
document.getElementById('question3_ans1').innerHTML = quiz[2].options.a
document.getElementById('question3_ans2').innerHTML = quiz[2].options.b
document.getElementById('question3_ans3').innerHTML = quiz[2].options.c
document.getElementById('question3_ans4').innerHTML = quiz[2].options.d

//creating 4th question
document.getElementById('q4').innerHTML = quiz[3].question4;
document.getElementById('question4_ans1').innerHTML = quiz[3].options.a
document.getElementById('question4_ans2').innerHTML = quiz[3].options.b
document.getElementById('question4_ans3').innerHTML = quiz[3].options.c
document.getElementById('question4_ans4').innerHTML = quiz[3].options.d

//creating 5th question
document.getElementById('q5').innerHTML = quiz[4].question5;
document.getElementById('question5_ans1').innerHTML = quiz[4].options.a
document.getElementById('question5_ans2').innerHTML = quiz[4].options.b
document.getElementById('question5_ans3').innerHTML = quiz[4].options.c
document.getElementById('question5_ans4').innerHTML = quiz[4].options.d

//creating 6th question
document.getElementById('q6').innerHTML = quiz[5].question6;
document.getElementById('question6_ans1').innerHTML = quiz[5].options.a
document.getElementById('question6_ans2').innerHTML = quiz[5].options.b
document.getElementById('question6_ans3').innerHTML = quiz[5].options.c
document.getElementById('question6_ans4').innerHTML = quiz[5].options.d

//creating 7th question
document.getElementById('q7').innerHTML = quiz[6].question7;
document.getElementById('question7_ans1').innerHTML = quiz[6].options.a
document.getElementById('question7_ans2').innerHTML = quiz[6].options.b
document.getElementById('question7_ans3').innerHTML = quiz[6].options.c
document.getElementById('question7_ans4').innerHTML = quiz[6].options.d

//creating 8th question
document.getElementById('q8').innerHTML = quiz[7].question8;
document.getElementById('question8_ans1').innerHTML = quiz[7].options.a
document.getElementById('question8_ans2').innerHTML = quiz[7].options.b
document.getElementById('question8_ans3').innerHTML = quiz[7].options.c
document.getElementById('question8_ans4').innerHTML = quiz[7].options.d

//creating 9th question
document.getElementById('q9').innerHTML = quiz[8].question9;
document.getElementById('question9_ans1').innerHTML = quiz[8].options.a
document.getElementById('question9_ans2').innerHTML = quiz[8].options.b
document.getElementById('question9_ans3').innerHTML = quiz[8].options.c
document.getElementById('question9_ans4').innerHTML = quiz[8].options.d

//creating 10th question
document.getElementById('q10').innerHTML = quiz[9].question10;
document.getElementById('question10_ans1').innerHTML = quiz[9].options.a
document.getElementById('question10_ans2').innerHTML = quiz[9].options.b
document.getElementById('question10_ans3').innerHTML = quiz[9].options.c
document.getElementById('question10_ans4').innerHTML = quiz[9].options.d

var score = 0;

function check() {
    // score

    // for question1 
    var correctAnswer1 = document.getElementById('q1_ans4');
    var question1 = document.getElementById('question1');
    var question2 = document.getElementById('question2');
    var question3 = document.getElementById('question3');

    // check if correct answer is checked 

    if (correctAnswer1.checked == true) {
        score++;
        question1.style.backgroundColor = 'green';
    } else {
        question1.style.backgroundColor = 'red';
    }

    // for question2
    var correctAnswer2 = document.getElementById('q2_ans1');

    // check if correct answer is checked 

    if (correctAnswer2.checked == true) {
        score++;
        question2.style.backgroundColor = 'green';
    } else {
        question2.style.backgroundColor = 'red';
    }

    // for question3
    var correctAnswer3 = document.getElementById('q3_ans2');

    // check if correct answer is checked 

    if (correctAnswer3.checked == true) {
        score++;
        question3.style.backgroundColor = 'green';
    } else {
        question3.style.backgroundColor = 'red';
    }

    // for question4
    var correctAnswer4 = document.getElementById('q4_ans2');

    // check if correct answer is checked 

    if (correctAnswer4.checked == true) {
        score++;
        question4.style.backgroundColor = 'green';
    } else {
        question4.style.backgroundColor = 'red';
    }

    // for question5
    var correctAnswer5 = document.getElementById('q5_ans4');

    // check if correct answer is checked 

    if (correctAnswer5.checked == true) {
        score++;
        question5.style.backgroundColor = 'green';
    } else {
        question5.style.backgroundColor = 'red';
    }

    // for question6
    var correctAnswer6 = document.getElementById('q6_ans2');

    // check if correct answer is checked 

    if (correctAnswer6.checked == true) {
        score++;
        question6.style.backgroundColor = 'green';
    } else {
        question6.style.backgroundColor = 'red';
    }

    // for question7
    var correctAnswer7 = document.getElementById('q7_ans2');

    // check if correct answer is checked 

    if (correctAnswer7.checked == true) {
        score++;
        question7.style.backgroundColor = 'green';
    } else {
        question7.style.backgroundColor = 'red';
    }

    // for question8
    var correctAnswer8 = document.getElementById('q8_ans1');

    // check if correct answer is checked 

    if (correctAnswer8.checked == true) {
        score++;
        question8.style.backgroundColor = 'green';
    } else {
        question8.style.backgroundColor = 'red';
    }
    // for question9
    var correctAnswer9 = document.getElementById('q9_ans3');

    // check if correct answer is checked 

    if (correctAnswer9.checked == true) {
        score++;
        question9.style.backgroundColor = 'green';
    } else {
        question9.style.backgroundColor = 'red';
    }

    // for question10
    var correctAnswer10 = document.getElementById('q10_ans3');

    // check if correct answer is checked 

    if (correctAnswer10.checked == true) {
        score++;
        question10.style.backgroundColor = 'green';
    } else {
        question10.style.backgroundColor = 'red';
    }

    var scoreElement = document.getElementById('score');
    var namevar = document.getElementById('stdName');
    scoreElement.innerHTML = getItem("name") + "Your score is " + score;
}