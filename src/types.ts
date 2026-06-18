export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  category: 'investor' | 'partner' | 'general';
  createdAt: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectComponent {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  theme: 'emerald' | 'amber' | 'blue';
}

export interface SimulatorState {
  hectares: number;
  fase: 1 | 2 | 3;
  derivativeFocus: string;
}
