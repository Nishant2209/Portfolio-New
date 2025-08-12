import { NextRequest, NextResponse } from 'next/server';
import { generateAIResponse } from '@/lib/ai/portfolio-ai';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting could be implemented here
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Limit message length to prevent abuse
    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }

    const response = await generateAIResponse(message);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error('API Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}