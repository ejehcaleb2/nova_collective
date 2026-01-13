
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Challenge {
  id: number;
  title: string;
  objective: string;
  explanation: string;
  visuals: {
    type: 'image' | 'video';
    url: string;
    caption: string;
  }[];
  reflections?: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}
