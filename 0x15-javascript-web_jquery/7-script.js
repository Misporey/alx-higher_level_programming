$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', fuction (data) {
      $('div#character').text(data.name);
      });
