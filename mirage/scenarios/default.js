// import restaurants from './restaurants.json';

export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const restaurants = [
    {
      name: 'Mustafa Burger',
      rating: 4,
      street: 'Flotowstr. 87',
      zip: '56368',
      city: 'Katzenelnbogen',
      website: 'http://www.webseite-01.c24',
      burger_classic: true,
      burger_cheese: true,
      burger_bio: false,
    },
    {
      name: 'Burgerhaus',
      rating: 4.5,
      street: 'Rhinstrasse 77',
      zip: '80707',
      city: 'M\u00fcnchen',
      website: 'http://www.webseite-02.c24',
      burger_classic: true,
      burger_cheese: false,
      burger_bio: false,
    },
    {
      name: 'Rotk\u00e4ppchen',
      rating: 3,
      street: 'Rudolstaedter Strasse 5',
      zip: '22145',
      city: 'Hamburg',
      website: 'http://www.webseite-03.c24',
      burger_classic: false,
      burger_cheese: false,
      burger_bio: true,
    },
    {
      name: 'Better Than Spam',
      rating: 2,
      street: 'Amsinckstrasse 33',
      zip: '07623',
      city: 'Hermsdorf',
      website: 'http://www.webseite-04.c24',
      burger_classic: true,
      burger_cheese: true,
      burger_bio: false,
    },
    {
      name: 'Metburger',
      rating: 2.5,
      street: 'Schillerstrasse 84',
      zip: '82522',
      city: 'Geretsried',
      website: 'http://www.webseite-05.c24',
      burger_classic: false,
      burger_cheese: false,
      burger_bio: false,
    },
    {
      name: 'Tim Cook House',
      rating: 5,
      street: 'Neue Ro\u00dfstr. 88',
      zip: '73733',
      city: 'Esslingen Mettingen',
      website: 'http://www.webseite-06.c24',
      burger_classic: true,
      burger_cheese: true,
      burger_bio: true,
    },
    {
      name: 'Not only D\u00f6ners',
      rating: 3.5,
      street: 'Esslingerstr. 45',
      zip: '06923',
      city: 'Annaburg',
      website: 'http://www.webseite-07.c24',
      burger_classic: true,
      burger_cheese: false,
      burger_bio: true,
    },
    {
      name: 'Muuuh-rger',
      rating: 3,
      street: 'Gotthardstrasse 66',
      zip: '09024',
      city: 'Chemnitz',
      website: 'http://www.webseite-08.c24',
      burger_classic: true,
      burger_cheese: false,
      burger_bio: true,
    },
    {
      name: 'BIO-Haus',
      rating: 4,
      street: 'Stresemannstr. 93',
      zip: '66782',
      city: 'Wadgassen',
      website: 'http://www.webseite-09.c24',
      burger_classic: true,
      burger_cheese: true,
      burger_bio: true,
    },
    {
      name: '1-2-3 Burger',
      rating: 1.5,
      street: 'Esplanade 66',
      zip: '97357',
      city: 'Prichsenstadt',
      website: 'http://www.webseite-10.c24',
      burger_classic: true,
      burger_cheese: false,
      burger_bio: false,
    },
  ];

  const mirageRestaurants = restaurants.map((restaurant) => {
    return server.create('restaurant', restaurant);
  });

  server.createList('user', 7);
}
