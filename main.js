//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Inhaltsverzeichnis                                                 \\
//                                                                    \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/**
 *
 *  0.Inhaltsverzeichnis                 
 *  1.Graphische Oberflaeche und Ausgabe 
 *  2.Button-Funktionen                  
 *  3.Rechnerlogik                      
 *  4.Konsolonausgabe zum Debuggen       
 *
 **/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Graphische Oberflaeche und Ausgabe                                 \\
//                                                                    \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/**
 * Konstante setzt die hintergrundfarbe fest
**/
  const bg_color = "pink";
/**
 * berechnete länge der caption bei textgröße 25
**/
  var laenge = 0;

/**
 * wird automatisch ausgeführt erstellt oberfläche, knöpfe,...
 *
 * Parameter: -
 * Returnwert: -
**/
function setup() { 

  createCanvas(300, 400); // erstellt Oberflaeche der laenge 400 und breite 300
  background(bg_color); // setzt die Hintergrundfarbe um
 
  //köpfe erstellen
  
  /**
  * erstellt den "AC"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  **/
  let ac = createButton("AC");//erstellt einen button
  ac.position(195, 110);//position des buttons
  ac.size(90, 40);//größe des buttons
  ac.mousePressed().style('cursor', 'pointer');//wenn man mit dem cursor auf einen button kommt wird er zum pointer
  ac.mousePressed(fuac); //wenn ac angeklickt wird, dann arbeite die function fuac ab (siehe zeile )
 
  /**
  * erstellt den "."-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let komma = createButton(".");
  komma.position(115, 310);
  komma.size(40, 40);
  komma.mousePressed().style('cursor', 'pointer');
  komma.mousePressed(fkom);
  
  /**
  * erstellt den "ANS"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let bans = createButton("ANS");
  bans.position(65, 110);
  bans.size(40, 40);
  bans.mousePressed().style('cursor', 'pointer');
  bans.mousePressed(fans);
  
  /**
  * erstellt den ")"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let klammer2 = createButton(")");
  klammer2.position(245, 210);
  klammer2.size(40, 40);
  klammer2.mousePressed(fk2).style('cursor', 'pointer');
  
  /**
  * erstellt den "("-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let klammer1 = createButton("(");
  klammer1.position(245, 160);
  klammer1.size(40, 40);
  klammer1.mousePressed(fk1).style('cursor', 'pointer');
  
  /**
  * erstellt den "9"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let neun = createButton("9");
  neun.position(115, 160);
  neun.size(40, 40);
  neun.mousePressed().style('cursor', 'pointer');
  neun.mousePressed(fu9)
  
  /**
  * erstellt den "8"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let acht = createButton("8");
  acht.position(65, 160);
  acht.size(40, 40);
  acht.mousePressed().style('cursor', 'pointer');
  acht.mousePressed(fu8)
  
  /**
  * erstellt den "7"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let sieben = createButton("7");
  sieben.position(15, 160);
  sieben.size(40, 40);
  sieben.mousePressed().style('cursor', 'pointer');
  sieben.mousePressed(fu7)
  
   /**
  * erstellt den "6"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/ 
  let sechs = createButton("6");
  sechs.position(115, 210);
  sechs.size(40, 40);
  sechs.mousePressed().style('cursor', 'pointer');
  sechs.mousePressed(fu6)
  
    /**
  * erstellt den "5"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let fuenf = createButton("5");
  fuenf.position(65, 210);
  fuenf.size(40, 40);
  fuenf.mousePressed().style('cursor', 'pointer');
  fuenf.mousePressed(fu5)
  
    /**
  * erstellt den "4"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let vier = createButton("4");
  vier.position(15, 210);
  vier.size(40, 40);
  vier.mousePressed().style('cursor', 'pointer');
  vier.mousePressed(fu4)
  
    /**
  * erstellt den "3"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let drei = createButton("3");
  drei.position(115, 260);
  drei.size(40, 40);
  drei.mousePressed().style('cursor', 'pointer');
  drei.mousePressed(fu3)
  
    /**
  * erstellt den "2"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let zwei = createButton("2");
  zwei.position(65, 260);
  zwei.size(40, 40);
  zwei.mousePressed().style('cursor', 'pointer');
  zwei.mousePressed(fu2);//wenn 2 angeklickt wird, dann arbeite die function fu2 ab (siehe zeile 197)
  
    /**
  * erstellt den "1"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let eins = createButton("1");
  eins.position(15, 260);
  eins.size(40, 40);
  eins.mousePressed().style('cursor', 'pointer');
  eins.mousePressed(fu1);//wenn 1 angeklickt wird, dann arbeite die function fu1 ab (siehe zeile 192)
  
    /**
  * erstellt den "0"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let nll = createButton("0");
  nll.position(65, 310);
  nll.size(40, 40);
  nll.mousePressed().style('cursor', 'pointer');
  nll.mousePressed(fu0);//wenn 0 angeklickt wird, dann arbeite die function fu0 ab (siehe zeile 187)
  
    /**
  * erstellt den "00"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
   let dnll = createButton("00");
  dnll.position(15, 310);
  dnll.size(40, 40);
  dnll.mousePressed().style('cursor', 'pointer');
  dnll.mousePressed(fu00);//wenn 0 angeklickt wird, dann arbeite die function fu0 ab (siehe zeile 187)
  
    /**
  * erstellt den "="-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let equal = createButton("=");
  equal.position(245, 260);
  equal.size(40, 90);
  equal.mousePressed(fequ).style('cursor', 'pointer');
  
    /**
  * erstellt den "*"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let stern = createButton("*");
  stern.position(195, 210);
  stern.size(40, 40);
  stern.mousePressed(fmal).style('cursor', 'pointer');
  
    /**
  * erstellt den "+"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let plus = createButton("+");
  plus.position(195, 260);
  plus.size(40, 40);
  plus.mousePressed(fplus).style('cursor', 'pointer');
 
    /**
  * erstellt den "-"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let minus = createButton("-");
  minus.position(195, 310);
  minus.size(40, 40);
  minus.mousePressed(fminus).style('cursor', 'pointer');
  
    /**
  * erstellt den "/"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let slash = createButton("/");
  slash.position(195, 160);
  slash.size(40, 40);
  slash.mousePressed(fgeteilt).style('cursor', 'pointer');
  
    /**
  * erstellt den "DEL"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
  let dlt = createButton("DEL");
  dlt.position(115, 110);
  dlt.size(40, 40);
  dlt.mousePressed(fdel).style('cursor', 'pointer');
  
    /**
  * erstellt den "RND"-Knopf und verlinkt ihn mit der dazugehorigenfunktion.
  * siehe Button AC in Zeile 50ff fuer details
  **/
   let rnd = createButton("RND");
  rnd.position(15, 110);
  rnd.size(40, 40);
  rnd.mousePressed().style('cursor', 'pointer');
  rnd.mousePressed(frnd);

  eingabe_gross();

}
  
