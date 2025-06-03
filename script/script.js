class main{
    constructor(){
        let formCompare = document.querySelector('.formCompare');
        let buttonCompare = document.querySelector('.buttonCompare');
        let divOutput = document.querySelector('.divOutput');
        formCompare.reset();
        let formData = {};
        let inputData = [];
        let outputData = [];
        buttonCompare.addEventListener('click',()=>{
            formData = new FormData(formCompare);
            inputData = Array.from(formData);
            outputData = this.compareData(inputData);
            this.outputChange_Main(inputData,outputData,divOutput);
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
        let pCompare = document.querySelector('.pCompare');
        console.log(inputData);
        console.log(outputData);
        console.log(divOutput);
        this.outputChange_Single(inputData,outputData,pCompare);
    }
    outputChange_Single(inputData,outputDataSingle,pElement){
        console.log(inputData);
        console.log(outputDataSingle);
        console.log(pElement);
        let tempSpan = [];
        for(let i = 0; i < outputDataSingle.length;i++){
            tempSpan = document.createElement('span');
            if(inputData[0][1].length > i){
                tempSpan.textContent = inputData[0][1][i];
                if(outputDataSingle[i] == false){
                    tempSpan.classList.add('colorBackground_Red', 'textWidth50');
                }
                pElement.appendChild(tempSpan);
            }
        }
    }
    outputChange_SingleCharacter(singleCharacter,pElement){
    }
    clearOutputDiv(){
    }
}

let mainObject = new main();