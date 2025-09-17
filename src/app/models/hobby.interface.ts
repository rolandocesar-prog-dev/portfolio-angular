export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'sports' | 'music' | 'technology' | 'learning' | 'other';
}

export interface HobbiesData {
  hobbies: Hobby[];
  quote?: {
    text: string;
    author: string;
  };
}