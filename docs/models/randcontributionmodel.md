---
sidebar_position: 3
---

# RandContributionModel

# `getRandomContribution(int $user_id, int $current_cadavre_id)`
Récupère la contribution aléatoire correspondant à l'utilisateur et au cadavre exquis actuel, ou la crée si elle n'existe pas.

```php
$randContributionModel = new RandContributionModel();
$randomContribution = $randContributionModel->getRandomContribution(1, 1);
```

Retour : Instance de [ContributionEntity](/docs/entities/contributionentity) crée si la RandomContribution n'existe pas déjà.