export type Game = {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  typeDescription: string;
  technology: string;
  platform: string;
  demoGameAvailable: boolean;
  aspectRatio: string;
  technologyID: string;
  gameIdNumeric: number;
  jurisdictions: string[];
};

export type GamesResponse = {
  status: number;
  result: Game[];
  error_message: string;
};
