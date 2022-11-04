let Alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
//console.log(Alphabet.length);
let SampleText = 'Oto przykladowy tekst';
let CeasaredAlph = [];
let CeasaredText='';
function Shifter (Shift){
    
    for (i=0;i<Alphabet.length; i++){
    //Alphabet[i]=Alphabet[i+Shift];
    if ((i+Shift)<25)
   { CeasaredAlph.push(Alphabet[i+Shift]);}
else if ((i+Shift)>=25)
{ CeasaredAlph.push(Alphabet[i+Shift-25]);}}
    return CeasaredAlph;}
    console.log(Shifter(2));

    function Cypher (text){
        text=text.toLowerCase();
        let TextArray=[];
        for(j=0;j<text.length;j++){//iterating through the whole text, including non alphabet letters for now
            //it needs to pick a bit from the text,f.ex a letter and look for it in the alphabet, if it finds itself it needs to shift into a cyphered ver.
            let indexing=0;//index of the word we found in the
            indexing = Alphabet.findIndex(element => element===text[j])//it saves the index from the alphabet that matches the currently iterating piece of text 
            if (indexing === -1)//it checks if its even in the code, if not it saves
            {TextArray.push(text[j]);}//it leaves the symbol alone and puts it into a new arr
            else if (text[j]===Alphabet[indexing])
            {TextArray.push(CeasaredAlph[indexing]);}
            
    }
    CeasaredText=TextArray.join('');//works fine
    return CeasaredText;// works fine
    }
    console.log(Cypher(SampleText));