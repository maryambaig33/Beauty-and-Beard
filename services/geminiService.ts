
import { GoogleGenAI, Part } from "@google/genai";
import { serviceCategories } from '../constants';

// FIX: Aligned with Gemini API guidelines by removing 'as string' type assertion for the API key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Utility to convert file to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = (error) => reject(error);
  });
};

export const getStyleSuggestion = async (prompt: string, image?: { base64: string; mimeType: string; }) => {
  try {
    const serviceList = serviceCategories.map(cat => 
        `\nCategory: ${cat.category}\n` + cat.items.map(item => `- ${item.name}: ${item.price}`).join('\n')
    ).join('\n');
    
    const fullPrompt = `You are an expert, friendly, and helpful AI stylist at 'The Beauty and The Beard Salon'. A client is asking for advice. 
    Based on their description and optional photo, suggest suitable hairstyles and services offered by the salon.
    Be encouraging and professional. Format your response clearly with headings for "Style Suggestion" and "Recommended Services".
    
    Client's Request: "${prompt}"

    Our services for context:
    ${serviceList}
    
    Your response:`;

    const model = 'gemini-2.5-flash';
    // FIX: Replaced 'any' with the specific 'Part' type from @google/genai for improved type safety and code clarity.
    const parts: Part[] = [{ text: fullPrompt }];

    if (image) {
      parts.unshift({
        inlineData: {
          mimeType: image.mimeType,
          data: image.base64,
        },
      });
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error getting style suggestion:", error);
    return "I'm sorry, I'm having a little trouble connecting right now. Please try again in a moment.";
  }
};
