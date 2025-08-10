
# Orthopro — Maquette privée

Version Next.js + Tailwind, protégée par **Basic Auth** pour rester privée.

## Accès privé (par défaut)
- Utilisateur : **private**
- Mot de passe : **orthopro**

> Sur Vercel, changez ces valeurs en variables d'environnement `BASIC_AUTH_USER` et `BASIC_AUTH_PASS`.

## Lancer en local
```bash
npm install
npm run dev
# http://localhost:3000  (navigateur) — les identifiants s'appliquent aussi en local
```

## Déployer sur Vercel (privé)
1. Créez un dépôt GitHub et poussez ce dossier.
2. Sur Vercel : **New Project** → importez le dépôt.
3. Dans **Settings → Environment Variables**, ajoutez :  
   - `BASIC_AUTH_USER` = votre_identifiant  
   - `BASIC_AUTH_PASS` = votre_mot_de_passe
4. Déployez — le site sera protégé par mot de passe.
5. Le site inclut `robots.txt` (Disallow) et meta `noindex,nofollow`.

## Personnalisation
- Éditez `pages/index.tsx` : contenu et sections.
- Tailwind : `styles/globals.css`, `tailwind.config.js`.
- Images : mettez vos visuels dans `public/` puis utilisez-les dans les sections.

---

*Généré pour Mounir — cœur de métier orthopro.*
