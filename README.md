--Note, code scavenged from snippets here and there online. Not completely sure of all code. Submitted without library version to show understanding, submitted this one to show ability to create a nice looking project using online resources.
--install angular default
--install angular material (ng add @angular/material) to use features.
--create separate file material module for all the material modules I want to use. Import material modules I want to use using documentation https://material.angular.io/components/table/api
--Declare them in exports.
--Import material module into my root module, app.module. Now I can use these mat modules in my app. 
--using table documentation; copy paste css for table in app.css
--copy paste html using documentation; adjust for number of properties in app.component.html.
(lines 306-383) adjust html properties later on following logic.
--HTML in documentation uses displayedColumns and dataSource to format table. Defined displayed Columns as array with names of columns I want (line 16-17 app.component.ts) and dataSource as type any.
--generate service file called master and declare a variable apiurl which holds my url for json database (used a placeholder for 30 objects for convenience; please swap out to local host with my json database holding 50 for if you want to use more objects).
--import HttpClientModule in app module in order to use api call. 
--inject http client in service file 8:50. 
--add file hotel.ts to Model folder; define for object Hotel what type properties name and star can be (string).
--declare variable hoteldata with type any.
--create function GetAll. Inside GetAll, this.service.GetHotel() is invoking the method defined in master service, which is calling the data from the api as an observable, so we use .subscribe to start the flow of data from the api. 
--then set hoteldata as the result of .subscribe.

--in the HTML file, like on line 345, there are directives like mat-table and mat-sort that came with the documentation, that alter the appearance of the html element.
--the datasource value should be in an array format, which is provided in app.component.ts;
--347-351 when no data is returned display message.
--361-361 and 361-370 column names and for each data in datasource display the respective object property in the cell. 
--367-368; matHeaderRow accepts array of column definitions; 368 uses a directive and the array.
--371 pulled from mag paginator api; shows first and last button and divides how many entries per page. https://material.angular.io/components/paginator/overview

--connect filter to table. Import MatInput and MatFormFieldModule.
--html 338-341; matInput directive; event listener on keyup; connected function on component lines 38-40. 

