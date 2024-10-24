# FirstAngularApp

## Create file automatically

```
ng g c user
```

## Binding data

Way 1:

```html
<span>{{ selectedUser.name }}</span>
```

Property binding syntax

```
<img [src]="value" />
```

## Event listener

```
<button (click)="onSelectUser()">Hello world</button>

export class UserComponent {
    onSelectUser () {
        console.log('Hello world')
    }
}
```
