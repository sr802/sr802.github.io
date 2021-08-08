//명언 만들기(Array)
const quotes = [
    {
        quote : "The way to get started is to quit talking and begin",
        author : "Walt Disney"
    },
    {
        quote : "Life is what happens when you're busy making other",
        author : "John Lennon"
    },
    {
        quote : "The world is a book and those who do not travle read only",
        author : "Saint Augustine"
    },
    {
        quote : "Eighty percent of success is showing up.",
        author : "Woody Allen"
    },
    {
        quote : "Always bear in mind that your own resolution to succeed is more important than any one thing.",
        author : "Abraham Lincoln"
    },
    {
        quote : "To follow, without halt, one aim: There's the secret of success.",
        author : "Anna Pavlova"
    },
    {
        quote : "Never be entirely idle; but either be reading, or writing, or praying or meditating or endeavoring something for the public good.",
        author : "Thomas a Kempis"
    },
    {
        quote : "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author : "Abigail Adams"
    },
    {
        quote : "The first step to getting the things you want out of life is this: Decide what you want.",
        author : "Ben Stein"
    },
    {
        quote : "Youth isn't always all it's touted to be.",
        author : "Lawana Blackwell"
    },
    ];
    
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    
    //10개의 명언 만들어 놓은거 랜덤으로 가져옴
    //console.log(quotes[Math.floor(Math.random()*10)]);
    
    //위에꺼는 수가 정해져있음 따라서 length쓰면 명언 추가되어도 노상관
    //console.log(quotes[Math.floor(Math.random()* quotes.length)]);
    
    //변수만들어서 랜덤으로 가져오기
    const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];
    
    //콘솔아닌 페이지 창에 명언 뜨게함
    quote.innerText = todaysQuote.quote;
    //페이지 창에 작가 뜨게함
    author.innerText = todaysQuote.author;
    
    