# sk: CustomerDetails

## Pseudocode

```

Generate data from https://www.generatedata.com

Read the customer_details.json file
initialize data in it to a variable, customerObj
customerObj will be an array of objects

loop through the customerObj
    loop through each objects of customerObj
        checking if any key of current object == "pk"
            add email of current object to the suffix of pk

```

## Raw JSON

```
[
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Axel",
	  "lastName": "Contreras",
	  "email": "Etiam@facilisisloremtristique.com",
	  "phoneNumber": "(010061) 09231",
	  "address": "5476 Arcu. St.",
	  "addressState": "West Lothian",
	  "addressCity": "Livingston",
	  "addressPostcode": "OV61 3IV",
	  "signUpDate": "2021-01-30T16:55:54-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Ulla",
	  "lastName": "Blair",
	  "email": "nec.luctus.felis@atarcu.net",
	  "phoneNumber": "0500 253259",
	  "address": "8002 Vulputate, Street",
	  "addressState": "SO",
	  "addressCity": "Yeovil",
	  "addressPostcode": "OT4 8DM",
	  "signUpDate": "2021-05-12T13:29:16-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Brynn",
	  "lastName": "Rhodes",
	  "email": "natoque.penatibus@sitametdiam.co.uk",
	  "phoneNumber": "07624 957996",
	  "address": "Ap #741-6868 Ut Road",
	  "addressState": "Huntingdonshire",
	  "addressCity": "St. Neots",
	  "addressPostcode": "SB9Q 2RZ",
	  "signUpDate": "2021-04-21T12:56:58-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Geoffrey",
	  "lastName": "Glover",
	  "email": "odio@bibendumDonecfelis.ca",
	  "phoneNumber": "0800 317 3651",
	  "address": "986-8481 Tempus, St.",
	  "addressState": "HE",
	  "addressCity": "Kington",
	  "addressPostcode": "Y6 8HR",
	  "signUpDate": "2021-02-21T05:46:05-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Buckminster",
	  "lastName": "Drake",
	  "email": "pede.sagittis@cursusaenim.com",
	  "phoneNumber": "070 4277 7563",
	  "address": "9802 Felis Road",
	  "addressState": "RO",
	  "addressCity": "Kelso",
	  "addressPostcode": "BT8A 5BL",
	  "signUpDate": "2021-05-30T00:52:19-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Serina",
	  "lastName": "Alexander",
	  "email": "risus.at.fringilla@sit.edu",
	  "phoneNumber": "055 7488 1749",
	  "address": "Ap #336-6503 Arcu Avenue",
	  "addressState": "Monmouthshire",
	  "addressCity": "Cwmbran",
	  "addressPostcode": "H9 0IX",
	  "signUpDate": "2021-06-06T07:08:39-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Clinton",
	  "lastName": "Santiago",
	  "email": "venenatis.lacus.Etiam@purusgravidasagittis.org",
	  "phoneNumber": "(0118) 357 9844",
	  "address": "5502 Etiam Ave",
	  "addressState": "RO",
	  "addressCity": "Dingwall",
	  "addressPostcode": "P0 7AT",
	  "signUpDate": "2021-04-21T21:43:57-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Hilary",
	  "lastName": "Hill",
	  "email": "pulvinar.arcu@est.com",
	  "phoneNumber": "0890 314 7827",
	  "address": "Ap #650-3716 Non Ave",
	  "addressState": "WE",
	  "addressCity": "Kirkby Lonsdale",
	  "addressPostcode": "VX55 0SM",
	  "signUpDate": "2021-01-08T22:42:35-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Merritt",
	  "lastName": "Alvarado",
	  "email": "lobortis@justoeuarcu.ca",
	  "phoneNumber": "070 9666 4395",
	  "address": "1202 Aliquam Av.",
	  "addressState": "Denbighshire",
	  "addressCity": "Llangollen",
	  "addressPostcode": "OA95 0IO",
	  "signUpDate": "2021-04-09T12:44:27-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Althea",
	  "lastName": "Preston",
	  "email": "auctor.ullamcorper.nisl@metusfacilisislorem.ca",
	  "phoneNumber": "(019383) 83160",
	  "address": "479-8592 Duis Street",
	  "addressState": "Stirlingshire",
	  "addressCity": "Falkirk",
	  "addressPostcode": "W9M 7DJ",
	  "signUpDate": "2021-05-16T13:59:34-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Amanda",
	  "lastName": "Guerrero",
	  "email": "amet.luctus.vulputate@Innecorci.edu",
	  "phoneNumber": "(0141) 260 6213",
	  "address": "P.O. Box 648, 8143 Massa. Ave",
	  "addressState": "ML",
	  "addressCity": "Edinburgh",
	  "addressPostcode": "R7R 7GH",
	  "signUpDate": "2021-04-15T08:42:50-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Bert",
	  "lastName": "Marshall",
	  "email": "enim.diam.vel@eratnonummyultricies.ca",
	  "phoneNumber": "0845 46 46",
	  "address": "Ap #706-1357 Dictum. St.",
	  "addressState": "BE",
	  "addressCity": "Coldstream",
	  "addressPostcode": "Q9 0UK",
	  "signUpDate": "2021-05-14T07:02:01-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Brady",
	  "lastName": "Skinner",
	  "email": "Donec.vitae@Aliquam.net",
	  "phoneNumber": "056 9463 5661",
	  "address": "Ap #597-9861 Nec Avenue",
	  "addressState": "Westmorland",
	  "addressCity": "Kirkby Lonsdale",
	  "addressPostcode": "XT1W 7DW",
	  "signUpDate": "2021-03-31T05:09:46-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Emma",
	  "lastName": "Reese",
	  "email": "augue@lacusUt.net",
	  "phoneNumber": "0845 210 2728",
	  "address": "1776 Congue Avenue",
	  "addressState": "Kinross-shire",
	  "addressCity": "Kinross",
	  "addressPostcode": "EA94 5GA",
	  "signUpDate": "2021-04-11T17:25:35-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Oleg",
	  "lastName": "Swanson",
	  "email": "torquent@magnaSedeu.net",
	  "phoneNumber": "(01758) 490095",
	  "address": "Ap #342-1611 Convallis St.",
	  "addressState": "Hampshire",
	  "addressCity": "Basingstoke",
	  "addressPostcode": "NI2K 7SO",
	  "signUpDate": "2021-01-27T12:57:53-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Justin",
	  "lastName": "Conrad",
	  "email": "fermentum@porttitor.org",
	  "phoneNumber": "0500 784744",
	  "address": "239-3639 Duis Av.",
	  "addressState": "Kincardineshire",
	  "addressCity": "Inverbervie",
	  "addressPostcode": "WZ8 1RL",
	  "signUpDate": "2021-01-23T11:11:55-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Jamalia",
	  "lastName": "Schwartz",
	  "email": "malesuada.malesuada.Integer@auctorodioa.ca",
	  "phoneNumber": "(016977) 8059",
	  "address": "869-7683 Mattis Rd.",
	  "addressState": "Shropshire",
	  "addressCity": "Market Drayton",
	  "addressPostcode": "PA1B 5UE",
	  "signUpDate": "2021-06-17T16:20:08-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Alvin",
	  "lastName": "Gutierrez",
	  "email": "vulputate@litoratorquentper.co.uk",
	  "phoneNumber": "07129 316049",
	  "address": "Ap #191-7810 Dolor Rd.",
	  "addressState": "Northamptonshire",
	  "addressCity": "Peterborough",
	  "addressPostcode": "EQ3 8UO",
	  "signUpDate": "2021-06-09T06:45:53-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Quintessa",
	  "lastName": "Dillard",
	  "email": "turpis@enimCurabiturmassa.edu",
	  "phoneNumber": "(0161) 529 0142",
	  "address": "Ap #794-5391 Lectus Rd.",
	  "addressState": "Berkshire",
	  "addressCity": "Abingdon",
	  "addressPostcode": "Q30 4WL",
	  "signUpDate": "2021-03-26T04:40:58-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Joseph",
	  "lastName": "Edwards",
	  "email": "erat.neque.non@nunc.org",
	  "phoneNumber": "070 0813 5606",
	  "address": "Ap #479-6168 Congue. Ave",
	  "addressState": "Fife",
	  "addressCity": "Cowdenbeath",
	  "addressPostcode": "N3D 7JD",
	  "signUpDate": "2021-03-15T13:16:38-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Roth",
	  "lastName": "Bright",
	  "email": "natoque.penatibus@enimEtiamgravida.co.uk",
	  "phoneNumber": "0845 46 47",
	  "address": "6011 Nunc Rd.",
	  "addressState": "NB",
	  "addressCity": "Berwick-upon-Tweed",
	  "addressPostcode": "ER86 4YQ",
	  "signUpDate": "2021-02-19T03:42:19-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Fredericka",
	  "lastName": "Dixon",
	  "email": "lorem@ipsumsodalespurus.net",
	  "phoneNumber": "(0119) 564 3720",
	  "address": "187-2364 Praesent Ave",
	  "addressState": "DF",
	  "addressCity": "Sanquhar",
	  "addressPostcode": "B0 7JU",
	  "signUpDate": "2021-02-28T19:48:53-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Jenette",
	  "lastName": "Valentine",
	  "email": "hendrerit.a.arcu@ametrisusDonec.edu",
	  "phoneNumber": "(01778) 610723",
	  "address": "963 Consequat St.",
	  "addressState": "ST",
	  "addressCity": "Stoke-on-Trent",
	  "addressPostcode": "W39 1AL",
	  "signUpDate": "2021-01-18T10:12:17-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Kellie",
	  "lastName": "Riley",
	  "email": "Suspendisse@Aliquam.org",
	  "phoneNumber": "0800 1111",
	  "address": "Ap #937-439 Enim Rd.",
	  "addressState": "Fife",
	  "addressCity": "Kirkcaldy",
	  "addressPostcode": "JH3 1TN",
	  "signUpDate": "2021-04-13T05:06:03-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Emma",
	  "lastName": "Vincent",
	  "email": "imperdiet.ullamcorper.Duis@Aliquamgravidamauris.org",
	  "phoneNumber": "0339 371 9196",
	  "address": "Ap #751-493 Est. Av.",
	  "addressState": "KR",
	  "addressCity": "Milnathort",
	  "addressPostcode": "B9Q 4UB",
	  "signUpDate": "2021-05-18T22:54:21-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Chancellor",
	  "lastName": "Hodges",
	  "email": "Cum@utpharetrased.ca",
	  "phoneNumber": "07204 288490",
	  "address": "P.O. Box 266, 3299 Nunc Ave",
	  "addressState": "ST",
	  "addressCity": "Lichfield",
	  "addressPostcode": "W6L 6PN",
	  "signUpDate": "2021-04-26T21:36:31-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Idona",
	  "lastName": "Tanner",
	  "email": "eros@natoquepenatibuset.com",
	  "phoneNumber": "(027) 9606 1769",
	  "address": "1776 Aliquam Rd.",
	  "addressState": "Wiltshire",
	  "addressCity": "Chippenham",
	  "addressPostcode": "PK87 1QO",
	  "signUpDate": "2021-02-20T03:20:24-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Tatiana",
	  "lastName": "Banks",
	  "email": "cursus.in@etmagnisdis.co.uk",
	  "phoneNumber": "0500 581746",
	  "address": "P.O. Box 657, 545 Aenean St.",
	  "addressState": "AN",
	  "addressCity": "Arbroath",
	  "addressPostcode": "D20 3TM",
	  "signUpDate": "2021-02-09T03:42:40-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Elizabeth",
	  "lastName": "Holt",
	  "email": "nunc.interdum@odioEtiamligula.edu",
	  "phoneNumber": "0800 471476",
	  "address": "Ap #529-3248 Ornare. Street",
	  "addressState": "SO",
	  "addressCity": "Wells",
	  "addressPostcode": "AM9W 7SZ",
	  "signUpDate": "2021-01-25T23:01:24-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Igor",
	  "lastName": "Daniels",
	  "email": "dapibus@arcu.co.uk",
	  "phoneNumber": "055 4441 3812",
	  "address": "Ap #289-5978 Dolor Avenue",
	  "addressState": "NT",
	  "addressCity": "Wellingborough",
	  "addressPostcode": "UV8Q 6ZE",
	  "signUpDate": "2021-02-04T00:29:29-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Kessie",
	  "lastName": "Dudley",
	  "email": "sodales.nisi@dictum.edu",
	  "phoneNumber": "(01757) 784737",
	  "address": "Ap #585-4394 Fusce Street",
	  "addressState": "AY",
	  "addressCity": "Kilwinning",
	  "addressPostcode": "A06 0TZ",
	  "signUpDate": "2021-05-03T21:24:45-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Stacey",
	  "lastName": "Farley",
	  "email": "dis.parturient.montes@semperNam.co.uk",
	  "phoneNumber": "(01342) 94625",
	  "address": "Ap #877-1098 Dolor. Street",
	  "addressState": "Nairnshire",
	  "addressCity": "Ferness",
	  "addressPostcode": "A6P 1IW",
	  "signUpDate": "2021-03-08T13:30:17-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Xaviera",
	  "lastName": "Finch",
	  "email": "tortor.dictum.eu@ametmassa.edu",
	  "phoneNumber": "0500 726846",
	  "address": "7195 Fusce Avenue",
	  "addressState": "Nottinghamshire",
	  "addressCity": "Retford",
	  "addressPostcode": "VR98 7OW",
	  "signUpDate": "2021-03-11T23:41:28-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Dane",
	  "lastName": "Ellison",
	  "email": "congue.elit.sed@enimcommodohendrerit.net",
	  "phoneNumber": "0800 310890",
	  "address": "P.O. Box 362, 6369 Bibendum Ave",
	  "addressState": "RA",
	  "addressCity": "Rhayader",
	  "addressPostcode": "DY9W 0MB",
	  "signUpDate": "2021-04-26T14:57:33-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Barclay",
	  "lastName": "Graves",
	  "email": "egestas@iaculis.org",
	  "phoneNumber": "0386 979 5456",
	  "address": "Ap #917-5893 Phasellus St.",
	  "addressState": "Surrey",
	  "addressCity": "Brixton",
	  "addressPostcode": "J0 3JX",
	  "signUpDate": "2021-06-01T23:00:26-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Austin",
	  "lastName": "Weiss",
	  "email": "ornare.egestas.ligula@egestaslaciniaSed.org",
	  "phoneNumber": "(01563) 40196",
	  "address": "P.O. Box 280, 7645 Penatibus St.",
	  "addressState": "HR",
	  "addressCity": "Hatfield",
	  "addressPostcode": "F5 7OT",
	  "signUpDate": "2021-03-02T18:49:50-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Quamar",
	  "lastName": "Davis",
	  "email": "vestibulum.lorem@duisemperet.org",
	  "phoneNumber": "0500 176559",
	  "address": "7373 Rhoncus. Street",
	  "addressState": "Buteshire",
	  "addressCity": "Rothesay",
	  "addressPostcode": "Z0L 1QX",
	  "signUpDate": "2021-06-02T21:47:11-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Hu",
	  "lastName": "Heath",
	  "email": "dapibus.quam@risusNullaeget.net",
	  "phoneNumber": "0800 825373",
	  "address": "482-1539 Vulputate Ave",
	  "addressState": "Morayshire",
	  "addressCity": "Rothes",
	  "addressPostcode": "RT9 4MP",
	  "signUpDate": "2021-04-05T12:33:47-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Dalton",
	  "lastName": "Franklin",
	  "email": "nunc.risus.varius@Aliquamauctor.com",
	  "phoneNumber": "(016977) 5696",
	  "address": "740-5143 Interdum St.",
	  "addressState": "DB",
	  "addressCity": "Glossop",
	  "addressPostcode": "L89 8PM",
	  "signUpDate": "2021-03-30T04:02:15-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Cooper",
	  "lastName": "Mccullough",
	  "email": "Curabitur.ut.odio@tempus.org",
	  "phoneNumber": "(025) 7563 0189",
	  "address": "Ap #830-5183 Aliquet. St.",
	  "addressState": "RO",
	  "addressCity": "Invergordon",
	  "addressPostcode": "NR5L 1TY",
	  "signUpDate": "2021-05-10T06:11:52-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Zeus",
	  "lastName": "Kelley",
	  "email": "adipiscing.Mauris.molestie@acfacilisisfacilisis.org",
	  "phoneNumber": "(0121) 776 2600",
	  "address": "P.O. Box 368, 2485 Fermentum Rd.",
	  "addressState": "IN",
	  "addressCity": "Portree",
	  "addressPostcode": "DC6N 9JO",
	  "signUpDate": "2021-04-03T05:02:05-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Oren",
	  "lastName": "Guerrero",
	  "email": "ac.fermentum@lobortisquama.org",
	  "phoneNumber": "0907 791 2747",
	  "address": "Ap #353-5193 Neque Rd.",
	  "addressState": "Dorset",
	  "addressCity": "Weymouth",
	  "addressPostcode": "C59 1LG",
	  "signUpDate": "2021-02-27T11:49:38-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Inez",
	  "lastName": "Ramsey",
	  "email": "pharetra@utsem.edu",
	  "phoneNumber": "(010345) 35232",
	  "address": "300-5463 Libero Avenue",
	  "addressState": "ST",
	  "addressCity": "Wolverhampton",
	  "addressPostcode": "U7M 7UA",
	  "signUpDate": "2021-05-14T18:59:15-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Claudia",
	  "lastName": "Salas",
	  "email": "Pellentesque.ultricies.dignissim@acorci.com",
	  "phoneNumber": "0822 141 5643",
	  "address": "757-7574 Vestibulum St.",
	  "addressState": "Selkirkshire",
	  "addressCity": "Selkirk",
	  "addressPostcode": "JY64 5UQ",
	  "signUpDate": "2021-06-20T09:11:46-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Cailin",
	  "lastName": "Walls",
	  "email": "velit.Sed@quamCurabitur.net",
	  "phoneNumber": "0872 576 5999",
	  "address": "9298 Dui Ave",
	  "addressState": "Bedfordshire",
	  "addressCity": "Biggleswade",
	  "addressPostcode": "F33 2YQ",
	  "signUpDate": "2021-02-07T10:31:03-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Flynn",
	  "lastName": "Green",
	  "email": "quam.Curabitur@semmollisdui.ca",
	  "phoneNumber": "(024) 2630 5794",
	  "address": "5538 Metus Av.",
	  "addressState": "Selkirkshire",
	  "addressCity": "Galashiels",
	  "addressPostcode": "J1L 0UI",
	  "signUpDate": "2021-02-15T06:54:39-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Diana",
	  "lastName": "Gilmore",
	  "email": "natoque.penatibus.et@Phasellusornare.co.uk",
	  "phoneNumber": "0845 46 45",
	  "address": "Ap #879-7171 Luctus. St.",
	  "addressState": "RA",
	  "addressCity": "Knighton",
	  "addressPostcode": "BG37 8JF",
	  "signUpDate": "2021-03-22T21:33:18-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Carlos",
	  "lastName": "Dickerson",
	  "email": "luctus.et@idantedictum.org",
	  "phoneNumber": "(0118) 533 6688",
	  "address": "P.O. Box 618, 6130 Tristique Rd.",
	  "addressState": "AB",
	  "addressCity": "Inverurie",
	  "addressPostcode": "P9X 9BB",
	  "signUpDate": "2021-01-19T07:56:39-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Bevis",
	  "lastName": "Cash",
	  "email": "nec.euismod.in@natoquepenatibus.ca",
	  "phoneNumber": "(01647) 02337",
	  "address": "737-9014 At, Rd.",
	  "addressState": "SF",
	  "addressCity": "Haverhill",
	  "addressPostcode": "Z4 6HS",
	  "signUpDate": "2021-05-14T06:19:54-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Christine",
	  "lastName": "Zimmerman",
	  "email": "rutrum.eu.ultrices@ProinultricesDuis.ca",
	  "phoneNumber": "0500 199597",
	  "address": "Ap #376-9796 Non, Road",
	  "addressState": "Sussex",
	  "addressCity": "Eastbourne",
	  "addressPostcode": "X26 8KP",
	  "signUpDate": "2021-06-15T07:01:33-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Erin",
	  "lastName": "Malone",
	  "email": "Donec.sollicitudin.adipiscing@In.net",
	  "phoneNumber": "(016026) 98202",
	  "address": "777-7037 Scelerisque St.",
	  "addressState": "Westmorland",
	  "addressCity": "Kirkby Lonsdale",
	  "addressPostcode": "D02 4YX",
	  "signUpDate": "2021-04-30T03:42:23-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Samuel",
	  "lastName": "Whitehead",
	  "email": "porttitor.eros@Naminterdum.org",
	  "phoneNumber": "07088 989854",
	  "address": "1746 Dictum Ave",
	  "addressState": "Renfrewshire",
	  "addressCity": "Paisley",
	  "addressPostcode": "PQ5U 3ZB",
	  "signUpDate": "2021-02-21T05:44:17-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Idola",
	  "lastName": "Cross",
	  "email": "penatibus.et@Maurisvestibulumneque.edu",
	  "phoneNumber": "(013647) 24728",
	  "address": "727 Tempor Street",
	  "addressState": "Berwickshire",
	  "addressCity": "Greenlaw",
	  "addressPostcode": "AZ4 6HB",
	  "signUpDate": "2021-03-11T15:41:57-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Silas",
	  "lastName": "Hodges",
	  "email": "Mauris@elit.ca",
	  "phoneNumber": "0800 017 2903",
	  "address": "Ap #266-2398 Habitant Road",
	  "addressState": "Inverness-shire",
	  "addressCity": "Inverness",
	  "addressPostcode": "N2 9FJ",
	  "signUpDate": "2021-01-16T01:10:59-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Clark",
	  "lastName": "Ware",
	  "email": "Curabitur@tellus.org",
	  "phoneNumber": "07624 013769",
	  "address": "4677 Curae; Avenue",
	  "addressState": "Kent",
	  "addressCity": "Folkestone",
	  "addressPostcode": "S9 2OB",
	  "signUpDate": "2021-01-01T06:54:47-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Holmes",
	  "lastName": "Soto",
	  "email": "a@malesuadaiderat.co.uk",
	  "phoneNumber": "056 1728 3142",
	  "address": "371-8730 Gravida. Rd.",
	  "addressState": "ML",
	  "addressCity": "Musselburgh",
	  "addressPostcode": "EI31 0IQ",
	  "signUpDate": "2021-01-28T04:12:05-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Owen",
	  "lastName": "Floyd",
	  "email": "aliquet@cursus.com",
	  "phoneNumber": "0865 771 7250",
	  "address": "Ap #405-3774 Luctus Street",
	  "addressState": "Dunbartonshire",
	  "addressCity": "Dumbarton",
	  "addressPostcode": "JR63 5HX",
	  "signUpDate": "2021-01-10T01:55:05-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Daphne",
	  "lastName": "Juarez",
	  "email": "viverra.Maecenas@velit.edu",
	  "phoneNumber": "0914 658 7416",
	  "address": "9387 Et, Rd.",
	  "addressState": "LE",
	  "addressCity": "Hinckley",
	  "addressPostcode": "L5G 2OO",
	  "signUpDate": "2021-05-04T04:59:58-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Anjolie",
	  "lastName": "Townsend",
	  "email": "lorem.ut@Suspendisse.co.uk",
	  "phoneNumber": "0313 004 0543",
	  "address": "9265 Sociis St.",
	  "addressState": "Perthshire",
	  "addressCity": "Rattray",
	  "addressPostcode": "P78 9MA",
	  "signUpDate": "2021-02-20T07:19:39-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Nero",
	  "lastName": "Padilla",
	  "email": "vitae.semper.egestas@egestasFuscealiquet.ca",
	  "phoneNumber": "0500 447685",
	  "address": "9196 Fames Rd.",
	  "addressState": "Brecknockshire",
	  "addressCity": "Builth Wells",
	  "addressPostcode": "FF6 5LC",
	  "signUpDate": "2021-05-14T07:57:47-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Martin",
	  "lastName": "Mcdowell",
	  "email": "Mauris.molestie.pharetra@hendreritidante.com",
	  "phoneNumber": "0800 1111",
	  "address": "677-7069 In Avenue",
	  "addressState": "WI",
	  "addressCity": "Whithorn",
	  "addressPostcode": "N5E 5OO",
	  "signUpDate": "2021-02-26T20:23:38-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Orlando",
	  "lastName": "Davidson",
	  "email": "risus.Donec@sed.edu",
	  "phoneNumber": "(01051) 442648",
	  "address": "Ap #826-2252 Nunc Rd.",
	  "addressState": "DF",
	  "addressCity": "Dumfries",
	  "addressPostcode": "AD7 6OM",
	  "signUpDate": "2021-03-22T20:31:25-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Knox",
	  "lastName": "Fischer",
	  "email": "Aenean.massa.Integer@Pellentesqueultriciesdignissim.com",
	  "phoneNumber": "0837 397 5659",
	  "address": "P.O. Box 134, 7878 Maecenas Av.",
	  "addressState": "Glamorgan",
	  "addressCity": "Barry",
	  "addressPostcode": "I1Z 5QT",
	  "signUpDate": "2021-06-28T13:35:08-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Brock",
	  "lastName": "Everett",
	  "email": "sem.mollis@consectetuermaurisid.edu",
	  "phoneNumber": "0800 1111",
	  "address": "513-7435 Sed Rd.",
	  "addressState": "OX",
	  "addressCity": "Banbury",
	  "addressPostcode": "B5K 2ED",
	  "signUpDate": "2021-05-22T06:52:23-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Riley",
	  "lastName": "Oneil",
	  "email": "Morbi.sit@Duiscursusdiam.net",
	  "phoneNumber": "(01692) 77224",
	  "address": "Ap #735-2745 Ipsum Rd.",
	  "addressState": "Glamorgan",
	  "addressCity": "Cardiff",
	  "addressPostcode": "Z1P 6PA",
	  "signUpDate": "2021-05-04T23:10:06-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Norman",
	  "lastName": "Burke",
	  "email": "dolor@rhoncus.org",
	  "phoneNumber": "0800 201 1687",
	  "address": "538-6626 Mauris Rd.",
	  "addressState": "RO",
	  "addressCity": "Stornaway",
	  "addressPostcode": "FY1I 1SU",
	  "signUpDate": "2021-06-17T11:30:13-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Sawyer",
	  "lastName": "Walter",
	  "email": "Maecenas@Namligula.org",
	  "phoneNumber": "(01630) 08502",
	  "address": "P.O. Box 986, 592 Nullam Street",
	  "addressState": "CM",
	  "addressCity": "St. Clears",
	  "addressPostcode": "F2T 2WB",
	  "signUpDate": "2021-06-03T06:17:31-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Kim",
	  "lastName": "Simon",
	  "email": "inceptos.hymenaeos@arcuAliquam.org",
	  "phoneNumber": "055 0607 0853",
	  "address": "Ap #308-3628 Semper Av.",
	  "addressState": "Anglesey",
	  "addressCity": "Beaumaris",
	  "addressPostcode": "B60 9AP",
	  "signUpDate": "2021-06-13T10:26:29-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Addison",
	  "lastName": "Gamble",
	  "email": "arcu@placeratvelit.com",
	  "phoneNumber": "07267 698895",
	  "address": "Ap #225-5495 Enim. Rd.",
	  "addressState": "Nairnshire",
	  "addressCity": "Auldearn",
	  "addressPostcode": "Y87 0VH",
	  "signUpDate": "2021-06-23T00:39:03-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Fleur",
	  "lastName": "Levy",
	  "email": "nunc@nuncrisusvarius.co.uk",
	  "phoneNumber": "0800 796 4502",
	  "address": "806-1632 Integer Rd.",
	  "addressState": "MO",
	  "addressCity": "Fochabers",
	  "addressPostcode": "AS9 1FO",
	  "signUpDate": "2021-05-26T02:13:37-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Dante",
	  "lastName": "Dejesus",
	  "email": "varius@eu.edu",
	  "phoneNumber": "0800 1111",
	  "address": "297-6545 Mus. Road",
	  "addressState": "Norfolk",
	  "addressCity": "Cromer",
	  "addressPostcode": "L5R 4YH",
	  "signUpDate": "2021-05-19T02:57:04-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Alice",
	  "lastName": "Peterson",
	  "email": "lobortis.risus@idmagna.ca",
	  "phoneNumber": "07624 660430",
	  "address": "Ap #476-6992 Parturient St.",
	  "addressState": "DF",
	  "addressCity": "Moffat",
	  "addressPostcode": "QR8 0RA",
	  "signUpDate": "2021-05-22T10:32:19-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Nayda",
	  "lastName": "Foreman",
	  "email": "cursus@dignissim.org",
	  "phoneNumber": "0500 087640",
	  "address": "Ap #484-4638 Ultrices. Rd.",
	  "addressState": "DN",
	  "addressCity": "Clydebank",
	  "addressPostcode": "OG73 9AD",
	  "signUpDate": "2021-01-21T17:40:23-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Danielle",
	  "lastName": "Massey",
	  "email": "Donec.nibh.enim@placerataugueSed.com",
	  "phoneNumber": "(0110) 709 8612",
	  "address": "P.O. Box 670, 5713 Adipiscing Ave",
	  "addressState": "RF",
	  "addressCity": "Greenock",
	  "addressPostcode": "M8 9TP",
	  "signUpDate": "2021-01-26T06:01:40-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Hall",
	  "lastName": "Wade",
	  "email": "suscipit@felisegetvarius.org",
	  "phoneNumber": "0936 876 2695",
	  "address": "Ap #542-6484 Gravida Av.",
	  "addressState": "NF",
	  "addressCity": "Hunstanton",
	  "addressPostcode": "X5M 9KA",
	  "signUpDate": "2021-03-28T17:36:50-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Russell",
	  "lastName": "Guthrie",
	  "email": "diam.luctus.lobortis@malesuada.ca",
	  "phoneNumber": "(01630) 83436",
	  "address": "Ap #520-2997 Nascetur Ave",
	  "addressState": "Dorset",
	  "addressCity": "Dorchester",
	  "addressPostcode": "XW5N 8OU",
	  "signUpDate": "2021-01-29T06:58:52-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Dara",
	  "lastName": "Mclaughlin",
	  "email": "sollicitudin.orci@ametorci.co.uk",
	  "phoneNumber": "0961 402 2361",
	  "address": "341-4387 Sit Rd.",
	  "addressState": "CL",
	  "addressCity": "Tullibody",
	  "addressPostcode": "OC84 4KN",
	  "signUpDate": "2021-04-10T11:22:44-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Carol",
	  "lastName": "Shannon",
	  "email": "egestas@dapibus.ca",
	  "phoneNumber": "0800 1111",
	  "address": "Ap #871-5372 Commodo St.",
	  "addressState": "AR",
	  "addressCity": "Campbeltown",
	  "addressPostcode": "EO4 4DC",
	  "signUpDate": "2021-03-25T22:21:09-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Allen",
	  "lastName": "Mcintyre",
	  "email": "sem.Pellentesque@ametrisusDonec.com",
	  "phoneNumber": "0800 893913",
	  "address": "936-2498 Nunc, Street",
	  "addressState": "SH",
	  "addressCity": "Lerwick",
	  "addressPostcode": "F8 4VH",
	  "signUpDate": "2021-02-17T17:17:55-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Ivy",
	  "lastName": "Hood",
	  "email": "consectetuer@lectusconvallisest.org",
	  "phoneNumber": "(012249) 19750",
	  "address": "8645 Auctor Avenue",
	  "addressState": "Caithness",
	  "addressCity": "Wick",
	  "addressPostcode": "N39 5BQ",
	  "signUpDate": "2021-02-06T17:06:20-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Maxwell",
	  "lastName": "Blanchard",
	  "email": "nibh.Donec.est@Etiam.ca",
	  "phoneNumber": "07920 813691",
	  "address": "4053 Ut Rd.",
	  "addressState": "BR",
	  "addressCity": "Builth Wells",
	  "addressPostcode": "Y1J 9GB",
	  "signUpDate": "2021-05-17T11:24:06-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Warren",
	  "lastName": "Morton",
	  "email": "felis.adipiscing@Maurisquisturpis.co.uk",
	  "phoneNumber": "07624 471960",
	  "address": "P.O. Box 784, 8120 Sagittis Ave",
	  "addressState": "CA",
	  "addressCity": "Wick",
	  "addressPostcode": "DJ43 5JJ",
	  "signUpDate": "2021-06-03T04:35:47-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Arthur",
	  "lastName": "Hammond",
	  "email": "hendrerit.a.arcu@sitametfaucibus.com",
	  "phoneNumber": "0800 1111",
	  "address": "9413 Et St.",
	  "addressState": "OX",
	  "addressCity": "Oxford",
	  "addressPostcode": "NC6T 5II",
	  "signUpDate": "2021-03-20T13:12:09-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Neville",
	  "lastName": "Silva",
	  "email": "augue.ut@accumsanlaoreet.edu",
	  "phoneNumber": "(01856) 643426",
	  "address": "3124 Mi Av.",
	  "addressState": "Sussex",
	  "addressCity": "Horsham",
	  "addressPostcode": "BC2 3MZ",
	  "signUpDate": "2021-06-22T01:03:02-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Odessa",
	  "lastName": "Shannon",
	  "email": "elit@nondapibusrutrum.edu",
	  "phoneNumber": "0845 46 46",
	  "address": "955-7623 Dolor Road",
	  "addressState": "WL",
	  "addressCity": "Linlithgow",
	  "addressPostcode": "H5C 7YX",
	  "signUpDate": "2021-06-26T17:11:50-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Amity",
	  "lastName": "Vance",
	  "email": "at@Donec.ca",
	  "phoneNumber": "07185 823699",
	  "address": "1609 Diam Av.",
	  "addressState": "Ross-shire",
	  "addressCity": "Dingwall",
	  "addressPostcode": "L1A 3MY",
	  "signUpDate": "2021-02-25T15:44:28-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Melvin",
	  "lastName": "Hall",
	  "email": "Mauris.eu.turpis@ultrices.net",
	  "phoneNumber": "0800 335419",
	  "address": "9972 Nonummy Ave",
	  "addressState": "DE",
	  "addressCity": "Barnstaple",
	  "addressPostcode": "GR6 0VR",
	  "signUpDate": "2021-06-11T21:35:21-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Derek",
	  "lastName": "Harrell",
	  "email": "sagittis.placerat@Aliquam.net",
	  "phoneNumber": "0500 897863",
	  "address": "P.O. Box 428, 5967 Cras Ave",
	  "addressState": "GL",
	  "addressCity": "Barry",
	  "addressPostcode": "A0 5FQ",
	  "signUpDate": "2021-06-09T16:01:08-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "MacKenzie",
	  "lastName": "Mckinney",
	  "email": "Duis.elementum.dui@Inat.ca",
	  "phoneNumber": "(017138) 71536",
	  "address": "438-8233 Ac St.",
	  "addressState": "CO",
	  "addressCity": "Falmouth",
	  "addressPostcode": "L9 0LL",
	  "signUpDate": "2021-03-15T01:07:05-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Nolan",
	  "lastName": "Robinson",
	  "email": "in.faucibus@nequepellentesquemassa.net",
	  "phoneNumber": "(012305) 99774",
	  "address": "1588 Convallis St.",
	  "addressState": "DO",
	  "addressCity": "Shaftesbury",
	  "addressPostcode": "MJ5Y 0ND",
	  "signUpDate": "2021-03-24T10:46:10-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Eliana",
	  "lastName": "Shaw",
	  "email": "tincidunt.congue.turpis@a.net",
	  "phoneNumber": "0304 887 4424",
	  "address": "Ap #174-6634 Ultrices. St.",
	  "addressState": "Yorkshire",
	  "addressCity": "Scarborough",
	  "addressPostcode": "E07 2WB",
	  "signUpDate": "2021-03-12T20:05:53-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Madison",
	  "lastName": "Carver",
	  "email": "Curabitur@Maurisvel.edu",
	  "phoneNumber": "0800 523 0168",
	  "address": "Ap #496-2429 Mollis Ave",
	  "addressState": "Lincolnshire",
	  "addressCity": "Grimsby",
	  "addressPostcode": "H08 4TJ",
	  "signUpDate": "2021-05-02T12:18:57-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Maxine",
	  "lastName": "Norman",
	  "email": "neque@consectetuermauris.co.uk",
	  "phoneNumber": "0313 535 1247",
	  "address": "P.O. Box 224, 3126 Amet St.",
	  "addressState": "WL",
	  "addressCity": "Armadale",
	  "addressPostcode": "MS23 7YK",
	  "signUpDate": "2021-06-12T04:04:52-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Herrod",
	  "lastName": "Gamble",
	  "email": "ornare@elitAliquam.net",
	  "phoneNumber": "(01302) 45821",
	  "address": "P.O. Box 552, 3593 Nisl. St.",
	  "addressState": "SA",
	  "addressCity": "Whitchurch",
	  "addressPostcode": "VH15 7MA",
	  "signUpDate": "2021-02-27T14:06:09-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Raya",
	  "lastName": "Mueller",
	  "email": "tristique.neque@egetmagna.edu",
	  "phoneNumber": "076 7539 5954",
	  "address": "6755 Consectetuer, Ave",
	  "addressState": "Kinross-shire",
	  "addressCity": "Kinross",
	  "addressPostcode": "C1D 8XW",
	  "signUpDate": "2021-02-04T00:18:10-08:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Riley",
	  "lastName": "Larson",
	  "email": "gravida.nunc.sed@parturientmontesnascetur.net",
	  "phoneNumber": "070 8717 6103",
	  "address": "1576 Aliquet Road",
	  "addressState": "HU",
	  "addressCity": "St. Neots",
	  "addressPostcode": "CH99 0XW",
	  "signUpDate": "2021-05-20T06:26:59-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Shad",
	  "lastName": "Irwin",
	  "email": "magna.malesuada.vel@Sedid.net",
	  "phoneNumber": "0500 939768",
	  "address": "131-8214 Ipsum Street",
	  "addressState": "DE",
	  "addressCity": "Exeter",
	  "addressPostcode": "O51 9PR",
	  "signUpDate": "2021-04-16T22:26:51-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Tarik",
	  "lastName": "Oneill",
	  "email": "at@ipsumdolorsit.net",
	  "phoneNumber": "0500 742095",
	  "address": "P.O. Box 288, 1537 Sem Road",
	  "addressState": "Kirkcudbrightshire",
	  "addressCity": "New Galloway",
	  "addressPostcode": "I1I 8QZ",
	  "signUpDate": "2021-03-23T09:22:35-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Jack",
	  "lastName": "Lee",
	  "email": "a@vehicula.ca",
	  "phoneNumber": "0924 525 8041",
	  "address": "480-7603 Amet Ave",
	  "addressState": "Derbyshire",
	  "addressCity": "Buxton",
	  "addressPostcode": "D2O 1BW",
	  "signUpDate": "2021-06-10T16:52:02-07:00"
	},
	{
	  "pk": "User#",
	  "sk": "CustomerDetails",
	  "firstName": "Virginia",
	  "lastName": "Osborne",
	  "email": "bibendum.ullamcorper.Duis@fermentummetus.net",
	  "phoneNumber": "0845 46 43",
	  "address": "7525 Ipsum. Rd.",
	  "addressState": "SE",
	  "addressCity": "Galashiels",
	  "addressPostcode": "BR1J 1WB",
	  "signUpDate": "2021-02-19T23:40:10-08:00"
	}
  ]
```