
// Add missing import for ApiEndpoint type
import { ApiEndpoint } from './types';

export const MORSE_DICT: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/', '.': '.-.-.-', ',': '--..--',
  '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
  ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
  '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
  '@': '.--.-.'
};

export const REVERSE_MORSE_DICT: Record<string, string> = Object.entries(MORSE_DICT).reduce(
  (acc, [key, val]) => ({ ...acc, [val]: key }),
  {}
);

// Fix: Use the imported ApiEndpoint type
export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    method: 'POST',
    path: '/api/v1/encode',
    description: 'Convert plain text to Morse code.',
    requestBody: '{ "text": "SOS" }',
    responseExample: '{ "success": true, "data": "... --- ...", "type": "text" }'
  },
  {
    method: 'POST',
    path: '/api/v1/decode',
    description: 'Convert Morse code to plain text.',
    requestBody: '{ "morse": "... --- ..." }',
    responseExample: '{ "success": true, "data": "SOS", "type": "morse" }'
  },
  {
    method: 'POST',
    path: '/api/v1/translate',
    description: 'Automatically detect input type and translate accordingly.',
    requestBody: '{ "input": "HELLO" } or { "input": ".... . .-.. .-.. ---" }',
    responseExample: '{ "success": true, "data": ".... . .-.. .-.. ---", "detected": "text" }'
  }
];
