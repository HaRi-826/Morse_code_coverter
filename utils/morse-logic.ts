
import { MORSE_DICT, REVERSE_MORSE_DICT } from '../constants';
import { InputType, ConversionResult } from '../types';

/**
 * Detects if the string is likely Morse code or Plain Text.
 */
export const detectInputType = (input: string): InputType => {
  const trimmed = input.trim();
  if (!trimmed) return 'unknown';
  
  // Regex for Morse characters: dots, dashes, spaces, slashes
  const morseRegex = /^[.\-\s\/]+$/;
  if (morseRegex.test(trimmed)) {
    return 'morse';
  }
  return 'text';
};

/**
 * Converts text to Morse code.
 */
export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_DICT[char] || '?')
    .join(' ');
};

/**
 * Converts Morse code to text.
 */
export const morseToText = (morse: string): string => {
  return morse
    .split(' ')
    .map(code => {
      if (code === '/') return ' ';
      return REVERSE_MORSE_DICT[code] || '?';
    })
    .join('');
};

/**
 * Main translation handler.
 */
export const translate = (input: string): ConversionResult => {
  const type = detectInputType(input);
  const timestamp = new Date().toISOString();

  if (type === 'unknown') {
    return { input, output: '', detectedType: 'unknown', success: false, error: 'Empty input', timestamp };
  }

  try {
    const output = type === 'text' ? textToMorse(input) : morseToText(input);
    return {
      input,
      output,
      detectedType: type,
      success: true,
      timestamp
    };
  } catch (err) {
    return {
      input,
      output: '',
      detectedType: type,
      success: false,
      error: 'Conversion failed',
      timestamp
    };
  }
};

/**
 * Audio feedback logic
 */
export const playMorseAudio = async (morse: string) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const unit = 0.1; // seconds

  const playTone = (duration: number, startTime: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, startTime);
    
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
    gain.gain.linearRampToValueAtTime(0, startTime + duration - 0.01);
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  let time = audioContext.currentTime;

  for (const char of morse) {
    if (char === '.') {
      playTone(unit, time);
      time += unit * 2;
    } else if (char === '-') {
      playTone(unit * 3, time);
      time += unit * 4;
    } else if (char === ' ') {
      time += unit * 3;
    } else if (char === '/') {
      time += unit * 7;
    }
  }
};
