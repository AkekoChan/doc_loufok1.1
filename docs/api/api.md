---
sidebar_position: 1
---

# Resources

Toutes les informations sur les endpoints de l'API

---

### **Endpoint `/api/cadavres`**

**Méthode HTTP :** `GET`

**Description :** Cette méthode récupère la liste des cadavres exquis terminés.

**Réponse :**

```json
{
  "cadavres": [
    {
      "id_cadavre": 1,
      "titre": "Maison hantée",
      "likes": 10,
      "auteur": "example@email.com",
      "contributeurs": ["Contributeur1", "Contributeur2"],
      "premiere_contribution": "Il était une fois..."
    },
    {
      "id_cadavre": 2,
      "titre": "Voyage intergalactique",
      "likes": 5,
      "auteur": "another@example.com",
      "contributeurs": ["Contributeur3", "Contributeur4"],
      "premiere_contribution": "Dans une galaxie lointaine..."
    }
  ]
}
```

**Types de données :**

- `id_cadavre` (entier) : L'identifiant unique du cadavre exquis.
- `titre` (chaîne de caractères) : Le titre du cadavre exquis.
- `likes` (entier) : Le nombre de likes du cadavre.
- `auteur` (chaîne de caractères) : L'adresse e-mail de l'auteur du cadavre.
- `contributeurs` (tableau de chaînes de caractères) : La liste des contributeurs au cadavre.
- `premiere_contribution` (chaîne de caractères) : Le texte de la première contribution du cadavre.

---

### **Endpoint `/api/cadavre/{id}`**

**Méthode HTTP :** `GET`

**Description :** Cette méthode récupère les détails d'un cadavre exquis terminé en fonction de son identifiant.

**Paramètres de l'URL :**

- `id` (entier) : L'identifiant unique du cadavre exquis.

**Réponse :**

```json
{
  "total_contributions": 15,
  "nb_jours": 7,
  "nb_likes": 20,
  "auteur": "example@email.com",
  "contributions": [
    "Il était une fois...",
    "Dans une forêt sombre..."
    // ... autres contributions
  ],
  "contributeurs": ["Contributeur1", "Contributeur2", "Contributeur3"]
}
```

**Types de données :**

- `total_contributions` (entier) : Le nombre total de contributions dans le cadavre.
- `nb_jours` (entier) : Le nombre de jours écoulés depuis le début du cadavre.
- `nb_likes` (entier) : Le nombre total de likes du cadavre.
- `auteur` (chaîne de caractères) : L'adresse e-mail de l'auteur du cadavre.
- `contributions` (tableau de chaînes de caractères) : La liste des contributions au cadavre.
- `contributeurs` (tableau de chaînes de caractères) : La liste des contributeurs au cadavre.

**Erreurs possibles :**

- **404 Not Found :** Retourné si le cadavre exquis avec l'ID spécifié n'est pas trouvé ou n'est pas terminé.

---

### **Endpoint `/api/cadavre/like`**

**Méthode HTTP :** `POST`

**Description :** Cette méthode permet d'ajouter un "J'aime" à un cadavre exquis terminé.

**Paramètres de la requête :**

- `id` (entier) : L'identifiant unique du cadavre exquis.

**Réponse :**

- **200 OK :** Retourné si le "J'aime" a été ajouté avec succès.
- **400 Bad Request :** Retourné si l'ID du cadavre n'est pas fourni dans la requête.
- **404 Not Found :** Retourné si le cadavre exquis avec l'ID spécifié n'est pas trouvé ou n'est pas terminé.

**Types de données :**

- Aucune donnée n'est renvoyée dans le corps de la réponse.

**Exemple de requête :**

```json
{
  "id": 123
}
```

**Erreurs possibles :**

- **400 Bad Request :** Retourné si l'ID du cadavre n'est pas fourni dans la requête.
- **404 Not Found :** Retourné si le cadavre exquis avec l'ID spécifié n'est pas trouvé ou n'est pas terminé.

---