/**
 * textausgabe zeichnet rechtecke über alte werte und gibt aktuelle cap und ans aus außerdem passt sie die textgröße von cap an und gibt ggf. ein boundary error aus bei zu vielen zeichen
 *
 * Parameter: -
 * Returnwert: -
**/
  function eingabe_gross() { 
    let txtsz = 25; //default wert für die textgröße
        if (eingabelaenge() > 253){//kontrolliert ob die eingabelänge länger als 253 (textfeldlänge) ist
      txtsz = (25 * 253) / laenge;//berechnet die größt mögliche textgröße , sodass alle zeichen ins textfeld passen
    }
    
    if (txtsz > 5){// textgröße muss größer als 5 sein (für leserlichkeit)
      
    fill("white"); 
    stroke('black'); 
    strokeWeight(2);
    rect(15, 50, 270, 40); 
    //überzeichnet Eingabefeld
     
    fill("lightpink");
    textSize(txtsz);
    strokeWeight(0);
    textStyle(NORMAL);
    text(cap, 17, 65, 270, 40);
    //Schrift im Eingabefeld
      
    fill(bg_color); 
    rect(15, 30, 270, 18);
    //überzeichnet ans-feld
      
    fill("grey");
    textSize(15)
    strokeWeight(0);
    textStyle(NORMAL);
    text("ans = " + ans, 16 , 35, 270, 40);
    //gibt ans aus


    } else {
      window.alert("Error: boundairy-check");
      window.alert("Zu Grosse Zahlen oder zu kleine kann das Programm eh nicht berechnen");
      window.alert("Ich sehe alles");
      //Fehlermeldung bei zu vielen eingegebenen zahlen mit variablen Text
    }
  } 

