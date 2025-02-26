# L'Occitane : Project PHA5E Internship

Ce projet a pour but d'évaluer mes compétences en dev Front-End. 
Il s'agit d'une publicté évènementielle pour `L'Occititane`, dont la [maquette visuel](https://www.figma.com/design/R3xwRYKHtr3cgwQpjJ12Bo/OEP---Exercice?node-id=2-80&p=f&t=9KimK0jooNEoXplh-0) est fournie par [PHA5E](https://www.pha5e.com/fr).

## 1 - INTRODUCTION
J'ai eu le temps de remplir entièrement le cahier des charges concernant l'introduction. 
 
Voici les libertés prises pour l'introduction du site : 
### Background
J'ai changé l'image de fond, car celle choisie sur la maquette était d'une qualité insuffisante pour une image pleine écran, de même pour la version originale provenant du site de L'Occitane.  
J'ai donc choisi une autre image provenant du site officiel, que j'ai éditée sur Photoshop afin de retirer le texte de l'image, ajouté un teint plus jaune et du grain pour me rapprocher de l'ambiance imaginée par le designer.

### Transitions
J'ai ajouté du `blur` lors des transitions pour les fluidifier.  
> Si c'était un véritable projet, j'aurais également animé le cercle jaune de sorte à ce qu'il se "dessine" sur la page.

## 2 - MENU
Le menu est la derniere partie dont je me suis occupé, je n'ai malheureusement pas eu le temps de remplir toutes les consignes présentes sur la maquette. Il manque le défilement des titres, ainsi que la transition avec zoom sur les images. 

Voici les libertés prises sur le menu : 
### Transitions 
J'ai créé une transition fluide faisant disparaître l'introduction et apparaître le menu, avec un léger mouvement vertical du background pour rendre plus naturelle l'apparition du menu par le bas de l'écran.
> Avec plus de temps, j'aurais amélioré le drag en ajoutant de l'inertie, ou au contraire en forçant les slides à se centrer de sorte à unifier le mouvement.

### Tutoriel
J'ai préféré écrire l'explication du `drag` en français, car le site est entièrement rédigé en français et destiné à un publique qui n'est pas nécessairement bilingue. De plus, des personnes âgées ou non formées au langage informatique pourraient ne pas comprendre aisément la notion de *Drag*.  
J'ai également ajouté une animation aux formes rondes pour renforcer la notion de mouvement.  
> Dans un véritable projet j'aurais dessiner puis mis en place une animation plus explicite du mouvement à la places des formes rondes pour que ce soit plus intuitif.

## 3 - VUE INTÉRACTIVE
J'ai eu le temps de remplir entièrement le cahier des charges concernant la vue intéractive. 

Voici les libertés prises sur le menu : 
### Animation des boutons jaune et blanc
Étant donné qu'aucune consigne n'était spéficifée sur l'animation des cercles, j'ai moi même imaginé une animation lors du `hover`, du `active` et lors du mouvement de drag.
> Avec plus de temps, j'aurais aimé créer un léger aperçu de la page contenu lorse que l'on passe sur le cercle blanc. Le cercle se déformerait et s'agrandirait légèrement pour laisser entrevoir le contenu à l'intérieur. Ça serait plus agréable et immersif pour l'utilisateur.

### Animation du changement de vue
J'ai implémenté une animation lors du clic sur le cercle jaune, faisant tourner la scène horizontalement de 90 degrés pendant que la scène change à l'aide d'une transition par opacité. Pour passer fluidement d'une scène à l'autre, j'ai dû créer une 2ème sphère de sorte à pouvoir afficher 2 materiaux simultanément.
> Lors d'un un vrai projet j'aurais paramétré la sphère de sorte à ce qu'elle accepte un mélange de 2 matériaux, ce qui est plus long à coder mais plus propre et optimisé.

## 4 - PAGE DE CONTENU
J'ai eu le temps d'implémenter toutes les fonctionnalités prévues pour la page de contenu.

Voici les libertés prises sur cette section : 
### Animation
J'ai ajouté une animation entre la page interactive et celle de contenu. Il y a un fondu au blanc suivi d'une animation `slide` sur la page de contenu, rendant la transition fluide et naturelle. 
### Mise en page
J'ai réduit la taille de l'image centrale, car le respect des dimensions imposées par la maquette faisait qu'à l'arrivé sur la page on ne voyait que l'image et aucun contenu, ce qui peut être déroutant pour l'utilisateur ainsi qu'une perte de place.  
J'ai également justifié le texte, afin d'obtenir un rendu plus harmonieux et agréable. 

## 5 - TECHNOLOGIES UTILISÉES
- `Vite` : Initialisation et bundling du projet.
- `React & TypeScript` : Base de l'application.
- `GSAP` : Gestion des animations de façon précise à l'aide de timelines.
- `Three.js & @react-three/fiber` : Intégration du contenu 3D.
- `Marquee` : Pour la création d'un titre défilant.
- `React Router` : Gestion de la navigation entre les pages.
- `react-icons` : Pour les [icons](https://react-icons.github.io/react-icons/) du projet.
- `SASS` : Pour une écriture CSS plus modulable et lisible.