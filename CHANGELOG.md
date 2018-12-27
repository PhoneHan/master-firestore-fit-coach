# Updates to Ionic 4.0.0-rc.0

- Check out `package.json`, most of the packages where updated.
- The Ionic Team removed `href` for buttons or links, you should change it for `routerLink` instead.
- Adds the `ReactiveFormsModule` to the `HomeModule`
- Changes the `(submit)` from forms to `(click)`.

For example, in the home page the buttons change from this:

```html
<ion-button
  expand="block"
  (submit)="weightTrack(weightTrackForm)"
  [disabled]="!weightTrackForm.valid"
></ion-button>
```

To this:

```html
<ion-button
  expand="block"
  (click)="weightTrack(weightTrackForm)"
  [disabled]="!weightTrackForm.valid"
></ion-button>
```

- In the authentication service we use the production imports from Firebase, changing from this:

```js
import * as firebase from 'firebase';
```

To this:

```js
import * as firebase from 'firebase/app';
import 'firebase/firestore';
```

- The `createUserWithEmailAndPassword()` function inside the authentication service had some whitespace in the path to the Firestore reference.
- The login page had gone missing from the code in one update, just re-added it.
