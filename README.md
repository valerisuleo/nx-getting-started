<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>


### What's Nx?

- Extension of Angular CLI
- Created by former *Google* Devs
- With Nx we can create:
	- workspaces
	- Apps & libraries

### Why Nx?

- We want to share data across multiple angular apps
- To build very large enterprise apps
- Help us in managing *Monorepo*
- Makes easy to scale



## Install Nx

`npm install -g nx`

## Create worspace

`npx create-nx-workspace@latest`

> 🔎 The CLI will create the first app without the `app-routing.module.ts`. You will have to add it manually

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Run: 

- `nx serve myappname`

for a dev server. Navigate to `http://localhost:4200/myappname`. The app will automatically reload if you change any of the source files.

> How can I run multi apps at the same time?

- Just run `nx serve myappname2` and the terminal will assing a random port;
- Go to `angular.json` and assign a port to *myappname2*:

```
"serve": {
"builder": "@angular-devkit/build-angular:dev-server",
"options": {
    "browserTarget": "posts:build",
    "port": 3200
},
```

## Create an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

We can also pass custom params:

`ng g @nrwl/angular:app my-app --routing`

> This will add the router in my-app/app.module.ts

```
 imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ],
```

> What does router `initialNavigation` do?

`initialNavigation` *parameter not only controls whether to perform initial navigation on router initialization(parse the URL and set the router state) but also whether to block the application bootstrap until the route is fully resolved (fetch lazy loaded chunks and finish rendering)*.

- `enabledNonBlocking` - (default) The initial navigation starts after the root component has been created. The bootstrap is not blocked on the completion of the initial navigation. 
- `enabledBlocking` - The initial navigation starts before the root component is created. The bootstrap is blocked until the initial navigation is complete. This value is required for server-side rendering to work.
- `disabled` - The initial navigation is not performed. The location listener is set up before the root component gets created. Use if there is a reason to have more control over when the router starts its initial navigation due to some complex initialization logic.

## Create a library

So far we have 2 apps (*todos* and *posts*) and now we wanna link a library to our *todos* app.

Run:

```
ng g @nrwl/angular:lib dashboard --directory=todos --routing --parentModule=apps/todos/src/app/app.module.ts
```

1. `ng g @nrwl/angular:lib dashboard`: Create the lib;
2. `--directory=todos` will create an todos folder and add the new lib inside of it;
3. `--parentModule=apps/todos/src/app/app.module.ts` this is how we link the lib to our *todos* app;


> **Note**: Libraries are shareable across libraries and applications. They can be imported from `@nxt/mylib`.


### Create a component

We wanna now create a new component for our *dashboard* library.

Run `ng g component my-component --project=dashView` to generate a new component.

Now if we look at `todos-dashboard.module.ts` we can see our `DashViewComponent` been added to the `declarations` but **do not** forget to add it to the router too!

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashViewComponent } from './dash-view/dash-view.component';

export const todosDashboardRoutes: Route[] = [
    { path: '', component: DashViewComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [DashViewComponent],
})
export class TodosDashboardModule {}

```

Now go back to our **todos** app we need to update:

1. `app-routing.module` and provide it with a path (*'todos-dashboard'*) and a component/s (*todosDashboardRoutes*) to be used from our *todos lib*:

	```
	import { todosDashboardRoutes } from '@nx-getting-started/todos/dashboard';
	
	const routes: Routes = [
	    { path: 'todos-dashboard', children: todosDashboardRoutes },
	];
	
	``` 

2. `app.module.ts`

	```
	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { AppComponent } from './app.component';
	import { AppRoutingModule } from './app-routing.module';
	
	import { TodosDashboardModule } from '@nx-getting-started/todos/dashboard';
	
	@NgModule({
	    declarations: [AppComponent],
	    imports: [BrowserModule, AppRoutingModule, TodosDashboardModule],
	    providers: [],
	    bootstrap: [AppComponent],
	})
	export class AppModule {}
	
	```
	

### Lazy loading

Let's create now another lib but this time we want to add the *lazy loading*:

Run

```
ng g @nrwl/angular:lib auth --directory=posts --routing --lazy --parentModule=apps/posts/src/app/app.module.ts

```

This `--lazy` will do a few thing for us behind the curtains:

1. If you go to `posts-auth.module`, you will notice the code generated for this module is different than the one created for `todos-dashboard.module`.

	```
	import { NgModule } from '@angular/core';
	import { CommonModule } from '@angular/common';
	import { RouterModule } from '@angular/router';
	
	@NgModule({
	    imports: [
	        CommonModule,
	        RouterModule.forChild([
	            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
	        ]),
	    ],
	})
	export class PostsAuthModule {}
	
	```

2. Now back to the *posts* app, inside the `app.module.ts` we can the *lazy loading* synthax is already in place.

	```
	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	
	import { AppComponent } from './app.component';
	import { RouterModule } from '@angular/router';
	
	@NgModule({
	    declarations: [AppComponent],
	    imports: [
	        BrowserModule,
	        RouterModule.forRoot(
	            [
	                {
	                    path: 'posts-auth',
	                    loadChildren: () =>
	                        import('@nx-getting-started/posts/auth').then(
	                            (module) => module.PostsAuthModule
	                        ),
	                },
	            ],
	            { initialNavigation: 'enabledBlocking' }
	        ),
	    ],
	    providers: [],
	    bootstrap: [AppComponent],
	})
	export class AppModule {}
	
	```




## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.


## Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

	