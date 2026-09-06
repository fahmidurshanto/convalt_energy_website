import { SceneConfig } from '@/types/scenes';

export const LANDING_SCENES: SceneConfig[] = [
  {
    id: 'hero',
    title: 'Powering a Sustainable Future',
    eyebrow: 'Convalt Energy',
    description: 'Pioneering clean energy solutions, solar manufacturing, and sustainable infrastructure.',
    startProgress: 0.0,
    endProgress: 0.2,
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
    startProgress: 0.2,
    endProgress: 0.4,
    camera: {
      position: [6, 3, 5],
      target: [0, 0, 0],
    },
    enabled: true,
  },
  {
    id: 'power',
    title: 'Utility-Scale Power Generation',
    eyebrow: 'Clean Energy Infrastructure',
    description: 'Developing and operating high-capacity renewable power plants to electrify communities and industries.',
    startProgress: 0.4,
    endProgress: 0.6,
    camera: {
      position: [-5, 4, 6],
      target: [0, 0, 0],
    },
    enabled: true,
  },
  {
    id: 'dataCenter',
    title: 'Green Data Center Solutions',
    eyebrow: 'Zero-Carbon Digital Economy',
    description: 'Next-generation hyper-scale data centers powered 100% by dedicated on-site solar and storage assets.',
    startProgress: 0.6,
    endProgress: 0.8,
    camera: {
      position: [0, 6, 7],
      target: [0, 0, 0],
    },
    enabled: true,
  },
  {
    id: 'recycling',
    title: 'Circular Solar Panel Recycling',
    eyebrow: 'Full Life-Cycle Sustainability',
    description: 'Closed-loop recovery systems reclaiming 95%+ of solar materials to eliminate e-waste.',
    startProgress: 0.8,
    endProgress: 1.0,
    camera: {
      position: [-6, -2, 5],
      target: [0, 0, 0],
    },
    enabled: true,
  },
];
