import fenetre from "../assets/images/fenetre.png";
import porteEntree from "../assets/images/porte-entree.png";
import aluminium from "../assets/images/aluminium.png";
import pvc from "../assets/images/pvc.png";
import verandas from "../assets/images/verandas.png";
import porteDeGarage from "../assets/images/porte-garage.png";
import portail from "../assets/images/portail.png";
import voletsRoulants from "../assets/images/volets-roulants.png";
import voletsBattants from "../assets/images/volets-battants.png";
import porteFenetre from "../assets/images/porte-fenetre.png";
import renovation from "../assets/images/renovation.png";
import constructionNeuve from "../assets/images/construction-neuve.png";
import vitree from "../assets/images/vitree.png";
import noPic from "../assets/images/no-pic.png";

/* COLORS */
import blanc from "../assets/images/blanc.png";
import grisAnthracite from "../assets/images/gris-anthracite.png";
import noir from "../assets/images/noir.png";
import chenedore from "../assets/images/chenedore.png";
import vertmousse from "../assets/images/vertmousse.png";
import rougevin from "../assets/images/rougevin.png";
import bleuacier from "../assets/images/bleuacier.png";
import autres from "../assets/images/autres.png";

import bgFenetre from "../assets/images/bg-fenetre.png";
import bgPorteEntree from "../assets/images/bg-porte-entree.png";
import bgVolets from "../assets/images/bg-volets.png";
import bgPorteDeGarage from "../assets/images/bg-porte-de-garage.png";
import bgVerandas from "../assets/images/bg-verandas.png";
import bgChoice from "../assets/images/bg-choice.png";

