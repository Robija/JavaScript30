# NOTES

## Newly encountered elements

*       [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd]: <kbd> - represents span inline         
        element denoting user keyboard input, voice input, or any other text entry device.

*       [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*]: data-* - represents
        a global attribute of a form of attributes called custom data attributes. Allow proprietary
        information to be exchanged between HTML and its DOM representation by scripts. The
        *(asteriks) is a place holder for a name (in this example the * is replaced with _key_)
        

## CSS

### Transition


In this example we use _transition: all 0.07s ease_ 

*       _transition_ l:

*       functions in &lt;script&gt; : 
        if a callback function is defined after the first
        time it is called, it cannot be found. I presume this is because of the top-down 
        parsing of the script
        *PROOF* : 
        Function _expressions_ cannot be called befor they are declared
        Function _declarations_ Can be called before they are declared
        this is the case because _function expressions_ are anononymous
