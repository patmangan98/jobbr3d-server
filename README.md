# Jobbr3D 
A 3D printing print tracking app for freelancers to keep their jobs organized. It will allow them to keep track of their jobs, customers, and eventually track their materials. Down the road, I want it to be able to help them with tracking their profits and expenses. I also want to intergrate it with octoprint, so they can manage their printers remotely within the app. This would allow them to esentially have all the most important aspects of there business in one place. 

## MVP
As a user...
    - I want to create a new customer because I want to store potential leads.  
    - I want to want to update a customer because they want to change their contact information. 
    - I want to see a list of all my customers in case I need to contact them and I don't have there contact information on hand. 
    - I want to delete a customer because I want to remove customers that may only do business with me once for a small job.  

    - I want to add new print for my customers because if I have a returning customer, I want to be able to add a new job. 
    - I want to see the prints that my customers currently have outstanding
    - I want to update a print because protoyping is a process, and details about the print may change often. 
    - I want to remove a print because a customer might change their mind and I want to reflect that.

    - I want to sign-up
    - I want to sign-in
    - I want my own unique database.
    - I want to see my unfinished jobs because I want to see what I have left to do. 
    - I want to see my finished jobs because I might have done the exact same print for another customer before. 
## Version 2
    - I want to add in my materials for tracking 
    - When a job completes, I want the material that was used in the print to update so I can see the amount remaining 
    - I want to store information about a previously agreeded on price because I want to be able to reference it if something comes up.  
    - I want seperate catergory for when I design things, as opposed to when I just print things because I want to charge for my time. 
    - Want a calaulator for determing how much I should charge for things like wear and tear on my machine, because there are consumables associated with a 3d printer that I have to buy. 
    - Want a calculator for determining how much I should markup my material costs because it is tricky to land on a price. 
## Version 3
    - I want to be able to access my octoprint instances within the app so I can essentially everything to do with my business within one app.
    - I want a tool that reccommends a price point for my services based on past jobs, and other users, because it can be tricky to know how much to charge. 


## Technology Used

-JavaScript -Mongoose -MongoDb -Express -Cors -Passport -Passport JWT -Node -Nodemon -Bootstrap

## Routes

|   NAME    |           PATH          |   HTTP VERB   |                 PURPOSE                 |
| --------- | ----------------------- | ------------- | --------------------------------------- |
|   Index   |  /customers             |   GET         | Display all customers                   |
|   Show    |  /customers/:id         |   GET         | Show one specific customer              |
|   update  |  /customers/:id         |   patch       | update one specific customer            |
|   delete  |  /customers/:id         |   delete      | delete one specific customer            |
|   create  |  /customers/:id         |   post        | create a customer                       |
|   create  |  /prints                |   post        | create a print                          |
|   update  |  /prints/:printid       |   patch       | update a print                          |
|   delete  |  /prints/:printid/custId|   delete      | delete a print                          |
|   signup  |  /sign-up               |   post        | sign up for app                         |
|   signin  |  /sign-in               |   post        | sign in for app                         |



## Wireframe of USER Experience. 

![Alt text](project-2-wireframe.jpg)



## ERD
![Alt text](project-2-erd.jpg)

## Links
https://github.com/patmangan98/jobbr3d-client https://github.com/patmangan98/jobbr3d-server