/**
 * berechnet die länge der eingegebenen zeichen 
 *
 * Parameter: -
 * Returnwert: errechnete laenge der caption in pixel bei textgroesse 25
**/
  function eingabelaenge(){  
    
      laenge = 0;//zwischenergebnis
      for (let i = 0; i < cap.length; i++) {//schleife durchläuft caption
        switch(cap[i]){//geht zu dem entsprechenden checkpoint ist das aktuelle zeichen eine ziffer (bis auf) geht er zu default
          case '+':
            laenge += 253/18;//länge des zeichen (z.B. "+" passt 18 mal in das textfeld ,253 pixel lang, rein deshalb: 253/18
            break;//beendet schleifendurchlauf
          case '1':
            laenge += 253/22;
            break;
          case '*':
            laenge += 253/27;
            break;
          case '-':
          case '(':
          case ')':
            laenge += 253/32;
            break;
          case '/':
          case '.':
            laenge += 253/38;
            break;
          default:
            laenge += 253/19;
            break; 
      }
      }

    return laenge;//gibt länge zurück
        
  }

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Button-Funktionen                                                  \\
//                                                                    \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/**
 * Fuegt neue Zeichen zur  Anzeige (->cap) hinzu und gibt die aktualiesierte anzeige aus
 *
 * Parameter: x ist das neue Zeichen
 * Returnwert: -
**/
function add(x){
 cap += x; //aktualiesiert cap
 eingabe_gross(); //gibt aktualisierten display aus
}

/**
 * Wird vom Button aufgerufen und fuegt ein komma hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fkom (){
  add('.');
  //fügt komma hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt ein komma hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fans (){
  add(ans);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 0 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu0 (){
  add(0);
}

/**
 * Wird vom Button aufgerufen und fuegt 00 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu00 (){
  add("00");
}

/**
 * Wird vom Button aufgerufen und fuegt eine 1 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu1 (){
  add(1);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 2 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu2 (){
  add(2);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 3 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu3 (){
  add(3);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 4 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu4 (){
  add(4);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 5 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu5 (){
  add(5);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 6 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu6 (){
 add(6);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 7 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu7 (){
  add(7);
}
 
/**
 * Wird vom Button aufgerufen und fuegt eine 8 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu8 (){
  add(8);
}

/**
 * Wird vom Button aufgerufen und fuegt eine 9 hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fu9 (){
 add(9);
  
  //fügt die jeweilige zahl hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt ein - hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fminus (){
  add("-");
  //fügt Subtraktionszeichen hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt ein + hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fplus (){
  add("+");
  //fügt Additionszeichen hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt ein * hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fmal (){
  add("*");
  //fügt Multiplikationszeichen hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt ein / hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fgeteilt (){
  add("/");
  //fügt Divisionszeichen hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt eine klammer hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fk1 (){
  add("(");
  //fügt klammer hinzu
}

/**
 * Wird vom Button aufgerufen und fuegt eine klammer hinzu
 *
 * Parameter: -
 * Returnwert: -
**/
function fk2 (){
  add(")");
  //fügt klammer hinzu
}

/**
 * Wird vom Button aufgerufen und setzt alle parameter auf die default werte zurück
 *
 * Parameter: -
 * Returnwert: -
**/
function fuac(){
  reset();//setzt alle werte zurück außer ans
  eingabe_gross();//gibt aktualisierten display aus
  //löscht alle Eingaben
}

/**
 * Wird vom Button aufgerufen und wertet caption aus und zeigt das ergebnis an
 *
 * Parameter: -
 * Returnwert: -
**/
function fequ (){
  cap = "" + auswerten();
  //cap soll string bleiben deshalb leere string + das ergebnis 
  eingabe_gross();//gibt aktualisierten display aus
  //errechnet das Ergebnis
}

