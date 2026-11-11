# La Backyard Daumesnil — site web

Site statique (HTML/CSS/JS, aucun outil à installer). Ouvrir `index.html` dans un navigateur pour le voir.

## Modifier
- **Couleurs et typo** : uniquement `css/theme.css`.
- **Textes** : `index.html`.
- **Vidéo teaser** : voir le commentaire « VIDÉO TEASER » dans `index.html` (YouTube ou fichier dans `assets/video/`).
- **Avatar rond** (logo + en-têtes des cartes « post ») : déposer `assets/images/avatar.jpg` (photo carrée, ex. le temple de l'île de Reuilly). Sans fichier, un rond vert s'affiche.
- **Photos** : déposer dans `assets/images/` puis remplacer les `<figure>` de la section Galerie.
- **Date/heure du compte à rebours** : `js/main.js`.

## Mettre en ligne (GitHub Pages, gratuit)
1. Créer un dépôt GitHub et y pousser ce dossier.
2. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
3. Le fichier `CNAME` indique déjà le domaine. Chez le registrar du domaine, ajouter :
   - 4 enregistrements `A` sur `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - un `CNAME` sur `www` → `<utilisateur>.github.io`
4. Une fois le DNS propagé, cocher « Enforce HTTPS ».
