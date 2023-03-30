# synonym.angular

Synonym.angular is a frontend for system that works as a synonym search tool. Backend with full functionality can be found on this link: https://github.com/mmujkanovi1/synonym.java.

## Requirements

 - Installed Angular CLI version 13.2.6 on your machine,
 - Node 14.17.6,
 - Package Manager: npm 6.14.15.

## Implementation
When application is opened it leads us to a home page as we can see on the photo below:

<img src="https://github.com/mmujkanovi1/synonym.angular/blob/develop/src/assets/images/basicHomePage.png" widht="750" height="550">

In this page we have two forms:
 - one for searching for synonyms,
 - one for adding synonyms.

 On "About" page you can find some information about the application.

 For this application I used the NGRX library (state of the whole application is located in one container and can be changed only with reducers) in order for application to be maintanable, reusable, readable and user-frendly.

### Searching synonyms
In the search input, you can type a word to search for its synonyms. The result appears after pressing the enter key on your keyboard or pressing the search icon, as you can see from the following example:
<img src="https://github.com/mmujkanovi1/synonym.angular/blob/develop/src/assets/images/searchTriggered_new.png">


Synonyms are listed as buttons and if you click on any of them, then synonyms for the clicked word will apear in a field, and the clicked word will show in the search input section.

### Adding synonyms
In the adding synonyms form, there are two inputs (text type) located, for the word and for its synonym and on press submit button, synonym will be added with the message whether adding the synonyms was successful or not.

On "About" page you can find some information about the application.

## How to run
 - Clone the project;
 - Open the terminal and go into the root of the project;
 - Type command "npm install";
 - Then "ng serve".

 After those steps aplication should be up and running!


