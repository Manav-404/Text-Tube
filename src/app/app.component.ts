import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private tube ;



  ngOnInit(): void {
      chrome.storage.sync.get(["tube"] , (data)=>{
        if(typeof data.tube == undefined){
          chrome.storage.sync.set({"tube" : " "});
        }else{
          chrome.storage.sync.set({"tube" : data.tube});
          this.tube = data.tube;
          var doc = (<HTMLInputElement>document.getElementById("textArea"))
          doc.value = this.tube;

        }
      });
   
  }


   clear(){
    chrome.storage.sync.set({"tube" : " "});
    this.tube = " ";
    this.refresh();
    
  }

   refresh(){
    chrome.storage.sync.get(["tube"] , (data)=>{
        var doc = (<HTMLInputElement>document.getElementById("textArea"))
        doc.value = this.tube;
    });
  }

  save(){
    var doc = (<HTMLInputElement>document.getElementById("textArea"))
  
    chrome.storage.sync.set({"tube" : doc.value});
  }
 

  copy(){
    var doc = (<HTMLInputElement>document.getElementById("textArea"))
    doc.select();
    document.execCommand("copy");
  }
}
