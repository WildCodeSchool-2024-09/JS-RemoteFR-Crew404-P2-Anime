# Cette commande permet de lancer la vérification Biome
# et de faire toutes les modifications automatiques de Biome
# Crée un agent pour le mot de passe SSH
# Ajoute tous les fichiers modifiés au commit
# Force le commit et contourne Husky
# Pousse sur la branche actuelle automatiquement


# Attention, pour lancer cette commande il faudra : 

# Lancer la commande suivante dans le terminal git :
# chmod +x npm-run-commit-force-biome-husky.sh
# Copier coller cette ligne dans package.json dans script :
# "commit-force": "bash ./npm-run-commit-force-biome-husky.sh"
# Exécution de cette commande avec :
# npm run commit-force

#Pour forcer le passage du Husky :
# HUSKY=0 git commit -m ""

#!/bin/bash

# Version du script
echo -e "\033[1;35mVersion du script V6.2.2\033[0m"
echo ""
echo ""
echo -e "\033[35mDébut d'exécution du script\033[0m"
echo ""

# Étape 1 : Piège pour nettoyer le fichier temporaire en cas de sortie du script
trap "rm -f .gitmessage.txt" EXIT

# Étape 2 : Retrait des fichiers en zone de staging
echo -e "\033[36m🗑️. Retrait des fichiers en zone de staging\033[0m"
git reset
echo ""

# Étape 3 : Vérification agent SSH
# Emplacement du fichier pour stocker les informations de l'agent
echo -e "\033[36m🔍 Vérification si un agent SSH est actif\033[0m"
echo ""
SSH_ENV="$HOME/.ssh-agent.env"

# Fonction pour démarrer un nouvel agent SSH
start_agent() {
    echo ""
    echo "🔑 Démarrage d'un nouvel agent SSH..."
    echo ""
    eval "$(ssh-agent -s)" > "$SSH_ENV"
    echo "export SSH_AUTH_SOCK=$SSH_AUTH_SOCK" >> "$SSH_ENV"
    echo "export SSH_AGENT_PID=$SSH_AGENT_PID" >> "$SSH_ENV"
    ssh-add ~/.ssh/id_ed25519 > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "🔐 Clé SSH ajoutée avec succès : ~/.ssh/id_ed25519"
    else
        echo "❌ Échec lors de l'ajout de la clé SSH : ~/.ssh/id_ed25519"
    fi
}

# Recharger ou démarrer l'agent SSH
echo -e "\033[36m🔄 Recharger ou démarrer l'agent SSH\033[0m"
echo ""
if [ -f "$SSH_ENV" ]; then
    source "$SSH_ENV" > /dev/null
    if ! ps -p $SSH_AGENT_PID > /dev/null 2>&1; then
        start_agent
    fi
else
    start_agent
fi
echo -e "\033[34m✅ Traitement agent SSH terminé\033[0m"
echo ""

# Étape 4 : Vérification avec Biome pour corriger les fichiers
echo ""
echo -e "\033[36m🚀 Exécution de Biome...\033[0m"
echo ""
echo -e "\033[36m🛠️. Modification des fichiers nécessaires\033[0m"
npx @biomejs/biome check --fix --unsafe ./client
echo -e "\033[34m✅ Exécution de Biome terminée\033[0m"
echo ""

# Étape 5 : Affiche l'état actuel du dépôt
echo -e "\033[36m📄 Vérification de l'état actuel du dépôt...\033[0m"
git status
echo ""

# Étape 6 : Demande le message de commit
read -p $'\033[1;33mEntrez votre message de commit : \033[0m' msg
echo ""

# Étape 7 : Récupère les fichiers modifiés, nouveaux et supprimés
files=$(git ls-files --modified --deleted --others --exclude-standard)

# Étape 8 : Vérifie s'il y a des fichiers à ajouter
if [ -z "$files" ]; then
    echo -e "\033[1;31m❌ Aucun fichier modifié, supprimé ou nouveau fichier à ajouter.\033[0m"
    echo -e "\033[1;35mCommit annulé.\033[0m"
    exit 1
fi

# Étape 9 : Ajoute les fichiers modifiés, nouveaux et supprimés
echo -e "\033[36m📄 Ajout des fichiers au staging...\033[0m"
git add -A
echo ""

# Étape 10 : Crée un fichier temporaire pour le message de commit
echo "$msg" > .gitmessage.txt

# Étape 11 : Effectue le commit
echo -e "\033[36m📝 Création du commit...\033[0m"
HUSKY=0 git commit -F .gitmessage.txt
echo ""

# Étape 12 : Récupère le nom de la branche actuelle
echo -e "\033[36m🌿 Récupération du nom de la branche actuelle\033[0m"
branch=$(git rev-parse --abbrev-ref HEAD)
echo ""

# Étape 13 : Pousse sur la branche courante
echo -e "\033[36m🚀 Pousse sur la branche '$branch'...\033[0m"
git push origin "$branch" || { echo "❌ Erreur : Push échoué."; exit 1; }
echo ""

# Étape 14 : Résumé du commit
echo ""
echo -e "\033[1;35mFin du script\033[0m"
echo -e "\033[34m✅ Commit réussi, envoi sur la branche \033[1;35m'$branch'\033[34m avec le message :\033[0m"
echo -e "\033[33m\"$msg\"\033[0m"
