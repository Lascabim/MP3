var imagem = document.getElementById("imageArt");
var indexImage = document.getElementById("numberM").textContent;

var musicNames = ["Welcome To The Rodeo", "Beat The Odds", "More Than Life"];
let iN = indexImage;


function changeImage(args) {

  if (args == "prev"){

    if(iN == "1") {
      console.log("ERROR - INDEX MUITO BAIXO");
    }
    else if (iN > "1") {
      iN = (Number(iN) - 1 + '');
      imagem.src = "./images/"+iN+".png";
      document.getElementById("numberM").textContent = iN;
      document.getElementById("nameM").textContent = musicNames[Number(iN)-1];
    }

  } else if (args == "next"){

    if(iN == "3") {
      console.log("ERROR - INDEX MUITO ALTO");
    }
    else if (iN < "3") {
      iN = (Number(iN) + 1 + '');
      imagem.src = "./images/"+iN+".png";
      document.getElementById("numberM").textContent = iN;
      document.getElementById("nameM").textContent = musicNames[Number(iN)-1];
    }
  }
}

function searchImage(){
  var searchB = document.getElementById("inputF").value;

  if (searchB != "") {
    for (var i = 0; i < musicNames.length; i++) {

      // console.log(musicNames[i]);
      // console.log(searchB);

      if (searchB == musicNames[i]) {
        console.log("Sucesso");

        imagem.src = "./images/"+(i+1)+".png";
        document.getElementById("numberM").textContent = i+1;
        document.getElementById("nameM").textContent = musicNames[i];
      }
    }
  } else {
    console.log("Caixa de pesquisa vazia!");
  }
}

function zoom() {
  document.body.style.zoom = "90%" 
}