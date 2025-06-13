export type Encounter = {
  location_area: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[]
};
export type VersionDetail = {
  encounter_details: [];
  max_chance: number;
  version: {
    name: string;
    url: string;
  }
}
