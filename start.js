const Http = new XMLHttpRequest();
const url='https://packa4ka.livejournal.com/profile/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}