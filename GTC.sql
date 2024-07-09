CREATE DATABASE GTC;
USE GTC;



CREATE TABLE Users(
   US_ID VARCHAR(50),
   US_Name VARCHAR(255) NOT NULL,
   US_Password VARCHAR(255) NOT NULL,
   US_Email VARCHAR(100) NOT NULL,
   PRIMARY KEY(US_ID),
   UNIQUE(US_Password),
   UNIQUE(US_Email)
);

CREATE TABLE Tasks(
   TA_ID VARCHAR(50),
   TA_Title VARCHAR(255) NOT NULL,
   TA_Description TEXT(500) NOT NULL,
   TA_DueDate DATE NOT NULL,
   TA_Owner VARCHAR(255) NOT NULL,
   US_ID VARCHAR(50) NOT NULL,
   PRIMARY KEY(TA_ID),
   UNIQUE(TA_DueDate),
   UNIQUE(TA_Owner),
   FOREIGN KEY(US_ID) REFERENCES Users(US_ID)
);

CREATE TABLE Comments(
   CM_ID VARCHAR(50),
   CM_Comment TEXT(500),
   TA_ID VARCHAR(50) NOT NULL,
   US_ID VARCHAR(50) NOT NULL,
   PRIMARY KEY(CM_ID),
   UNIQUE(CM_Comment),
   FOREIGN KEY(TA_ID) REFERENCES Tasks(TA_ID),
   FOREIGN KEY(US_ID) REFERENCES Users(US_ID)
);

CREATE TABLE To_Collaborate(
   US_ID VARCHAR(50),
   TA_ID VARCHAR(50),
   PRIMARY KEY(US_ID, TA_ID),
   FOREIGN KEY(US_ID) REFERENCES Users(US_ID),
   FOREIGN KEY(TA_ID) REFERENCES Tasks(TA_ID)
);

INSERT INTO Users (US_ID, US_Name, US_Password, US_Email) VALUES
('1', 'Alice', 'password123', 'alice@example.com'),
('2', 'Jean', 'password456', 'jean@example.com'),
('3', 'Marie', 'password789', 'marie@example.com'),
('4', 'Luc', 'password101112', 'luc@example.com'),
('5', 'Julie', 'password131415', 'julie@example.com'),
('6', 'Pierre', 'password161718', 'pierre@example.com'),
('7', 'Chloé', 'password192021', 'chloe@example.com'),
('8', 'Thomas', 'password222324', 'thomas@example.com'),
('9', 'Laura', 'password252627', 'laura@example.com'),
('10', 'Louis', 'password282930', 'louis@example.com'),
('11', 'Emma', 'password313233', 'emma@example.com'),
('12', 'Hugo', 'password343536', 'hugo@example.com'),
('13', 'Sarah', 'password373839', 'sarah@example.com'),
('14', 'Antoine', 'password404142', 'antoine@example.com'),
('15', 'Léa', 'password434445', 'lea@example.com'),
('16', 'Gabriel', 'password464748', 'gabriel@example.com'),
('17', 'Manon', 'password495051', 'manon@example.com'),
('18', 'Maxime', 'password525354', 'maxime@example.com'),
('19', 'Clara', 'password555657', 'clara@example.com'),
('20', 'Alexandre', 'password585960', 'alexandre@example.com'),
('21', 'Inès', 'password616263', 'ines@example.com'),
('22', 'Benjamin', 'password646566', 'benjamin@example.com'),
('23', 'Camille', 'password676869', 'camille@example.com'),
('24', 'Nathan', 'password707172', 'nathan@example.com'),
('25', 'Lucie', 'password737475', 'lucie@example.com'),
('26', 'Romain', 'password767778', 'romain@example.com'),
('27', 'Amandine', 'password798081', 'amandine@example.com'),
('28', 'Mathieu', 'password828384', 'mathieu@example.com'),
('29', 'Sophie', 'password858687', 'sophie@example.com'),
('30', 'Quentin', 'password888990', 'quentin@example.com');

