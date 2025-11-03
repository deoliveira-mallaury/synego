# 🚀 Projet Synégo

## 🎯 Description du Projet

**Synégo** est la plateforme numérique officielle de Youcef Tahri, coach et formateur, dédiée à la vente de formations en ligne, à l'offre de sessions de coaching et à la mise à disposition de ressources gratuites.

L'objectif principal est de fournir un site **professionnel, responsive, performant et optimisé pour le référencement (SEO)**, respectant strictement la charte graphique établie.

---

## 🛠️ Stack Technique

Le projet est entièrement bâti sur un stack moderne pour garantir performance, maintenabilité et une expérience utilisateur optimale.

| Élément       | Technologie                                         | Détails                                                                                                                |
| :------------ | :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Framework** | **Next.js** (dernière version stable)               | Orienté production, Server-Side Rendering (SSR) et Static Site Generation (SSG).                                       |
| **Styling**   | **Tailwind CSS**                                    | Framework CSS utility-first pour un développement rapide et hautement personnalisable, conforme à la charte graphique. |
| **Langage**   | **JavaScript/TypeScript**                           | (Assumer TypeScript pour un projet Next.js moderne)                                                                    |
| **Dépôt**     | `https://github.com/deoliveira-mallaury/synego.git` | Dépôt officiel du code source.                                                                                         |

---

## ⚙️ Démarrage Local

Suivez ces étapes pour cloner le projet et le lancer en local.

### Prérequis

- Node.js (LTS recommandée)
- npm ou Yarn

### Installation

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/deoliveira-mallaury/synego.git](https://github.com/deoliveira-mallaury/synego.git)
    cd synego
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Variables d'Environnement :**
    Créez un fichier `.env.local` à la racine du projet. Ajoutez-y les clés d'API (Stripe, etc.) nécessaires au fonctionnement en local.

4.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    Le projet sera accessible à l'adresse : `http://localhost:3000`.

---

## 🎨 Charte Graphique et Design

Toute implémentation de composant ou de page doit se conformer à la charte de design fournie.

### Typographie

| Police         | Utilisation                                |
| :------------- | :----------------------------------------- |
| **Montserrat** | Police principale pour l'ensemble du site. |

### Palettes de Couleurs (Configuration Tailwind)

| Nom            | Code Hexadécimal | Rôle                                                                |
| :------------- | :--------------- | :------------------------------------------------------------------ |
| **Primaire**   | `#0A1D35`        | Fondations, textes principaux, éléments structurels (Bleu profond). |
| **Secondaire** | `#F2EBDC`        | Arrière-plans clairs, zones de contenu (Ivoire/Blanc cassé).        |
| **Accent 1**   | `#6CAED6`        | Boutons d'action, liens, mises en évidence (Bleu clair).            |
| **Accent 2**   | `#D9C9B4`        | Éléments décoratifs, style "chaleureux" (Champagne/Doré pâle).      |
| **Accent 3**   | `#D0E7F5`        | Arrière-plans légers, ombres (Bleu diamant).                        |

### Principes de Design

- **Style :** Épuré, chaleureux, axé sur le bien-être.
- **Accessibilité :** Doit être **responsive** (Mobile-First approach recommandé).
- **Mode :** Mode clair par défaut. (Le mode sombre est prévu pour une version ultérieure).

---

## 🔒 Fonctionnalités et Intégrations Clés

### Pages Principales

Le site doit comporter les pages statiques et dynamiques suivantes :

- `/` (Accueil)
- `/a-propos` (À propos de nous)
- `/coaching` (Se coacher)
- `/formations` (Se former - Catalogue)
- `/boite-a-outils` (Ressources gratuites)
- `/contact` (Nous contacter)
- `/mentions-legales`
- `/cgv` (Conditions Générales de Vente)
- `/politique-confidentialite`

### Intégrations Techniques

| Fonctionnalité           | Outil/Plateforme | Description                                                                                                   |
| :----------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------ |
| **Paiement E-commerce**  | **Stripe**       | Gestion des transactions pour l'achat de formations.                                                          |
| **Prise de Rendez-vous** | **Calendly**     | Intégration pour la réservation des sessions de coaching. (Créneaux fixes : Lundi, Mercredi, Samedi à 10h30). |
| **Espace Membre**        | (À développer)   | Inscription/Connexion et gestion des accès (coaching vs. formation).                                          |
| **Post-Achat**           | Skool ou Podia   | Redirection vers la plateforme de formation/communauté externe après l'achat.                                 |
| **Conformité**           | (À développer)   | Gestion des cookies et du consentement (RGPD).                                                                |
| **Administration**       | (À développer)   | Interface CRUD simple pour la gestion des formations, des inscrits et des ressources téléchargeables.         |
