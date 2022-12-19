function showDom() {
    document.getElementById('output-header').style.display = 'block';
    outputBlock = document.getElementById("dom-output-block");
    outputBlock.innerHTML = ''; // erasing in case of repeated clicking the button
    console.log('Showing DOM structure:')
    showDomElem();
}

function showDomElem(element = document.firstElementChild, shift = 0) {
    if (element.parentElement != outputBlock) { // if we include the output block, we get into an infinite loop
        let newline = document.createElement('p');
        let str = '&nbsp'.repeat(shift*4) + '&lt;' + element.tagName + '&gt;';
        outputBlock.append(newline);
        newline.innerHTML = str;
        console.log('\t'.repeat(shift) + '<' + element.tagName + '>');
        if (element.firstElementChild) { // if elem has childs:
            shift++;
            showDomElem (element.firstElementChild, shift);
            return;
        } else if (element.nextElementSibling) { // if elem has no childs but has next siblings:
            showDomElem(element.nextElementSibling, shift);
            return;
        } else { //if elem has no childs and no next siblings
            shift--;
            element = element.parentElement; // moving upwards

            let newline = document.createElement('p');
            let str = '&nbsp'.repeat(shift*4) + '&lt;' +'/' + element.tagName + '&gt;';
            outputBlock.append(newline);
            newline.innerHTML = str;

            console.log('\t'.repeat(shift) + '</' + element.tagName + '>'); // closing tag
            if (element.nextElementSibling) { // looking for next siblings
                showDomElem(element.nextElementSibling, shift);
                return;
            }
            else {
                while (element.parentElement) {
                    shift--;
                    element = element.parentElement;

                    let newline = document.createElement('p');
                    let str = '&nbsp'.repeat(shift*4) + '&lt;' +'/' + element.tagName + '&gt;';
                    outputBlock.append(newline);
                    newline.innerHTML = str;

                    console.log('\t'.repeat(shift) + '</' + element.tagName + '>');
                    if (element.nextElementSibling){
                        showDomElem(element.nextElementSibling, shift);
                        return;
                    }
                }
            }
        }
    }
    else { // if we've come to the output block, terminatings the loop and closing all the parent tags:
        while (element.parentElement) {
            shift--;
            element = element.parentElement;
            let newline = document.createElement('p');
            let str = '&nbsp'.repeat(shift*4) + '&lt;' +'/' + element.tagName + '&gt;';
            outputBlock.append(newline);
            newline.innerHTML = str;
            console.log('\t'.repeat(shift) + '</' + element.tagName + '>');
        }
    }
}