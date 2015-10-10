function test() {

	console.log("test this out yo one")
	var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text)
    return text;
}
/*
CurrentSelection.Selector.getSelected = function(){
  var sel = '';
  if(window.getSelection){
   sel = window.getSelection()
  }
  else if(document.getSelection){
   sel = document.getSelection()
  }
  else if(document.selection){
   sel = document.selection.createRange()
  }
  return sel
 }*/

test()