/**
 * Wird vom Button aufgerufen und löscht das zuletzt hinzugefügte zahl/zeichen
 *
 * Parameter: -
 * Returnwert: -
**/
function fdel (){
  cap = cap.substring(0, cap.length - 1);//löscht das zuletzt hinzugefügte zahl/zeichen
  eingabe_gross();//gibt aktualisierten display aus
  //löscht die/das zuletzt eingegebene Zahl/Rechenzeichen 
}

/**
 * Wird vom Button aufgerufen und ersetzt den aktuellen display durch das letzte ergebnis in gerundeter Form
 *
 * Parameter: -
 * Returnwert: -
**/
function frnd(){
  reset();//setzt alle werte zurück außer ans
  ans = Math.round(ans);//rundet das ergebnis/ans
  cap = ans;//cap= ans
  eingabe_gross();//gibt aktualisierten display aus
  //rundet das ergebnis
}


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Rechnerlogik                                                       \\
//                                                                    \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/**
 *  Liste der Verwendeten gueltigen Operatoren. Kann zum schnelleren kontrollieren, ob ein zeichen ein operator ist verwendet werden
**/
const operatoren = ['+','-','*','/','(',')'];

/**
 *  aktuelle textanzeige 
**/
var cap ="";

/**
 *  eingegebenen operatoren, die aus der cap rausgefiltert werden in richtiger reihenfolge
**/   
var ops = [];

/**
 *  eingegebenen Konstanten, die aus der konst rausgefiltert werden in richtiger reihenfolge
 *  konstanen werden standardmassig als blatter (nodes) gespeichert was eine umwandlung zum Baum innerhalb von konst ermoeglicht
 *  letztenendlich ist der finale Baum an erster stelle von Konst gespeichert
**/  
var konst = [];

/**
 *  die zuletzt betrachtete konstante. Variable wird zum auswerten der cap zu den Listen konst und ops verwendet
**/   
var aktkonst = "";

/**
 *  letztes berechnetes ergebnis
**/   
var ans = "";

  /**  
   *  Erstellt die Klasse Node
   *  Node ist ein eigens definierter Variablentyp und ermoeglicht die implementierung von Binaerbaeumen
   *  Mithilfe von binaerbaeumen kann ein term einfach auswerten und prioritaeten von rechnungen eiunfach darstellen (die tiefsten aeste werden zuerst gerechnet)  
   * node hat drei werte:
   *  val ist der eigentliche wert des Knoten und kann entweder ein Operator sein (dargestellt als char) oder eine Konstante ( int oder float)
   * links und rechts sind die aeste des knotens und verweisen bei ops. auf neue knoten oder bei konst. beide auf null 
  **/
    class node {
 
      constructor(val, links, rechts) { // konstruktor von der klasse wird zum erstellen eines konkreten nodes gebraucht
        this.val = val // setzt konkretes val von neu erstellten knoten auf val
        this.links = links; // setzt konkretes linken von neu erstellten knoten auf 
        this.rechts = rechts; // setzt konkretes rechts von neu erstellten knoten auf rechts
      }
  
    }

/**
 * setzt alle werte werte auf default zurück bis auf ans
 *
 * Parameter: -
 * Returnwert: -
**/
    function reset(){
     
      cap ="";
      laenge = 0;
      ops = [];
      konst = [];
      aktkonst = "";
      
    }

