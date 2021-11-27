

fetch('elements.json')
  .then(function (response) {
    // The JSON data will arrive here
    return response.json()
  })
  .then(function (data) {
      console.log("helo");
     appendData(data)
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
    console.log("error occured on fetching data from api "+err);
  });


  function appendData(data) {
    var elements = [];
    var element = document.getElementById("Elements");
    var properties = document.getElementById("Properties");
    var content = document.getElementById("content-div");
    properties.className = 'properties_btn'
    for (var i = 0; i < data.length; i++) {
      var elementsDiv = document.createElement("a");
      elementsDiv.setAttribute('id',i);
      elementsDiv.href = '#'+data[i].elementTitle
      elementsDiv.className = 'element_btn'
      elementsDiv.innerHTML = data[i].elementTitle;
      elements.push(elementsDiv);
   
      element.appendChild(elementsDiv);
    }
  

  
    var elements = document.getElementsByClassName('element_btn');
    var title = document.getElementById("content-title");
    
  for (let i = 0; i < elements.length; i++) { 
    
    elements[i].addEventListener("click",function() {
     
      properties.innerHTML = '';
      content.innerHTML = '';
      
      
      
      for (let index = 0; index < data[i].elementSubtitle.length; index++) {
        // elements[i].style.backgroundColor = 'green';
        var elementDescription = document.createElement("p");
        elementDescription.className = 'content-description';
        var propertiesDiv = document.createElement("a");
        propertiesDiv.className = 'subElement_btn';
      
        elementDescription.innerHTML = data[i].elementSubtitle[index].elementDescription
        
        propertiesDiv.innerHTML = data[i].elementSubtitle[index].elementName;

        console.log();

        properties.appendChild(propertiesDiv);
        content.appendChild(elementDescription)
    }
      
      title.innerHTML = elements[i].innerHTML;
     
    });
  }
}








