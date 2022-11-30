var buttonclick1 = document.getElementById('digitalSpaces1');
var display1 = document.getElementById('digitalSpacesResult1');
var display2 = document.getElementById('digitalSpacesResult2');


// var keys = [1, 2, 3];

var keys = [ 
            "Where does the field of urban design predominantly exist?", 
            "What is easy to take for granted if one is an habitual driver?",
            "What is the purpose of the installation?",
            "What would you like to account for?",
            "What was the object you wanted to render uncomfortable?",
            "What are food futures possible and plausible through?",
            "Where does the material go when we can no longer see it?", 
            "What would we do by looking at documentation and cartography?",
            "How can we conceptualize the absence of something",
            "What is the problem with tire wear and tear?",
            "What are two separate things?",
            "What is an interesting opportunity to explore what defines an image and its associations?",
            "What are some ways to use digital media in a critical form to bring awareness  </br> to the seperation of the body/mind within a real world?",
            "What would i hope to bring forth a critical way in provoking?",
            "What are some platforms that you researched?",
            "What is an important aspect of your research to analyse?",
            "What are produced simultaneously?",
            "How can we re-contextualize our modern fossils?",
            "Capturing and displaying the invisible creates the possibilities of what?",
            "What can we learn about the way we live, consume and produce?",
            "What can engagement with a material lead to?",
            "What is the role of design and art in the evolution of the built environment?",
            "How would responses to public problems be different if we considered the vibrancy and the agency of materiality?"
];
    

var values = [
    "Academic and bureaucratic spheres",
    "How much space is taken up by cars",
    "To present the frustration caused by restrictive urban design",
    "Intersections of access caused bysocioeconomic factors and/or disability",
    "Home, community",
    "Material properties of our diet",
    "Where does the material go",
    "Create anew way of presenting a view of the city",
    "Standalone material object",
    "No",
    "Physical materiality and digital space",
    "Different types of generated and found materials",
    "If the digital world is a simulacrum of reality",
    "Conceptual thought through interpretation of the media, material/surface and method </br> to display the information",
    "Youtube, netflix, the concordia library, the banq",
    "Technology behind projections of the past",
    "Architecture and the environment",
    "Novel and situated narratives",
    "Discourse and critical analysis",
    "A specific place and its materialities",
    "More sustainable scenarios for the future",
    "Enact new models for making, collaborating, and sharing",
    "Vibrancy and the agency of materiality"
];
 
// Object created
var obj = {};    

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
    
}

var x = 0;

function digitalSpaces1(num) {
    
    x = Math.floor(random(1, 23))-1 ;
    // display1.innerHTML = "key + " keys[x] + " Value" + values[x];
    display1.innerHTML = " " + keys[x] + " <br> ";

    // display2.innerHTML = values[x] ;
     display2.innerHTML= " " + values[x] + " <br><br><br>";

}

function btnShow() {
    display2.style.color="#44646b";
  }
  function btnHide() {
    display2.style.color="#85d1f5";
  }