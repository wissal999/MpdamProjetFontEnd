import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet } from '../projet';
import { ConfirmDialogService } from '../Services/confirm-dialog.service';
import { ProjetService } from '../Services/projet.service';


@Component({
  selector: 'app-gestion-projets',
  templateUrl: './gestion-projets.component.html',
  styleUrls: ['./gestion-projets.component.css']
})
export class GestionProjetsComponent implements OnInit {

  formValue !:FormGroup;
  projet:Projet=new Projet();
  projets:any;
  Projet:Projet=new Projet();

  showAdd!:boolean;
  showUpdate !:boolean;
 
 
  Books:any;
  url="assets/Images/Livre1.jpg";

 

  constructor(private formBuilder:FormBuilder,private projetService:ProjetService, private router :Router,private DialogService:ConfirmDialogService) { }


  ngOnInit(): void {

      
  this.formValue=this.formBuilder.group({
    nomProjet:[''],
    typeProjet:[''],
    chefProjet:[''],
    equipeProjet:[''],
  })
  this.getProjects();
  }

  saveProject(){
    this.projet.nomProjet=this.formValue.value.nomProjet;
    this.projet.typeProjet=this.formValue.value.typeProjet;
    this.projet.chefProjet=this.formValue.value.chefProjet;
    this.projet.equipeProjet=this.formValue.value.equipeProjet;

    this.projetService.addProjet(this.projet).subscribe(data=>{console.log(data)
    alert("projet added !")
    let ref=document.getElementById('cancel');
    ref?.click();
    this.getProjects();
  });
   
  }
  deleteProject(id:number){
    this.DialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res){
        this.projetService.deleteProjet(id).subscribe(data=>{
          this.getProjects();
        })
       
      }
    })
  
  }
  getProjects(){
    this.projetService.getProjets().subscribe(data=>{
      this.projets=data;
    });
  }
  
  addProject(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  onEdit(projet:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.projet.id=projet.id;
    this.formValue.controls['nomProjet'].setValue(projet.nomProjet);
    this.formValue.controls['typeProjet'].setValue(projet.typeProjet);
    this.formValue.controls['chefProjet'].setValue(projet.chefProjet);
    this.formValue.controls['equipeProjet'].setValue(projet.equipeProjet);

  }


  updateProject(){
    this.projet.nomProjet=this.formValue.value.nomProjet;
    this.projet.typeProjet=this.formValue.value.typeProjet;
    this.projet.chefProjet=this.formValue.value.chefProjet;
    this.projet.equipeProjet=this.formValue.value.equipeProjet;
    this.projetService.updateProjet(this.projet.id,this.projet).subscribe(data=>{
      alert("book updated");
      let ref=document.getElementById('cancel');
       ref?.click();
     this.formValue.reset();

      this.getProjects();
   
    });
  }

  
  
}
