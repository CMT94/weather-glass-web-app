export interface SearchOption {
  country: string;
  lat: number;
  local_names: Record<string, unknown>;
  lon: number;
  name: string;
  state: string;
}
