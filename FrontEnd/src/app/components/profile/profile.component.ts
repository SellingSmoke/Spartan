import {Component, OnInit} from 'angular2/core';
import { UserService } from '../../services/user.service';
import {Goal} from '../../models/goal.model';
import { GoalNamePipe } from '../../pipes/student-pipes.pipe';
import { AutenticacionService } from '../../services/autenticacion.service';
import {MultipartItem} from "../../multipart-upload/multipart-item";
import {MultipartUploader} from "../../multipart-upload/multipart-uploader";
import { Alert } from '../../directives/alert/alert';

@Component({
	selector: 'profile',
    templateUrl: 'app/components/profile/profile.html',
		styleUrls: ['app/components/profile/profile.css'],
		pipes: [GoalNamePipe],
		providers: [UserService],
		directives: [Alert]
})

export class Profile implements OnInit{

	// public student:Student;
	public editMode:number; // 0 nada - 1 mail - 2 pass  - 3 registro histórico de metas - 4 imagen
	public goals:Goal[];

	completeGoals:Goal[];
	canceledGoals:Goal[];

	numComplete:number;
	numCancelled:number;
	numDiets:number;
	numComments:number;
	numTasks:number;
	num:number;
	progress:number;

	private file: File;
	private fieldsIncorrect:boolean;
	private imageWellUploded:boolean;
	private imageResponse:boolean = false;

	constructor(private _userService: UserService,private aut: AutenticacionService){
		this.progress = 0;
		this.num = 0;
		this.numComplete = 0;
		this.numCancelled = 0;
		this.numDiets = 0;
		this.numComments = 0;
		this.editMode = 0;
		this.numTasks = 0;
		this.completeGoals = [];
		this.canceledGoals = [];
		this.fieldsIncorrect=false;
	}

	ngOnInit(){
		this.filterGoals(this.aut.User().goals)
			//this.numComments += student.goal.comments.length;
			// if(student.goal){
			// 	 this.progress+= student.goal.progress;
			// 	 if(student.goal.diet) this.numDiets += 1;
			// }
	}

	changeEditMode(i:number){
		this.editMode = i;
	}

	anyos(){
		return Math.floor(parseInt(((Date.now() - this.aut.User().birthday) / (1000 * 60 * 60 * 24* 365)).toFixed(1)));
	}

	savePass(pass1:string, pass2:string){
		if(pass1 == pass2){
			this.aut.User().passwordHash = pass1;
			this.saveChanges(true);
		}else{
			// LLAMAR ALERT
			this.fieldsIncorrect = true;
		}

	}

	saveChanges(save:boolean){
		if(save){
			console.log("HE LLEGADO A SAVECHANGES");
			this._userService.editUser(this.aut.User()).subscribe(
				response => console.log() ,
				error => console.log(error)
			);
		}
		this.editMode = 0;
	}

	filterGoals(goals:Goal[]){
		for (var g of goals){
			if (g.progress === 100){
				this.completeGoals.push(g);
				this.numComplete++;
			}
			if (g.canceled){
				this.canceledGoals.push(g);
				this.numCancelled++;
			}
			this.numTasks += g.tasks.length;
			this.num += 1;
			if(g.diet) this.numDiets += 1;
			this.numComments += g.comments.length;
			this.progress+= g.progress;
		}
	}

	selectFile($event) {
		this.file = $event.target.files[0];
		console.debug("Imagen seleccionada: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
	}

	uploadImage() {
		console.debug("Uploading file...");
		if (this.file == null){
			console.error("You have to select a file and set a description.");
			return;
		}

		let formData = new FormData();
		formData.append("file",  this.file);
		formData.append("id",  this.aut.User().id);

		let multipartItem = new MultipartItem(new MultipartUploader({url: 'users/imageUpload'}));
		multipartItem.formData = formData;

		multipartItem.callback = (data, status, headers) => {
			this.imageResponse = true;
			if (status == 201){
				this.imageWellUploded = true;
				this.aut.User().imageUrl = data;
				console.debug("File has been uploaded");
			} else {
				this.imageWellUploded = false;
				console.error("Error uploading file");
			}
		};
		multipartItem.upload();
	}

};
