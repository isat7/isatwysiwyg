
function isat_wygsiwyg_zone(isat_op){
  
  console.log("worked");


  // var isat=document.getElementById("main-input");

//options
 //trigger   
 //editor_style
  var lastelem;

  





  var isat_savedSelection,isaveSelection, restoreSelection;



// // -------------------------------------------------------------------------newt task----------------------------------------------------------------------------------------





if (window.getSelection && document.createRange) {
 var saveSelection = function(containerEl) {
      var range = window.getSelection().getRangeAt(0);
      var preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(containerEl);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      var start = preSelectionRange.toString().length;

      return {
          start: start,
          end: start + range.toString().length
      }
  };

  restoreSelection = function(containerEl, savedSel) {
      var charIndex = 0, range = document.createRange();
      range.setStart(containerEl, 0);
      range.collapse(true);
      var nodeStack = [containerEl], node, foundStart = false, stop = false;
      
      while (!stop && (node = nodeStack.pop())) {
          if (node.nodeType == 3) {
              var nextCharIndex = charIndex + node.length;
              if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                  range.setStart(node, savedSel.start - charIndex);
                  foundStart = true;
              }
              if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                  range.setEnd(node, savedSel.end - charIndex);
                  stop = true;
              }
              charIndex = nextCharIndex;
          } else {
              var i = node.childNodes.length;
              while (i--) {
                  nodeStack.push(node.childNodes[i]);
              }
          }
      }

      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  }
} else if (document.selection && document.body.createTextRange) {
saveSelection = function(containerEl) {
      var selectedTextRange = document.selection.createRange();
      var preSelectionTextRange = document.body.createTextRange();
      preSelectionTextRange.moveToElementText(containerEl);
      preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);
      var start = preSelectionTextRange.text.length;

      return {
          start: start,
          end: start + selectedTextRange.text.length
      }
  };

  restoreSelection = function(containerEl, savedSel) {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(containerEl);
      textRange.collapse(true);
      textRange.moveEnd("character", savedSel.end);
      textRange.moveStart("character", savedSel.start);
      textRange.select();
  };
}



// -----------------------------------------------------------------------------------end new task-------------------------------------------------------------------------------















  document.onmouseover = function (e) {
  
    // var isat_parameter=document.getElementById("isat_parameter");

          var event = e || window.event;
  
          var x = e.clientX, y = e.clientY;
          
  
  var elementOnMouseOver = document.elementFromPoint(x, y);
  
     if (lastelem) {
       
      // var last_edit=document.getElementById("isat_editor"+isat_parameter.myParam);
      //     last_edit.focus();
  
                  // lastelem.style.border = "1px solid red";
              
                // console.log("isat_debug:selected elements");
                
             
      
   
          }
  
       
try {

var isat_editable_content=elementOnMouseOver.getAttribute("isat_editable_content"); 
} catch (error) {

}

if(isat_editable_content=="isat_editable_content")
{

// i=increment(i);
console.log("isat_debug:isat_editable_content");
 
            
// console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"+i);
      
  // var elementOnMouseOver = document.elementFromPoint(x, y);
  //isat_options 
  //mousedown
  //dblclick
  var trigger=isat_op.trigger;
  if(trigger==1)
  {
    console.log("isat_debug:chosen trigger 1");
    var trigger_activator="mousedown";
  }
  else{
      console.log("isat_debug:chosen trigger 2");
    var trigger_activator="dblclick";
  }
  elementOnMouseOver.addEventListener(trigger_activator, function(e) {
    // i=increment(i);





try {

var last_edit=document.getElementById("main-input");
console.log("isat_debug:last_edited_id"+last_edit)
last_edit.removeAttribute("contenteditable");
last_edit.removeAttribute("autofoucs");
last_edit.removeAttribute("id");
//for isat_option
last_edit.style.cssText="none";


} catch (error) {

}

elementOnMouseOver.setAttribute("id","main-input");

elementOnMouseOver.setAttribute("contenteditable","true");
elementOnMouseOver.setAttribute("autofocus","autofocus");

lastelem = elementOnMouseOver;

var isat_editable=document.getElementById("main-input");
// isat_editable.style.visibility="visible";
// isat_options

isat_editable.style.cssText=isat_op.editor_style;
isat_editable.focus();

//cursor position maintain

isat_editable.addEventListener("mouseup",function(){

  isat_savedSelection = saveSelection( isat_editable );


})
isat_editable.addEventListener("keyup",function(){

  isat_savedSelection = saveSelection( isat_editable );


})

// isat_drag_and_positioning(this);



// var testDiv = document.getElementById("id","isat_editor"+mtimestamp);
// execCommandOnElement(testDiv, "Bold");
// execCommandOnElement(testDiv, "ForeColor", "red");
}, false);
// isat_wygsiwyg();  



}
  
  // 2nd method----add style by another html element----------------------------------------------------------------------------------------------------------------------
          // var target = event.target || event.srcElement;
          // document.getElementById('display').innerHTML = target.previousSibling.tagName +
          //     " | " + target.tagName + " | " + (target.nextSibling ? target.nextSibling.tagName : "X");
          // target.style.border = "1px solid";
          // target.style.position = "relative";
          // lastelem = target;



  }
  
  
          
  
  //2nd method-----------------------------------------------------------------------------------------------------------------------------
  


    



  // document.getElementById("isat_tooltip_tools_trigger").addEventListener("click", isat_tooltip_trigger);
  
  // function isat_tooltip_trigger() {
  
  // /* width: 418px; */
  // /* height: 89px; */
  // document.getElementById("isat_tooltip_tools").style.height="89px";
  
  // document.getElementById("isat_tooltip_tools").style.width="418px";
  
  // document.getElementById("isat_tooltip_tools").style.padding="10px";
  
  // }
  
   
  


