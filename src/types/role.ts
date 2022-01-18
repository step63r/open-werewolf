const ROLE = {
  WereWolf: 'WereWolf',
  FortuneTeller: 'FortuneTeller',
  Medium: 'Medium',
  Hunter: 'Hunter',
  Maniac: 'Maniac',
  Villager: 'Villager',
} as const;

export type ROLE = typeof ROLE[keyof typeof ROLE];