/**
 * funktion ist da zum auswerten des eingegeben terms 
 *
 * Parameter: -
 * Returnwert:gibt errechnetes ergebnis zurueck
**/
    function auswerten(){
     
      parsecap();  //nimmt caption und teilt sie in zwei listen --> operator und konstanten    
      
      // Gibt zwischenergebnis auf der Konsole aus zum debuggen
      console.log(ArrayToString(ops));
      console.log(nodeArrayToString(konst));
      
     let rtrn = parsetreerek(ops,konst);
     ops = rtrn[0];
     konst = rtrn[1];
      
     // parsetree(); //macht aus den listen ops und konst ein Binaerbaum.  dieser ist an erster stelle von konst gespeichert
      
      
      ans = rechnen(konst[0]); //berechnet aus dem Binaerbaum das ergebnis und speichert es in ans
      
      // Gibt zwischenergebnis auf der Konsole aus zum debuggen
      console.log(ans);
      
      reset(); // setzt alle durch rechnungern benutztte variablen zurueck bis auf ergebnis
      return ans; // gibt ergebnis zurueck
      
    }

   /**
    * nimmt caption und teilt sie in zwei listen --> operator und konstanten 
    *
    * Parameter:
    * Returnwert: gibt das errechnete Ergebnis zurueck
    **/
    function parsecap(){  
      
      ops = ['(']; // ops wird auf startarray gestzt standard maessig setzten wir den term aus cap in KLammern fuer parse tree
      konst = []; // konst wird auf leere array gesetzt um bugs zu vermeinden
      aktkonst = ""; // aktkonst wird auf leeren string gesetzt um bugs zu vermeinden
      let vorzeichen = 1; // vorzeichnen ermoeglicht es  beliebig oft minusse zuz setzen ist vorzeichen g
    
      for (let i = 0; i < cap.length; i++) {
        
        if(operatoren.indexOf(cap[i]) > -1) {
          if(cap[i] == '('){
            if(aktkonst == '-'){
              ops.push('*');
               konst.push(new node(Number(-1),null,null));
              vorzeichen = 1;
            }
            ops.push(cap[i]);
            
          } else if(vorzeichen && cap[i] == '-') {
             aktkonst = vorzeichen%2? "-": "";
             vorzeichen++;
          }
          else {
            ops.push(cap[i]); // fuegt operator an die letzte stelle von ops hinzu an
            let num = (aktkonst == '-' || aktkonst == '')?( cap[i] == '*' || cap[i] == '/') : aktkonst; // 
            konst.push(new node(Number(num),null,null)); // fuegt letzte konstante zu konst hinzu als blatt  
            aktkonst = ""; // setzt aktkonst zuruck
            vorzeichen = 1; // nach einen operator muss ein minus ein vorzeichen sein 
            
          }
         } else {
          aktkonst += cap[i]; // fuegt zur aktkonst eine ziffer hinzu
          vorzeichen = 0; // vorzeichen ist nicht mehr moeglich direkt nach einer ziffer
         }
      }
      
      let num = (aktkonst == '-' || aktkonst == '')?( ops[ops - 1] == '*' || ops[ops - 1]== '/') : aktkonst;
      konst.push(new node(Number(num),null,null));
      ops.push(')');
  }


/**
 * rekursive Funktion die einen Binaerbaum erstellt
 *
**/

  function parsetreerek(o,k){
    
    console.log(ArrayToString(o));
    console.log(nodeArrayToString(k));
    
   /** if (o[0] == '(' && o[1] == ')'){
      o.shift();
      o.shift();
      return [o,k.unshift(new node(0,null,null))];
    }
  **/
    if (o[0] == '('){ 
        o.shift();
        if (o.indexOf('(') > -1){
            let index = o.indexOf('(');
            console.log("index:" + index);
            
            let o1 = o.slice(0, index );
            let k1 = k.slice(0, index );
            
            let o2 = o.slice(index );
            let k2 = k.slice(index );
            
            console.log("rek");
          
            let rtrn = parsetreerek(o2, k2);
            o2 = rtrn[0];
            k2 = rtrn[1];
            
            o = o1.concat(o2);
            k = k1.concat(k2);
            
          
        
        }
        
        parsetreer_punkt(o,k);
        
        parsetreer_strich(o,k);
        
              
    }
    return [o,k];
      
  }

  /**
 * fuegt nur alle * und / operatoren zum baum hinzu 
 *
**/
  
  function parsetreer_punkt(o,k){
    
     while (    o.length > 0 && o[0] != ')' 
            && (o.indexOf('*') < o.indexOf(')') || o.indexOf('/') < o.indexOf(')')) 
            && (o.indexOf('*') > -1 || o.indexOf('/') > -1)
           )
     {      
       
         let index = -1; 
         if (o.indexOf('*') > -1 && o.indexOf('/') > -1){
             index = min(o.indexOf('*') , o.indexOf('/'));
         } else if (o.indexOf('*') > -1 )  {
           index = o.indexOf('*');
         } else {
           index = o.indexOf('/');
         }
            
          k[index+1] = new node(o[index],k[index],k[index + 1]);
          o.splice(index,1);
          k.splice(index,1);
        }
    return [o,k];
    
  }
  