isat_wygsiwyg();  



// var isat_bold=document.getElementById("bold");

// isat_bold.onclick=function(event)
// {console.log("executed");
// var isat_editable=document.getElementById("main-input");
// isat_editable.focus();


// event.preventDefault()
//     execBoldCommand();
// }
var range = null;

document.addEventListener('selectionchange', function(event) {
var taget = event.target;
if (taget.activeElement.id == 'main-input') {
  range = getSelectionRange();
}
});

function isIE() {
return document.all || (!!window.MSInputMethodContext && !!document.documentMode);
}


function isat_Command_execute(isat_custom_command){


  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }

var object=JSON.parse(isat_custom_command);
console.log(object);
var isat_commands=object.isat_commands;
var gui=object.gui;
var value=object.value;
console.log(isat_commands);
console.log(gui);
console.log(value);
document.execCommand(isat_commands,Boolean(gui),value);
}
function isat_Command_engine(isat_command) {
if (document.getSelection() != "") {
  document.execCommand(isat_command);
} else {
  var s = null;
  if (window.getSelection) {
      s = window.getSelection();
  } else {
      s = document.getSelection();
  }

  if (isIE()) {
      var selRange = s.getRangeAt(0);

      //Insert node with dummy text 'd'
      var newNode = document.createTextNode('d');
      selRange.insertNode(newNode);
      s.removeAllRanges();
      s.addRange(selRange);

      //Execute command on dummy
      document.execCommand(isat_command);

      //Delete dummy from range
      selRange.setStart(newNode, 0);
      selRange.setEnd(newNode, 1);
      selRange.deleteContents();

      s.removeAllRanges();
      s.addRange(selRange);
  } else {
      if (range == null) {
          range = document.createRange();
      }
      s.removeAllRanges();
      s.addRange(range);
      document.execCommand(isat_command);
  }
}
}

function getSelectionRange() {
var sel;
if (window.getSelection) {
  sel = window.getSelection();
  if (sel.rangeCount) {
      return sel.getRangeAt(0);
  }
} else if (document.selection) {
  return document.createRange();
}

return null;
}


