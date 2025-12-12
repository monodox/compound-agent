interface ElevenLabsConfig {
  apiKey: string;
  baseUrl?: string;
}

interface VoiceSettings {
  stability: number;
  similarity_boost: number;
  style?: number;
  use_speaker_boost?: boolean;
}

interface TextToSpeechRequest {
  text: string;
  voice_id: string;
  voice_settings?: VoiceSettings;
  model_id?: string;
}

export class ElevenLabsClient {
  private config: ElevenLabsConfig;

  constructor(config: ElevenLabsConfig) {
    this.config = {
      baseUrl: 'https://api.elevenlabs.io/v1',
      ...config
    };
  }

  async textToSpeech(request: TextToSpeechRequest): Promise<ArrayBuffer | null> {
    try {
      const response = await fetch(`${this.config.baseUrl}/text-to-speech/${request.voice_id}`, {
        method: 'POST',
        headers: {
          'xi-api-key': this.config.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: request.text,
          voice_settings: request.voice_settings || {
            stability: 0.5,
            similarity_boost: 0.5
          },
          model_id: request.model_id || 'eleven_monolingual_v1'
        })
      });

      if (response.ok) {
        return await response.arrayBuffer();
      }
      return null;
    } catch (error) {
      console.error('ElevenLabs TTS error:', error);
      return null;
    }
  }

  async getVoices() {
    try {
      const response = await fetch(`${this.config.baseUrl}/voices`, {
        headers: {
          'xi-api-key': this.config.apiKey
        }
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('ElevenLabs voices error:', error);
      return null;
    }
  }

  async generateAlerts(message: string, voiceId: string = 'pNInz6obpgDQGcFmaJgB'): Promise<ArrayBuffer | null> {
    return this.textToSpeech({
      text: `Alert: ${message}`,
      voice_id: voiceId,
      voice_settings: {
        stability: 0.7,
        similarity_boost: 0.8,
        style: 0.2,
        use_speaker_boost: true
      }
    });
  }
}