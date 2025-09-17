// Información personal y de contacto
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  contact: ContactInfo;
  photoUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

// Información sobre mí
export interface AboutInfo extends PersonalInfo {
  // Hereda toda la información personal
}