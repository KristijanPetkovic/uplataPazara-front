export interface Uplata {
  uplataId: number;
  kurirId: number;
  racunPrimaoca: string;
  nazivUplatioca: string;
  gradUplatioca: string;
  adresaUplatioca: string;
  datumTransakcije: Date;
  iznosUplate: number;
  iznosProvizije: number;
  ukupnaUplata: number;
  datumUnosa: Date;
  korisnikUnosa: number;
}