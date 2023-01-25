const COUNTRIES_FULL = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};
export const COUNTRIES = {
    "AU": "Australia",
    "AT": "Austria",
    "BE": "Belgium",
    "BR": "Brazil",
    "BA": "Bosnia and Herzegovina",
    "CA": "Canada",
    "CZ": "Czechia",
    "DK": "Denmark",
    "GB": "United Kingdom",
    "GR": "Greece",
    "FI": "Finland",
    "FR": "France",
    "DE": "Germany",
    "HU": "Hungary",
    "IN": "India",
    "IL": "Israel",
    "IR": "Iran",
    "IT": "Italy",
    "JP": "Japan",
    "KR": "South Korea",
    "LT": "Lithuania",
    "NG": "Nigeria",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NO": "Norway",
    "PL": "Poland",
    "UA": "Ukraine",
    "SE": "Sweden",
    "TR": "Turkey",
    "TN": "Tunisia",
    "VN": "Viet Nam"
};

export const GENDERS = {x: "Neutral", f: "Female", m: "Male"}

export const SURNAMES = [
    {
        country: COUNTRIES.DE,
        romanized: 'todo',
        national: 'todo',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.AU,
        romanized: 'Charlotte',
        national: 'Charlotte',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AU,
        romanized: 'Amelia',
        national: 'Amelia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AU,
        romanized: 'Olivia',
        national: 'Olivia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AU,
        romanized: 'Mia',
        national: 'Mia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AU,
        romanized: 'Ava',
        national: 'Ava',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.AU,
        romanized: 'Oliver',
        national: 'Oliver',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AU,
        romanized: 'William',
        national: 'William',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AU,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AU,
        romanized: 'Jack',
        national: 'Jack',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AU,
        romanized: 'Henry',
        national: 'Henry',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.AT,
        romanized: 'Anna',
        national: 'Anna',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AT,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AT,
        romanized: 'Laura',
        national: 'Laura',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AT,
        romanized: 'Marie',
        national: 'Marie',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.AT,
        romanized: 'Lena',
        national: 'Lena',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.AT,
        romanized: 'Paul',
        national: 'Paul',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AT,
        romanized: 'David',
        national: 'David',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AT,
        romanized: 'Jakob',
        national: 'Jakob',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AT,
        romanized: 'Maximilian',
        national: 'Maximilian',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.AT,
        romanized: 'Felix',
        national: 'Felix',
        gender: GENDERS.m
    },


    {
        country: COUNTRIES.BE,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BE,
        romanized: 'Olivia',
        national: 'Olivia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BE,
        romanized: 'Louise',
        national: 'Louise',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BE,
        romanized: 'Mila',
        national: 'Mila',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BE,
        romanized: 'Alice',
        national: 'Alice',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.BE,
        romanized: 'Arthur',
        national: 'Arthur',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BE,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BE,
        romanized: 'Adam',
        national: 'Adam',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BE,
        romanized: 'Louis',
        national: 'Louis',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BE,
        romanized: 'Liam',
        national: 'Liam',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.BA,
        romanized: 'Sara',
        national: 'Sara',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BA,
        romanized: 'Amina',
        national: 'Amina',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BA,
        romanized: 'Merjem',
        national: 'Merjem',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BA,
        romanized: 'Esma',
        national: 'Esma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.BA,
        romanized: 'Asja',
        national: 'Asja',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.BA,
        romanized: 'Ahmed',
        national: 'Ahmed',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BA,
        romanized: 'Daris',
        national: 'Daris',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BA,
        romanized: 'Amar',
        national: 'Amar',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BA,
        romanized: 'Davud',
        national: 'Davud',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.BA,
        romanized: 'Džan',
        national: 'Džan',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.CA,
        romanized: 'Olivia',
        national: 'Olivia',
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Charlotte',
        national: 'Charlotte',
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Amelia',
        national: 'Amelia',
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Chloe',
        national: 'Chloe',
        gender: GENDERS.f
    },


    {
        country: COUNTRIES.CA,
        romanized: 'Liam',
        national: 'Liam',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CA,
        romanized: 'Lucas',
        national: 'Lucas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CA,
        romanized: 'Oliver',
        national: 'Oliver',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CA,
        romanized: 'Benjamin',
        national: 'Benjamin',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CA,
        romanized: 'Logan',
        national: 'Logan',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.CZ,
        romanized: 'Eliška',
        national: 'Eliška',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Tereza',
        national: 'Tereza',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Anna',
        national: 'Anna',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Adéla',
        national: 'Adéla',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Natálie',
        national: 'Natálie',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.CZ,
        romanized: 'Jakub',
        national: 'Jakub',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Jan',
        national: 'Jan',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Adam',
        national: 'Adam',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Tomáš',
        national: 'Tomáš',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.CZ,
        romanized: 'Matyáš',
        national: 'Matyáš',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.DK,
        romanized: 'Ida',
        national: 'Ida',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DK,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DK,
        romanized: 'Ella',
        national: 'Ella',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DK,
        romanized: 'Alma',
        national: 'Alma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DK,
        romanized: 'Sofia',
        national: 'Sofia',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.DK,
        romanized: 'William',
        national: 'William',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DK,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DK,
        romanized: 'Oscar',
        national: 'Oscar',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DK,
        romanized: 'Lucas',
        national: 'Lucas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DK,
        romanized: 'Victor',
        national: 'Victor',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.GB,
        romanized: 'Olivia',
        national: 'Olivia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.GB,
        romanized: 'Amelia',
        national: 'Amelia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.GB,
        romanized: 'Ava',
        national: 'Ava',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.GB,
        romanized: 'Isla',
        national: 'Isla',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.GB,
        romanized: 'Emily',
        national: 'Emily',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.GB,
        romanized: 'Oliver',
        national: 'Oliver',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GB,
        romanized: 'George',
        national: 'George',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Harry',
        national: 'Harry',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Jack',
        national: 'Jack',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.FI,
        romanized: 'Eevi',
        national: 'Eevi',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FI,
        romanized: 'Sofia',
        national: 'Sofia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FI,
        romanized: 'Venla',
        national: 'Venla',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FI,
        romanized: 'Ella',
        national: 'Ella',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FI,
        romanized: 'Aino',
        national: 'Aino',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.FI,
        romanized: 'Eeli',
        national: 'Eeli',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FI,
        romanized: 'Elias',
        national: 'Elias',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FI,
        romanized: 'Leo',
        national: 'Leo',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FI,
        romanized: 'Oliver',
        national: 'Oliver',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FI,
        romanized: 'Eino',
        national: 'Eino',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.FR,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FR,
        romanized: 'Jade',
        national: 'Jade',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FR,
        romanized: 'Louise',
        national: 'Louise',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FR,
        romanized: 'Alice',
        national: 'Alice',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.FR,
        romanized: 'Chloé',
        national: 'Chloé',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.FR,
        romanized: 'Gabriel',
        national: 'Gabriel',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FR,
        romanized: 'Raphaël',
        national: 'Raphaël',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FR,
        romanized: 'Léo',
        national: 'Léo',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FR,
        romanized: 'Louis',
        national: 'Louis',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.FR,
        romanized: 'Lucas',
        national: 'Lucas',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.DE,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DE,
        romanized: 'Mia',
        national: 'Mia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DE,
        romanized: 'Hannah',
        national: 'Hannah',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DE,
        romanized: 'Franziska',
        national: 'Franziska',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.DE,
        romanized: 'Julia',
        national: 'Julia',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.DE,
        romanized: 'Ben',
        national: 'Ben',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DE,
        romanized: 'Paul',
        national: 'Paul',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DE,
        romanized: 'Leon',
        national: 'Leon',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DE,
        romanized: 'Markus',
        national: 'Markus',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.DE,
        romanized: 'Christian',
        national: 'Christian',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.HU,
        romanized: 'Izabella',
        national: 'Izabella',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.HU,
        romanized: 'Zoé',
        national: 'Zoé',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.HU,
        romanized: 'Boglárka',
        national: 'Boglárka',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.HU,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.HU,
        romanized: 'Zselyke',
        national: 'Zselyke',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.HU,
        romanized: 'Bence',
        national: 'Bence',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.HU,
        romanized: 'Máté',
        national: 'Máté',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.HU,
        romanized: 'Dominik',
        national: 'Dominik',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.HU,
        romanized: 'Marcell',
        national: 'Marcell',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.HU,
        romanized: 'Levente',
        national: 'Levente',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.IL,
        romanized: 'Tamar',
        national: 'תמר',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IL,
        romanized: 'Noa',
        national: 'נועה',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IL,
        romanized: 'Avigail',
        national: 'אביגיל',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IL,
        romanized: 'Maya',
        national: 'מאיה',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IL,
        romanized: 'Yael',
        national: 'יעל',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.IL,
        romanized: 'Noam',
        national: 'נועם',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IL,
        romanized: 'David',
        national: 'דוד',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IL,
        romanized: 'Uri',
        national: 'אורי',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IL,
        romanized: 'Ariel',
        national: 'אריאל',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IL,
        romanized: 'Yosef',
        national: 'יוסף',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.IT,
        romanized: 'Sofia',
        national: 'Sofia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IT,
        romanized: 'Giulia',
        national: 'Giulia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IT,
        romanized: 'Aurora',
        national: 'Aurora',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IT,
        romanized: 'Alice',
        national: 'Alice',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IT,
        romanized: 'Ginevra',
        national: 'Ginevra',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.IT,
        romanized: 'Leonardo',
        national: 'Leonardo',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IT,
        romanized: 'Francesco',
        national: 'Francesco',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IT,
        romanized: 'Alessandro',
        national: 'Alessandro',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IT,
        romanized: 'Lorenzo',
        national: 'Lorenzo',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IT,
        romanized: 'Mattia',
        national: 'Mattia',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.LT,
        romanized: 'Lėja',
        national: 'Lėja',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.LT,
        romanized: 'Emilija',
        national: 'Emilija',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.LT,
        romanized: 'Liepa',
        national: 'Liepa',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.LT,
        romanized: 'Amelija',
        national: 'Amelija',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.LT,
        romanized: 'Gabija',
        national: 'Gabija',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.LT,
        romanized: 'Lukas',
        national: 'Lukas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.LT,
        romanized: 'Matas',
        national: 'Matas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.LT,
        romanized: 'Jokūbas',
        national: 'Jokūbas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.LT,
        romanized: 'Jonas',
        national: 'Jonas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.LT,
        romanized: 'Nojus',
        national: 'Nojus',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.NL,
        romanized: 'Julia',
        national: 'Julia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NL,
        romanized: 'Emma',
        national: 'Emma',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NL,
        romanized: 'Sophie',
        national: 'Sophie',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NL,
        romanized: 'Tess',
        national: 'Tess',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NL,
        romanized: 'Zoë',
        national: 'Zoë',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.NL,
        romanized: 'Lucas',
        national: 'Lucas',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NL,
        romanized: 'Levi',
        national: 'Levi',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NL,
        romanized: 'Finn',
        national: 'Finn',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NL,
        romanized: 'Sem',
        national: 'Sem',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NL,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.NZ,
        romanized: 'Kahurangi',
        national: 'Kahurangi',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Isla',
        national: 'Isla',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Olivia',
        national: 'Olivia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Amelia',
        national: 'Amelia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Anahera',
        national: 'Anahera',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.NZ,
        romanized: 'Oliver',
        national: 'Oliver',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Te Ariki',
        national: 'Te Ariki',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Tangaroa',
        national: 'Tangaroa',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NZ,
        romanized: 'Hunter',
        national: 'Hunter',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.NO,
        romanized: 'Norah',
        national: 'Norah',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NO,
        romanized: 'Frida',
        national: 'Frida',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NO,
        romanized: 'Ingrid',
        national: 'Ingrid',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NO,
        romanized: 'Sofie',
        national: 'Sofie',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NO,
        romanized: 'Maja',
        national: 'Maja',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.NO,
        romanized: 'Aksel',
        national: 'Aksel',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NO,
        romanized: 'Oskar',
        national: 'Oskar',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NO,
        romanized: 'Filip',
        national: 'Filip',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NO,
        romanized: 'Emil',
        national: 'Emil',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NO,
        romanized: 'Noah',
        national: 'Noah',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.PL,
        romanized: 'Zuzanna',
        national: 'Zuzanna',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.PL,
        romanized: 'Julia',
        national: 'Julia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.PL,
        romanized: 'Maja',
        national: 'Maja',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.PL,
        romanized: 'Zofia',
        national: 'Zofia',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.PL,
        romanized: 'Hanna',
        national: 'Hanna',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.PL,
        romanized: 'Antoni',
        national: 'Antoni',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.PL,
        romanized: 'Jakub',
        national: 'Jakub',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.PL,
        romanized: 'Jan',
        national: 'Jan',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.PL,
        romanized: 'Szymon',
        national: 'Szymon',
        gender: GENDERS.m
    }, {
        country: COUNTRIES.PL,
        romanized: 'Aleksander',
        national: 'Aleksander',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.TR,
        romanized: 'Zeynep',
        national: 'Zeynep',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.TR,
        romanized: 'Elif',
        national: 'Elif',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.TR,
        romanized: 'Defne',
        national: 'Defne',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.TR,
        romanized: 'Ebrar',
        national: 'Ebrar',
        gender: GENDERS.f
    }, {
        country: COUNTRIES.TR,
        romanized: 'Eylül',
        national: 'Eylül',
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.TR,
        romanized: 'Yusuf',
        national: 'Yusuf',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TR,
        romanized: 'Eymen',
        national: 'Eymen',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TR,
        romanized: 'Ömer',
        national: 'Ömer',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TR,
        romanized: 'Miraç',
        national: 'Miraç',
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TR,
        romanized: 'Asaf',
        national: 'Asaf',
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.NG,
        romanized: "Damilola", national: "Oluwadamilola",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NG,
        romanized: "Funmilayo", national: "Oluwafunmilayo",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NG,
        romanized: "Bukola", national: "Oluwabukola",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NG,
        romanized: "Tomilola", national: "Oluwatomilola",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.NG,
        romanized: "Toyin", national: "Oluwatoyin",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.NG,
        romanized: "Adebayo", national: "Oluwadamilare",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.NG,
        romanized: "Oluwasegun", national: "Oluwasegun",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NG,
        romanized: "Abdulrasheed", national: "Abdulrasheed",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NG,
        romanized: "Mohammed", national: "Mohammed",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.NG,
        romanized: "Tunde", national: "Tunde",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.IN,
        romanized: "Sarika", national: "सारिका",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IN,
        omanized: "Anjali", national: "अंजलि",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IN,
        romanized: "Devika", national: "देविका",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IN,
        romanized: "Ankita", national: "अंकिता",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.IN,
        romanized: "Shruti", national: "श्रुति",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.IN,
        romanized: "Amit", national: "अमित",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IN,
        romanized: "Abhishek", national: "अभिषेक",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IN,
        romanized: "Vikas", national: "विकास",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IN,
        romanized: "Ajay", national: "अजय",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.IN,
        romanized: "Suresh", national: "सुरेश",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.KR,
        romanized: "Seo-yoon", national: "서윤",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.KR,
        romanized: "Min-jun", national: "민준",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.KR,
        romanized: "Jae-won", national: "재원",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.KR,
        romanized: "Ji-hoon", national: "지훈",
        gender: GENDERS.m
    }, {
        country: COUNTRIES.KR,
        romanized: "Ki-hong", national: "기홍",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.KR,
        romanized: "Ae-rin", national: "애린",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.KR,
        romanized: "Min-ji", national: "민지",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.KR,
        romanized: "Ji-eun", national: "지은",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.KR,
        romanized: "Hye-rin", national: "혜린",
        gender: GENDERS.f
    }, {
        country: COUNTRIES.KR,
        romanized: "Eun-ji", national: "은지",
        gender: GENDERS.f
    },


    {
        country: COUNTRIES.UA,
        romanized: "Ivan", national: "Іван",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.UA,
        romanized: "Vladimir", national: "Володимир",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.UA,
        romanized: "Sergey", national: "Сергій",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.UA,
        romanized: "Oleg", national: "Олег",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.UA,
        romanized: "Andrey", national: "Андрій",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.UA,
        romanized: "Olga", national: "Ольга",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.UA,
        romanized: "Natalia", national: "Наталя",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.UA,
        romanized: "Tatiana", national: "Татяна",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.UA,
        romanized: "Maria", national: "Марія",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.UA,
        romanized: "Ludmila", national: "Людмила",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.JP,
        romanized: "Aya", national: "あや",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.JP,
        romanized: "Haruka", national: "はるか",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.JP,
        romanized: "Kazumi", national: "かずみ",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.JP,
        romanized: "Aiko", national: "あいこ",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.JP,
        romanized: "Miyuki", national: "みゆき",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.JP,
        romanized: "Takashi", national: "たかし",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.JP,
        romanized: "Tomohiro", national: "ともひろ",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.JP,
        romanized: "Takayuki", national: "たかゆき",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.JP,
        romanized: "Shinichi", national: "しんいち",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.JP,
        romanized: "Hiroshi", national: "ひろし",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.BR,
        romanized: "Lucas", national: "Lucas",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.BR,
        romanized: "Gabriel", national: "Gabriel",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.BR,
        romanized: "Pedro", national: "Pedro",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.BR,
        romanized: "Guilherme", national: "Guilherme",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.BR,
        romanized: "Rafael", national: "Rafael",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.BR,
        romanized: "Isabella", national: "Isabella",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.BR,
        romanized: "Manuela", national: "Manuela",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.BR,
        romanized: "Maria", national: "Maria",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.BR,
        romanized: "Beatriz", national: "Beatriz",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.BR,
        romanized: "Gabriela", national: "Gabriela",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.GR,
        romanized: "Nikolas", national: "Νικόλας",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GR,
        romanized: "Athanasios", national: "Αθανάσιος",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GR,
        romanized: "Konstantinos", national: "Κωνσταντίνος",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GR,
        romanized: "Dimitrios", national: "Δημήτριος",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.GR,
        romanized: "Georgios", national: "Γεώργιος",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.GR,
        romanized: "Maria", national: "Μαρία",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.GR,
        romanized: "Eleni", national: "Ελένη",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.GR,
        romanized: "Vasiliki", national: "Βασιλική",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.GR,
        romanized: "Ioanna", national: "Ιωάννα",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.GR,
        romanized: "Katerina", national: "Κατερίνα",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.IR,
        romanized: "Mohammed", national: "محمد",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.IR,
        romanized: "Ali", national: "علی",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.IR,
        romanized: "Hossein", national: "حسین",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.IR,
        romanized: "Amir", national: "امیر",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.IR,
        romanized: "Mehdi", national: "مهدی",
        gender: GENDERS.m
    },

    {
        country: COUNTRIES.IR,
        romanized: "Fatimah", national: "فاطمه",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.IR,
        romanized: "Zahra", national: "زهرا",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.IR,
        romanized: "Afsaneh", national: "افسانه",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.IR,
        romanized: "Sara", national: "سارا",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.IR,
        romanized: "Narges", national: "نرگس",
        gender: GENDERS.f
    },


    {
        country: COUNTRIES.TN,
        romanized: "Mohammed", national: "محمد",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TN,
        romanized: "Ali", national: "علي",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TN,
        romanized: "Houssem", national: "حسام",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TN,
        romanized: "Amine", national: "أمين",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TN,
        romanized: "Yassine", national: "ياسين",
        gender: GENDERS.m
    },
    {
        country: COUNTRIES.TN,
        romanized: "Fatma", national: "فاطمة",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.TN,
        romanized: "Soumaya", national: "سمية",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.TN,
        romanized: "Hajer", national: "هاجر",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.TN,
        romanized: "Marwa", national: "مروة",
        gender: GENDERS.f
    },
    {
        country: COUNTRIES.TN,
        romanized: "Asma", national: "عصمة",
        gender: GENDERS.f
    },

    {
        country: COUNTRIES.VN,
        romanized: "Nguyen", national: "Nguyễn",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Trần", national: "Trần",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Lê", national: "Lê",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Phạm", national: "Phạm",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Hoàng", national: "Hoàng",
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.VN,
        romanized: "Nguyen", national: "Nguyễn",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Trần", national: "Trần",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Lê", national: "Lê",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Phạm", national: "Phạm",
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.VN,
        romanized: "Hoàng", national: "Hoàng",
        gender: GENDERS.x
    }
]

