---
sidebar_position: 4
---

# UsersModel

Toutes les méthodes liées au UsersModel.

## `getUser(string $email)`

Récupère un utilisateur par son adresse e-mail, qu'il soit un utilisateur standard ou un administrateur.

```php
$userModel = UsersModel::instance();
$user = $userModel->getUser("loufok@mail.fr");
```

Retour : Instance de [UserEntity](/docs/entities/userentity) ou null si l'utilisateur n'existe pas.

## `getUserById(int $id, bool $is_admin = false)`

Récupère un utilisateur par son id, qu'il soit un utilisateur standard ou un administrateur.

```php
$userModel = UsersModel::instance();
$user = $userModel->getUserById(1, false);
```

Paramètres :\
 `$id` : Identifiant de l'utilisateur.\
 `$is_admin` : (Optionnel) Indique si l'utilisateur est un administrateur. Par défaut, c'est un utilisateur standard.

Retour : Instance de [UserEntity](/docs/entities/userentity) ou null si l'utilisateur n'existe pas.

Remarque : Si `$is_admin` est défini à `true`, la méthode récupère les informations d'un administrateur à partir de la table `admin`. Sinon, elle utilise la table `user` pour les utilisateurs standards.
