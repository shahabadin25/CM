//getElementsbyTagName---> it always returns an array

const quote=document.getElementsByTagName("blockquote")[0];
const author=document.getElementsByClassName("author")[0];

const newQuote=document.querySelector(".quote_btn");
const tweetBtn=document.querySelector(".tweet_btn");

const apiLink="https://quotes-api-self.vercel.app/quote";


let temp;//global variable
//API CALL-> async await

const getData=async ()=>{
    const response=await fetch(apiLink);
    const data=await response.json();
    //console.log(data);
    // console.log(data.author);
    // console.log(data.quote);
    temp=data.quote;
    quote.innerText=data.quote;
    author.innerText=data.author;
};
getData();


newQuote.addEventListener("click",()=>{
    getData();
});

//window.open(link,new window name,specification)
tweetBtn.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+temp,"tweet post","width=400px,height=400px");
    //window is an object of js which opens e new window
});

// console.log("the quote is :"+temp);