export const LASTNAMES = [
    {
        country: COUNTRIES.AU,
        romanized: 'Smith',
        national: 'Smith',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AU,
        romanized: 'Jones',
        national: 'Jones',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AU,
        romanized: 'Williams',
        national: 'Williams',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AU,
        romanized: 'Brown',
        national: 'Brown',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AU,
        romanized: 'Taylor',
        national: 'Taylor',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.AT,
        romanized: 'Müller',
        national: 'Müller',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AT,
        romanized: 'Hofer',
        national: 'Hofer',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AT,
        romanized: 'Bauer',
        national: 'Bauer',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AT,
        romanized: 'Wagner',
        national: 'Wagner',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.AT,
        romanized: 'Pichler',
        national: 'Pichler',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.BE,
        romanized: 'Peeters',
        national: 'Peeters',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BE,
        romanized: 'Jacobs',
        national: 'Jacobs',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BE,
        romanized: 'De Smet',
        national: 'De Smet',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BE,
        romanized: 'Maes',
        national: 'Maes',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BE,
        romanized: 'Van der Heyden',
        national: 'Van der Heyden',
        gender: GENDERS.x
    },


    {
        country: COUNTRIES.BR,
        romanized: 'Silva',
        national: 'Silva',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BR,
        romanized: 'Santos',
        national: 'Santos',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BR,
        romanized: 'Lima',
        national: 'Lima',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BR,
        romanized: 'Oliveira',
        national: 'Oliveira',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BR,
        romanized: 'Rodrigues',
        national: 'Rodrigues',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BA,
        romanized: 'Hadžić',
        national: 'Hadžić',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BA,
        romanized: 'Kovačević',
        national: 'Kovačević',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BA,
        romanized: 'Čović',
        national: 'Čović',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BA,
        romanized: 'Kapić',
        national: 'Kapić',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.BA,
        romanized: 'Ćosić',
        national: 'Ćosić',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Smith',
        national: 'Smith',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Johnson',
        national: 'Johnson',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Williams',
        national: 'Williams',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Jones',
        national: 'Jones',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CA,
        romanized: 'Brown',
        national: 'Brown',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CZ,
        romanized: 'Novák',
        national: 'Novák',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CZ,
        romanized: 'Svoboda',
        national: 'Svoboda',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CZ,
        romanized: 'Novotný',
        national: 'Novotný',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CZ,
        romanized: 'Dvořák',
        national: 'Dvořák',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.CZ,
        romanized: 'Černý',
        national: 'Černý',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.DK,
        romanized: 'Jensen',
        national: 'Jensen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DK,
        romanized: 'Nielsen',
        national: 'Nielsen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DK,
        romanized: 'Hansen',
        national: 'Hansen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DK,
        romanized: 'Pedersen',
        national: 'Pedersen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DK,
        romanized: 'Andersen',
        national: 'Andersen',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.GB,
        romanized: 'Smith',
        national: 'Smith',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Jones',
        national: 'Jones',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Williams',
        national: 'Williams',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Brown',
        national: 'Brown',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GB,
        romanized: 'Taylor',
        national: 'Taylor',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GR,
        romanized: 'Papadopoulos',
        national: 'Παπαδόπουλος',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GR,
        romanized: 'Konstantinou',
        national: 'Κωνσταντίνου',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GR,
        romanized: 'Papadakis',
        national: 'Παπαδάκης',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GR,
        romanized: 'Georgiou',
        national: 'Γεωργίου',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.GR,
        romanized: 'Christou',
        national: 'Χρήστου',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.FI,
        romanized: 'Korhonen',
        national: 'Korhonen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FI,
        romanized: 'Virtanen',
        national: 'Virtanen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FI,
        romanized: 'Nieminen',
        national: 'Nieminen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FI,
        romanized: 'Mäkinen',
        national: 'Mäkinen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FI,
        romanized: 'Hämäläinen',
        national: 'Hämäläinen',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FR,
        romanized: 'Martin',
        national: 'Martin',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FR,
        romanized: 'Bernard',
        national: 'Bernard',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FR,
        romanized: 'Thomas',
        national: 'Thomas',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FR,
        romanized: 'Petit',
        national: 'Petit',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.FR,
        romanized: 'Dubois',
        national: 'Dubois',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.DE,
        romanized: 'Müller',
        national: 'Müller',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DE,
        romanized: 'Schmidt',
        national: 'Schmidt',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DE,
        romanized: 'Schneider',
        national: 'Schneider',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DE,
        romanized: 'Fischer',
        national: 'Fischer',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.DE,
        romanized: 'Weber',
        national: 'Weber',
        gender: GENDERS.x
    },

    {
        country: COUNTRIES.HU,
        romanized: 'Nagy',
        national: 'Nagy',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.HU,
        romanized: 'Kovács',
        national: 'Kovács',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.HU,
        romanized: 'Horváth',
        national: 'Horváth',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.HU,
        romanized: 'Szabó',
        national: 'Szabó',
        gender: GENDERS.x
    },
    {
        country: COUNTRIES.HU,
        romanized: 'Tóth',
        national: 'Tóth',
        gender: GENDERS.x
    },


]

// Continue with generation from india - vietnam