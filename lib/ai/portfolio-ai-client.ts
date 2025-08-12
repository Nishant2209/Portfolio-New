// Client-side AI service that uses server-side API for better security
export async function generateAIResponseClient(message: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return data.response || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Client AI Error:', error);
    throw error;
  }
}

// Test server-side Gemini AI connection
export async function testAIConnectionClient(): Promise<boolean> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: "Hello, please respond with 'AI connection successful'" }),
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.response?.includes('successful') || false;
  } catch (error) {
    console.error('Gemini AI Connection Test Failed:', error);
    return false;
  }
}