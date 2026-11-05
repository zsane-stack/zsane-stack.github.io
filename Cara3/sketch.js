function setup() {
  createCanvas(600, 600);//crea un area de dibuix de 600 pixels quadrats, 600 pixels d'ample i 600 pixels d'alçada, canvas és àrea de dibuix, setup ès la configuració o caracteristiques del nostre codi
}

function draw() {//draw significa dibuixar
  //mouseX=300;mouseY=300
  background(250);//fons de color gris, és de color gris perquè hi ha un nùmero entre 0 i 255 i el 0 és negra i el 255 es blanc
  let canvipetit = sin(frameCount*0.05)*8;;//genera número de 20 a -20 sense parar i ordenats
   let canvimitja= cos(frameCount*0.05)*15//genera número de 15 a -15 sense parar i ordenats
   let canvigran= cos(frameCount*0.05)*20//genera número des de 8 a -8 sense parar i ordenats
  let canvimoltgran= cos(frameCount*0.05)*127//genera número des de 8 a -8 sense parar i ordenats
 print("Canvi petit: "+canvipetit);
  print("Canvi mitja: "+canvimitja);
  print("Canvi gran: "+canvigran);
  print("Canvi molt gran: "+canvimoltgran);
  strokeWeight(2);
  fill(255-canvipetit,159+canvimoltgran, 143+canvipetit);//fill és omplir de color de color el que hi ha a continuació en aquest cas el·lipse. El primer múmero es el nivell de vermellor(R:red), el seguent número es el nivell de verdor(G:green) i el tercer número es el nivell de blavor(B:blue). Podem fer 255,255,255:16.700.000 de colors diferents. He de posar el color que volgui als ulls i a la cara canviant elpomps 3 números, buscant a google colors RGB
  ellipse(mouseX,mouseY,230,250);//Es la cara sencera. El primer número significa la psició X (horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en pixels i el quart l'amplada de la el·lipse. Sempre els números son pixels contats des de la cantonada superior esquerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerre)
  fill(255,255,51)
   ellipse(350,250,50,50);//és l'ull dret perqué és 350 de X al centre
  ellipse(250,250,50,50);//és l'ull esquerre perqé és 250 pixels de X del centre
  fill(350,51,51);//és el color de la boca i és vermellos perqè te molta quantitat de vermell
  arc(300,350,100,80,0,PI);//boca
noFill();// no ompis de color la cella
  strokeWeight(4);
  arc(250,230,80,35,PI,0);//cella esquerra
  strokeWeight(4);
  line(325,215,375,225);//cella dreta: els dos primers números són la X
}
