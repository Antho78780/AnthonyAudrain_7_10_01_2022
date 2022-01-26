<!DOCTYPE html>
<html lang = "fr">
    <head>
        <title>inscription Groupomania</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=500, initial-scale=1">  
        <link rel="stylesheet"  href="style.css">
    </head>
    <body>
        <section>
            <div>
                <img src = "images/icon-left-font-monochrome-black.svg">
                <h1>Inscrivez vous pour accéder au site web</h1>
            </div>
            <label>
                <form action="" method="post" id ="formInscription">
                    <input type="text" name="prenom" placeholder="prénom" class="modifChampInscription" id="prenom" value="" required>
                    <input type="text" name="nom" placeholder="nom" class="modifChampInscription" id="nom" value="" required>
                    <input type="email" name="email" placeholder="e-mail" class="modifChampInscription" id="email" value="" required>
                    <input type="password" name="password" placeholder="password" class="modifChampInscription" id="password" value="" required>
                    <input type="submit" value="Suivant" class="buttonSuivant">
                </form>
            </label>
        </section>
            <script src="js/accueil.js"></script>;
        </body>
</html>