export class Todo {
  sno: string;
  title: string;
  desc: string;
  active: boolean;

  constructor(sno: string, title: string, desc: string, active: boolean) {
    this.sno = sno;
    this.title = title;
    this.desc = desc;
    this.active = active;
  }
}
