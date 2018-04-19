 export class GeoIP {
    IP: string;
   // hostname: string;
    City: string;
    // region: string;
    Country: string;
    //loc: string;
    //org: string;

    constructor(ip?: string, city?: string, country?: string) {
        this.IP = ip;
        this.City = city;
        this.Country = country;
    }
  }
