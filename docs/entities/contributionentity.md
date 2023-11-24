---
sidebar_position: 2
---

# ContributionEntity

## Propriétés

| Nom                  | Type                | Description                                                   |
|----------------------|---------------------|---------------------------------------------------------------|
| `id_contribution`    | int                 | Identifiant de la contribution.                                 |
| `id_user`            | int\|null            | Identifiant de l'utilisateur associé à la contribution. Null si l'utilisateur est l'administrateur. |
| `text`               | string              | Texte de la contribution.                                      |
| `created_at`         | string              | Date de création de la contribution au format Y-m-d H:i:s.      |
| `submission_order`   | int                 | Ordre de soumission de la contribution.                         |
| `id_cadavre_exquis`  | int                 | Identifiant du cadavre exquis associé à la contribution.        |
| `id_admin`           | int                 | Identifiant de l'administrateur associé à la contribution. Null si l'utilisateur est associé. |

---

## Propriété Personnalisée

| Nom                  | Type                | Description                                                   |
|----------------------|---------------------|---------------------------------------------------------------|
| `cadavre_title`      | string              | Titre du cadavre exquis associé à la contribution.             |

---

## Méthode

### `__construct()`
Constructeur de la classe [ContributionEntity](/docs/entities/contributionentity). Initialise la propriété personnalisée `cadavre_title` en récupérant le titre du cadavre exquis associé à la contribution.

---
