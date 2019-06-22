const stopsBetweenStations = function(startLine, startStation, endLine, endStation){


    const red = ['South Station','Park Street','Kendall','Central' , 'Harvard', 'Porter', 'Davis','Alewife'];
    
    const green = ['Government Center' , 'Park Street',  'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
    
    const orange = ['North Station', 'Haymarket',  'Park Street',  'State', 'Downtown Crossing', 'Chinatown', 'Back Bay','Forest Hills'];
    
    const bigArr = [red , green , orange];
    
    let stops = 0;
    
    
    
    let line ;
    startLine = startLine.toLowerCase();
    if (startLine === 'red')
        line = 0;
    
        else if(startLine == 'green')
            line = 1;
    
        else 
        line = 2    
    
    
    
    let endL;
    
    endLine = endLine.toLowerCase();
    
    if (endLine === 'red')
        endL = 0;
    
        else if(endLine == 'green')
            endL = 1;
    
        else 
        endL = 2  
    
    
    
    
    const parkInd = bigArr[line].indexOf('Park Street');
    const startInd = bigArr[line].indexOf(startStation);
    const targetInd = bigArr[endL].indexOf(endStation);
    const endParkInd = bigArr[endL].indexOf('Park Street');
    
    
    console.log(`Rider boards the train at ${startLine} Line and ${startStation}.`);

    if (startLine == endLine){
    
    
        if (startInd > targetInd) {
    
            for (let i = startInd-1; i > targetInd; i-- ){
                console.log(`Rider arrives at ${startLine} Line and ${bigArr[line][i]}.`);
                stops++;
    
    
            }
    
            }
    
        else {
            for (let i = startInd+1; i < targetInd; i++ ){
                console.log(`Rider arrives at ${startLine} Line and ${bigArr[line][i]}.`);
                stops++;
            
            
                }
    
    
            }
            
    
    }
    
    else {
    
        if (startInd > parkInd) {
            for (let i = startInd-1; i >= parkInd; i-- ){
                console.log(`Rider arrives at ${startLine} Line and ${bigArr[line][i]}.`);
            stops++;
            }
        }
    
        else {
            for (let i = startInd+1; i <= parkInd; i++){
            
    
                console.log(`Rider arrives at ${startLine} Line and ${bigArr[line][i]}.`);
             stops++;
            }
    
        }
        
            console.log(`Rider transfers from ${startLine} Line to ${endLine} Line at Park Street`);
    
        if (targetInd < endParkInd) {
    
            for (let i = endParkInd-1; i >= targetInd; i-- ){
                console.log(`Rider arrives at ${endLine} Line and ${bigArr[endL][i]}.`);
            stops++;
            }
        }
    
    
        else 
                for (let i = endParkInd+1; i <= targetInd; i++ ){
                    console.log(`Rider arrives at ${endLine} Line and ${bigArr[endL][i]}.`);
                    stops++;
                }
                    
                }
            
            console.log(`Rider exits the train at ${endLine} Line and ${endStation}.`);
        
        
        }