/**
 * fuegt alle + und - operatoren zum baum hinzu 
 *
**/

  function parsetreer_strich(o,k){
    
     while (o.length > 0 && o[0] != ')' ){

          k[1] = new node(o[0],k[0],k[1]);
          o.shift();
          k.shift();
        }
    
    if (ops[0] == ')')
      o.shift();
      
    return [o,k]; 
  
  }
  


/**
 * rekursive Funktion die einen Binaerbaum ausrechnet
 *
 * Parameter: knoten ist die Wurzel des auszurechnen Baumes und vom Typ Node
 * Returnwert: gibt das errechnete Ergebnis zurueck
**/
    function rechnen(knoten){
        switch(knoten.val){
          case "+":
            return rechnen(knoten.links) + rechnen(knoten.rechts);
          case "*":
            return rechnen(knoten.links) * rechnen(knoten.rechts);
          case "-":
            return rechnen(knoten.links) - rechnen(knoten.rechts);
          case "/":
            return rechnen(knoten.links) / rechnen(knoten.rechts);
          default: 
            return knoten.val; // ist Knoten.val keiner der obenstehenden operatoren muss er eine Konstante sein, die zurückgegeben wird. Rekursionsanker
      }
    }


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// Konsolonausgabe zum Debuggen (Kosmetik!!!)                         \\
//                                                                    \\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/**
 * Rekursive Funktion um nodes in strings umzugewandeln
 *
 * Parameter: x ist der zu umwandelne Node
 * Returnwert: gibt den knoten in Polinischer Notation aus
**/

function nodeToString(x){
  if(operatoren.indexOf(x.val) > -1)//prüft ob der node ein operatorknoten ist
    return x.val  + ":{" + nodeToString(x.links) + "}" + "{" + nodeToString(x.rechts) + "}"; //gibt einen String zurück die zuerst den Operator und dann die beiden Aeste enthaelt
   // Um die Aeste in Strings umzuwandeln rufen wir wieder die gleiche funktion auf mit den entsprechenden nodes x.links und x.rechts
  else 
    return x.val; // node x ist eine Konstante. Gibt ihren wert wieder zurürck
}

/**
 * node-Listen werden auch zu Strings umgewandelt
 *
 * Parameter: x (--> soll umgewandelt werden;ist eine Liste/Array von Nodes)
 * Returnwert: Liste in Textform
**/

function nodeArrayToString(x){
  let output = "["; //speichert Zwischenergebnis
  for (let i = 0; i < x.length -1; i++){//schleife die die liste durchläuft bis auf das letzte Element (wegen "-1")
    output += nodeToString(x[i]) + ", ";//damit in der konsole vor einem komma noch ein Abstand ist (nur Kosmetik) + elemente müssen erst zu string umgewandelt werden(--> nodeToString)
  }
  return output + nodeToString(x[x.length-1]) + "]";//gibt ergebnis mit letzten element wieder
}

/**
 * Liste werden zu Strings umgewandelt
 *
 * Parameter: x (--> soll umgewandelt werden;ist eine Liste/Array)
 * Returnwert: Liste in Textform
**/

function ArrayToString(x){
  let output = "["; //speichert Zwischenergebnis
  for (let i = 0; i < x.length -1; i++){//schleife die die liste durchläuft bis auf das letzte Element (wegen "-1")
    output += x[i] + " ,";//damit in der konsole vor einem komma noch ein Abstand ist (nur Kosmetik)
  }
 return output + x[x.length-1] + " ]";// gibt ergebnis mit letzten element wieder
}
