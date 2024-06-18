// const heading= React.createElement("h1",{},"Namaste Javascript");
//    const root =ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);
//    console.log(heading);


//    const paragraph = React.createElement("p",{"class":"content"},"this is react ,i am doing learning react and adapting all the react concepts very easily,I am grateful to this laptop for helping me in my learning journey,I am grateful to akshay for his efforts in the react course")
//    const add = ReactDOM.createRoot(document.getElementById("container"));
//    add.render(paragraph);

   /*
   <div id ='parent'>
      <div id='child'>
         <h1></h1>
         <h2><h2>
      </div>
    </div>
*/
 const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
React.createElement("h1",{},"hello React!"),React.createElement("h2",{},"this is best")]
    ));

    console.log(parent);

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);