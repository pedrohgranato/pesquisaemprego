
    //localizacao das escolas por cordenadas
      function initMap() {
        var horto = {lat: -22.8624019, lng: -47.2068262};
        var escola1 = {lat: -22.8875224, lng: -47.204786};
        var escola2 = {lat: -22.8854062, lng: -47.1987407};
        var escola3 = {lat: -22.8755374, lng: -47.2234312}; 
        var escola4 = {lat: -22.8659639, lng: -47.2081144};
        var escola5 = {lat: -22.8664267, lng: -47.2145272};
        var escola6 = {lat: -22.8506311, lng: -47.208106};
        var escola7 = {lat: -22.848641, lng: -47.2051024};
        var escola8 = {lat: -22.8598765, lng: -47.177669};
        var escola9 = {lat: -22.8796188, lng: -47.2571177};
        var escola10 = {lat: -22.8410401, lng: -47.2250761};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: horto
        });

        var marker1 = new google.maps.Marker({
          position: escola1,
          icon: 'image/escola.png',
          map: map ,
          
        });
        var marker2 = new google.maps.Marker({
          position: escola2,
          icon: 'image/escola.png',
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: escola3,
          icon: 'image/escola.png',
          map: map
        });
        var marker4 = new google.maps.Marker({
          position: escola4,
          icon: 'image/escola.png',
          map: map
        });
        var marker5 = new google.maps.Marker({
          position: escola5,
          icon: 'image/escola.png',
          map: map
        });
        var marker6 = new google.maps.Marker({
          position: escola6,
          icon: 'image/escola.png',
          map: map
        });
        var marker7 = new google.maps.Marker({
          position: escola7,
          icon: 'image/escola.png',
          map: map
        });
        var marker8 = new google.maps.Marker({
          position: escola8,
          icon: 'image/escola.png',
          map: map
        });
        var marker9 = new google.maps.Marker({
          position: escola9,
          icon: 'image/escola.png',
          map: map
        });
        var marker10 = new google.maps.Marker({
          position: escola10,
          icon: 'image/escola.png',
          map: map
        });



        marker1.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker1.getPosition());
          infowindow1.open(map, marker1);
        });
        marker2.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker2.getPosition());
          infowindow2.open(map, marker2);
        });
        marker3.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker3.getPosition());
          infowindow3.open(map, marker3);
        });
        marker4.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker4.getPosition());
          infowindow4.open(map, marker4);
        });
        marker5.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker5.getPosition());
          infowindow5.open(map, marker5);
        });
        marker6.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker6.getPosition());
          infowindow6.open(map, marker6);
        });
        marker7.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker7.getPosition());
          infowindow7.open(map, marker7);
        });
        marker8.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker8.getPosition());
          infowindow8.open(map, marker8);
        });
        marker9.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker9.getPosition());
          infowindow9.open(map, marker9);
        });
        marker10.addListener('click', function() {
          map.setZoom(18);
          map.setCenter(marker10.getPosition());
          infowindow10.open(map, marker10);
        });
        //primeira escola. abrir janela info
        var contentString1 = '<div id="content1">'+
              '<div id="siteNotice1">'+
              '</div>'+
              '<h1 id="firstHeading1" class="firstHeading1">E.M.E.F. Helena Futava Takahashi Profa</h1>'+
              '<div id="bodyContent1">'+
              '<p> Etapas de Ensino:  <br>Educação Infantil <br> Ensino Fundamental <br> Telefone  (019) 3887-1313<br> E-mail emefhelena@hortolandia.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
//segunda escola. abrir janela info

          });
          var contentString2 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">JARDIM SANTA CLARA DO LAGO</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Fundamental <br> Ensino Médio <br> Telefone   (019) 3887-1167 // 3887-0381 E-mail  e048240a@see.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
          });

          //terceira escola. abrir janela info
          var contentString3 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Colégio Adventista de Hortolândia</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Fundamental <br> Ensino Médio <br> Ensino Superior <br> Telefone (19) 3865-1234 E-mail hortolandia.sec@ucb.org.br'+
              '</div>'+
              '</div>';

          var infowindow3 = new google.maps.InfoWindow({
            content: contentString3
          });
          //quarta escola. abrir janela info
          var contentString4 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">E.M. Marleciene Priscila Presta Bonfim</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Infantil <br> Ensino Fundamental <br> Telefone  (019) 3865-2844 // 3897-0282 E-mail  emefremanso@hortolandia.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow4 = new google.maps.InfoWindow({
            content: contentString4
          });
          //quinta escola. abrir janela info
          var contentString5 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">CE.M.E.I. Remanso Campineiro I</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Infantil <br> Telefone  (019) 3865-3050 E-mail emeiremanso@hortolandia.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow5 = new google.maps.InfoWindow({
            content: contentString5
          });
          //sexta escola. abrir janela info
          var contentString6 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Escola Municipal de Ensino Fundamental Caio Fernando Gomes Pereira</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Fundamental <br> Ensino Médio <br> Telefone  (19) 3819-6057 E-mail Não Fornecido'+
              '</div>'+
              '</div>';

          var infowindow6 = new google.maps.InfoWindow({
            content: contentString6
          });
          //setima escola. abrir janela info
          var contentString7 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">E.E. Antônio Zanluchi</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Infantil <br> Ensino Fundamental <br> Telefone (19) 3897-1446 E-mail Não Fornecido'+
              '</div>'+
              '</div>';

          var infowindow7 = new google.maps.InfoWindow({
            content: contentString7
          });
          //oitava escola. abrir janela info
          var contentString8 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">CEMEF Jardim Nova Europa</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Fundamental <br> Telefone  (019) 3909-3883 // 3865-0462 E-mail emefeuropa@hortolandia.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow8 = new google.maps.InfoWindow({
            content: contentString8
          });
          //nona escola. abrir janela info
          var contentString9 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">EMEI Taquara Branca</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Infantil <br>  Telefone  (19) 3909-4936 E-mail emeitaquarabranca@hortolandia.sp.gov.br'+
              '</div>'+
              '</div>';
          var infowindow9 = new google.maps.InfoWindow({
            content: contentString9
          });
          //decima escola. abrir janela info
          var contentString10 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">E.E. Recreio Alvorada</h1>'+
              '<div id="bodyContent">'+
              '<p> Etapas de Ensino:  <br>Educação Fundamental <br> Ensino Médio <br>  Telefone (19) 3909-6767 // 3897-0372 E-mail  e919378a@see.sp.gov.br'+
              '</div>'+
              '</div>';

          var infowindow10 = new google.maps.InfoWindow({
            content: contentString10
          });

      }
    
    
