const eins = 'sk-vTNOEnOdtSba1UXGxS3CT';
const zwei = '3BlbkFJ5NslI6RD0I4C9z1reNdk'
const drei = eins+zwei;  
  
  // Call Text Completion API
  
  export async function call (prompt){
  
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${drei}`
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
  return response;
}