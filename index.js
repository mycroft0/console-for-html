window.onload = consoleBuild = () => {
    let element = document.createElement("div");
    document.body.appendChild(element)
    element.style.cssText=` color: #394867;
                            width: 100%;
                            left: 10px;
                            right: 0px;
                            height: 200px;
                            padding-left:25px;
                            padding-top: 15px;
                            border-radius: 60px;
                            border-style: solid;
                            border-color: #9C9EFE;
                            position: absolute;
                            bottom: 10px;
  `;

    let para = document.createTextNode('The man who mistook his wife for a hat');
    element.appendChild(para);

    let str = '';
    function traverse(el) {

        str += el.nodeName + "<br>";

        for (let i = 0; i < el.children.length; i++) {
            traverse(el.children[i]);
        }

    }

    traverse(document.documentElement);
    console.log(str);

}



