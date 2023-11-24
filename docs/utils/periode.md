---
sidebar_position: 1
---

# Période

## Propriétés

| Nom      | Type   | Description                             |
|----------|--------|-----------------------------------------|
| `start`  | string | Date de début de la période.             |
| `end`    | string | Date de fin de la période.               |

---

## Méthodes

### `__construct(string $date_start, string $date_end)`
Constructeur de la classe `Periode`. Initialise les propriétés `start` et `end` avec les dates de début et de fin passées en paramètre.

### `getRemainingDays() : int`
Retourne le nombre de jours restants jusqu'à la fin de la période. Si la période est déjà terminée, retourne 1 pour éviter une valeur nulle.

### `isActive() : bool`
Vérifie si la période est actuellement active en comparant la date actuelle avec les dates de début et de fin.

### `getConvertedPeriode() : array`
Retourne un tableau associatif avec les dates de début et de fin de la période converties au format "jj/mm/aaaa".

---