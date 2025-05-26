alert ("i am linked");

const ques = [
    {
      Q: "What activity sounds most appealing to you after a long day?",
      options: ["Going to a big party", "Reading a book alone", "Meeting a few friends", "Watching TV with family"],
      answer: "Reading a book alone"
    },
    {
      Q: "How do you feel in a crowd of strangers?",
      options: ["Energized and excited", "Awkward but fine", "Tired and drained", "Invisible and relaxed"],
      answer: "Tired and drained"
    },
    {
      Q: "You’re most likely to recharge by:",
      options: ["Talking with others", "Being alone", "Playing a team sport", "Listening to a podcast"],
      answer: "Being alone"
    },
    {
      Q: "When working in a group, you prefer to:",
      options: ["Lead the discussion", "Quietly support from the background", "Do solo tasks", "Socialize first, then work"],
      answer: "Quietly support from the background"
    },
    {
      Q: "Introverts tend to:",
      options: ["Avoid small talk", "Love being the center of attention", "Need constant stimulation", "Speak without thinking"],
      answer: "Avoid small talk"
    },
    {
      Q: "You’re invited to two events the same night. You’re more likely to choose:",
      options: ["The huge party with music and dancing", "A quiet dinner with one or two close friends", "Networking with new people", "Staying home to relax"],
      answer: "A quiet dinner with one or two close friends"
    },
    {
      Q: "How do you usually feel after a long social interaction?",
      options: ["Recharged", "Mentally drained", "Excited to do more", "Anxious"],
      answer: "Mentally drained"
    },
    {
      Q: "Which job would likely suit an introvert more?",
      options: ["Sales representative", "Writer or designer", "Event planner", "Team manager"],
      answer: "Writer or designer"
    }
  ];
  
  let n = 0;
  let score = 0;
  let answered = false;
  
  const question = document.getElementById('question');
  const opt = document.querySelectorAll('.option button');
  const next = document.getElementById('next');
  const scoreBox = document.getElementById('scoreBox');
  
  function loadQuestion() {
    question.innerHTML = ques[n].Q;
  
    opt.forEach((btn, i) => {
      btn.innerText = ques[n].options[i];
      btn.parentElement.classList.remove('correct', 'wrong');
      btn.disabled = false;
    });
  
    next.style.display = 'none';
    answered = false;
  }
  
  opt.forEach(button => {
    button.addEventListener('click', (e) => {
      if (answered) return;
      answered = true;
  
      let selected = e.target.innerText;
      let correct = ques[n].answer;
  
      opt.forEach(btn => btn.disabled = true);
  
      if (selected === correct) {
        e.target.parentElement.classList.add('correct');
        score++;
        scoreBox.innerText = `Score: ${score}`;
      } else {
        e.target.parentElement.classList.add('wrong');
        opt.forEach(btn => {
          if (btn.innerText === correct) {
            btn.parentElement.classList.add('correct');
          }
        });
      }
  
      next.style.display = 'inline-block';
    });
  });
  
  next.addEventListener('click', () => {
    n++;
    if (n < ques.length) {
      loadQuestion();
    } else {
      question.innerHTML = `🎉 Quiz Completed! <br>Your Score: ${score}/${ques.length}`;
      document.querySelector('.options').style.display = 'none';
      next.style.display = 'none';
    }
  });
  
  loadQuestion();
  