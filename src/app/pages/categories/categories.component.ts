import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor() { }

  ngOnInit(): void {
  }
  categories= [
    {'id':1,'name':'Sante','description':'Soutenez des initiatives de santé innovantes et contribuez à améliorer la vie de chacun en participant à des campagnes dédiées à la recherche médicale, aux soins de santé accessibles ...','image':'../../assets/sante.jpg'},
    {'id':2,'name':'Animaux','description':'Soutenez les amis à quatre pattes et les créatures extraordinaires en participant à des campagnes de financement dédiées aux soins, à la protection et au bien-être des animaux ','image':'../../assets/animaux.jpg'},
    {'id':3,'name':'Associations','description':'Soutenez des causes nobles et des actions solidaires en contribuant à des campagnes de financement pour des associations engagées dans des projets humanitaires environnementaux et sociaux.','image':'../../assets/assosciassion.jpg'},
    {'id':4,'name':'Idée Projet','description':'Explorez et soutenez des idées innovantes et inspirantes en participant à des campagnes de financement dédiées aux projets novateurs, qu ils soient technologiques, ...','image':'../../assets/projet.jpg'},
    {'id':4,'name':'Urgences Financier','description':'Soyez le soutien financier en temps de crise en participant à des campagnes dédiées aux urgences financières sur notre plateforme de crowdfunding, apportant un secours rapide et essentiel lorsque chaque contribution compte','image':'../../assets/finnacier.jpg'},
    {'id':4,'name':'Environnement','description':'Soyez un défenseur de la planète en participant à des campagnes de financement pour la préservation de l environnement, soutenant des projets innovants pour lutter contre le changement climatique et préserver la biodiversité ..','image':'../../assets/env.jpg'},
    {'id':4,'name':'Sport','description':'Soutenez des rêves sportifs extraordinaires en contribuant à des campagnes dédiées aux athlètes, aux équipes et aux projets sportifs inspirants sur notre plateforme de crowdfunding dédiée au monde du sport','image':'../../assets/sport.jpg'},
    {'id':4,'name':'Evenemment','description':'Participez à la création des expériences mémorables en soutenant des événements uniques et passionnants à travers des campagnes de financement sur notre plateforme dédiée à l émergence d expériences exceptionnelles.','image':'../../assets/even.jpg'},
  ]

  

}
