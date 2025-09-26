
const travels = [
  {
    id: 1,
    name: "Vacanza a Parigi",
    city: "Parigi",
    startDate: "2025-04-10",
    endDate: "2025-04-17",
    travelers: [
      {
        id: 1,
        name: "Luca",
        surname: "Bianchi",
        email: "luca.bianchi@email.com",
        phone: "+39 345 1234567",
        fiscalCode: "BNCLCU90A01H501U"
      },
      {
        id: 2,
        name: "Maria",
        surname: "Rossi",
        email: "maria.rossi@email.com",
        phone: "+39 333 7654321",
        fiscalCode: "RSSMRA85C45F205X"
      },
      {
        id: 3,
        name: "Giulia",
        surname: "Verdi",
        email: "giulia.verdi@email.com",
        phone: "+39 347 1122334",
        fiscalCode: "VRDGLL92E22H501T"
      },
      {
        id: 4,
        name: "Marco",
        surname: "Esposito",
        email: "marco.esposito@email.com",
        phone: "+39 328 5566778",
        fiscalCode: "SPSMRC88D12F205Y"
      },
      {
        id: 5,
        name: "Elisa",
        surname: "Romano",
        email: "elisa.romano@email.com",
        phone: "+39 320 9988776",
        fiscalCode: "RMNLSA93B55H501K"
      }
    ]
  },
  {
    id: 2,
    name: "Tour a Tokyo",
    city: "Tokyo",
    startDate: "2025-06-01",
    endDate: "2025-06-12",
    travelers: [
      {
        id: 1,
        name: "Andrea",
        surname: "Gallo",
        email: "andrea.gallo@email.com",
        phone: "+39 340 1239876",
        fiscalCode: "GLLNDR91H22F205Z"
      },
      {
        id: 2,
        name: "Sofia",
        surname: "Colombo",
        email: "sofia.colombo@email.com",
        phone: "+39 333 2224455",
        fiscalCode: "CLMSFO94A01H501P"
      },
      {
        id: 3,
        name: "Davide",
        surname: "Costa",
        email: "davide.costa@email.com",
        phone: "+39 329 4433221",
        fiscalCode: "CSTDVD89M18H501V"
      },
      {
        id: 4,
        name: "Chiara",
        surname: "Fontana",
        email: "chiara.fontana@email.com",
        phone: "+39 348 6677889",
        fiscalCode: "FNTCHR95L09H501Q"
      },
      {
        id: 5,
        name: "Francesco",
        surname: "Greco",
        email: "francesco.greco@email.com",
        phone: "+39 345 8899771",
        fiscalCode: "GRCFNC87T20F205W"
      }
    ]
  },
  {
    id: 3,
    name: "Weekend a Barcellona",
    city: "Barcellona",
    startDate: "2025-03-15",
    endDate: "2025-03-18",
    travelers: [
      {
        id: 1,
        name: "Marta",
        surname: "De Luca",
        email: "marta.deluca@email.com",
        phone: "+39 331 4455667",
        fiscalCode: "DLUMRT96D45F205R"
      },
      {
        id: 2,
        name: "Paolo",
        surname: "Ferrari",
        email: "paolo.ferrari@email.com",
        phone: "+39 349 5566778",
        fiscalCode: "FRRPLA90B12H501N"
      },
      {
        id: 3,
        name: "Ilaria",
        surname: "Marino",
        email: "ilaria.marino@email.com",
        phone: "+39 320 1122445",
        fiscalCode: "MRNILR92C09H501L"
      },
      {
        id: 4,
        name: "Simone",
        surname: "Santoro",
        email: "simone.santoro@email.com",
        phone: "+39 333 7788991",
        fiscalCode: "SNTSMN89E11H501S"
      },
      {
        id: 5,
        name: "Laura",
        surname: "Gatti",
        email: "laura.gatti@email.com",
        phone: "+39 347 2233445",
        fiscalCode: "GTTLRU97L20H501O"
      },
      {
        id: 6,
        name: "Fabio",
        surname: "Ferrari",
        email: "fabio.ferrari@email.com",
        phone: "+39 347 2233445",
        fiscalCode: "FRRFBA97L20H501O"
      },
      {
        id: 7,
        name: "Melania",
        surname: "Picone",
        email: "melania.picone@email.com",
        phone: "+39 347 2233445",
        fiscalCode: "PCNMLN97L20H501O"
      },
      {
        id: 8,
        name: "Marco",
        surname: "Bacci",
        email: "marco.bacci@email.com",
        phone: "+39 347 2233445",
        fiscalCode: "BCCMRC97L20H501O"
      }
    ]
  },
  {
    id: 4,
    name: "Crociera nel Mediterraneo",
    city: "Genova",
    startDate: "2025-07-05",
    endDate: "2025-07-15",
    travelers: [
      {
        id: 1,
        name: "Valentina",
        surname: "Conti",
        email: "valentina.conti@email.com",
        phone: "+39 345 7788990",
        fiscalCode: "CNTVLN91P11F205X"
      },
      {
        id: 2,
        name: "Stefano",
        surname: "Moretti",
        email: "stefano.moretti@email.com",
        phone: "+39 331 5566772",
        fiscalCode: "MRTSFN86M05H501G"
      },
      {
        id: 3,
        name: "Claudia",
        surname: "Ricci",
        email: "claudia.ricci@email.com",
        phone: "+39 339 2244668",
        fiscalCode: "RCCCLD93H30H501T"
      },
      {
        id: 4,
        name: "Alessandro",
        surname: "Marchetti",
        email: "alessandro.marchetti@email.com",
        phone: "+39 348 5566443",
        fiscalCode: "MRCLSN88F02H501R"
      },
      {
        id: 5,
        name: "Serena",
        surname: "De Angelis",
        email: "serena.deangelis@email.com",
        phone: "+39 320 6677881",
        fiscalCode: "DNLSRN95D18H501H"
      }
    ]
  },
  {
    id: 5,
    name: "Safari in Kenya",
    city: "Nairobi",
    startDate: "2025-09-01",
    endDate: "2025-09-10",
    travelers: [
      {
        id: 1,
        name: "Riccardo",
        surname: "Pellegrini",
        email: "riccardo.pellegrini@email.com",
        phone: "+39 345 3344556",
        fiscalCode: "PLLRCR87M03H501Z"
      },
      {
        id: 2,
        name: "Federica",
        surname: "Vitale",
        email: "federica.vitale@email.com",
        phone: "+39 329 8899772",
        fiscalCode: "VTLFRC94T22H501M"
      },
      {
        id: 3,
        name: "Matteo",
        surname: "De Santis",
        email: "matteo.desantis@email.com",
        phone: "+39 347 6677882",
        fiscalCode: "DSNMTT90H15H501V"
      },
      {
        id: 4,
        name: "Alessia",
        surname: "Lombardi",
        email: "alessia.lombardi@email.com",
        phone: "+39 333 4455663",
        fiscalCode: "LMBLSS96B28H501C"
      },
      {
        id: 5,
        name: "Giorgio",
        surname: "Parisi",
        email: "giorgio.parisi@email.com",
        phone: "+39 320 7788994",
        fiscalCode: "PRSGRG85L01F205D"
      }
    ]
  }
];

export default travels;