export const StepsConfig = [
	{
		name: "product",
		id: "product",
		rightImg: bgChoice,
		rightContent: `<b>C’est simple, gratuit et sans engagement&nbsp;!</b>
					   	<br />
						Faites votre demande de devis en ligne et obtenez un tarif <b>sur-mesure</b>, <b>personnalisé</b> selon
						votre projet. En cas de besoin, nos Conseillers Experts sont à votre disposition pour répondre à toutes vos demandes.
						<br />
						<br />
						Alors, optez sans plus attendre pour&nbsp;
						<b>le savoir-faire de votre fabricant français Global fermetures qui a plus de 40 ans d’expérience </b> &nbsp;!`,
	},
	{
		name: "Fenêtres",
		id: "fenetre",
		choiceImg: fenetre,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quelles fenêtres recherchez-vous ?",
				progress: 45,
				options: [
					{
						name: "1 ventail",
						choiceImg: noPic,
					},
					{
						name: "2 ventaux",
						choiceImg: noPic,
					},
					{
						name: "3 ventaux",
						choiceImg: noPic,
					},
					{
						name: "4 ventaux",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 60,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de fenêtres souhaitez-vous changer ?",
				progress: 75,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Portes fenêtres",
		id: "portesFenetre",
		choiceImg: porteFenetre,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quelles portes fenêtres recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "1 ventail",
						choiceImg: noPic,
					},
					{
						name: "2 ventaux",
						choiceImg: noPic,
					},
					{
						name: "3 ventaux",
						choiceImg: noPic,
					},
					{
						name: "4 ventaux",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de portes fenêtres souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Porte d’entrée",
		id: "porteEntree",
		choiceImg: porteEntree,
		rightImg: bgPorteEntree,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quel type de portes d'entrée recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Vitrée",
						choiceImg: vitree,
					},
					{
						name: "Pleine",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous pour les fenêtres ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de porte d’entrée souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Coulissants",
		id: "coulissants",
		choiceImg: noPic,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quel type de coulissants recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "2 ventaux",
						choiceImg: noPic,
					},
					{
						name: "3 ventaux",
						choiceImg: noPic,
					},
					{
						name: "4 ventaux",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de coulissants souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Volets roulants",
		id: "voltesRoulants",
		choiceImg: voletsRoulants,
		rightImg: bgVolets,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Manœuvre",
				id: "manœuvre",
				question: "Quel type de manœuvre recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Manuel",
						choiceImg: noPic,
					},
					{
						name: "Motorisé",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de volets roulants souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Volets battants",
		id: "voltesBattants",
		choiceImg: voletsBattants,
		rightImg: bgVolets,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Manœuvre",
				id: "manœuvre",
				question: "Quel type de manœuvre recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Manuel",
						choiceImg: noPic,
					},
					{
						name: "Motorisé",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de volets battants souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Portes de garage",
		id: "portesDeGarage",
		choiceImg: porteDeGarage,
		rightImg: bgPorteDeGarage,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Sectionelle",
						choiceImg: noPic,
					},
					{
						name: "Battante",
						choiceImg: noPic,
					},
					{
						name: "Latérale",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Manœuvre",
				id: "manœuvre",
				question: "Quel type de manœuvre recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Manuel",
						choiceImg: noPic,
					},
					{
						name: "Motorisé",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question:
					"Combien de portes de garage souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Portail",
		id: "portail",
		choiceImg: portail,
		rightImg: bgPorteDeGarage,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quel type de portail recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Battant",
						choiceImg: voletsBattants,
					},
					{
						name: "Coulissant",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Manœuvre",
				id: "manœuvre",
				question: "Quel type de manœuvre recherchez-vous ?",
				progress: 50,
				options: [
					{
						name: "Manuel",
						choiceImg: noPic,
					},
					{
						name: "Motorisé",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 62,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question:
					"Combien de portail roulants souhaitez-vous changer ?",
				progress: 75,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Clôture",
		id: "cloture",
		choiceImg: noPic,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Matières",
				id: "matieres",
				question: "Quel matériau vous intéresse ?",
				progress: 25,
				options: [
					{
						name: "Aluminium",
						choiceImg: aluminium,
					},
					{
						name: "PVC",
						choiceImg: pvc,
					},
				],
			},
			{
				name: "Types",
				id: "type",
				question: "Quel type de clôture recherchez-vous ?",
				progress: 35,
				options: [
					{
						name: "Au Sol",
						choiceImg: noPic,
					},
					{
						name: "Au Muret",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 55,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Chêne doré",
						choiceImg: chenedore,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Bleu acier",
						choiceImg: bleuacier,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de clôture souhaitez-vous changer ?",
				progress: 70,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Pergola / Véranda",
		id: "pergolaVeranda",
		choiceImg: verandas,
		rightImg: bgVerandas,
		steps: [
			{
				name: "M2",
				id: "m2",
				question:
					"Combien de pergola / véranda souhaitez-vous changer ?",
				progress: 25,
				options: [
					{
						name: "0-10",
						isText: true,
					},
					{
						name: "10-20",
						isText: true,
					},
					{
						name: "20-30",
						isText: true,
					},
					{
						name: "30+",
						isText: true,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 45,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question:
					"Combien de pergola / véranda souhaitez-vous changer ?",
				progress: 65,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Bardage",
		id: "bardage",
		choiceImg: noPic,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Types",
				id: "type",
				question: "Quel type de bardage recherchez-vous ?",
				progress: 25,
				options: [
					{
						name: "Isolant",
						choiceImg: noPic,
					},
					{
						name: "Decoratif",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Couleurs",
				id: "couleurs",
				question: "Quelle couleur préférez-vous ?",
				progress: 45,
				options: [
					{
						name: "Blanc",
						choiceImg: blanc,
					},
					{
						name: "Gris anthracite",
						choiceImg: grisAnthracite,
					},
					{
						name: "Noir",
						choiceImg: noir,
					},
					{
						name: "Vert mousse",
						choiceImg: vertmousse,
					},
					{
						name: "Rouge vin",
						choiceImg: rougevin,
					},
					{
						name: "Autres",
						choiceImg: autres,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de bardage souhaitez-vous changer ?",
				progress: 65,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
	{
		name: "Poele",
		id: "poele",
		choiceImg: noPic,
		rightImg: bgFenetre,
		steps: [
			{
				name: "Types",
				id: "type",
				question: "Quel type de poele recherchez-vous ?",
				progress: 30,
				options: [
					{
						name: "Isolant",
						choiceImg: noPic,
					},
					{
						name: "Decoratif",
						choiceImg: noPic,
					},
				],
			},
			{
				name: "Combien",
				id: "combien",
				question: "Combien de poele souhaitez-vous changer ?",
				progress: 60,
				options: [
					{
						name: "1",
						isText: true,
					},
					{
						name: "2",
						isText: true,
					},
					{
						name: "3",
						isText: true,
					},
					,
					{
						name: "4",
						isText: true,
					},
					,
					{
						name: "+5",
						isText: true,
					},
				],
			},
			{
				name: "Type de projet",
				id: "typeDeProjet",
				question: "Quel est votre type de projet ?",
				progress: 85,
				options: [
					{
						name: "Rénovation",
						choiceImg: renovation,
					},
					{
						name: "Construction neuve",
						choiceImg: constructionNeuve,
					},
				],
			},
		],
	},
];
