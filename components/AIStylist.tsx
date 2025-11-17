
import React, { useState, useCallback } from 'react';
import { getStyleSuggestion, fileToBase64 } from '../services/geminiService';
import Section from './common/Section';

// Helper component for Markdown-like rendering
const FormattedResponse: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n');
    return (
        <div className="space-y-2 text-left">
            {lines.map((line, index) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                    return <h4 key={index} className="text-xl font-bold text-brand-gold mt-4">{line.slice(2, -2)}</h4>;
                }
                if (line.startsWith('* ')) {
                     return <p key={index} className="pl-4">{`• ${line.slice(2)}`}</p>;
                }
                return <p key={index}>{line}</p>;
            })}
        </div>
    );
};

const AIStylist: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!prompt) {
      setError('Please describe what you are looking for.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSuggestion('');

    let imagePayload;
    if (imageFile) {
        try {
            const base64 = await fileToBase64(imageFile);
            imagePayload = { base64, mimeType: imageFile.type };
        } catch (err) {
            setError('Failed to process image file.');
            setIsLoading(false);
            return;
        }
    }
    
    const result = await getStyleSuggestion(prompt, imagePayload);
    setSuggestion(result);
    setIsLoading(false);
  }, [prompt, imageFile]);

  return (
    <Section
      id="ai-stylist"
      title="AI Style Consultant"
      subtitle="Not sure what you want? Describe your vision or upload a photo, and let our AI stylist give you a personalized recommendation!"
      className="bg-gray-900"
    >
      <div className="max-w-3xl mx-auto bg-brand-dark p-8 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                Describe your current hair and what you're looking for:
              </label>
              <textarea
                id="prompt"
                rows={4}
                className="w-full bg-gray-800 border-gray-600 rounded-md p-3 text-white focus:ring-brand-gold focus:border-brand-gold"
                placeholder="e.g., 'I have long, straight hair and want a low-maintenance but stylish cut for summer.'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image-upload" className="block text-sm font-medium text-gray-300 mb-2">
                (Optional) Upload a photo of your hair:
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-brand-dark hover:file:bg-yellow-300"
              />
            </div>
            {imagePreview && (
              <div className="flex justify-center items-center">
                <img src={imagePreview} alt="Selected preview" className="h-32 w-32 object-cover rounded-md" />
              </div>
            )}
          </div>
          {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Thinking...' : 'Get Suggestion'}
            </button>
          </div>
        </form>
        {isLoading && (
          <div className="mt-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
            <p className="mt-4 text-gray-400">Our AI is crafting your look...</p>
          </div>
        )}
        {suggestion && !isLoading && (
          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4 text-center">Here's My Suggestion!</h3>
            <FormattedResponse text={suggestion} />
          </div>
        )}
      </div>
    </Section>
  );
};

export default AIStylist;