function isat_wygsiwyg(){




//isat options

// var isat=document.getElementById("main-input");
try {
// var isat=document.getElementById("main-input");


isat_editable.style.cssText=isat_op.editor_style
isat.focus();


} catch (error) {

}





console.log("isat_debug:isat_wygsiwyg_started");


// var range = null;

// document.addEventListener('selectionchange', function(event) {
//     var taget = event.target;
//     if (taget.activeElement.id == 'main-input') {
//         range = getSelectionRange();
//     }
// });

// function isIE() {
//     return document.all || (!!window.MSInputMethodContext && !!document.documentMode);
// }









try {

document.getElementById("isat-headers").addEventListener("change", function(){
var selected=document.getElementById("isat-headers").value;

// isat.focus();

var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"'+selected+'"}';
isat_Command_execute(isat_custom_command);

// document.execCommand('formatBlock', false, selected);


// console.log(isat_r_id);

});


} catch (error) {

}                





//alignment------------------------------------------------------------------------------------------------------------------------------------------------------------------

//developed by balaji at isat software solution 

//hire me :6380188237
try {

document.getElementById("isat-left").addEventListener("click", function(){
  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
      var isat_command="justifyLeft";
isat_Command_engine(isat_command);

// document.execCommand("justifyLeft",false,null);
});   
} catch (error) {

}

try {

document.getElementById("isat-jfull").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="justifyFull";
isat_Command_engine(isat_command);
});   
} catch (error) {

}

try {

document.getElementById("isat-center").addEventListener("click", function(){
  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="justifyCenter";
isat_Command_engine(isat_command);

});
document.getElementById("isat-right").addEventListener("click", function(){
  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="justifyRight";
isat_Command_engine(isat_command);

// document.execCommand("justifyRight",false,null);

});


} catch (error) {

}

// bold,italic header tags-----------------------------------------------------------------------------------------------------------------------------------------------
//developed by  balaji at isat software solutions

//hire me:6380188237

try {

//font family
document.getElementById("isat-fontfamily").addEventListener("change", function(){
var select=document.getElementById("isat-fontfamily");
var selected=select.value;
try {
   
  var isat=document.getElementById("main-input");
  // event.preventDefault();   
  isat.focus(); 
    } catch (error) {
      
    }

    if (select.selectedIndex > 0) { // web font
      var fontID = select.options[select.selectedIndex].value;
      if (!document.getElementById(fontID)) {
          var head = document.getElementsByTagName('head')[0];
          var link = document.createElement('link');
          link.id = fontID;
          link.rel = 'stylesheet';
          link.type = 'text/css';
          link.href = 'http://fonts.googleapis.com/css?family='+fontID;
          link.media = 'all';
          head.appendChild(link);
      }
    }
// Load a Google font by name.
// var loadFont = function(font) {
// WebFont.load({
// google: {
// families: [font]
// }
// });
// };

// loadFont(selected);

var  isat_custom_command='{"isat_commands":"fontName","gui":false,"value":"'+selected+'"}';
isat_Command_execute(isat_custom_command);
//  document.execCommand("fontName", false, selected);



});

} catch (error) {

}
//headers h1.....h6

// document.getElementById("isat-headers").addEventListener("change", function(){
//     var selected=document.getElementById("isat-headers").value;




// // var el=document.getElementById("isat");

// isat.focus();

// document.execCommand('formatBlock', false, selected);

// // var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"'+selected+'"}';
// // isat_Command_command(isat_custom_command);







// });

try {


document.getElementById("isat-underline").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="underline";
isat_Command_engine(isat_command);





console.log("clicked underline")
});
} catch (error) {

}






try {


document.getElementById("isat-insertUnorderedList").addEventListener("click", function(){



  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="insertUnorderedList";
isat_Command_engine(isat_command);

});
} catch (error) {

}


try {


document.getElementById("isat-insertOrderedList").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="insertOrderedList";
isat_Command_engine(isat_command);

});

} catch (error) {

}



try {


document.getElementById("isat-indent").addEventListener("click", function(){


  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="indent";
isat_Command_engine(isat_command);
});
} catch (error) {

}


try {


document.getElementById("isat-outdent").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="outdent";
isat_Command_engine(isat_command);


});
} catch (error) {

}


try {


document.getElementById("isat-strikeThrough").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var isat_command="strikeThrough";
isat_Command_engine(isat_command);




});
} catch (error) {

}


