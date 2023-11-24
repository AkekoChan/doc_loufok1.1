---
sidebar_position: 4
---

# UserEntity

## Propriétés

### Propriétés pour les utilisateurs normaux (non-admins)

| Nom       | Type    | Description                                  |
|-----------|---------|----------------------------------------------|
| `nom`     | string  | Nom de l'utilisateur.                        |
| `sexe`    | string  | Genre de l'utilisateur.                       |
| `bdate`   | string  | Date de naissance de l'utilisateur.          |

### Propriétés communes pour tous les utilisateurs

| Nom            | Type    | Description                                  |
|----------------|---------|----------------------------------------------|
| `password`     | string  | Mot de passe de l'utilisateur.               |
| `is_admin`     | bool    | Indique si l'utilisateur est un administrateur.|
| `mail`         | string  | Adresse e-mail de l'utilisateur.              |
| `id`           | int     | Identifiant de l'utilisateur.                 |

### Propriétés dynamiques en fonction du type d'utilisateur

| Nom            | Type    | Description                                  |
|----------------|---------|----------------------------------------------|
| `id_user`      | int     | Identifiant de l'utilisateur (si c'est un utilisateur normal). |
| `id_admin`     | int     | Identifiant de l'administrateur (si c'est un admin).          |

---

## Méthodes

### `__construct()`
Constructeur de la classe `UserEntity`. Initialise les propriétés en fonction des valeurs passées lors de la création de l'objet.

### `getContributions()`
Retourne un tableau d'entités [ContributionEntity](/docs/entities/contributionentity) représentant les contributions associées à l'utilisateur. Si l'utilisateur est un administrateur, cela renvoie les contributions avec l'ordre de soumission égal à 1.

### `getContributionFromCadavre(int $cadavre_id)`
Retourne une entité [ContributionEntity](/docs/entities/contributionentity) représentant la contribution de l'utilisateur à un cadavre exquis spécifique. Si l'utilisateur est un administrateur, cela renvoie la contribution avec l'ordre de soumission égal à 1.

### `getLastContributedCadavre()`
Retourne une entité [CadavreExquisEntity](/docs/entities/cadavreexquisentity) représentant le dernier cadavre exquis auquel l'utilisateur a contribué.

---