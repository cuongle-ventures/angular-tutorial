// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imageSrc = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   // get imageSrc() {
//   //   return 'assets/users/' + this.selectedUser().avatar;
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  @Input() avatarSrc!: string;
  @Input() name!: String;

  get imageSrc() {
    return 'assets/users/' + this.avatarSrc;
  }

  onSelectUser() {
    console.log(this.name);
  }
}
