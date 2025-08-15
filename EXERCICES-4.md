> ⚠️ **Attention** : ne fais plus les mêmes bêtises que la dernière fois. Sois posé quand tu travailles et essaie de comprendre ce qu'on te demande de faire. L'objectif n'est pas juste de trouver une solution, mais surtout de bien comprendre l'énoncé.

# 🧮 Exercice 6 - Calculatrice simple interactive

## 🎯 Objectif :
Créer une calculatrice simple qui permet d'effectuer les 4 opérations de base (addition, soustraction, multiplication, division).

---

## ✅ Ce que la page doit faire :
1. Afficher un titre "Ma Calculatrice"
2. Avoir deux champs de saisie pour entrer les nombres
3. Quatre boutons pour les opérations : +, -, ×, ÷
4. Un bouton "=" pour calculer le résultat
5. Afficher le résultat du calcul
6. Un bouton "Reset" pour remettre à zéro

---

## 🏷️ **CLASSES ET IDS OBLIGATOIRES** (À RESPECTER EXACTEMENT) :

### HTML - IDs requis :
- `id="calc-title"` : pour le titre principal
- `id="first-number"` : pour le premier champ de saisie
- `id="second-number"` : pour le deuxième champ de saisie
- `id="add-btn"` : pour le bouton addition (+)
- `id="subtract-btn"` : pour le bouton soustraction (-)
- `id="multiply-btn"` : pour le bouton multiplication (×)
- `id="divide-btn"` : pour le bouton division (÷)
- `id="equals-btn"` : pour le bouton égal (=)
- `id="reset-btn"` : pour le bouton reset
- `id="result-display"` : pour afficher le résultat

### CSS - Classes requises :
- `.calc-container` : pour le conteneur principal
- `.input-section` : pour la section contenant les champs de saisie
- `.operations-section` : pour la section contenant les boutons d'opération
- `.number-input` : pour styliser les champs de saisie des nombres
- `.operation-btn` : pour les boutons d'opération (+, -, ×, ÷)
- `.action-btn` : pour les boutons d'action (= et Reset)
- `.result-area` : pour la zone d'affichage du résultat
- `.error` : pour afficher les messages d'erreur (division par 0, etc.)

---

## 📂 Fichiers attendus :

### 📁 Structure attendue :
```
exercice-6/
├── index.html
├── style.css
└── script.js
```

### 📄 Contenu minimal requis :

#### `index.html` doit contenir :
```html
<!-- Titre avec id="calc-title" -->
<!-- Div avec class="calc-container" -->
<!-- Section avec class="input-section" -->
<!-- Input avec id="first-number" et class="number-input" -->
<!-- Input avec id="second-number" et class="number-input" -->
<!-- Section avec class="operations-section" -->
<!-- Boutons d'opération avec leurs IDs et class="operation-btn" -->
<!-- Boutons d'action avec leurs IDs et class="action-btn" -->
<!-- Div avec id="result-display" et class="result-area" -->
```

#### `style.css` doit styler :
- `.calc-container` : centrage et espacement
- `.input-section` : disposition des champs de saisie
- `.operations-section` : disposition des boutons en grille
- `.number-input` : style des champs de saisie
- `.operation-btn` : style des boutons d'opération
- `.action-btn` : style des boutons d'action
- `.result-area` : zone d'affichage du résultat
- `.error` : style pour les messages d'erreur

#### `script.js` doit :
- Utiliser `getElementById()` pour récupérer tous les éléments par leurs IDs
- Ajouter des event listeners sur tous les boutons
- Effectuer les calculs selon l'opération choisie
- Afficher le résultat dans l'élément `result-display`
- Gérer les erreurs (division par zéro, valeurs invalides)
- Ajouter la classe `error` en cas d'erreur

---

## ✨ Bonus (facultatif) :
* Ajouter un historique des calculs avec la classe `.history-item`
* Permettre les calculs avec des décimales
* Ajouter un bouton "C" pour effacer uniquement le dernier nombre saisi
* Ajouter des animations sur les boutons avec la classe `.animated`

---

## 🔍 **POINTS DE VÉRIFICATION** :
Ton enseignant vérifiera que tu as bien utilisé :
- ✅ Tous les IDs demandés (exactement comme écrit)
- ✅ Toutes les classes demandées
- ✅ `getElementById()` dans le JavaScript
- ✅ `addEventListener()` pour gérer les clics
- ✅ `classList.add()` et `classList.remove()` pour manipuler les classes
- ✅ Gestion des erreurs (division par 0, valeurs non numériques)

---

## 🚀 Livrable attendu
1. Crée un dossier `exercice-6`
2. Mets les fichiers dedans
3. Ajoute-le à ton dossier principal `exercices-html-css-js-stage-3`
4. **IMPORTANT** : Vérifie bien que tu as utilisé tous les IDs et classes demandés !
5. Teste toutes les opérations et la gestion d'erreur
6. Compresse le tout en `.zip` et envoie-le

---

> 🕒 Temps estimé : 2-3 jours
> ⚠️ **RAPPEL IMPORTANT** : Cette fois, on vérifie précisément le respect des noms de classes et d'IDs, ainsi que la logique de calcul. Relis bien les consignes avant de commencer !