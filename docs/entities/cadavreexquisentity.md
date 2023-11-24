---
sidebar_position: 1
---

# CadavreExquisEntity

## Propriétés

| Nom                   | Type                | Description                                                  |
|-----------------------|---------------------|--------------------------------------------------------------|
| `id_cadavre_exquis`   | int                 | Identifiant du cadavre exquis.                                |
| `title`               | string              | Titre du cadavre exquis.                                      |
| `date_start`          | string              | Date de début du cadavre exquis au format Y-m-d.         |
| `date_end`            | string              | Date de fin du cadavre exquis au format Y-m-d.           |
| `max_contributions`   | int                 | Nombre maximum de contributions autorisées pour ce cadavre.   |
| `nb_like`             | int                 | Nombre de likes du cadavre exquis.                             |
| `id_admin`            | int                 | Identifiant de l'administrateur associé à ce cadavre.         |
| `admin`               | [UserEntity](/docs/entities/userentity)          | Instance de l'administrateur associé à ce cadavre.             |
| `contributions`       | array               | Tableau des contributions associées à ce cadavre.             |
| `contributions_left`  | int                 | Nombre de contributions restantes pour ce cadavre.             |
| `periode`             | Periode             | Instance de la classe `Periode` représentant la période du cadavre. |

---

## Méthodes

### `__construct()`
Constructeur de la classe `CadavreExquisEntity`. Initialise les propriétés personnalisées en fonction des propriétés de la table.

### `isActualCadavre() : bool`
Vérifie si le cadavre exquis est actif, c'est-à-dire si sa période est en cours et s'il reste des contributions possibles.

**Retour :** `true` si le cadavre est actif, sinon `false`.

### `getContributors() : array`
Récupère la liste des contributeurs associés à ce cadavre exquis.

**Retour :** Tableau d'instances de [UserEntity](/docs/entities/userentity).

---