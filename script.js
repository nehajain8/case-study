//Load JSON data from local JSON file  
(function() {
  
    function updateJSON(data){
        var ul = document.getElementById('personality-highlights');
        data.personalityHighlights.forEach(function(v, i){
            var list= document.createElement('li');
            list.appendChild(document.createTextNode(v.detail));
            ul.appendChild(list);
        });
        //Update main title information
        document.getElementById("main-title").innerHTML=data.title;

        //Update basic information data
        document.getElementById("basic-Information").innerHTML=data.basicInformation;

        //Update education data
        var eduDiv = document.getElementById('education');
        data.education.forEach(function(v, i){
            var para= document.createElement('p');
            para.appendChild(document.createTextNode(v.detail));
            eduDiv.appendChild(para);
        });

        //Update contact detail data
        var contactDiv = document.getElementById('contact-details');
        data.contactDetails.forEach(function(v, i){
            var para= document.createElement('p');
            para.appendChild(document.createTextNode(v.detail));
            contactDiv.appendChild(para);
        });

        //Update professional experience data
        var profExpDiv = document.getElementById('professional-exp');
        data.professionalExp.forEach(function(v, i){
            var frag1 = document.createDocumentFragment();
            var para1= document.createElement('p');
            para1.className = "note1";
            var para2= document.createElement('p');
            para2.className = "note2";
            frag1.appendChild(para1).innerHTML = v.detail1;
            frag1.appendChild(para2).innerHTML = v.detail2;
            profExpDiv.appendChild(frag1);
        });

    };
    function loadJSON() {     
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'profile-details.json', true); // xml request to json file url
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
            var response = xobj.responseText;
            var data = JSON.parse(response);
            updateJSON(data);  
            }
        };
        xobj.send();  
    };
    loadJSON();
})();
