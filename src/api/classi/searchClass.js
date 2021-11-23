export const searchMovies = (type = "-") => { //Film viene settato come Default
    if (type === "-") return {
        "materie" : []
    }
    
    if (type === "secondo") return {
        "materie" : ["FullStack 20/22","DigitalMarketing 20/22","CyberSicurity 20/22"]
    }

    else return {
        "materie" : ["FullStack 21/23","DigitalMarketing 21/23","CyberSicurity 21/23"]
    }
  
  };