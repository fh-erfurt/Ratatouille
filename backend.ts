const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());



var accounts = [
        {
            "id": 0,
            "createdat": 1609455600,
            "email": "Michelle00@mailpoof.com",
            "password": "1234",
            "createdrecipes": ["0"],
            "favoriterecipes":["2","4"]
        },
        {
            "id": 1,
            "createdat": 1609455600,
            "email": "Jonas01@mailpoof.com",
            "password": "1234",
            "createdrecipes": ["4"],
            "favoriterecipes":["2"]
        },
        {
            "id": 2,
            "createdat": 1609455600,
            "email": "Katja02@mailpoof.com",
            "password": "1234",
            "createdrecipes": ["3"],
            "favoriterecipes":["1","2"]
        },
        {
            "id": 3,
            "createdat": 1609455600,
            "email": "Roman03@mailpoof.com",
            "password": "1234",
            "createdrecipes": ["2"],
            "favoriterecipes":["0","4"]
        },
        {
            "id": 4,
            "createdat": 1609455600,
            "email": "Dodo04@mailpoof.com",
            "password": "1234",
            "createdrecipes": ["1"],
            "favoriterecipes":["2","3"]
        }
    ];


var recipes = [
  {
    "id": 0,
    "name": "Vegetarische Spinat-Gemüse-Lasagne mit Tomatensoße",
    "imageurl": "https://cdn.pixabay.com/photo/2021/01/24/19/31/lasagna-5946299_960_720.jpg",
    "averagetimeinminutes": 25,
    "difficulty": "normal",
    "createdat": 1609455600, 
    "ingredients": "Blattspinat 600g, Karotten 2Stk, Champignons 7 Stk, Zwiebel 1, Milch, Kräuterfrischkäse 100g, Knoblauchzehen 2 Stk, Gemüsebrühepulver 1 EL, Passierte Tomaten 500 ml.,Butter 3 EL, Mehl 2 EL, Sahne 150 ml, Lasagneplatte 1 Pck, Käse 200g, Käse 200g, Salz 1 EL, Pfeffer1 EL, Chilipulver 1 EL",
    "preparation": "Karotten, Champignons und Zwiebel schälen, schneiden und zuerst die Zwiebelwürfel in einer Pfanne anbraten, bis sie glasig sind. Danach das restliche Gemüse dazugeben und kurz mitbraten. 5 EL Milch dazugeben und den Rahmspinat darin erhitzen, bis die Blätter nicht mehr gefroren sind und die Rahmsoße leicht eingedickt ist. Jetzt den Frischkäse sowie das Gemüsebrühpulver dazugeben und gut verrühren. Fünf Minuten köcheln lassen, bis die Soße schön eingedickt ist. Zum Schluss die Knoblauchzehe dazu pressen und mit Salz, Pfeffer und Chili abschmecken. Das Spinatgemisch darf ruhig gut würzig sein, da der Spinat beim Backen relativ viel Salz.\\n\\nIn einem separaten Topf die Butter erhitzen, bis sie vollständig zerlaufen ist. Das Mehl unter Rühren hinzugeben und zu einer glatten Masse verrühren. Unter stetem Rühren nun die passierten Tomaten dazugeben, danach direkt die Sahne dazugießen und alles kurz aufkochen. Die Knoblauchzehe dazupressen und mit Salz und Pfeffer abschmecken. Auch hier muss nicht am Salz gespart werden.\\n\\nMit der Tomatensoße und dem Spinat dünn den Boden einer Auflaufform bedecken und jetzt abwechselnd Lasagneplatten, Spinatgemisch und Tomatensoße darin schichten. Mit der Soße abschließen und lückenlos mit Reibekäse bestreuen.\\n\\nBei 180 Grad Umluft ca. 30 Minuten backen. Nach dem Backen noch fünf bis zehn Minuten im ausgeschalteten Backofen stehen lassen, dann bleibt die Lasagne perfekt in Form und zerläuft nicht.\\n\\nTipp:\\nSehr lecker ist es auch, auf eine Schicht fein geschnittene Fetascheiben zu legen, bevor die nächste Lasagneplattenschicht kommt.", 
    "categories": ["Hauptspeise", "Gemüse", "Vegetarisch", "Auflauf", "Nudeln"],
    "createdbyuser": 0
  },
  {
    "id": 1,
    "name": "Feine Linsensuppe",
    "imageurl": "https://cdn.pixabay.com/photo/2018/10/10/22/28/lentil-soup-3738547_960_720.jpg",
    "averagetimeinminutes": 50,
    "difficulty": "normal",
    "createdat": 1609455600, 
    "ingredients":"",
    "preparation": "Möhre, Sellerie und Lauch in klitzekleine Würfel schneiden. Die Kartoffeln in Würfel mit einer Kantenlänge nicht über 5 mm schneiden.\\n\\nDie Linsen waschen, abtropfen lassen und mit der Gemüsebrühe 30 Minuten köcheln lassen.\\n\\nIn einem zweiten Topf die Butter schmelzen und das Gemüse mit den Kartoffeln kurz anschwitzen. Mit der Rinderbrühe ablöschen und 5 Minuten köcheln lassen. Die Linsen dazugeben und alles gut mischen. Mit Essig abschmecken.\\n\\nPetersilie oder Schnittlauch fein hacken und die gefüllten Teller damit garnieren.\\n\\nDies ist eine feine Variante für den Wochenanfang, wenn man am Wochenende viel Fleisch verzehrt hat.\\n\\nDeftiger, aber auch kalorienreicher wird die Suppe durch Zugabe von klein geschnittenem Bauchspeck oder geräucherten Mettenden.", 
    "categories": ["Suppe", "Hauptspeise"],
    "createdbyuser": 4
  },
  {
    "id": 2,
    "name": "Griechischer Bauernsalat",
    "imageurl": "https://cdn.pixabay.com/photo/2017/05/21/22/49/farmers-salad-2332580_960_720.jpg",
    "averagetimeinminutes": 15,
    "difficulty": "simple",
    "createdat": 1609455600, 
    "ingredients": "",
    "preparation": "Den Salat zerlegen, waschen, zerpflücken und abtropfen lassen. Die Tomaten waschen, Strünke entfernen und in dünne Scheiben schneiden. Gurke gründlich waschen, der Länge nach vierteln und in grössere Würfel schneiden. Die Paprikaschoten halbieren, putzen, waschen und in dünne Streifen schneiden. Die Zwiebeln pellen und in feine Ringe schneiden. Den Feta in mundgerechte Stücke würfeln\\n\\nFür die Marinade den Essig mit dem Salz, dem Pfeffer und dem Oregano verrühren, bis das Salz sich vollkommen gelöst hat. Dann erst das Olivenöl unterrühren.\\n\\nAlle Salatzutaten, ausser den Käse, in einer Schüssel vermengen, die Marinade zugeben und gut vermischen. Die Fetawürfel oben auf dem Salat verteilen.", 
    "categories": ["Salat", "Vegetarisch"],
    "createdbyuser": 3
  },
  {
    "id": 3,
    "name": "Schwarzwälderkirschtorte",
    "imageurl": "https://cdn.pixabay.com/photo/2021/03/08/19/15/black-forest-cake-6080070_960_720.jpg",
    "averagetimeinminutes": 75,
    "difficulty": "dificult",
    "createdat": 1609455600, 
    "ingredients": "",
    "preparation": "Es wird ein extra hoher Tortenring,- 8,5 -9 cm benötigt und eine 26er Backform. Den Schoko-Biskuitboden 1 - 2 Tage vorher backen.\\nDie Eier müssen Zimmertemperatur haben, damit sie sich gut schaumig aufschlagen lassen und um ein großes Volumen zu erhalten. Um einen sehr luftigen Biskuitboden zu erhalten, schlage ich die Eiermasse mindestens 25 - 30 Minuten. Weitere Zutaten unbedingt durch ein Sieb zugeben.\\n\\nBiskuitboden:\\n7 Eier mit einer Prise Salz auf höchster Stufe schlagen. Nach 5 Minuten 225 g Zucker zugeben und mindestens 20 - 25 Minuten weiter schlagen. In der Zwischenzeit 60 g Butter im Topf zerlassen und kurz abkühlen lassen. Ist die Eier/Zuckermasse schön dick und schaumig,dann 150 g Mehl, 25 g Kakao, 50 g. Speisestärke sowie 1 knappen Tl Backpulver, durch ein Sieb, langsam unterheben. Immer von außen nach innen. Ganz zum Schluss wird die zerlassene Butter ebenfalls vorsichtig unter gehoben.\\n\\nDen Backofen auf 190 Grad Ober/Unterhitze vorheizen.\\n\\nDie Backform auf keinen Fall ausfetten. Den Boden mit Backpapier auslegen. Die Teigmasse hineingeben und ca. 35 - 45 Minuten backen. Da jeder Backofen anders backt, bitte Stäbchenprobe machen und bis zum Boden hineinstechen. Bleibt kein Teig am Zahnstocher hängen, ist er gut.\\n\\nDen Tortenboden abkühlen lassen und mit einem Messer vorsichtig den Rand von der Form lösen. Den Tortenboden stürzen und vorsichtig das Backpapier entfernen und in Klarsichtfolie einwickeln und im Kühlschrank aufbewahren. So lässt er sich am nächsten Tag gut schneiden.\\n\\nBevor ich mit der Füllung anfange, schneide ich die passenden Böden zu: 1 mal einen von 2 cm und zweimal 1 cm hoch. Bitte gestürzt schneiden und von unten mit dem 2 cm Boden anfangen, da dieser später als unterer Boden für die Torte dient.\\n\\nDann bereite ich die Schokoladenraspeln vor. Bitte unbedingt selber machen, da diese feiner sind und eine gute Schwarzwälderkirschtorte ausmachen. Den Block Kuvertüre in die Hand nehmen, gestützt auf ein Brett, mit einem großen Messer, mit stumpfer Kante hauchzart abschaben. Anschließend in den Kühlschrank stellen.\\n\\nFüllung und Garnierung:\\n1 Liter Sahne steif schlagen und zum Schluss 70 g Zucker einrieseln lassen und die Sahne in den Kühlschrank stellen.\\n\\nDie Kirschen abgießen und den Kirschsaft im Topf auffangen. Den Kirschsaft mit einer guten Messerspitze Zimt und Zitronenabrieb und 60 g Zucker aufkochen. In den kochenden Kirschsaft 1 EL Kirschwasser einrühren. 35 g Speisestärke in eine kleine Schüssel geben und mit etwas von dem aufgekochten Kirschsaft anrühren. Alles zurück in den Topf geben und rührend kurz aufkochen lassen, bis die Masse gebunden ist. Die Kirschen unterheben und abkühlen lassen.\\n\\n7 Blatt Galante 10 Minuten in kaltem Wasser einweichen lassen und mit der Hand ausdrücken und in einem Topf erwärmen, bis diese ganz aufgelöst ist. Die flüssige Gelatine in eine Schüssel geben und mit etwas von der geschlagenen Sahne, 3 - 4 Löffel, mit dem Schneebesen zügig verrühren, damit die Gelatine nicht klumpt. Dann noch ein wenig Sahne zugeben und nochmals verrühren und alles komplett unter die Sahne heben.\\n\\nBitte den Tortenring direkt auf die Tortenplatte stellen.\\nDen ersten Tortenboden, 2 cm, in den Tortenring legen. Die Kirschen darauf verstreichen und 1 cm am Rand frei lassen. Dann mit einem Spachtel drei Häufchen Sahne auf die Kirschen geben und in den frei gelassenen Rand verstreichen.\\nDie Sahne, nicht allzu dick,über die ganzen Kirschen verstreichen. Darauf den zweiten Boden, 1cm, legen und mit Kirschwasser beträufeln. Hier halte ich die Öffnung mit einem Finger leicht zu und verteile das Kirschwasser über den Boden. Danach die Sahne fast bis zum Rand des Tortenringes füllen und den dritten Boden aufsetzen sowie diesen ebenso mit Kirschwasser beträufeln.\\nDen Tortenring entfernen und mit einem Spachtel die Sahne auf den Seiten und auf dem oberen\\nBoden schön glatt verstreichen. Die Torte für 2 Stunden in den Kühlschrank stellen.\\n\\nAbermals 400 ml Sahne mit einem Tütchen Vanillezucker und einem Tütchen Sahnesteif schlagen. Wer möchte kann die Sahne aber auch wieder mit Gelatine vermischen.\\n\\nDie Torte in 14 Stücke einteilen. Nun die Schokoraspeln oben auf der Torte verteilen, sowie an den Seiten. Für die Seiten benutze ich einen Spachtel und ziehe die Schokoraspeln von unten nach oben hoch. Hauchzarte Raspeln haften leichter.\\nZum Schluss die Torte mit Sahnehäubchen und Belegkirschen garnieren.", 
    "categories": ["Backen", "Torte"],
    "createdbyuser": 2
  },
  {
    "id": 4,
    "name": "Italienischer Pizzateig",
    "imageurl": "https://cdn.pixabay.com/photo/2017/05/25/21/22/pizza-2344399_960_720.jpg",
    "averagetimeinminutes": 15,
    "difficulty": "simple",
    "createdat": 1609455600, 
    "ingredients": "",
    "preparation": "Im lauwarmen Wasser und dem Olivenöl die Hefe mit dem Salz und Zucker auflösen. Dann das Mehl hinzufügen und einen glatten Teig kneten. Eine halbe Stunde an einem warmen Ort gehen lassen, zusammenkneten und abgedeckt im Kühlschrank 2 Tage ruhen lassen.\\n\\nNun kann man vom Teig eine herrlich frische Pizza herstellen. Belegen kann man diese nach Belieben, natürlich sollten die Tomatensoße und der Käse nicht fehlen.\\n\\nIch habe sie schon auf einem Blech sowie auf verschiedenen runden Pizzaformen gebacken. Sie wird immer supertoll und schmeckt original wie von meinem Lieblingsitaliener.\\n\\nWenn man die Menge entsprechend reduzieren möchte, ist das auch kein Problem. Die Menge der Hefe habe ich jedoch immer bei 40 g gelassen.\\n\\nAm besten gelingt die Pizza, wenn man den Ofen sehr gut auf der höchstmöglichen Temperatur vorheizt!\\n\\nDer Teig reicht für 6 runde Pizzen.\\nSo gelingt euch zu Hause die perfekte Pizza\\nWir zeigen euch im Pizzastein-Test 10 der besten Modelle, damit ihr auch zu Hause so nah wie möglich an den Genuss einer Steinofen-Pizza kommt.", 
    "categories": ["Hauptspeise", "Vegetarisch", "Vegan", "Backen"],
    "createdbyuser": 1
  }
]




