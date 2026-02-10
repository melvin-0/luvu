<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For You, Always ❤️</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="cinematic">
        <h1>This isn’t the end… <br> it’s the beginning ❤️</h1>
    </div>

    <div id="eyesOverlay" onclick="closeEyesReveal()">
        <p>Now open your eyes…</p>
        <img src="assets/firstpicc.jpg" alt="My favorite view">
    </div>

    <audio id="bgMusic" loop>
        <source src="assets/epidivanthayo.mp3" type="audio/mpeg">
    </audio>

    <button class="music-btn" onclick="toggleMusic()">🎶 Play Music</button>
    <button class="night-btn" onclick="toggleNight()">🌙 Night Mode</button>

    <section class="fade">
        <h1>Dear Hridumma</h1>
        <p>Idhe verum ore website alla <br> enik enghne ente feelings express chyanonn ariyilla <br> ee website ninak vendiyane ninakk mathram <br> I MISS YOU </p>
    </section>

    <section class="fade">
        <h2>Our Story</h2>
        <p>Hridumma ninne njan adhyam kanunne ore whatsapp status koodeyane anne <br>
    ninne enikk ishtayi nammal samsarich koree njn ninne nallapole manasilakki<br>
    enee adhyayit ore aal care chynn enet karyangal okke anweshikunn adhokke<br>
    ente lifil firttime appo njan thirumanichu you are the one for me ennu.<br>
    nammal koore life spend chythu happy aayirunn appo ore 1half years break<br>
    The worst dicition i ever take in my life taking a break ente thettane <br>
    ente mathram ninne njan kore vishamipichu koree njn karanam ninte life onnum<br>
    aakandann karuthi ninne njan avoid chyunna pole chythitumm enne konne pattanghjitum<br>
    anghne okke chyendivannu but you are the one for me and forever verarkum <br>
    ninak vendi mathram ahne njan mariyathe i change my life for u as you wish <br>
    i am really happy to be with you really love you hridumma.   ..</p>
    </section>

    <section class="fade">
        <h2>A Moment Frozen in Time</h2>
        <video controls>
            <source src="assets/us234.mp4" type="video/mp4">
        </video>
    </section>

    <section class="fade">
        <h2>US</h2>
        <div class="slideshow">
            <img src="assets/IMG_5486.jpg" class="active">
            <img src="assets/IMG_6194.jpg">
            <img src="assets/us123.jpg">
        </div>
    </section>

    <section class="fade">
        <h2>Why I Love You</h2>
        <div class="reasons">
            <div class="card">Ne ente ellam ahne</div>
            <div class="card">The girl who need me to get sleep</div>
            <div class="card">I cant be without you..</div>
            <div class="card">The girl doesn't judge me</div>
            <div class="card">She made me a better person.</div>
            <div class="card">Ente ella downfallilum koode ninnathine</div>
        </div>
    </section>

    <section class="fade">
        <h2>Just One More Thing</h2>
        <button onclick="openEyesReveal()">Close your eyes for a moment ❤️</button>
    </section>

    <section class="fade">
        <h2>One Last Question</h2>
        <p>Will you be my Valentine? 💖</p>
        <div style="position:relative;height:180px; max-width:300px; margin:auto;">
            <button onclick="yesEnding()">Yes 💕</button>
            <button id="noBtn" style="position:absolute;left:60%;">No 🙃</button>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
