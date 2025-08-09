> ⚠️ **Attention** : ne fais plus les mêmes bêtises que la dernière fois. Sois posé quand tu travailles et essaie de comprendre ce qu'on te demande de faire. L'objectif n'est pas juste de trouver une solution, mais surtout de bien comprendre l'énoncé.

# 📋 Exercice 5 - Liste de tâches interactive

## 🎯 Objectif :

Créer une liste de tâches où l'on peut ajouter des éléments et les marquer comme terminés.

---

## ✅ Ce que la page doit faire :

1. Afficher un titre "Ma liste de tâches"
2. Avoir un champ de saisie pour écrire une nouvelle tâche
3. Un bouton "Ajouter" pour ajouter la tâche à la liste
4. Afficher la liste des tâches
5. Pouvoir cliquer sur une tâche pour la marquer comme terminée (barrer le texte)

---

## 🏷️ **CLASSES ET IDS OBLIGATOIRES** (À RESPECTER EXACTEMENT) :

### HTML - IDs requis :
- `id="main-title"` : pour le titre principal
- `id="task-input"` : pour le champ de saisie
- `id="add-btn"` : pour le bouton d'ajout
- `id="task-list"` : pour la liste des tâches (balise `<ul>`)

### CSS - Classes requises :
- `.container` : pour le conteneur principal
- `.input-section` : pour la section contenant le champ et le bouton
- `.task-item` : pour chaque élément de tâche dans la liste
- `.completed` : pour les tâches marquées comme terminées
- `.btn-primary` : pour styliser le bouton d'ajout

---

## 📂 Fichiers attendus :

### 📁 Structure attendue :

```
exercice-5/
├── index.html
├── style.css
└── script.js
```

### 📄 Contenu minimal requis :

#### `index.html` doit contenir :
```html
<!-- Titre avec id="main-title" -->
<!-- Div avec class="container" -->
<!-- Section avec class="input-section" -->
<!-- Input avec id="task-input" -->
<!-- Bouton avec id="add-btn" et class="btn-primary" -->
<!-- Liste ul avec id="task-list" -->
```

#### `style.css` doit styler :
- `.container` : centrage et espacement
- `.input-section` : disposition du champ et bouton
- `.task-item` : style des éléments de liste
- `.completed` : texte barré et couleur différente
- `.btn-primary` : style du bouton

#### `script.js` doit :
- Utiliser `getElementById()` pour récupérer les éléments par leurs IDs
- Ajouter la classe `task-item` à chaque nouvelle tâche créée
- Ajouter/retirer la classe `completed` quand on clique sur une tâche

---

## ✨ Bonus (facultatif) :

* Ajouter un bouton "Supprimer" sur chaque tâche avec la classe `.delete-btn`
* Compter le nombre de tâches terminées avec un élément `id="counter"`
* Empêcher d'ajouter des tâches vides

---

## 🔍 **POINTS DE VÉRIFICATION** :

Ton enseignant vérifiera que tu as bien utilisé :
- ✅ Tous les IDs demandés (exactement comme écrit)
- ✅ Toutes les classes demandées
- ✅ `getElementById()` dans le JavaScript
- ✅ `classList.add()` et `classList.toggle()` pour manipuler les classes

---

## 🚀 Livrable attendu

1. Crée un dossier `exercice-5`
2. Mets les fichiers dedans
3. Ajoute-le à ton dossier principal `exercices-html-css-js-stage-3`
4. **IMPORTANT** : Vérifie bien que tu as utilisé tous les IDs et classes demandés !
5. Compresse le tout en `.zip` et envoie-le

---

> 🕒 Temps estimé : 2 jours

> ⚠️ **RAPPEL IMPORTANT** : Cette fois, on vérifie précisément le respect des noms de classes et d'IDs. Relis bien les consignes avant de commencer !