app.get('/recipes', (req, res) =>{
        res.json(recipes)
});


app.get('/accounts', (req, res) =>{
    res.json(accounts)
});


app.get('/recipes/:id', (req, res) => {
    let recipe = recipes[req.params.id];
    res.json(recipe);
});


app.get('/accounts/:id', (req, res) => {
    let account = accounts[req.params.id];
    res.json(account);
});


app.post('/createrecipe', (req,res) => {

  let accountid;
  accounts.forEach(account => {
    if (account.email.toLowerCase() == req.body.createdbyuser.toLowerCase()) {
      accountid = account.id;
    }
  });

  if (accountid == null) {
    console.log("User email not found");
  }

    let recipe = {
      "id": recipes.length,
      "name": req.body.name,
      "imageurl": req.body.imageurl,
      "averagetimeinminutes": req.body.averagetimeinminutes,
      "difficulty": req.body.difficulty,
      "createdat": Date.now(), 
      "ingredients": req.body.ingredients,
      "preparation": req.body.preparation, 
      "categories": req.body.categories,
      "createdbyuser": accountid
    }

    recipes.push(recipe);

    res.sendStatus(200);
});


app.post('/accountmgr/register', (req,res) => {

  let accountexists = false;
  accounts.forEach(account => {
    if(account.email.toLowerCase() === req.body.email.toLowerCase())
    {
      accountexists = true;
    }
  })

  if (accountexists) {
    res.sendStatus(400);
  }
  else {
    let account = {
      "id": accounts.length,
      "email": req.body.email,
      "password": req.body.password,
      "createdat": Date.now(),
      "createdrecipes": [],
      "favoriterecipes":[]
    };
  
    accounts.push(account);
  
      res.sendStatus(200);
  }
});


app.post('/accountmgr/newpassword', (req,res) => {
  let acc;
  accounts.forEach(account => {
    if(account.email.toLowerCase() === req.body.email.toLowerCase())
    {
      acc = account;
    }
  })

  if (acc != null) {
    acc.password = req.body.password;
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }
});


app.listen(8000);