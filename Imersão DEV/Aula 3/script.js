// var filmeRafa = 'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg';
// var filmePaulo = 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg';
// var filmeGui = 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080';

var listaFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg", "https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"];

// listaFilmes[0] = "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg";
// listaFilmes[1] = "https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg";
// listaFilmes[2] = "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";

for(var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}

// document.write('<img src=' + listaFilmes[0] + '>');
// document.write('<img src=' + listaFilmes[1] + '>');
// document.write('<img src=' + listaFilmes[2] + '>');