SELECT * FROM Users;

INSERT INTO Tasks (TA_ID, TA_Title, TA_Description, TA_DueDate, TA_Owner, US_ID) VALUES
('1', 'Développer la page d\'accueil', 'Créer et intégrer la page d\'accueil du nouveau site web.', '2024-07-15', 'Alice', '1'),
('2', 'Concevoir la base de données', 'Élaborer le schéma de la base de données pour le projet interne.', '2024-07-16', 'Jean', '2'),
('3', 'Mise en place de l\'API', 'Créer et déployer l\'API RESTful pour l\'application mobile.', '2024-07-17', 'Marie', '3'),
('4', 'Tests unitaires', 'Réaliser des tests unitaires sur les nouvelles fonctionnalités développées.', '2024-07-18', 'Luc', '4'),
('5', 'Rédaction de la documentation', 'Rédiger la documentation technique pour le projet en cours.', '2024-07-19', 'Julie', '5'),
('6', 'Révision du code', 'Revoir et optimiser le code source du projet existant.', '2024-07-20', 'Pierre', '6'),
('7', 'Intégration continue', 'Mettre en place un pipeline d\'intégration continue avec Jenkins.', '2024-07-21', 'Chloé', '7'),
('8', 'Design UI/UX', 'Créer le design UI/UX pour l\'application client.', '2024-07-22', 'Thomas', '8'),
('9', 'Développement du backend', 'Développer le backend du nouveau service de gestion de clients.', '2024-07-23', 'Laura', '9'),
('10', 'Formation des utilisateurs', 'Former les utilisateurs à la nouvelle plateforme déployée.', '2024-07-24', 'Louis', '10'),
('11', 'Audit de sécurité', 'Réaliser un audit de sécurité sur l\'application web.', '2024-07-25', 'Emma', '11'),
('12', 'Déploiement en production', 'Déployer la nouvelle version de l\'application en production.', '2024-07-26', 'Hugo', '12'),
('13', 'Support technique', 'Assurer le support technique pour les utilisateurs de l\'application.', '2024-07-27', 'Sarah', '13'),
('14', 'Analyse des besoins', 'Analyser les besoins des clients pour le nouveau projet.', '2024-07-28', 'Antoine', '14'),
('15', 'Veille technologique', 'Effectuer une veille technologique sur les nouvelles tendances.', '2024-07-29', 'Léa', '15'),
('16', 'Développement front-end', 'Développer l\'interface utilisateur de la nouvelle application.', '2024-07-30', 'Gabriel', '16'),
('17', 'Optimisation SEO', 'Optimiser le site web pour les moteurs de recherche.', '2024-07-31', 'Manon', '17'),
('18', 'Maintenance applicative', 'Assurer la maintenance et les mises à jour de l\'application.', '2024-08-01', 'Maxime', '18'),
('19', 'Création de contenu', 'Créer du contenu pour le blog de l\'entreprise.', '2024-08-02', 'Clara', '19'),
('20', 'Mise en place de la CI/CD', 'Implémenter les pipelines CI/CD pour le projet DevOps.', '2024-08-03', 'Alexandre', '20'),
('21', 'Test de charge', 'Réaliser des tests de charge pour l\'application web.', '2024-08-04', 'Inès', '21'),
('22', 'Refactoring du code', 'Refactorer le code pour améliorer les performances.', '2024-08-05', 'Benjamin', '22'),
('23', 'Création de maquettes', 'Créer des maquettes pour la nouvelle interface utilisateur.', '2024-08-06', 'Camille', '23'),
('24', 'Mise en place de la sauvegarde', 'Mettre en place un système de sauvegarde des données.', '2024-08-07', 'Nathan', '24'),
('25', 'Rédaction des spécifications', 'Rédiger les spécifications techniques pour le projet.', '2024-08-08', 'Lucie', '25'),
('26', 'Développement de modules', 'Développer des modules complémentaires pour l\'application.', '2024-08-09', 'Romain', '26'),
('27', 'Intégration de services tiers', 'Intégrer des services tiers dans l\'application.', '2024-08-10', 'Amandine', '27'),
('28', 'Gestion des incidents', 'Gérer les incidents et les résolutions de bugs.', '2024-08-11', 'Mathieu', '28'),
('29', 'Tests de régression', 'Effectuer des tests de régression après chaque déploiement.', '2024-08-12', 'Sophie', '29'),
('30', 'Analyse de la performance', 'Analyser et améliorer la performance de l\'application.', '2024-08-13', 'Quentin', '30');

