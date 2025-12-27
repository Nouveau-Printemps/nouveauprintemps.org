title = "Services"
description = "Liste des services hébergés par le Nouveau Printemps."
---
# Services
Nouveau Printemps héberge de nombreux services pour ses membres.
Ils visent tous à proposer une expérience proche des services grands publics tout en respectant [nos valeurs](/charte).

## Liste

Chaque service appartient à un *axe*.
Cette catégorisation décrit la raison d'être des services dans un contexte plus général.

Souveraineté primaire~:
- PDS AT Protocol
- hébergement de mots de passe
- possiblement une forge git et un runner CI

Hébergement prévu~:
- serveur mail

## Souveraineté primaire

L'axe souveraineté primaire regroupe tous les services les plus utilisés et les plus dépendant des grands groupes
technologiques.
Les réseaux sociaux font, par exemple, partie de cette catégorie.

Nous hébergeons notre [PDS AT Protocol](https://snowdrop.at/).
Un PDS est le serveur contenant toutes les données et l'identité des utilisateurs de Bluesky, de tangled et autres
services reposant sur l'AT Protocol.
Utiliser un PDS souverain permet de maîtriser ses données et donc d'éviter de se faire censurer.
Nous avons choisi l'AT Protocol à la place du Fediverse puisqu'il est plus simple à utiliser et technologiquement plus
pertinent.
Nous utilisons [pegasus](https://tangled.org/futur.blue/pegasus/), une implémentation en OCaml, ce qui permet de
minimiser les bugs et les crashs.

Nous proposons un service d'hébergement sécurisé de mots de passe reposant sur Bitwarden.
Les mots de passe sont chiffrés et accessibles sur tous vos appareils.
Cet utilitaire est un pilier essentiel de la cybersécurité.
Nous utilisons [Vaultwarden](https://github.com/dani-garcia/vaultwarden) comme implémentation serveur gratuite et
open-source.

Nous étudions aussi la mise en place d'un serveur git reposant sur [tangled](https://tangled.org/).
Ce serveur décentralisé permet de rester maître de ses données tout en facilitant les contributions extérieures.
Cela libère le développement d'applications open-source de GitHub détenu par Microsoft.
Si cela se concrétise, nous hébergerons aussi un runner CI compatible avec tangled.

## Nous rejoindre

Si nos services vous intéressent, n'hésitez surtout pas à [nous rejoindre](/rejoindre).
