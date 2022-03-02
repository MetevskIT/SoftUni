function loadRepos() {
   let res = document.getElementById('res');

   let xml =  new XMLHttpRequest();

   let url = 'https://api.github.com/users/testnakov/repos';

   xml.open('GET',url)

   xml.onreadystatechange=()=>{

      if (xml.readyState==4) {
         res.textContent=xml.responseText;
      }
   }
   xml.send();
}