SELECT * FROM Tasks;

INSERT INTO Comments (CM_ID, CM_Comment, TA_ID, US_ID) VALUES
('1', 'Excellent travail sur la page d\'accueil!', '1', '2'),
('2', 'La base de données semble bien conçue, bravo!', '2', '3'),
('3', 'L\'API fonctionne parfaitement. Merci!', '3', '4'),
('4', 'Les tests unitaires ont révélé quelques bugs mineurs.', '4', '5'),
('5', 'La documentation est très claire et détaillée.', '5', '6'),
('6', 'Le code est propre et bien structuré.', '6', '7'),
('7', 'L\'intégration continue est maintenant opérationnelle.', '7', '8'),
('8', 'Le design UI/UX est superbe!', '8', '9'),
('9', 'Le backend fonctionne sans problème.', '9', '10'),
('10', 'Les utilisateurs apprécient la formation.', '10', '11'),
('11', 'L\'audit de sécurité a détecté quelques vulnérabilités.', '11', '12'),
('12', 'Le déploiement en production s\'est bien passé.', '12', '13'),
('13', 'Le support technique est très réactif.', '13', '14'),
('14', 'Les besoins des clients sont bien compris.', '14', '15'),
('15', 'La veille technologique est très intéressante.', '15', '16'),
('16', 'L\'interface utilisateur est très intuitive.', '16', '17'),
('17', 'Le site web est maintenant bien optimisé pour le SEO.', '17', '18'),
('18', 'La maintenance est bien gérée.', '18', '19'),
('19', 'Le contenu du blog est très pertinent.', '19', '20'),
('20', 'Les pipelines CI/CD fonctionnent parfaitement.', '20', '21'),
('21', 'Les tests de charge montrent une bonne performance.', '21', '22'),
('22', 'Le refactoring du code a amélioré les performances.', '22', '23'),
('23', 'Les maquettes sont très bien réalisées.', '23', '24'),
('24', 'Le système de sauvegarde est en place.', '24', '25'),
('25', 'Les spécifications techniques sont bien rédigées.', '25', '26'),
('26', 'Les modules complémentaires sont bien intégrés.', '26', '27'),
('27', 'L\'intégration des services tiers est parfaite.', '27', '28'),
('28', 'Les incidents sont bien gérés.', '28', '29'),
('29', 'Les tests de régression n\'ont révélé aucun problème.', '29', '30'),
('30', 'La performance de l\'application est excellente.', '30', '1');

SELECT * FROM Comments;

INSERT INTO To_Collaborate (US_ID, TA_ID) VALUES
('1', '1'),
('2', '1'),
('3', '2'),
('4', '2'),
('5', '3'),
('6', '3'),
('7', '4'),
('8', '4'),
('9', '5'),
('10', '5'),
('11', '6'),
('12', '6'),
('13', '7'),
('14', '7'),
('15', '8'),
('16', '8'),
('17', '9'),
('18', '9'),
('19', '10'),
('20', '10'),
('21', '11'),
('22', '11'),
('23', '12'),
('24', '12'),
('25', '13'),
('26', '13'),
('27', '14'),
('28', '14'),
('29', '15'),
('30', '15');

SELECT * FROM To_Collaborate;








