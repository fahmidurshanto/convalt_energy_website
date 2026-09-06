import { SceneConfig } from '@/types/scenes';

export const LANDING_SCENES: SceneConfig[] = [
  {
    id: 'hero',
    title: 'Powering a Sustainable Future',
    eyebrow: 'Convalt Energy',
    description: 'Pioneering clean energy solutions, solar manufacturing, and sustainable infrastructure.',
    startProgress: 0.0,
    endProgress: 0.3,
    camera: {
      position: [0, 0, 8],
      target: [0, 0, 0],
    },
    enabled: true,
  },
  {
    id: 'solar',
    title: 'Advanced Solar Manufacturing',
    eyebrow: 'Clean Tech Innovation',
    description: 'Domestic production of high-efficiency solar panels and renewable components.',
    startProgress: 0.3,
    endProgress: 0.6,
    camera: {
      position: [6, 3, 5],
      target: [0, 0, 0],
    },
    enabled: true,
  },
];
