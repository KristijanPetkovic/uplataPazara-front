export interface Kurir {
  kurirId: number;
  trgovacId: number;
  ime: string;
  prezime: string;
  jmbg: string;
  datumAutorizacije: Date;
  status: string;
  drzava: string;
  grad: string;
  adresa: string;
  telefon: string;
  mail: string;
  datumUnosa: Date;
  korisnikUnosa: number;
}
