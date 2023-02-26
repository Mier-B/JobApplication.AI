//@Author Mier Barsanjy



// Get the "Generate Application" button element
const generateBtn = document.getElementById('generate-btn');
// Add an event listener to the button
generateBtn.addEventListener('click', generateApplication);

// Generate Application Function

const dropdown = document.getElementById('down')       //document.querySelector('.dropdown');
  
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });

async function generateApplication(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const degree = document.getElementById('degree').value;
    const experience = document.getElementById('experience').value;
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const requirements = document.getElementById('requirements').value;
    const internships = document.getElementById('internships').value;
    const extra = document.getElementById('extra').value;
    const skills = document.getElementById('skills').value;
    const more = document.getElementById('more').value;
  
    // Generate prompt for Text Completion API
   
    const prompt = `Act as if you were me. Write me an profesional and long application to ${company}. Write it as if it was an E-mail. Start the text with Dear and then the name of the Company. I want to apply for the Position of a ${position}  The Requirement for the job are ${requirements} .  My name is  ${name} I am ${age} years old and finsihed my Degree in ${degree}. I also have the following qualifications: ${extra}.I have the following experience ${experience} and did the following internships ${internships}. I also have the following skills: ${skills}.
    Try to use all those information in the Application. Make the Application very interesesting. This is the adnvanced jobdescription: ${more} Ende`;
    
    // Call Text Completion API
   const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${''}`
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 1,
        max_tokens: 1105,
        n: 1,
        stop: ["Ende"],
        model: "text-davinci-003",  
      })
    });
//const response =problemlösung(prompt);
    console.log(response);

  
   // Extract completed text from API response
  const data = await response.json();
  console.log(data);    
  //const completedText = data.choices[0].text;
  const zw = data.choices[0].text.split("Dear");
 const completedText = "Dear " + zw[1];

  // Insert completed text into result container
  //const resultContainer = document.getElementById('result');
  const res = document.getElementById('application-text');
  res.value = completedText;
  //resultContainer.innerHTML = completedText;
  }
  
