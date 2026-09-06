// PLACEHOLDER — replace with client-supplied project data

export interface Project {
  slug: string;
  title: string;
  category: 'Solar Manufacturing' | 'Power Generation' | 'Data Centers' | 'Recycling';
  location: string;
  capacity: string;
  status: 'Operational' | 'Under Development' | 'Planned';
  description: string;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'watertown-solar-factory',
    title: 'Watertown Solar Manufacturing Facility',
    category: 'Solar Manufacturing',
    location: 'Watertown, NY, USA',
    capacity: '1.2 GW Annual Output',
    status: 'Under Development',
    description: 'State-of-the-art domestic solar module manufacturing hub producing high-efficiency ingot, wafer, cell, and module products.',
    highlights: [
      'Over 300 clean energy manufacturing jobs created',
      'Advanced automation and robotics integration',
      '100% renewable electricity powered facility',
    ],
  },
  {
    slug: 'beacon-power-plant',
    title: 'Beacon Renewable Energy Utility Station',
    category: 'Power Generation',
    location: 'Southwest US Region',
    capacity: '500 MW Storage & Solar',
    status: 'Operational',
    description: 'Utility-scale solar power generation facility combined with long-duration battery storage serving regional power grids.',
    highlights: [
      'Powers over 120,000 residential homes annually',
      'Integrated high-capacity grid stabilization unit',
      'Zero greenhouse gas emissions during generation',
    ],
  },
  {
    slug: 'zero-carbon-data-hub',
    title: 'Apex Zero-Carbon Data Hub',
    category: 'Data Centers',
    location: 'Northeast US Region',
    capacity: '100 MW IT Load',
    status: 'Planned',
    description: 'Hyper-scale computing facility co-located with dedicated solar energy supply to guarantee 100% clean uptime for cloud and AI workloads.',
    highlights: [
      'Direct solar-to-chip microgrid architecture',
      'Advanced liquid immersion cooling technology',
      'Net-zero operational carbon footprint',
    ],
  },
];
