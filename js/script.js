$(document).ready(function () {
	$('nav li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		},
		function () {
			$('ul', this).stop().slideUp(400);
		}
	);
	$(`.opt`).slideUp();
	$('.plus').click(function () {
		$(this).toggleClass('fa-minus');

		if ($(this).hasClass('fa-minus')) {
			$(this).parent().siblings().slideDown(1000);
		} else {
			$(this).parent().siblings().slideUp(1000);
		}
	});
	$('.menu').slideUp();
	$('.ham').click(function () {
		$('.menu').slideToggle(1000);
		$(`.opt`).slideUp();
		if ($('.plus').hasClass('fa-minus')) {
			$('.plus').removeClass('fa-minus');
		}
		if ($(this).hasClass('fa-bolt')) {
			$(this).removeClass('fa-bolt');
			$(this).addClass('fa-bars');
		} else {
			$(this).removeClass('fa-bars');
			$(this).addClass('fa-bolt');
		}
	});

	$('.foot ul li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		},
		function () {
			$('ul', this).stop().slideUp(400);
		}
	);

	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

});
document.addEventListener("DOMContentLoaded", function () {
	const chatbox = document.querySelector(".chatbox");
	const chatInput = document.querySelector(".chat-input textarea");
	const sendBtn = document.getElementById("send-btn");
	const closeBtn = document.querySelector(".close-btn");
	const chatbotToggler = document.querySelector(".chatbot-toggler");
	const body = document.querySelector("body");
  
	// Toggle chatbot
	chatbotToggler.addEventListener("click", function () {
	  body.classList.toggle("show-chatbot");
	});
  
	// Close chatbot
	closeBtn.addEventListener("click", function () {
	  body.classList.remove("show-chatbot");
	});
  
	// Send message
	function sendMessage() {
	  const message = chatInput.value.trim();
	  if (message === "") return;
	  appendMessage(message, "outgoing");
	  chatInput.value = "";
	  scrollToBottom();
  
	  // Handle the user's selection
	  handleSelection(message);
	}
  
	// Append message to chatbox
	function appendMessage(message, type) {
	  const chat = document.createElement("li");
	  chat.classList.add("chat", type);
	  
	  const icon = document.createElement("span");
	  icon.classList.add("material-symbols-outlined");
	  icon.textContent = "smart_toy";
	  chat.appendChild(icon);
	  
	  const text = document.createElement("p");
	  text.textContent = message;
	  chat.appendChild(text);
	
	  chatbox.appendChild(chat);
	}
	
	
	// Scroll to the bottom of the chatbox
	function scrollToBottom() {
	  chatbox.scrollTop = chatbox.scrollHeight;
	}
  
	// Handle user's selection
	function handleSelection(selection) {
	  const responses = {
		"option1": "The qualifying CGPA for tech companies varies and is typically based on the company's requirements. However, a CGPA of around 7.0 and above is generally considered competitive for most tech placements.",
		"option2": "To improve your chances of getting placed in a tech company, focus on enhancing your technical skills(DSA), participating in coding competitions and hackathons, gaining relevant internships, and maintaining a good academic record.",
		"option3": "Subscribe to our website Campus Tapri for any updates",
		"option4": "To score more in exams, it's important to attend classes regularly, take effective notes, practice previous year question papers, create a study schedule, seek help from professors or tutors if needed, and stay organized.",
		"option5": "The timing of company visits for placements varies each year. However, companies typically start visiting for placements around July- August.",
		// Add more options and responses here
	  };
  
	  // Check if the selection is in the responses object
	  const response = responses[selection.toLowerCase()];
	  if (response) {
		setTimeout(() => {
		  appendMessage(response, "incoming");
		  scrollToBottom();
		}, 500);
	  } else {
		// Default response for non-option messages
		setTimeout(() => {
		  appendMessage("I'm a chatbot! 🤖", "incoming");
		  scrollToBottom();
		}, 500);
	  }
	}
  
	chatInput.addEventListener("keypress", function (e) {
	  if (e.key === "Enter") {
		const typedMessage = chatInput.value.toLowerCase();
		let response;
	
		// Define the predefined questions and answers
		const predefinedResponses = {
		  "hi": "Hi, How can I help you?",
		  "how are you?": "I am great, thanks for asking. ",
		  "who created you": "I am created by team Krishanyabhi ",
		  "what can I do for you": "I can answer questions for you. who csn select questions from the above list.",
		  "thank you": "Glad to help you.  Please feel free to ask anything.",
		  "goodbye": "Bye, See you again",
		  "bye": "Bye, See you again",
		  "i am feeling sad": "Sorry to hear that",
		  "what is your name": "I'm a chatbot! 🤖",
		  "who are you?": "I'm a chatbot! 🤖",
  
  
  
		// Add more predefined questions and answers here
		};
	
		// Check if the typed message matches any predefined question
		if (predefinedResponses.hasOwnProperty(typedMessage)) {
		  response = predefinedResponses[typedMessage];
		} else {
		  // If the typed message doesn't match any predefined question, provide a default response
		  response = "I'm sorry, I don't understand. Please try asking another question.";
		}
	
		// Append the typed question and response to the chatbox
		appendMessage(`${typedMessage}`, "outgoing");
		appendMessage(` ${response}`, "incoming");
		scrollToBottom();
		chatInput.value = ""; // Clear the chat input
	  }
	});
	
	
  
	function createButton(label, option) {
	  const button = document.createElement("button");
	  button.textContent = label;
	  button.classList.add("option-button"); // Add a class for styling
	  button.addEventListener("click", () => handleSelection(option));
	  return button;
	}
  
	setTimeout(() => {
	  appendMessage("Select an option:", "incoming");
	
	  const option1Button = document.createElement("button");
	  option1Button.textContent = "What is the qualifying CGPA for tech companies during placements?";
	  option1Button.style.textAlign = "justify";
	  option1Button.style.outline = "none"; 
	  option1Button.style.border = "0.5px solid #724ae8"; 
	  option1Button.style.padding = "10px";
	  option1Button.style.fontFamily = "Poppins, sans-serif";
	  option1Button.style.fontSize = "0.95rem"; 
	  option1Button.style.borderRadius = "5px";
	  option1Button.addEventListener("click", () => handleSelection("option1"));
	  chatbox.appendChild(option1Button);
	
	  chatbox.appendChild(document.createElement("br")); // Add a line break
	  
	//option 2
	  const option2Button = document.createElement("button");
	  option2Button.textContent = "How can I improve my chances of getting placed in a tech company?";
	  option2Button.style.textAlign = "justify";
	  option2Button.style.outline = "none"; 
	  option2Button.style.padding = "10px";
	  option2Button.style.border = "0.5px solid #724ae8"; 
	  option2Button.style.fontFamily = "Poppins, sans-serif";
	  option2Button.style.fontSize = "0.95rem"; 
	  option2Button.style.borderRadius = "5px";
	  option2Button.addEventListener("click", () => handleSelection("option2"));
	  chatbox.appendChild(option2Button);
	
	  chatbox.appendChild(document.createElement("br")); // Add a line break
	//option 3
	  const option3Button = document.createElement("button");
	  option3Button.textContent = "How can I stay updated with the latest opportunities ?";
	  option3Button.style.textAlign = "justify";
	  option3Button.style.outline = "none"; 
	  option3Button.style.border = "0.5px solid #724ae8"; 
	  option3Button.style.padding = "10px";
	  option3Button.style.fontFamily = "Poppins, sans-serif";
	  option3Button.style.fontSize = "0.95rem"; 
	  option3Button.style.borderRadius = "5px";
	  option3Button.addEventListener("click", () => handleSelection("option3"));
	  chatbox.appendChild(option3Button);
	
	  //option 4
	  const option4Button = document.createElement("button");
	  option4Button.textContent = "How can I score more in exams?";
	  option4Button.style.textAlign = "justify";
	  option4Button.style.outline = "none"; 
	  option4Button.style.border = "0.5px solid #724ae8"; 
	  option4Button.style.padding = "10px";
	  option4Button.style.fontFamily = "Poppins, sans-serif";
	  option4Button.style.fontSize = "0.95rem"; 
	  option4Button.style.borderRadius = "5px";
	  option4Button.addEventListener("click", () => handleSelection("option4"));
	  chatbox.appendChild(option4Button);
  
  
	  const option5Button = document.createElement("button");
	  option5Button.textContent = "When do companies start visiting for placements and internships?";
	  option5Button.style.textAlign = "justify";
	  option5Button.style.outline = "none"; 
	  option5Button.style.border = "0.5px solid #724ae8"; 
	  option5Button.style.padding = "10px";
	  option5Button.style.fontFamily = "Poppins, sans-serif";
	  option5Button.style.fontSize = "0.95rem"; 
	  option5Button.style.borderRadius = "5px";
	  option5Button.addEventListener("click", () => handleSelection("option5"));
	  chatbox.appendChild(option5Button);
  
  
  
	
	  scrollToBottom();
	}, 1000);
	
  
  
  });
  