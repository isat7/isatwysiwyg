

## Description
This wygsiwyg editor is designed for developers and easy to implement  whthin few minutes,easy to customize all the widgets

## Download and Install wygsiwyg Editor

### Install from npm

```
npm install wygsiwyg --save
```

### Import Option 1
```
const isat=require('wygsiwyg');
```

### Import Option 2
```
import {'isat'} from 'wygsiwyg'
```

### Usage
```
isat({
     
});
```

### apply editable
here **isat_editable_content=isat_editable_content** is must to perform wygsiwyg
```html
 <div isat_editable_content="isat_editable_content">this is writable</div>
```

### usage
apply your own style for wydgets and then make container if you want ,which is fully developer friendly
```html
<html>

<body>

  <li><a id="isat-bold">bold</a></li> 
    
  <li><a id="isat-left">left</a></li>
  <li><a id="isat-center">center</a></li>
  <li><a id="isat-right">right</a></li>
  <li><a id="isat-jfull">jfull</a></li>
  <li><a id="isat-indent"> isat indent   </a></li>
  <li><a id="isat-outdent">outdent</a></li>  
  <li><a id="isat-insertOrderedList"> isat-insertOrderedList</a></li>
  <li><a id="isat-insertUnorderedList">isat-insertUnorderedList</a></li>   
  <li><a id="isat-bold">bold</a></li>  
  <li id="isat-italic"><a> italic</a></li>  
  <li><a id="isat-strikeThrough">strightthrough</a></li>  
  <li><a id="isat-subscript">subscript</li>
  <li><a id="isat-superscript">supscript</a></li>    
  <li><a id="isat-underline"> underline</a></li>
  <li><a id="isat-createlink">createlink/a></li>
  <li><a id="isat-unlink">unlink</a></li>      
  <li><a id="isat-header-1">h1</a></li>
  <li><a id="isat-header-2">h2</a></li>  
  <li><a id="isat-forecolor">fore color</a></li>
  <li><a id="isat-backcolor" style="width:5px;height: 4px;background-color: chocolate;text-align: center;">back color</a></li> 
  
  <div  class="select">
        <select name="slct" id="isat-fontfamily">
            
                <option value="default">default</option>    
              <option value="Arial">Arial</option>    
              <option value="Tangerine">Tangerine</option>    
              <option  value="Comic Sans MS">Comic Sans MS</option>    
              <option value="Calibri">Calibri</option>    
              <option value="ZCOOL KuaiLe">ZCOOL KuaiLe</option>     
              <option value="Mogra">Mogra</option>  
              <option value="Gloria Hallelujah">Gloria Hallelujah</option>  
          
        </select>
      </div>

      <div class="select">
            <select name="slct" id="isat-headers" >
                  <option value="p">Normal</option>    
                  <option value="h1">HEADER 1</option>    
                  <option  value="h2">HEADER 2</option>    
                  <option  value="h3">HEADER 3</option>    
                  <option  value="h4">HEADER 4</option>
                  <option  value="h5">HEADER 5</option>
                  <option  value="h6">HEADER 6</option>
            </select>
          </div>

</body>


</html>
```



### options
Style Your contentEditable

```javascript

isat({
     editor_style:"border: 1px solid;padding: 10px;box-shadow: 5px 10px;",
     
});
```
Trigger Your ContentEditable 
```javascript

isat({
     trigger:1,//2
     
});
```







## Licensing

- License Agreement: MIT
- Author :Balaji





