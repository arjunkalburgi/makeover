Themes are written using Sass just like in hakim's reveal.js. This is to keep things modular and reduce the need for repeated selectors across files. I took the liberty of adding to hakim's setup so that you can make makeover themes even easier.



## Creating a Theme

### Fork Repo
To create your own theme, fork this project. After your theme is made you can submit a pull request back into makeover to grow the library. 


### Duplicate Existing Theme
Once forked, start by duplicating a `.scss` file in [/css/theme/source](https://github.com/askalburgi/makeover/blob/master/Create\ A\ Theme/source) and making appropriate changes (name of the file, sass/style). If you don't know sass, I found [this tutorial helpful](http://sass-lang.com/guide). 

Go to `path_to/index.html#/themes` to look at themes.


### Create Theme
Once you've made some changes and want to test out your theme, run `grunt --theme=theme_name --force`. This will compile your theme in the appropriate directories, including adding a link to `path_to/index.html#/themes` where you can see your changes in index.html. 

If you do not have npm or grunt installed - help [here](https://github.com/askalburgi/makeover/tree/master/Create%20A%20Theme#install-dependancies)


### Edit Theme
To recompile your theme after making changes, run `grunt sass --theme=theme_name`. This won't re-add the link to your theme to `path_to/index.html#/themes`. 


### Add Back to Library
Once you are finished with your theme, don't forget to submit a pull request back into [makeover](https://github.com/askalburgi/makeover) so that others can use and build off your theme as well!! ([See below for details](https://github.com/askalburgi/makeover/tree/master/Create%20A%20Theme#how-to-pr))



## Additional

### Install dependencies 
If you don't have grunt installed, you'll need to run `npm install` in the Create A Theme directory.

If npm is not installed - check it out [here](https://nodejs.org/en/download/).
Once installed, `npm install` should now work.


### How to PR 
Your PR should only contain 3 added files (`Create A Theme/source/theme_name.scss`, `Reveal Files/css/theme/theme_name.css` and `Themes/theme_name.css`) and a modified index.html file. Make sure the index.html has only one link to your theme! If you run the default/main grunt command more than once on your theme, it will create multiple links. 

Once you ensure the repo is clean [make a pull request](https://github.com/askalburgi/makeover/pulls)


### Additional Theme Info
(from hakim)
Each theme file does four things in the following order:

1. **Include [/css/theme/template/mixins.scss](https://github.com/askalburgi/makeover/blob/master/Create\ A\ Theme/template/mixins.scss)**
Shared utility functions.

2. **Include [/css/theme/template/settings.scss](https://github.com/askalburgi/makeover/blob/master/Create\ A\ Theme/template/settings.scss)**
Declares a set of custom variables that the template file (step 4) expects. Can be overridden in step 3.

3. **Override**
This is where you override the default theme. Either by specifying variables (see [settings.scss](https://github.com/askalburgi/makeover/blob/master/Create\ A\ Theme/template/settings.scss) for reference) or by adding any selectors and styles you please.

4. **Include [/css/theme/template/theme.scss](https://github.com/askalburgi/makeover/blob/master/Create\ A\ Theme/template/theme.scss)**
The template theme file which will generate final CSS output based on the currently defined variables.
