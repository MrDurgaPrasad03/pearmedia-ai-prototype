// WORKING DEMO VERSION (NO API ERRORS)

export const enhancePrompt = async (input) => {
  return `High quality cinematic ${input}, ultra HD, dramatic lighting, professional photography`;
};

export const generateImage = async (prompt) => {
  return `https://picsum.photos/seed/${encodeURIComponent(prompt)}/400/300`;
};

export const analyzeImage = async () => {
  return "Objects detected: person, outdoor, nature, bright lighting, realistic style";
};