try {


document.getElementById("isat-bold").addEventListener("click", function(event){

  try {
   
var isat=document.getElementById("main-input");
// event.preventDefault();   
isat.focus(); 
  } catch (error) {
    
  }
var isat_command="bold";
isat_Command_engine(isat_command);

});

} catch (error) {

}
try {

document.getElementById("isat-italic").addEventListener("click", function(){


//   document.execCommand("italic",false,null);
try {
   
  var isat=document.getElementById("main-input");
  // event.preventDefault();   
  isat.focus(); 
    } catch (error) {
      
    }
var isat_command="italic";
isat_Command_engine(isat_command);

});


} catch (error) {

}

try {


document.getElementById("isat-header-1").addEventListener("click", function(){
  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }


var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"h1"}';
isat_Command_execute(isat_custom_command);
//  document.execCommand('formatBlock', false, 'h1');


});
} catch (error) {

}


try {



document.getElementById("isat-header-2").addEventListener("click", function(){
  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"h2"}';
isat_Command_execute(isat_custom_command);

});
} catch (error) {

}



// font color and background  color-------------------------------------------------------------------------------------------------------------------------------------------
//made by balaji at isat software solution senior engineer 
//hire me :6380188237

try {


document.getElementById("isat-forecolor").addEventListener("click", function(){
  var isat=document.getElementById("main-input");
  
  try {
    var isat=document.getElementById("main-input");
   
    isat.focus(); 
    restoreSelection(isat, isat_savedSelection);
    // event.preventDefault();   
    // isat.focus(); 
      } catch (error) {
        
      }
      
document.execCommand('styleWithCSS', false, true);
document.execCommand('forecolor', false, 'red');

// var  isat_custom_command='{"isat_commands":"forecolor","gui":false,"value":"red"}';
// isat_Command_execute(isat_custom_command);


});
} catch (error) {

}

try {


document.getElementById("isat-backcolor").addEventListener("click", function(){

//    document.execCommand('backcolor', false, 'green');

try {
  var isat=document.getElementById("main-input");
  isat.focus(); 
  restoreSelection(isat, isat_savedSelection);
  // event.preventDefault();   
  // isat.focus(); 
    } catch (error) {
      
    }
var  isat_custom_command='{"isat_commands":"forecolor","gui":false,"value":"green"}';
isat_Command_execute(isat_custom_command);



});

} catch (error) {

}


// link-----------------------------------------------------------------------------------------------------------------

try {

document.getElementById("isat-createlink").addEventListener("click", function(){

  try {
   
    var isat=document.getElementById("main-input");
    // event.preventDefault();   
    isat.focus(); 
      } catch (error) {
        
      }
url = prompt('Enter the link here: ', 'http:\/\/');
// document.execCommand("createlink",false,url);

var  isat_custom_command='{"createlink":"formatBlock","gui":false,"value":"url"}';
isat_Command_execute(isat_custom_command);

});

} catch (error) {

}

try {


document.getElementById("isat-unlink").addEventListener("click", function(){

// document.execCommand("unlink",false,null);
try {
   
  var isat=document.getElementById("main-input");
  // event.preventDefault();   
  isat.focus(); 
    } catch (error) {
      
    }
var isat_command="unlink";
isat_Command_engine(isat_command);
});
} catch (error) {

}


try {


document.getElementById("isat-subscript").addEventListener("click", function(){


//   document.execCommand("subscript",false,null);
try {
   
  var isat=document.getElementById("main-input");
  // event.preventDefault();   
  isat.focus(); 
    } catch (error) {
      
    }
var isat_command="subscript";
isat_Command_engine(isat_command);

});
} catch (error) {

}



try {


document.getElementById("isat-superscript").addEventListener("click", function(){

// document.execCommand("superscript",false,null)

try {
   
  var isat=document.getElementById("main-input");
  // event.preventDefault();   
  isat.focus(); 
    } catch (error) {
      
    }
var isat_command="superscript";
isat_Command_engine(isat_command);

});
} catch (error) {

}




}

}

module.exports=isat_wygsiwyg_zone;