export interface IComment {
  id?: number;
  rol: string;
  // Los comentarios son de la meta, solo podrán ser del entrenador o del alumno
  // 1 -> Lo ha escrito el alumno
  // 2 -> Lo ha escrito el entrenador
  date: number;
  comment: string;

  read: boolean;
  // Los comentarios pueden haber sido leidos o no
  // Cuando abres la pestaña de comentarios pondra todos los comentarios con el rol
  // distinto del tuyo a true
}

export class Comment implements IComment{
  id: number;
  rol: string;
  date: number;
  comment: string;
  read: boolean;

  constructor(){
    this.comment = "";
    this.rol = localStorage.getItem('rol');
    this.date = new Date().getTime();
    this.read = false;
  }
}
