class main{
    constructor(){
        let formCompare = document.querySelector('.formCompare');
        let buttonCompare = document.querySelector('.buttonCompare');
        let divInput = document.querySelector('.divInput');
        let divOutput = document.querySelector('.divOutput');
        let templateOutput = document.querySelector('.templateOutput');
        let buttonReset = '';
        
        formCompare.reset();
        let formData = {};
        let inputData = [];
        let outputData = [];
        buttonCompare.addEventListener('click',()=>{
            formData = new FormData(formCompare);
            inputData = Array.from(formData);
            outputData = this.compareData(inputData);
            this.changeDisplay(divInput,divOutput,templateOutput);
            this.outputChange_Main(inputData,outputData,divOutput);
            formCompare.reset();
            buttonReset = document.querySelector('.buttonReset');
            buttonReset.addEventListener('click',()=>{
                this.changeDisplay(divInput,divOutput);
                this.clearOutputDiv(divOutput);
            });
        });
    }
    compareData(inputData){
        let tempData = [];
        let output = [];
        let count = 0;
        tempData.push(inputData[0][1].split(''));
        tempData.push(inputData[1][1].split(''));
        if(tempData[0].length > tempData[1].length){
            count = tempData[0].length;
        } else {
            count = tempData[1].length;
        }
        for(let i = 0; i < count;i++){
            if(tempData[0].length > i){
                if(tempData[0][i] == tempData[1][i]){
                    output.push(true);
                } else {
                    output.push(false);
                }
            } else {
                output.push(false);
            }
        }
        return(output);
    }
    outputChange_Main(inputData,outputData,divOutput){
        let pOriginal = document.querySelector('.pOriginal');
        let pArrow = document.querySelector('.pArrow');
        let pCompare = document.querySelector('.pCompare');
        this.outputChange_Single(inputData,outputData,pOriginal, 'original');
        this.outputChange_Arrow(outputData,inputData[0][1].length, pArrow);    
        this.outputChange_Single(inputData,outputData,pCompare, 'compare');    
    }
    outputChange_Single(inputData,outputDataSingle,pElement,type){
        let tempSpan = [];
        let tempIndex = 0;
        if(type == 'original'){
            tempIndex = 0;
        } else if(type == 'compare') {
            tempIndex = 1;
        }
        for(let i = 0; i < outputDataSingle.length;i++){
            tempSpan = document.createElement('span');
            if(inputData[0][1].length > i){
                tempSpan.textContent = inputData[tempIndex][1][i];
                if(outputDataSingle[i] == false){
                    tempSpan.classList.add('colorBackground_Red');
                }
                tempSpan.classList.add('textWidth50');
                pElement.appendChild(tempSpan);
            }
        }
    }
    outputChange_Arrow(outputDataSingle,outputLength,pElement){
        let imageSync = ["url('../assets/images/Sync.png')","url('../assets/images/Sync_Problem.png')"];
        let tempSpan = '';
        for(let i = 0; i < outputLength;i++){
            tempSpan = document.createElement('span');
            if(outputDataSingle[i] == true){
                tempSpan.textContent = '.';
                tempSpan.style.backgroundImage = imageSync[0];
            } else if(outputDataSingle[i] == false){
                tempSpan.textContent = '.';
                tempSpan.style.backgroundImage = imageSync[1];
            }
            tempSpan.classList.add('textWidth50');
            pElement.appendChild(tempSpan);
        }
    }
    outputChange_SingleCharacter(singleCharacter,pElement){
    }
    changeDisplay(inputDisplay,outputDisplay,templateOutput){
        if(outputDisplay.style.display === 'none' || outputDisplay.style.display === ""){
            let templateClone = templateOutput.content.cloneNode(true);
            outputDisplay.appendChild(templateClone);
            outputDisplay.style.display = 'flex';
            inputDisplay.style.display = 'none';
        } else {
            outputDisplay.style.display = 'none';
            inputDisplay.style.display = 'flex';
        }
    }
    clearOutputDiv(divOutput){
        while(divOutput.firstChild){
            divOutput.removeChild(divOutput.lastChild);
        }
    }    
}

let mainObject = new main();