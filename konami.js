let konami = {};

konami.banner = 
`
-----
|[_]|
|+ ;| 
\`---'
konami.js Loaded...
`;
    
konami.load = () => {
    console.log(konami.banner);
} 

konami.sequenceIndex = 0;

konami.injectIFrame = () => {

    //make an iFrame center align with video overlay and fill 80% of width/height
    const iFramePlayer = 
    `
    <iframe 
        style="position:fixed; top:10%; left:10%; bottom:0; right:0; width:80%; height:80%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" 
        width="100%" height="100%" 
        src="https://www.youtube.com/embed/ZZ5LpwO-An4?autoplay=1">
    </iframe>
    `

    const iFrameContainer = document.createElement("div")
    
    iFrameContainer.setAttribute("id", "iFrameContainer");
    iFrameContainer.innerHTML = iFramePlayer;
    
    document.body.appendChild(iFrameContainer);

}

//up,up,down,down,left,right,left,right,b,a
konami.sequence = 
[
    //primary key, alternate key
    ["Up", "ArrowUp"],
    ["Up", "ArrowUp"],
    ["Down", "ArrowDown"],
    ["Down", "ArrowDown"],
    ["Left", "ArrowLeft"],
    ["Right", "ArrowRight"],
    ["Left", "ArrowLeft"],
    ["Right", "ArrowRight"],
    ["B", "b"],
    ["A", "a"]
]

konami.handleKonamiSequence = (e) => {

    switch (e.key)
    {
        //primary name of key
        case konami.sequence[konami.sequenceIndex][0]:
        //secondary name of key
        case konami.sequence[konami.sequenceIndex][1]:
            konami.sequenceIndex++;
            if (konami.sequenceIndex == konami.sequence.length) {
                konami.injectIFrame();
                konami.sequenceIndex = 0;  
            }
            break;
        default:
            //reset sequenceIndex, something other than
            //code sequence entered
            konami.sequenceIndex = 0;  
    }
}

document.onkeydown = konami.handleKonamiSequence;
window.onload = konami.load;