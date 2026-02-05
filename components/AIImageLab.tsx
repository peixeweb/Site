
import React, { useState } from 'react';
// Correct import according to guidelines
import {GoogleGenAI} from "@google/genai";
import { Sparkles, Trash2, ImageIcon, Loader2, Wand2 } from 'lucide-react';

const AIImageLab: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [prompt, setPrompt] = useState('Remova o copo de cerveja da foto');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        setBase64Image(base64);
        setResultImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!base64Image) return;

    setLoading(true);
    setError(null);
    try {
      // Create a new instance right before use to ensure the most up-to-date API key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Image,
                mimeType: mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        // Iterate through all parts to find the image part, as recommended
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setResultImage(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("Não foi possível processar a imagem. Tente um comando diferente.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao processar imagem. Verifique sua conexão ou tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Tecnologia Peixeweb</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001B3D] mb-4">
              Creative <span className="text-cyan-500">AI Lab</span>
            </h2>
            <p className="text-slate-600">
              Demonstração da nossa expertise em IA: Remova objetos indesejados de suas fotos em segundos.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[32px] overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Upload Area */}
                <div className="space-y-4">
                  <div className="aspect-square bg-slate-200 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border-2 border-dashed border-slate-300">
                    {base64Image ? (
                      <img 
                        src={`data:${mimeType};base64,${base64Image}`} 
                        className="w-full h-full object-cover" 
                        alt="Original" 
                      />
                    ) : (
                      <>
                        <ImageIcon size={48} className="text-slate-400 mb-4" />
                        <p className="text-slate-500 font-medium">Faça upload da foto</p>
                      </>
                    )}
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={handleFileUpload}
                      accept="image/*"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Comando para a IA</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="flex-1 bg-slate-50 border-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-4 py-2 text-sm"
                        placeholder="Ex: Remova o copo de cerveja..."
                      />
                      <button 
                        onClick={() => setPrompt('')}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Result Area */}
                <div className="flex flex-col">
                  <div className="aspect-square bg-[#001B3D] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                    {loading ? (
                      <div className="text-center p-6">
                        <Loader2 size={48} className="text-cyan-400 animate-spin mx-auto mb-4" />
                        <p className="text-white font-medium animate-pulse">
                          Removendo distrações...
                        </p>
                        <p className="text-slate-400 text-xs mt-2">Nossa IA está limpando sua imagem</p>
                      </div>
                    ) : resultImage ? (
                      <img src={resultImage} className="w-full h-full object-cover" alt="Resultado" />
                    ) : error ? (
                      <div className="text-center p-6">
                        <p className="text-red-400 text-sm mb-2">{error}</p>
                        <Sparkles size={24} className="text-slate-600 mx-auto" />
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <Sparkles size={48} className="text-slate-700 mb-4" />
                        <p className="text-slate-500 font-medium">O resultado aparecerá aqui</p>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    disabled={!base64Image || loading}
                    onClick={processImage}
                    className={`mt-4 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      !base64Image || loading 
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                        : 'bg-cyan-500 hover:bg-cyan-400 text-[#001B3D] shadow-lg shadow-cyan-500/20'
                    }`}
                  >
                    <Wand2 size={20} />
                    {loading ? 'Processando...' : 'Aplicar Mágica de IA'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImageLab;
