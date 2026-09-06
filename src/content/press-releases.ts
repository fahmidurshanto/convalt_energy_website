// PLACEHOLDER — replace with client-supplied press release data

export interface PressRelease {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const PRESS_RELEASES_DATA: PressRelease[] = [
  {
    slug: 'convalt-announces-solar-expansion',
    title: 'Convalt Energy Announces Expansion of Domestic Solar Manufacturing Campus',
    date: '2026-08-15',
    summary: 'Expanding manufacturing capacity to accelerate clean energy supply chains in the United States.',
    content: 'Convalt Energy today announced a major investment round expanding its flagship solar module manufacturing facility. The expansion is projected to increase annual domestic output by 1.5 Gigawatts.',
  },
  {
    slug: 'zero-carbon-data-center-partnership',
    title: 'Convalt Partners with Tech Leaders for Zero-Carbon Cloud Infrastructure',
    date: '2026-06-20',
    summary: 'Deploying dedicated solar microgrids for next-generation AI computing nodes.',
    content: 'Convalt Energy has signed strategic agreements to power hyperscale data centers using dedicated on-site solar generation and battery storage facilities.',
  },
];
