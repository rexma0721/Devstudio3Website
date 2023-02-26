
$(document).ready(function() {
  let shortLang = window.localStorage.getItem('lang');     
  let backimage = "";
  if (shortLang === "es") {
    lang = "es";    
    backimage = "url(./images/lanes.png) no-repeat left center";
  }
  else {
    lang = "en";
    backimage = "url(./images/lan.png) no-repeat left center";
  } 
  let langFile = "lang-" + lang + ".json";   
  var arrLang = null;
  $.getJSON("./js/" + langFile, function(data){
    console.log(langFile);
    arrLang = data;
    console.log(arrLang);

    //Set default site lang
    $(".lang").each(function(index, element) {      
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });

    //Set dropdown lang value 
    $(".languageselect").val(lang);
    $(".language").css("background" , backimage);
  });

  //Change site lang on selection
  $(".languageselect").on('change', function() {
      lang = this.value;
      langFile = "lang-" + this.value + ".json";   
      window.localStorage.setItem('lang', this.value); 
      let backimage = "";
      if (this.value === "es") {
        lang = "es";    
        backimage = "url(./images/lanes.png) no-repeat left center";
      }
      else {
        lang = "en";
        backimage = "url(./images/lan.png) no-repeat left center";
      } 
      $(".language").css("background" , backimage);
      $.getJSON("./js/" + langFile, function(data){      
        arrLang = data;        
        console.log(lang);
        $(".lang").each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    });
  });
});
