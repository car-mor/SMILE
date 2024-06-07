// src/services/translatorService.ts
import * as deepl from 'deepl-node';

const authKey = 'd3939cc8-c414-444c-8db9-fbebaf3232a5:fx'; // Reemplaza con tu clave de autenticación
const translator = new deepl.Translator(authKey);

export const translateText = async (text: string, targetLang: deepl.TargetLanguageCode) => {
  try {
    const result = await translator.translateText(text, null, targetLang);
    console.log(result.text);
    return result.text;
  } catch (error) {
    console.error('Error al traducir el texto:', error);
    throw error;
  }
};
