
const makeColor = (function() {
    let color1 = function(){
    
    let randNum= () => Math.floor(Math.random() * 10);
    // invoke random number 6 times to create hexcolor
    let randColor = parseInt([randNum(), randNum(), randNum(), randNum(), randNum(), randNum()].join(''))
    
    
    
    
    const hexColor = (`#${randColor}`)
    
    
    
    
    return hexColor;
    
    
    };
    
    
    
    console.log(color1());
    let setupEventListener = function(){ 
    
        
        // console.log(ran)
        
        document.querySelector('.final-button').addEventListener('click', function(){
            document.querySelector('.main-box').style.backgroundColor = color1();
        });
    };
    
    
    setupEventListener();
        
})();

