---
sidebar_position: 1
---

# CadavreExquisModel

## `getCurrentCadavre()`
Récupère le cadavre exquis en cours.

```php
$cadavreModel = CadavreExquisModel::instance();
$cadavre = $cadavreModel->getCurrentCadavre();
```
Retour : Instance de [CadavreExquisEntity](/docs/entities/cadavreexquisentity) ou null.

## `getUserLastCadavre(int $user_id, bool $is_admin = false)`

Récupère le dernier cadavre exquis terminé auquel l'utilisateur a participé.
```php
$cadavreModel = CadavreExquisModel::instance();
$userLastCadavre = $cadavreModel->getUserLastCadavre(1, false);
```
Retour : Instance de [CadavreExquisEntity](/docs/entities/cadavreexquisentity) ou null.

## `getAllCadavresNotFinished()`

Récupère tous les cadavres exquis non terminés.
```php
$cadavreModel = CadavreExquisModel::instance();
$allCadavres = $cadavreModel->getAllCadavresNotFinished();
```
Retour : Tableau d'instances de [CadavreExquisEntity](/docs/entities/cadavreexquisentity).

## `getCadavreTitle(int $cadavre_id)`

Récupère le titre d'un cadavre exquis.
```php
$cadavreModel = CadavreExquisModel::instance();
$cadavreTitle = $cadavreModel->getCadavreTitle(1);
```
Retour : Chaîne de caractères ou null.

## `getAllContributors(int $cadavre_id)`

Récupère tous les contributeurs d'un cadavre exquis.
```php
$cadavreModel = CadavreExquisModel::instance();
$contributors = $cadavreModel->getAllContributors(1);
```
Retour : Tableau d'instances de [UserEntity](/docs/entities/userentity).

## `new(string $title, string $ds, string $de, string $text, int $max, int $id_admin)`

Crée un nouveau cadavre exquis.
```php
$cadavreModel = CadavreExquisModel::instance();
$result = $cadavreModel->new("Cadavre Exquis Cool", "2023-11-29", "2023-12-12", "Contribution...", 6, 1);
```
Retour : true si la création a réussi, sinon false.

## `periodeOverlap(string $date_start, string $date_end)`

Vérifie si la période donnée en entrée recouvre celle d'un cadavre exquis existant.
```php
$cadavreModel = CadavreExquisModel::instance();
$overlap = $cadavreModel->periodeOverlap("2023-11-29", "2023-12-12");
```
Retour : true si une période recouvre, sinon false.