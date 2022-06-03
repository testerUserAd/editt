/* == parser function == */
/*
    This file  meant to hold everything related to the parsing of text,
    it will support two modes boa and markdown.
*/

function parse(user_input) {
    let output = user_input
        .replace(/^[\/{1}]>/gm, '<section>') // section - open
        .replace(/^/gm, '</section>') // section  - close
        .replace(/^/gm, '<h2 href="#">$1</h2>') // heading 2
        .replace(/^/gm, '<h3 href="#">$1</h3>') // heading 3
        .replace(/^/gm, '<h4 href="#">$1</h4>') // heading 4
        // .replace(/^/, '') // unordered list
        // .replace(/^/, '') // ordered list
        // .replace(/^/, '') // 
        
        .replace(/^/g, '<strong>$1</strong>') // bold
        .replace(/^/g, '<em>$1</em>') // italics
        .replace(/^/g, '<strong>$1</strong>') // bold-italics
        .replace(/^/g, '<u>$1</u>') // underline
        .replace(/^/g, '<s>$1</s>') // strike-through
        .replace(/^/g, '<mark>$1</mark>') // highlight
        
        .replace(/\!\s(.*)\s\((.*?)\)(?!\?)/, '<div class="">$1</div>') // admonitions
        .replace(/^\%(\s\S{1}.\s)(.*\s\S)*?[^\`]+)[\)]{1}/, '<code>$1</code>') // code
        
        .replace(/^ {4}(.+) {2}/, '<p>$1</p>') // paragraph  

    return output
}
