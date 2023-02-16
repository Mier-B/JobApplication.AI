


// Get the "Generate Application" button element
const generateBtn = document.getElementById('generate-btn');

// Add an event listener to the button
generateBtn.addEventListener('click', generateApplication);

// Generate Application Function

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
  
    // Generate prompt for Text Completion API
   /* const prompt = `Dear HR manager,
  
    My name is ${name} and I am ${age} years old. I recently completed my ${degree} degree and I'm eager to start my professional career.
  
    I believe that I would be a great fit for the ${position} position at ${company}. ${requirements}
  
    ${experience}
  
    Thank you for considering my application. I look forward to hearing from you soon.
  
    Sincerely,
    ${name}`;
  */

    const prompt = `Act as if you were me. Write me an profesional and long application to ${company}. Write it as if it was an E-mail. Start the text with Dear and then the name of the Company. I want to apply for the Position of a ${position}  The Requirement for the job are ${requirements} . My name is  ${name} I am ${age} years old and finsihed my Degree in ${degree}. ${experience}. 
    Make the Application very interesesting. Ende`;
    
    // Call Text Completion API
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'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'}`
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

    console.log(response);

  
   // Extract completed text from API response
  const data = await response.json();
  console.log(data);    
  //const completedText = data.choices[0].text.trim();
  const zw = data.choices[0].text.split("Dear");
  const completedText = "Dear " + zw[1];

  // Insert completed text into result container
  //const resultContainer = document.getElementById('result');
  const res = document.getElementById('application-text');
  res.value = completedText;
  //resultContainer.innerHTML = completedText;
  }
  