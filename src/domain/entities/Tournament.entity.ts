export class TournamentEntity {
  private readonly id: string;
  private readonly isOpen: boolean;
  public title: string;
  public description: string;
  public prizePool: string;
  public date: Date;
  public registrationLimit: number;
  public isIndividual: boolean;
  public teamSize: number;
  public rules: string;
  public modality: string;

  constructor(
    id: string,
    title: string,
    description: string,
    prizePool: string,
    isOpen: boolean,
    date: Date,
    registrationLimit: number,
    isIndividual: boolean,
    teamSize: number,
    rules: string,
    modality: string
  ) {
    this.id = id;
    this.isOpen = isOpen;
    this.title = title;
    this.description = description;
    this.prizePool = prizePool;
    this.date = date;
    this.isIndividual = isIndividual;
    this.teamSize = teamSize;
    this.rules = rules;
    this.modality = modality;
    this.registrationLimit = registrationLimit;
  }

  get _id() {
    return this.id;
  }

  get _isOpen() {
    return this.isOpen;
  }
}
