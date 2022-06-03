  //var grid[9][9];
  var selectedElement = null;
  var game = [5,3,0,
              0,7,0,
              0,0,0,
              6,0,0,
              1,9,5,
              0,0,0,
              0,9,8,
              0,0,0,
              0,6,0,
              8,0,0,
              0,6,0,
              0,0,3,
              4,0,0,
              8,0,3,
              0,0,1,
              7,0,0,
              0,2,0,
              0,0,6,
              0,6,0,
              0,0,0,
              2,8,0,
              0,0,0,
              4,1,9,
              0,0,5,
              0,0,0,
              0,8,0,
              0,7,9]
  var playGame;
  cursor = new Array();

  function initialize(){
      cursor[0] = 1;
      cursor[1] = 1;
  }
  /*
  drawCursor(var x, var y){}
  */
  var canvas, context;
  var myBoard = document.getElementById('gameBoard');

  function rowLoop(start, end, num){
      var nomatch = true;
      
      for(var i=start; i < (end + 1); i++) {
          var elementData = document.querySelectorAll('[data-id="'+i +'"]');
          console.log(elementData[0].innerHTML);
          if( elementData[0].innerHTML ==  num){
              nomatch = false;
              break;
          }

      }
      return nomatch;
  }

  //check row, columns and 3x3 board for duplicates
  function checkBoard(number){
      var index = selectedElement.getAttribute('data-id');

      //check rows
      return rowLoop(0,8, number);
  }

  //check for keyboard input
  document.addEventListener('keydown', function(event){
      //49 - 57
      if(event.keyCode > 48 && event.keyCode < 58)
      {
          var number;
          switch(event.keyCode){
              case 49:
                  number = '1';
                  break;
              case 50:
                  number = '2';
                  break;
              case 51:
                  number = '3';
                  break;
              case 52:
                  number = '4';
                  break;
              case 53:
                  number = '5';
                  break;
              case 54:
                  number = '6';
                  break;
              case 55:
                  number = '7';
                  break;
              case 56:
                  number = '8';
                  break;
              case 57:
                  number = '9';
                  break;
          }
         // console.log(checkBoard(number));
          
          if(!checkBoard(number)){
              selectedElement.style.color = 'red';
          }
          
          else{
              selectedElement.style.color = 'green';  
          }
          
          selectedElement.innerHTML = number;
         // console.log(event.keyCode);
         // console.log(selectedElement);
      }
      
  });

  //set the selected box as active
  function playBox(){
      //alert(this.getAttribute('data-id'));

      //clear board
      for(var i=0; i<81; i++){
          if(playGame[i] === 0){
              var elementData = document.querySelectorAll('[data-id="'+i +'"]');
              elementData[0].style.backgroundColor = '#fff';
              
          }
      }

      if(playGame[this.getAttribute('data-id')] === 0){
          this.style.backgroundColor = 'lightblue';
          selectedElement = this;
      }
  }

  ///drawing of the game board
  function drawGrid(){
      for(var i=0; i<81; i++){
          var box = document.createElement('div');
          box.setAttribute('id', 'box');
          box.setAttribute('data-id', i);
          //call the function playbox whenever a box is clicked on
          box.addEventListener('click', playBox);
          myBoard.appendChild(box);
      }
  }

  //loading of the game array into a temp editable array playGame then loading playgame into the game board/grid
  function loadGame(){
      playGame = game;
      for(var i=0; i<81; i++){
         
          var elementData = document.querySelectorAll('[data-id="'+i +'"]');
          //elementData.getElementById("box")
          if(playGame[i] === 0){
              elementData[0].innerHTML = '';
              elementData[0].style.color = 'green';
          }
          else
              elementData[0].innerHTML = playGame[i];



         // elementData[0].innerHTML = i;
         // console.log();
      
      }
  }

  function init(){
      canvas = document.getElementById('canvas');
      //document.querySelector("#canvas")
      context = canvas.getContext('2d');

      drawGrid();
      loadGame();

  }

  init();