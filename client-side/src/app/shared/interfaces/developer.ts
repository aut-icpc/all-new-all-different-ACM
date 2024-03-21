export type developerRole = 'Frontend' | 'Backend' | 'Devops';

export interface Developer {
  profileImage: string;
  name: string;
  role: developerRole[];
  telegramUrl: string;
  email: string;
}
