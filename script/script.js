class main{
    constructor(){
        let formCompare = document.querySelector('.formCompare');
        let buttonCompare = document.querySelector('.buttonCompare');
        let formData = {};
        let inputData = [];
        let outputData = [];
        buttonCompare.addEventListener('click',()=>{
            formData = new FormData(formCompare);
            inputData = Array.from(formData);
            outputData = this.compareData(inputData);
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
    
}

let mainObject = new main();