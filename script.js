function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log('inputdate value',inputdate.value);//string form need to convert to date
    let formatteddate= new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value=formatteddate;
    console.log('outputdate value',outputdate.value);
}