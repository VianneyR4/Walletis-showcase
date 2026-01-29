# Walletis - FinTech Premium en RD Congo

Une plateforme financière moderne et premium pour la République Démocratique du Congo, avec support multilingue et thème sombre.

## 🚀 Fonctionnalités

### Fonctionnalités Principales
- **Support Multilingue**: Basculement transparent entre Français et Anglais
- **Mode Sombre**: Thème clair/sombre avec transitions fluides
- **Design Responsive**: Optimisé pour desktop, tablette et mobile
- **UI Premium**: Interface moderne avec dégradés et animations
- **Tableau de Bord Interactif**: Visualisation de données financières en temps réel
- **Accessibilité**: Conforme WCAG avec HTML sémantique et labels ARIA

### Fonctionnalités Techniques
- **HTML/CSS/JavaScript Pur**: Aucune dépendance externe requise
- **Local Storage**: Sauvegarde des préférences utilisateur
- **Animations Fluides**: Animations CSS et JavaScript
- **Raccourcis Clavier**: Raccourcis pour utilisateurs avancés
- **Performance Optimisée**: Débouncing et rendu efficace

## 📁 Structure du Projet

```
Walletis/
├── index.html          # Structure HTML principale
├── styles/
│   └── main.css        # Styles CSS avec support du mode sombre
├── js/
│   └── main.js         # Fonctionnalités JavaScript
├── assets/             # Assets statiques (images, etc.)
└── README.md           # Documentation du projet
```

## 🎨 Système de Design

### Palette de Couleurs
- **Primaire**: Émeraude (#10B981)
- **Clair**: #FAFAFA (fond), #1F2937 (texte)
- **Sombre**: #050505 (fond), #F9FAFB (texte)
- **Accents**: Gradients et ombres premium

### Typographie
- **Font Families**: Inter (sans-serif), Newsreader (serif), Space Grotesk (mono)
- **Poids**: 300 (Light) à 800 (Extra Bold)

### Points de Rupture
- **Mobile**: < 768px
- **Tablette**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Installation et Utilisation

### Démarrage Rapide
1. Clonez ou téléchargez les fichiers du projet
2. Ouvrez `index.html` dans votre navigateur web préféré
3. Aucune configuration supplémentaire requise!

### Développement Local
Pour le développement local avec rechargement automatique:
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si http-server est installé)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis visitez `http://localhost:8000` dans votre navigateur.

## 🌐 Aperçu des Fonctionnalités

### Changement de Langue
- Cliquez sur le bouton FR/EN dans l'en-tête
- Tous les éléments de l'interface se traduisent instantanément
- Préférence sauvegardée dans le stockage local

### Thème Sombre
- Cliquez sur l'icône soleil/lune dans l'en-tête
- Transition fluide entre les modes clair et sombre
- Préférence persistante entre les sessions

### Éléments Interactifs
- **Héro**: Animation de carte avec effet 3D
- **Grille de Fonctionnalités**: Animations au survol
- **Aperçu Tableau de Bord**: Visualisation de données simulées
- **Boutons**: Effets ripple et états de chargement
- **Notifications**: Toast-style pour feedback utilisateur

### Raccourcis Clavier
- `Ctrl/Cmd + D`: Basculer le thème
- `Ctrl/Cmd + L`: Changer la langue

## 🎯 Composants

### En-tête
- Logo avec texte en dégradé
- Boutons de changement de langue et thème
- Navigation fixe avec effet de flou

### Section Héro
- Titre accrocheur et sous-titre
- Boutons d'appel à l'action
- Aperçu de carte virtuelle animée

### Section Fonctionnalités
- Cartes de fonctionnalités avec icônes
- Animations au survol
- Grille responsive

### Tableau de Bord
- Carte de solde avec indicateur de tendance
- Graphique des dépenses mensuelles
- Liste des transactions récentes

### Pied de Page
- Informations sur l'entreprise
- Liens de navigation
- Réseaux sociaux

## 🚀 Performance

### Techniques d'Optimisation
- Transitions CSS pour animations fluides
- Événements scroll avec debouncing
- Intersection Observer pour animations différées
- Manipulation DOM efficace
- Dépendances externes minimales

### Support Navigateur
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔒 Considérations de Sécurité
- Aucun appel API externe en mode démo
- Stockage local pour préférences uniquement
- HTML sémantique pour accessibilité
- Validation des entrées prête pour formulaires

## 🌟 Améliorations Futures

### Fonctionnalités Prévues
- [ ] Intégration API temps réel
- [ ] Système d'authentification utilisateur
- [ ] Visualisations avancées
- [ ] Fonctionnalité d'export
- [ ] Version mobile native
- [ ] Support de langues additionnelles

### Améliorations Techniques
- [ ] Service Worker pour mode hors-ligne
- [ ] Web Components pour modularité
- [ ] Migration TypeScript
- [ ] Suite de tests unitaires
- [ ] Tests E2E avec Playwright

## 🤝 Contribuer

1. Fork le dépôt
2. Créer une branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committer vos changements (`git commit -m 'Add amazing feature'`)
4. Pusher vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour détails.

## 📞 Contact

- Lien du Projet: [https://github.com/yourusername/walletis](https://github.com/yourusername/walletis)
- Issues: [https://github.com/yourusername/walletis/issues](https://github.com/yourusername/walletis/issues)

---

**Walletis** - FinTech Premium pour le Monde Moderne 🌍💳
