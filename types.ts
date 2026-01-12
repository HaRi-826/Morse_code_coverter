
export type InputType = 'text' | 'morse' | 'unknown';

export interface ConversionResult {
  input: string;
  output: string;
  detectedType: InputType;
  success: boolean;
  error?: string;
  timestamp: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  requestBody?: string;
  responseExample: string;
}
