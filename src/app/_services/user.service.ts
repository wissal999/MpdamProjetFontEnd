import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Projet } from '../projet';

const API_URL = 'http://localhost:3600/api/test/';
const Project = 'project';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  public passProject(project: string): void {
    window.sessionStorage.removeItem(Project);
    window.sessionStorage.setItem(Project, project);
  }
  public getPro():any {
    const user = window.sessionStorage.getItem(Project);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  
  public getProjets(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:3600/projets/'+id);
  }


  public getProjetbyid(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:3600/Projet/'+id);
  }
  public addProjet(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>('http://localhost:3600/projet',projet);
  }
  public deleteProjet(id:string){
    return this.http.delete('http://localhost:3600/projet/'+id).subscribe((result) => {
      console.log ('Delete successful')});
  }
  public updateProjet(id:number,projet:Projet):Observable<Projet>{
    return this.http.put<Projet>('http://localhost:3600/projet/'+id,projet)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
}
